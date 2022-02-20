<template>
  <div class="columns">
    <div class="column">
      <h1 class="title">Plane deine Module</h1>
      <label>
        Letztes erfolgreich abgeschlossenes Semester
        <select v-model="lastSemesterNumber">
          <option
            v-for="semester in semesters"
            :key="semester.number">
            {{ semester.number }}
          </option>
        </select>
      </label>
    </div>
    <div class="column is-narrow">
      <Transition>
        <div v-if="errorMsg" class="notification is-danger">
          <span>{{ errorMsg }}</span>
        </div>
      </Transition>
    </div>
  </div>
  <div class="columns schedule">
    <div class="column semester" v-for="semester in semesters" :key="semester.name">
      <Semester
        :number="semester.number"
        v-model:modules="semester.modules"
        :all-modules="modules"
      ></Semester>
    </div>
    <div class="column add-semester">
      <button class="p-2 add-semester-btn has-text-weight-bold" v-on:click="addSemester">+</button>
    </div>
  </div>
  <div class="columns mt-6 ml-6">
    <div class="column">
      <article>
        <h2 class="subtitle">Übersicht der ECTS Punkte</h2>
        <table>
          <tbody>
          <tr
            v-for="category in mappedCategories"
            :key="category.name"
            v-bind:class="category.categoryClass">
            <td style="vertical-align:bottom;padding-right:1em;text-align:end">
              {{ category.name }}
            </td>
            <td style="padding-top:8px">
              <BeautifulProgressIndicator
              :required="category.required_ects"
              :earned="category.earnedCredits"
              :planned="category.plannedCredits"
              :color="category.color"
              ></BeautifulProgressIndicator>
            </td>
          </tr>
          <tr>
            <td style="vertical-align:bottom;padding-right:1em;text-align:end">
              Total
            </td>
            <td style="padding-top:8px">
              <BeautifulProgressIndicator
              :required="180"
              :earned="totalEarnedEcts"
              :planned="totalPlannedEcts"
              :color="`orange`"
              ></BeautifulProgressIndicator>
            </td>
          </tr>
          </tbody>
        </table>
      </article>
    </div>
    <div class="column">
      <article>
        <h2 class="subtitle">Vertiefungen</h2>
        <div class="columns is-multiline">
          <div v-for="focus in mappedFocuses"
            :key="focus.name" class="column is-full">
            <Focus
              :name="focus.name"
              :allModules="focus.modules"
              :filteredModules="focus.filteredModules"
            ></Focus>
          </div>
        </div>
      </article>
    </div>
    <div class="column">
      <img src="../assets/this_is_fine.jpg">
    </div>
  </div>
</template>

<script>
import Semester from '../components/Semester.vue';
import Focus from '../components/Focus.vue';
import BeautifulProgressIndicator from '../components/BeautifulProgressIndicator.vue';

const BASE_URL = 'https://raw.githubusercontent.com/jeremystucki/ost-planer/2.0/data';
const ROUTE_MODULES = '/modules.json';
const ROUTE_CATEGORIES = '/categories.json';
const ROUTE_FOCUSES = '/focuses.json';

const CATEGORY_COLOR_MAP = {
  Auf: '#f368e0',
  MaPh: '#ee5253',
  KomEng: '#0abde3',
  gwr: '#10ac84',
  Inf: '#576574',
  SaBa: '#222f3e',
  EP: '#55efc4',
  RA: '#ff9f43',
};

export default {
  name: 'Home',
  data() {
    return {
      semesters: [],
      modules: [],
      categories: [],
      focuses: [],
      lastSemesterNumber: 0,
      errorMsg: null,
      errorTimer: null,
    };
  },
  computed: {
    mappedCategories() {
      return this.categories.map((category) => ({
        earnedCredits: this.getEarnedCredits(category),
        plannedCredits: this.getPlannedCredits(category),
        color: CATEGORY_COLOR_MAP[category.id],
        ...category,
      }));
    },
    plannedModules() {
      return this.semesters
        .flatMap((semester) => semester.modules);
    },
    mappedFocuses() {
      const plannedModuleNames = this.plannedModules.map(module => module.id);
      return this.focuses.map((focus) => ({
        ...focus,
        filteredModules: focus.modules
          .filter((moduleId) => !plannedModuleNames.includes(moduleId))
          .map((moduleId) => this.modules.find((module) => module.id === moduleId).name),
      }));
    },
    totalPlannedEcts() {
      return this.getPlannedCredits();
    },
    totalEarnedEcts() {
      return this.getEarnedCredits();
    },
  },
  components: { Semester, Focus, BeautifulProgressIndicator },
  methods: {
    sumCredits: (previousTotal, module) => previousTotal + module.ects,
    getColorForCategory(categoryId) {
      return CATEGORY_COLOR_MAP[categoryId];
    },
    loadModules() {
      fetch(`${BASE_URL}${ROUTE_MODULES}`)
        .then((response) => response.json())
        .then((modules) => {
          this.modules = modules;
          this.restorePlanFromUrl();
          this.loadCategories();
          this.loadFocuses();
        });
    },
    loadCategories() {
      fetch(`${BASE_URL}${ROUTE_CATEGORIES}`)
        .then((response) => response.json())
        .then((categories) => {
          this.categories = categories;
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
              .map((moduleId) => {
                const newModule = this.modules.find((module) => module.id === moduleId);

                // eslint-disable-next-line no-console
                if (newModule == null) console.warn(`Module with id: ${moduleId} could not be restored`);

                return newModule;
              })
              .filter((module) => module),
          }));
      }
    },
    updateUrlFragment() {
      const encodedPlan = this.semesters
        .map((semester) => semester.modules.map((module) => module.id).join('_'))
        .join('-');

      window.location.hash = `plan/${encodedPlan}`;
    },
    getPlannedSemesterForModule(moduleName) {
      return this.semesters.find(
        (semester) => semester.modules.some(module => module.name === moduleName),
      )?.number;
    },
    getEarnedCredits(category = undefined) {
      return this.semesters
        .filter((semester) => semester.number <= this.lastSemesterNumber)
        .flatMap((semester) => semester.modules)
        .filter((module) => category === undefined || category.modules.includes(module.id))
        .reduce(this.sumCredits, 0);
    },
    getPlannedCredits(category = undefined) {
      return this.semesters
        .filter((semester) => semester.number > this.lastSemesterNumber)
        .flatMap((semester) => semester.modules)
        .filter((module) => category === undefined || category.modules.includes(module.id))
        .reduce(this.sumCredits, 0);
    },
    addModule(semesterNumber, moduleName) {
      const module = this.modules.find((item) => item.name === moduleName);
      this.semesters[semesterNumber - 1].modules.push(module);
      this.updateUrlFragment();
    },
    removeModule(semesterNumber, moduleId) {
      this.semesters[semesterNumber - 1].modules = this.semesters[semesterNumber - 1].modules
        .filter((module) => module.id !== moduleId);

      this.updateUrlFragment();
    },
    addSemester() {
      this.semesters.push({
        number: this.semesters.length + 1,
        modules: [],
      });
    },
    showErrorMsg(text) {
      if (this.errorTimer !== null) {
        clearTimeout(this.errorTimer);
      }
      this.errorMsg = text;
      this.errorTimer = setTimeout(() => {
        this.errorMsg = null;
      }, 3000);
    },
  },
  mounted() {
    this.loadModules();
    window.addEventListener('hashchange', this.restorePlanFromUrl);
  },
};
</script>
<style scoped>
.schedule {
  overflow: auto;
}
.semester {
  margin: 1.5rem 0.5rem 0 0.5rem;
  border-radius: 5px;
  padding: 21px;
  background: #ececec;
}

.notification {
  z-index: 999;
  position: absolute;
  top: 0.5em;
  right: 0.5em;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.add-semester {
  max-width: 2.5rem;
  padding-top: 3.25rem;
}

.add-semester-btn {
  background: black;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
</style>
