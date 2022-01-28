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
        <th class="p-2">Mögliche</th>
        <th class="p-2">Required</th>
        <th class="p-2">Geplante</th>
        <th class="p-2">Erreichte</th>
        <th class="p-2">Spatzig</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="category in allCategories" :key="category.name">
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
      semesters: [
        {
          number: 1,
          modules: [
            {
              name: 'Analysis 1 f\u00fcr Informatiker (M_An1I / MN)',
              url: 'https://studien.rj.ost.ch/allModules/28151_M_An1I.html',
              categories: [
                'Mathematik und Physik (Kat_MaPh)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'Diskrete Mathematik f\u00fcr Informatik  (M_DMI / MN)',
              url: 'https://studien.rj.ost.ch/allModules/24442_M_DMI.html',
              categories: [
                'Informatik (I_Inf)',
                'Rahmenausbildung (Kat_RA)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'Objektorientierte Programmierung 1 (M_OOP1 / I)',
              url: 'https://studien.rj.ost.ch/allModules/38872_M_OOP1.html',
              categories: [
                'Informatik (I_Inf)',
                'Rahmenausbildung (Kat_RA)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'Automatisierung mit Python (M_AutPy / I)',
              url: 'https://studien.rj.ost.ch/allModules/38879_M_AutPy.html',
              categories: [
                'Informatik (I_Inf)',
                'Rahmenausbildung (Kat_RA)',
              ],
              ects: 2,
              focuses: [],
            },
            {
              name: 'Datenbanksysteme 1 (M_Dbs1 / I)',
              url: 'https://studien.rj.ost.ch/allModules/39093_M_Dbs1.html',
              categories: [
                'Informatik (I_Inf)',
                'Rahmenausbildung (Kat_RA)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'Betriebssysteme 1 (M_Bsys1 / I)',
              url: 'https://studien.rj.ost.ch/allModules/39080_M_Bsys1.html',
              categories: [
                'Informatik (I_Inf)',
                'Rahmenausbildung (Kat_RA)',
              ],
              ects: 4,
              focuses: [],
            },
          ],
        },
        {
          number: 2,
          modules: [
            {
              name: 'Analysis 2 f\u00fcr Informatik (M_An2I / MN)',
              url: 'https://studien.rj.ost.ch/allModules/28156_M_An2I.html',
              categories: [
                'Mathematik und Physik (Kat_MaPh)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'Automaten und Sprachen (M_AutoSpr / MN)',
              url: 'https://studien.rj.ost.ch/allModules/24404_M_AutoSpr.html',
              categories: [
                'Informatik (I_Inf)',
                'Rahmenausbildung (Kat_RA)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'Betriebssysteme 2 (M_Bsys2 / I)',
              url: 'https://studien.rj.ost.ch/allModules/37903_M_Bsys2.html',
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
              name: 'Objektorientierte Programmierung 2 (M_OOP2 / I)',
              url: 'https://studien.rj.ost.ch/allModules/38910_M_OOP2.html',
              categories: [
                'Informatik (I_Inf)',
                'Rahmenausbildung (Kat_RA)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'Experimentieren und Evaluieren f\u00fcr Informatik (M_ExEv / I)',
              url: 'https://studien.rj.ost.ch/allModules/24381_M_ExEv.html',
              categories: [
                'Mathematik und Physik (Kat_MaPh)',
              ],
              ects: 4,
              focuses: [],
            },
          ],
        },
        {
          number: 3,
          modules: [
            {
              name: 'Web Engineering 1 (M_WE1 / I)',
              url: 'https://studien.rj.ost.ch/allModules/38891_M_WE1.html',
              categories: [
                'Informatik (I_Inf)',
                'Rahmenausbildung (Kat_RA)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'Algorithmen und Datenstrukturen (M_AlgDat / I)',
              url: 'https://studien.rj.ost.ch/allModules/38881_M_AlgDat.html',
              categories: [
                'Informatik (I_Inf)',
                'Rahmenausbildung (Kat_RA)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'AI Foundations (M_AIFo / I)',
              url: 'https://studien.rj.ost.ch/allModules/38784_M_AIFo.html',
              categories: [
                'Informatik (I_Inf)',
                'Rahmenausbildung (Kat_RA)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'Digitale Codierungen (M_DigCod / I)',
              url: 'https://studien.rj.ost.ch/allModules/38920_M_DigCod.html',
              categories: [
                'Informatik (I_Inf)',
                'Rahmenausbildung (Kat_RA)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'Computernetze 1 (M_CN1 / I)',
              url: 'https://studien.rj.ost.ch/allModules/39084_M_CN1.html',
              categories: [
                'Informatik (I_Inf)',
                'Rahmenausbildung (Kat_RA)',
              ],
              ects: 6,
              focuses: [],
            },
          ],
        },
        {
          number: 4,
          modules: [
            {
              name: 'Parallele Programmierung (M_ParProg / I)',
              url: 'https://studien.rj.ost.ch/allModules/31603_M_ParProg.html',
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
              name: 'Secure Software (M_SecSoW / I)',
              url: 'https://studien.rj.ost.ch/allModules/40311_M_SecSoW.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
                'Cybersecurity STD_21 (Profil)',
              ],
            },
            {
              name: 'AI Applications (M_AIAp / I)',
              url: 'https://studien.rj.ost.ch/allModules/38785_M_AIAp.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Frontend Engineering STD_21 (Profil)',
                'Data Engineering and Machine Intelligence STD_21 (Profil)',
              ],
            },
            {
              name: 'Data Engineering (M_DatEng / I)',
              url: 'https://studien.rj.ost.ch/allModules/36038_M_DatEng.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Data Engineering and Machine Intelligence STD_21 (Profil)',
              ],
            },
            {
              name: 'Cyber Security Foundations (M_CySec / I)',
              url: 'https://studien.rj.ost.ch/allModules/36478_M_CySec.html',
              categories: [
                'Informatik (I_Inf)',
                'Rahmenausbildung (Kat_RA)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'Functional Programming  (M_FP / I)',
              url: 'https://studien.rj.ost.ch/allModules/39143_M_FP.html',
              categories: [
                'Informatik (I_Inf)',
                'Rahmenausbildung (Kat_RA)',
              ],
              ects: 4,
              focuses: [],
            },
          ],
        },
        {
          number: 5,
          modules: [
            {
              name: 'Compilerbau (M_CoBau / I)',
              url: 'https://studien.rj.ost.ch/allModules/40663_M_CoBau.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [],
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
              name: 'C++ (M_CPl / I)',
              url: 'https://studien.rj.ost.ch/allModules/24357_M_CPl.html',
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
              name: 'SE Practices 1 (M_SEP1 / I)',
              url: 'https://studien.rj.ost.ch/allModules/39203_M_SEP1.html',
              categories: [
                'Engineering Practice (I_EP)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'Rhetorische Kommunikation f\u00fcr IngenieurInnen (M_RheKI / KG)',
              url: 'https://studien.rj.ost.ch/allModules/31909_M_RheKI.html',
              categories: [
                'Kommunikation und Englisch (I_KomEng)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'English: The World of Science (M_EnglScience / KG)',
              url: 'https://studien.rj.ost.ch/allModules/36091_M_EnglScience.html',
              categories: [
                'Kommunikation und Englisch (I_KomEng)',
              ],
              ects: 4,
              focuses: [],
            },
          ],
        },
        {
          number: 6,
          modules: [
            {
              name: 'C++ Advanced (M_CPlA / I)',
              url: 'https://studien.rj.ost.ch/allModules/28684_M_CPlA.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'Distributed Systems (M_DSy / I)',
              url: 'https://studien.rj.ost.ch/allModules/39054_M_DSy.html',
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
              name: 'SE Practices 2 (M_SEP2 / I)',
              url: 'https://studien.rj.ost.ch/allModules/39000_M_SEP2.html',
              categories: [
                'Engineering Practice (I_EP)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'SE Project (M_SEProj / I)',
              url: 'https://studien.rj.ost.ch/allModules/39012_M_SEProj.html',
              categories: [
                'Engineering Practice (I_EP)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'Gesellschaft, Wirtschaft und Recht (M_KatGWR / KG)',
              url: 'https://studien.rj.ost.ch/allModules/38418_M_KatGWR.html',
              categories: [
                'Gesellschaft, Wirtschaft und Recht (I-gwr)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'Physik Anwendungen f\u00fcr Informatik (M_PhAI / MN)',
              url: 'https://studien.rj.ost.ch/allModules/36992_M_PhAI.html',
              categories: [
                'Mathematik und Physik (Kat_MaPh)',
              ],
              ects: 4,
              focuses: [],
            },
          ],
        },
        {
          number: 7,
          modules: [
            {
              name: 'Patterns und Frameworks (M_PF / I)',
              url: 'https://studien.rj.ost.ch/allModules/39045_M_PF.html',
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
              name: 'Application Architecture (M_AppArch / I)',
              url: 'https://studien.rj.ost.ch/allModules/28236_M_AppArch.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Software Engineering STD_21 (Profil)',
                'Frontend Engineering STD_21 (Profil)',
              ],
            },
            {
              name: 'Studienarbeit Informatik (M_SAI21 / I)',
              url: 'https://studien.rj.ost.ch/allModules/39016_M_SAI21.html',
              categories: [
                'Informatik (I_Inf)',
                'Studien- Bachelorarbeit (I_SaBa)',
              ],
              ects: 8,
              focuses: [],
            },
            {
              name: 'Projekt- und Qualit\u00e4tsmanagement (M_PmQm / I)',
              url: 'https://studien.rj.ost.ch/allModules/28231_M_PmQm.html',
              categories: [
                'Gesellschaft, Wirtschaft und Recht (I-gwr)',
              ],
              ects: 4,
              focuses: [],
            },
            {
              name: 'Kommunikation 2 f\u00fcr IngenieurInnen  (Teamkommunikation) (M_KommIng2 / KG)',
              url: 'https://studien.rj.ost.ch/allModules/37397_M_KommIng2.html',
              categories: [
                'Kommunikation und Englisch (I_KomEng)',
              ],
              ects: 4,
              focuses: [],
            },
          ],
        }, {
          number: 8,
          modules: [
            {
              name: 'Cloud Solutions (M_CldSol / I)',
              url: 'https://studien.rj.ost.ch/allModules/37167_M_CldSol.html',
              categories: [
                'Aufbau (I_Auf)',
                'Informatik (I_Inf)',
              ],
              ects: 4,
              focuses: [
                'Frontend Engineering STD_21 (Profil)',
                'Data Engineering and Machine Intelligence STD_21 (Profil)',
              ],
            },
            {
              name: 'Bachelor-Arbeit Informatik (M_BAI14 / I)',
              url: 'https://studien.rj.ost.ch/allModules/24809_M_BAI14.html',
              categories: [
                'Informatik (I_Inf)',
                'Studien- Bachelorarbeit (I_SaBa)',
              ],
              ects: 12,
              focuses: [],
            },
            {
              name: 'Wirtschaftsinformatik 2: Gesch\u00e4ftsprozessmanagement (M_WI2 / I)',
              url: 'https://studien.rj.ost.ch/allModules/24453_M_WI2.html',
              categories: [
                'Gesellschaft, Wirtschaft und Recht (I-gwr)',
              ],
              ects: 4,
              focuses: [],
            },
          ],
        },
      ],
      allModules: [],
      allCategories: [],
      totalPlanned: 0,
      totalEarned: 0,
      lastSemester: 2,
    };
  },
  components: { Semester },
  methods: {
    getAllModules() {
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
    getCategories() {
      fetch(`${BASE_URL}${ROUTE_CATEGORIES}`)
        .then((response) => {
          if (response.ok) {
            response.json()
              .then((categories) => {
                categories.forEach((category) => {
                  // eslint-disable-next-line no-param-reassign
                  category.earnedCredits = 0;
                  // eslint-disable-next-line no-param-reassign
                  category.plannedCredits = 0;
                  this.semesters.forEach((semester) => {
                    semester.modules.forEach((module) => {
                      if (module.categories.includes(category.name)) {
                        if (semester.number < this.lastSemester) {
                          // eslint-disable-next-line no-param-reassign
                          category.earnedCredits += module.ects;
                        }
                        // eslint-disable-next-line no-param-reassign
                        category.plannedCredits += module.ects;
                      }
                    });
                  });
                });
                this.allCategories = categories;
              });
          }
        });
    },
    addModuleToSemester(offset, module) {
      this.semesters[offset].modules.push(module);
      this.updateStatistics();
    },
    removeModuleFromSemester(offsetSemesters, offsetModules) {
      this.semesters[offsetSemesters].modules.splice(offsetModules, 1);
      this.updateStatistics();
    },
    updateStatistics() {
      this.totalPlanned = 0;
      this.totalEarned = 0;
      this.allCategories.forEach((category) => {
        this.totalPlanned += category.totalPlanned;
        this.totalEarned += category.totalEarned;
      });
    },
  },
  mounted() {
    this.getAllModules();
    this.getCategories();
    setTimeout(this.updateStatistics, 500);
  },
};
</script>
<style scoped>
.semester {
  margin: 1.5rem 0.5rem 0 0.5rem;
}
</style>
