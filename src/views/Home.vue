<template>
  <h1>Plan your semester schedule</h1>
  <div class="columns">
    <div class="column semester" v-for="semester in semesters" :key="semester.name">
      <Semester :name="semester.name" :modules="semester.modules"></Semester>
    </div>
  </div>
</template>

<script>
import Semester from '../components/Semester.vue';

export default {
  name: 'Home',
  data() {
    return {
      semesters: [
        {
          name: 'Semester 1',
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
          name: 'Semester 2',
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
          name: 'Semester 3',
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
          name: 'Semester 4',
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
          name: 'Semester 5',
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
          name: 'Semester 6',
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
          name: 'Semester 7',
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
          name: 'Semester 8',
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
    };
  },
  components: { Semester },
};
</script>
<style scoped>
.semester {
  margin: 1.5rem 0.5rem 0 0.5rem;
}
</style>
