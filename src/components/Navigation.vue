<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="../assets/logo.png" class="logo-nav">
      </router-link>
      <a v-on:click="onBurgerClick" v-bind:class="{'is-active': isBurgerActive}"
         role="button" class="navbar-burger" aria-label="menu"
         aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" v-bind:class="{'is-active': isBurgerActive}">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <template v-for="category in categories" v-bind:key="category.title">
            <a class="navbar-link" v-text="category.title" />
            <div class="navbar-dropdown">
              <a class="navbar-item"
                 v-for="plan in category.plans"
                 v-bind:key="plan.title"
                 v-bind:href="'#/plan/' + plan.path"
                 v-text="plan.title"
                 @click="onBurgerClick" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isBurgerActive: false,
      categories: [
        {
          title: 'Musterpläne Teilzeit',
          plans: [
            { title: 'Rahmen', path: 'An1I_OOP1_AutPy_CN1_DMI_RheKI-An2I_OOP2_DigCod_CySec_AutoSpr_FunProg-WE1_AlgDat_Bsys1_AIFo_Dbs1_EnglScience-KommIng2-SEP1_ExEv-SEP2_SEProj_DigBusI-SAI21_WI2-BAI14_PhAI' },
            { title: 'Software Engineering', path: 'An1I_OOP1_AutPy_CN1_DMI_RheKI-An2I_OOP2_DigCod_CySec_AutoSpr_FunProg-WE1_AlgDat_Bsys1_AIFo_Dbs1_EnglScience-ParProg_SecSoW_Bsys2_AIAp_DatEng_KommIng2-PmQm_CoBau_MsTe_CPl_SEP1_ExEv-CPlA_DSy_SEP2_SEProj_DigBusI-PF_AppArch_SAI21_WI2-CldSol_BAI14_PhAI' },
            { title: 'Frontend Engineering', path: 'An1I_OOP1_AutPy_CN1_DMI_RheKI-An2I_OOP2_DigCod_CySec_AutoSpr_FunProg-WE1_AlgDat_Bsys1_AIFo_Dbs1_EnglScience-WE2_SecSoW_Bsys2_AIAp_DatEng_KommIng2-PmQm_WE3_MsTe_MGE_SEP1_ExEv-HCD_DSy_SEP2_SEProj_DigBusI-ComGra_AppArch_SAI21_WI2-CldSol_BAI14_PhAI' },
            { title: 'Cybersecurity', path: 'An1I_OOP1_AutPy_CN1_DMI_RheKI-An2I_OOP2_DigCod_CySec_AutoSpr_FunProg-WE1_AlgDat_Bsys1_AIFo_Dbs1_EnglScience-WE2_SecSoW_WsoT_CN2_KommIng2-PmQm_PFSec_CldInf_NISec_SEP1_ExEv-CldOp_HackL_DSy_SEP2_SEProj_DigBusI-CyDef_AppArch_SAI21_WI2-IncResp_BAI14_PhAI' },
            { title: 'Network and Cloud Infrastructure', path: 'An1I_OOP1_AutPy_CN1_DMI_RheKI-An2I_OOP2_DigCod_CySec_AutoSpr_FunProg-WE1_AlgDat_Bsys1_AIFo_Dbs1_EnglScience-WE2_SDW_WsoT_NetAut_CN2_KommIng2-PmQm_CldInf_NISec_SEP1_ExEv-CldOp_SModSim_DSy_SEP2_SEProj_DigBusI-ServDev_AppArch_SAI21_WI2-CldSol_BAI14_PhAI' },
            { title: 'Data Engineering and Machine Intelligence', path: 'An1I_OOP1_AutPy_CN1_DMI_RheKI-An2I_OOP2_DigCod_CySec_AutoSpr_FunProg-WE1_AlgDat_Bsys1_AIFo_Dbs1_EnglScience-WE2_MathFML_DatAna_AIAp_DatEng_KommIng2-PmQm_ML_MsTe_MGE_SEP1_ExEv-DL_DSy_SEP2_SEProj_DigBusI-BlCh_AppArch_SAI21_WI2-CldSol_BAI14_PhAI' },
          ],
        },
        {
          title: 'Musterpläne Vollzeit',
          plans: [
            { title: 'Rahmen', path: 'An1I_OOP1_AutPy_CN1_DMI_RheKI_Dbs1_EnglScience-An2I_OOP2_DigCod_CySec_AutoSpr_FunProg_KommIng2-WE1_AlgDat_Bsys1_AIFo_SEP1_ExEv-SEP2_SEProj_DigBusI-PmQm_SAI21_WI2-BAI14_PhAI' },
            { title: 'Software Engineering', path: 'An1I_OOP1_AutPy_CN1_DMI_RheKI_Dbs1_EnglScience-An2I_OOP2_DigCod_CySec_AutoSpr_FunProg_DatEng_KommIng2-WE1_AlgDat_Bsys1_AIFo_MsTe_CPl_SEP1_ExEv-ParProg_SecSoW_Bsys2_AIAp_DSy_SEP2_SEProj_DigBusI-PmQm_CoBau_PF_AppArch_SAI21_WI2-CPlA_CldSol_BAI14_PhAI' },
            { title: 'Frontend Engineering', path: 'An1I_OOP1_AutPy_CN1_DMI_RheKI_Dbs1_EnglScience-An2I_OOP2_DigCod_CySec_AutoSpr_FunProg_DatEng_KommIng2-WE1_AlgDat_Bsys1_AIFo_MsTe_MGE_SEP1_ExEv-WE2_SecSoW_Bsys2_AIAp_DSy_SEP2_SEProj_DigBusI-PmQm_WE3_ComGra_AppArch_SAI21_WI2-HCD_CldSol_BAI14_PhAI' },
            { title: 'Cybersecurity', path: 'An1I_OOP1_AutPy_CN1_DMI_RheKI_Dbs1_EnglScience-An2I_OOP2_DigCod_CySec_AutoSpr_FunProg_CN2-WE1_AlgDat_Bsys1_AIFo_CldInf_NISec_SEP1_ExEv-WE2_SecSoW_WsoT_DSy_SEP2_SEProj_DigBusI-PmQm_PFSec_CyDef_AppArch_SAI21_WI2-CldOp_HackL_KommIng2_IncResp_BAI14_PhAI' },
            { title: 'Network and Cloud Infrastructure', path: 'An1I_OOP1_AutPy_CN1_DMI_RheKI_Dbs1_EnglScience-An2I_OOP2_DigCod_CySec_AutoSpr_FunProg_CN2-WE1_AlgDat_Bsys1_AIFo_CldInf_NISec_SEP1_ExEv-WE2_SDW_WsoT_NetAut_DSy_SEP2_SEProj_DigBusI-PmQm_ServDev_AppArch_SAI21_WI2-CldOp_SModSim_KommIng2_CldSol_BAI14_PhAI' },
            { title: 'Data Engineering and Machine Intelligence', path: 'An1I_OOP1_AutPy_CN1_DMI_RheKI_Dbs1_EnglScience-An2I_OOP2_DigCod_CySec_AutoSpr_FunProg_DatEng_KommIng2-WE1_AlgDat_Bsys1_AIFo_MsTe_MGE_SEP1_ExEv-WE2_MathFML_DatAna_AIAp_DSy_SEP2_SEProj_DigBusI-PmQm_ML_AppArch_BlCh_SAI21_WI2-DL_CldSol_BAI14_PhAI' },
          ],
        },
      ],
    };
  },
  methods: {
    onBurgerClick() {
      this.isBurgerActive = !this.isBurgerActive;
    },
  },
};
</script>

<style scoped>

</style>
