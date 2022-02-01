<template>
  <h1>Plan your semester schedule</h1>
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
    <H2>Übersicht Kategorien/Credits</h2>
    <table>
      <thead>
        <tr>
          <th class="p-2">Name</th>
          <th class="p-2">Mögliche Credits</th>
          <th class="p-2">Geplante Credits</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in allCategories" :key="category.name">
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
</style>
