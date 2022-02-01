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
  <div class="columns">
    <div class="column">
      <article>
        <H2 class="subtitle">Übersicht Kategorien/Credits</h2>
        <table>
          <thead>
          <tr>
            <th class="p-2">Name</th>
            <th class="p-2">Mögliche Credits</th>
            <th class="p-2">Geplante Credits</th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="category in allCategories"
            :key="category.name"
            v-bind:class="category.categoryClass">
            <td class="p-2">
              {{ category.name }}
            </td>
            <td class="p-2">{{ category.possibleCredits }}</td>
            <td class="p-2">{{ category.earnedCredits }}</td>
          </tr>
          <tr>
            <td class="p-2">Total geplante</td>
            <td></td>
            <td class="p-2">{{ totalPlanned }}</td>
          </tr>
          </tbody>
        </table>
      </article>
    </div>
    <div class="column">
      <section>
        <img src="../assets/this_is_fine.jpg">
      </section>
    </div>
  </div>
</template>

<script>
import Semester from '../components/Semester.vue';

const BASE_URL = 'https://raw.githubusercontent.com/jeremystucki/ost-planer/main/data';
const ROUTE_MODULES = '/modules.json';
const ROUTE_CATEGORIES = '/categories.json';
const CATEGORY_CLASS_MAP = {
  'Aufbau (I_Auf)': 'category-1',
  'Engineering Practice (I_EP)': 'category-2',
  'Gesellschaft, Wirtschaft und Recht (I-gwr)': 'category-3',
  'Informatik (I_Inf)': 'category-4',
  'Kommunikation und Englisch (I_KomEng)': 'category-5',
  'Mathematik und Physik (Kat_MaPh)': 'category-6',
  'Rahmenausbildung (Kat_RA)': 'category-7',
  'Studien- Bachelorarbeit (I_SaBa)': 'category-8',
};
export default {
  name: 'Home',
  data() {
    return {
      semesters: [],
      allModules: null,
      allCategories: null,
      totalPlanned: 0,
    };
  },
  components: { Semester },
  methods: {
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
              .map((moduleId) => this.allModules.find((module) => module.id === moduleId)),
          }));
      }
    },
    getAllModules(callback) {
      fetch(`${BASE_URL}${ROUTE_MODULES}`).then((response) => {
        if (response.ok) {
          response.json().then((modules) => {
            this.allModules = modules;
            callback();
          });
        }
      });
    },
    getCategories() {
      fetch(`${BASE_URL}${ROUTE_CATEGORIES}`).then((response) => {
        if (response.ok) {
          response.json().then((categories) => {
            categories.forEach((category) => {
              // eslint-disable-next-line no-param-reassign
              category.categoryClass = CATEGORY_CLASS_MAP[category.name];
              // eslint-disable-next-line no-param-reassign
              category.possibleCredits = 0;
              // eslint-disable-next-line no-param-reassign
              category.earnedCredits = 0;
              this.allModules.forEach((module) => {
                if (module.categories.includes(category.name)) {
                  // eslint-disable-next-line no-param-reassign
                  category.possibleCredits += module.ects;
                }
              });
              this.semesters.forEach((semester) => {
                semester.modules.forEach((module) => {
                  if (module.categories.includes(category.name)) {
                    // eslint-disable-next-line no-param-reassign
                    category.earnedCredits += module.ects;
                  }
                });
              });
            });
            this.allCategories = categories;
          });
        }
      });
    },
    updateTotalPlanned() {
      this.semesters.forEach((semester) => {
        semester.modules.forEach((module) => {
          this.totalPlanned += module.ects;
        });
      });
    },
    updateUrlFragment() {
      window.location.hash = `plan/${this.semesters
        .map((semester) => semester.modules.map((module) => module.id).join('_'))
        .join('-')}`;
    },
    isModuleAlreadyInASemester(moduleName: string): number {
      return this.semesters.find(f => f.modules.some(s => s.name === moduleName))?.number;
    }
  },
  mounted() {
    this.getAllModules(() => {
      this.restorePlanFromUrl();
      this.getCategories();
      this.updateTotalPlanned();
      this.updateUrlFragment();
    });
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
