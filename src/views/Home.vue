<template>
  <h1 class="title">Plane dein Semester</h1>
  <div class="columns">
    <div class="column semester" v-for="semester in semesters" :key="semester.name">
      <Semester
        :number="semester.number"
        v-model:modules="semester.modules"
        :all-modules="allModules"
      ></Semester>
    </div>
  </div>
  <article>
    <h2>Übersicht Kategorien/Credits</h2>
    <table>
      <thead>
      <tr>
        <th class="p-2">Name</th>
        <th class="p-2">Mögliche</th>
        <th class="p-2">Required</th>
        <th class="p-2">Geplante</th>
        <th class="p-2">Erreichte</th>
        <th class="p-2">Spatzig</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="category in mappedCategories" :key="category.name">
        <td class="p-2">
          {{ category.name }}
        </td>
        <td class="p-2">{{ category.total_ects }}</td>
        <td class="p-2">{{ category.required_ects }}</td>
        <td class="p-2">{{ category.plannedCredits }}</td>
        <td class="p-2">{{ category.earnedCredits }}</td>
        <td class="p-2">{{ category.plannedCredits - category.required_ects }}</td>
      </tr>
      <tr>
        <td class="p-2">Total geplante</td>
        <td></td>
        <td class="p-2">{{ totalPlanned }}</td>
      </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
import Semester from '../components/Semester.vue';

const BASE_URL = 'https://raw.githubusercontent.com/jeremystucki/ost-planer/main/data';
const ROUTE_MODULES = '/modules.json';
const ROUTE_CATEGORIES = '/categories.json';
export default {
  name: 'Home',
  data() {
    return {
      semesters: [],
      allModules: [],
      categories: [],
      totalPlanned: 0,
      totalEarned: 0,
      lastSemester: 2,
    };
  },
  computed: {
    mappedCategories() {
      return this.categories.map((category) => ({
        earnedCredits: this.getEarnedCredits(category),
        plannedCredits: this.getPlannedCredits(category),
        ...category,
      }));
    },
  },
  components: { Semester },
  methods: {
    loadModules() {
      fetch(`${BASE_URL}${ROUTE_MODULES}`)
        .then((response) => {
          if (response.ok) {
            response.json()
              .then((modules) => {
                this.allModules = modules;
              });
          }
        });
    },
    loadCategories() {
      fetch(`${BASE_URL}${ROUTE_CATEGORIES}`)
        .then((response) => {
          if (response.ok) {
            response.json()
              .then((categories) => {
                this.categories = categories;
              });
          }
        });
    },
    addModuleToSemester(offset, module) {
      this.semesters[offset].modules.push(module);
    },
    removeModuleFromSemester(offsetSemesters, offsetModules) {
      this.semesters[offsetSemesters].modules.splice(offsetModules, 1);
    },
    updateUrlFragment() {
      window.location.hash = `plan/${this.semesters
        .map((semester) => semester.modules.map((module) => module.id).join('_'))
        .join('-')}`;
    },
    getPlannedSemesterForModule(moduleName) {
      return this.semesters.find(
        (semester) => semester.modules.some(module => module.name === moduleName),
      )?.number;
    },
    getEarnedCredits(category) {
      let earnedEcts = 0;
      this.semesters.forEach((semester) => {
        if (semester.number <= this.lastSemester) {
          semester.modules.forEach((module) => {
            if (module.categories[0] === category.name) {
              earnedEcts += module.ects;
              this.totalEarned += module.ects;
            }
          });
        }
      });
      return earnedEcts;
    },
    getPlannedCredits(category) {
      let totalEcts = 0;
      this.semesters.forEach((semester) => {
        semester.modules.forEach((module) => {
          if (module.categories[0] === category.name) {
            totalEcts += module.ects;
            this.totalPlanned += module.ects;
          }
        });
      });
      return totalEcts;
    },
  },
  mounted() {
    this.loadModules();
    this.loadCategories();
  },
};
</script>
<style scoped>
.semester {
  margin: 1.5rem 0.5rem 0 0.5rem;
}
.category-1 {
  border-bottom: 2px solid #e17055;
  border-left: 2px solid #e17055;
}
.category-2 {
  border-bottom: 2px solid #e84393;
  border-left: 2px solid #e84393;
}
.category-3 {
  border-bottom: 2px solid #ff7675;
  border-left: 2px solid #ff7675;
}
.category-4 {
  border-bottom: 2px solid #00cec9;
  border-left: 2px solid #00cec9;
}
.category-5 {
  border-bottom: 2px solid #00b894;
  border-left: 2px solid #00b894;
}
.category-6 {
  border-bottom: 2px solid #a29bfe;
  border-left: 2px solid #a29bfe;
}
.category-7 {
  border-bottom: 2px solid #55efc4;
  border-left: 2px solid #55efc4;
}
.category-8 {
  border-bottom: 2px solid #fdcb6e;
  border-left: 2px solid #fdcb6e;
}
</style>
