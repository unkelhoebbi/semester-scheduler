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
</template>

<script>
import Semester from '../components/Semester.vue';

const URL = 'https://jeremystucki.github.io/ost-planer/data/modules.json';
export default {
  name: 'Home',
  data() {
    return {
      semesters: [
        {
          number: 1,
          modules: [
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
          ],
        },
        {
          number: 2,
          modules: [
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
          ],
        },
        {
          number: 3,
          modules: [
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
          ],
        }, {
          number: 4,
          modules: [
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
          ],
        }, {
          number: 5,
          modules: [
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
          ],
        }, {
          number: 6,
          modules: [
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
          ],
        }, {
          number: 7,
          modules: [
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
          ],
        }, {
          number: 8,
          modules: [
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
            {
              name: '.Net Technologien (M_MsTe / I)',
              url: 'https://studien.rj.ost.ch/allModules/37247_M_MsTe.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
              ],
            },
          ],
        },
      ],
      allModules: null,
    };
  },
  components: { Semester },
  methods: {
    getAllModules() {
      fetch(URL).then((response) => {
        if (response.ok) {
          response.json().then((modules) => {
            this.allModules = modules;
          });
        }
      });
    },
  },
  mounted() {
    this.getAllModules();
  },
};
</script>
<style scoped>
.semester {
  margin: 1.5rem 0.5rem 0 0.5rem;
}
</style>
