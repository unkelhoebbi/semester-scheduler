<template>
  <h1 class="title">Plan your semesters</h1>
  <label>
    Last Semester
    <select v-model="lastSemesterNumber">
      <option
        v-for="semester in semesters"
        :key="semester.number">
        {{ semester.number }}
      </option>
    </select>
  </label>
  <div class="columns">
    <div class="column semester" v-for="semester in semesters" :key="semester.name">
      <Semester
        :number="semester.number"
        v-model:modules="semester.modules"
        :all-modules="modules"
      ></Semester>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <article>
        <h2 class="subtitle">Overview ECTS</h2>
        <table>
          <thead>
          <tr>
            <th class="p-2">Name</th>
            <th class="p-2">Total</th>
            <th class="p-2">Required</th>
            <th class="p-2">Earned</th>
            <th class="p-2">Planned</th>
            <th class="p-2">Spatzig 🐤</th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="category in mappedCategories"
            :key="category.name"
            v-bind:class="category.categoryClass">
            <td class="p-2">
              {{ category.name }}
            </td>
            <td class="p-2">{{ category.total_ects }}</td>
            <td class="p-2">{{ category.required_ects }}</td>
            <td class="p-2">{{ category.earnedCredits }}</td>
            <td class="p-2">{{ category.plannedCredits }}</td>
            <td class="p-2">{{ category.total_ects - category.required_ects }}</td>
          </tr>
          <tr>
            <td class="p-2">Total</td>
            <td></td>
            <td></td>
            <td class="p-2">{{ totalEarnedEcts }}</td>
            <td class="p-2">{{ totalPlannedEcts }}</td>
          </tr>
          </tbody>
        </table>
      </article>
    </div>
    <div class="column">
      <article>
        <h2 class="subtitle">Vertiefungen</h2>
        <table>
          <thead>
          <tr>
            <th class="p-2">Name</th>
            <th class="p-8">Modules still needed</th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="focus in mappedFocuses"
            :key="focus.name">
            <td class="p-2">
              {{ focus.name }}
            </td>
            <td class="p-8">{{ focus.modules }}</td>
          </tr>
          </tbody>
        </table>
      </article>

    </div>
  </div>
</template>

<script>
import Semester from '../components/Semester.vue';

const BASE_URL = 'https://raw.githubusercontent.com/jeremystucki/ost-planer/1.0/data';
const ROUTE_MODULES = '/modules.json';
const ROUTE_CATEGORIES = '/categories.json';
const ROUTE_FOCUSES = '/focuses.join';
export default {
  name: 'Home',
  data() {
    return {
      semesters: [],
      modules: [],
      categories: [],
      focuses: [],
      lastSemesterNumber: 0,
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
    mappedFocuses() {
      return this.focuses;
      /* return this.focuses.map((focus) => ({
         focus.filter(this.modules )
      })); */
    },
    totalPlannedEcts() {
      return this.getTotalEcts(true);
    },
    totalEarnedEcts() {
      return this.getTotalEcts();
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
                this.modules = modules;
                this.restorePlanFromUrl();
                this.loadCategories();
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
    loadFocuses() {
      fetch(`${BASE_URL}${ROUTE_FOCUSES}`)
        .then((response) => {
          if (response.ok) {
            response.json()
              .then((focuses) => {
                this.focuses = focuses;
              });
          }
        });
    },
    restorePlanFromUrl() {
      const path = window.location.hash;
      if (path.startsWith('#/plan/')) {
        this.semesters = path
          .slice(7)
          .split('-')
          .map((semester, index) => ({
            number: index + 1,
            modules: semester
              .split('_')
              .map((moduleId) => this.modules.find((module) => module.id === moduleId)),
          }));
      }
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
        if (semester.number <= this.lastSemesterNumber) {
          semester.modules.forEach((module) => {
            if (module.categories.includes(category.name)) {
              earnedEcts += module.ects;
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
          if (module.categories.includes(category.name)) {
            totalEcts += module.ects;
          }
        });
      });
      return totalEcts;
    },
    getTotalEcts(includePlanned = false) {
      return this.semesters
        .filter((semester) => semester.number <= this.lastSemesterNumber || includePlanned)
        .flatMap((semester) => semester.modules)
        .reduce((previousTotal, module) => previousTotal + module.ects, 0);
    },
    addModule(semesterNumber, moduleName) {
      const module = this.modules.find((item) => item.name === moduleName);
      this.semesters[semesterNumber - 1].modules.push(module);
      this.updateUrlFragment();
    },
    removeModule(semesterNumber, modulesIndex) {
      this.semesters[semesterNumber - 1].modules.splice(modulesIndex, 1);
    },
  },
  mounted() {
    this.loadModules();

    window.addEventListener('hashchange', this.restorePlanFromUrl);
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
