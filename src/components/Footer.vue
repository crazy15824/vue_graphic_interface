<template>
    <Modal v-model="isOpenPrivacy" max-width="800px">
      <div class="modalBox">
         <Privacy />
      </div>
   </Modal>
   <Modal v-model="isOpenTerms" max-width="800px">
      <div class="modalBox">
         <Terms />
      </div>
   </Modal>
   <div class="footer">
        <div class="col-md-12">
            <div >
              <div class="footer border-top-0">
                <div class="container">
                  <div class="row align-items-center text-center">
                    <div class="col-lg-6 col-md-6 d-none d-md-block ">
                      <div class="social">
                          <a class="social-icon linksfooter" :href="twitter" target=_blank><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                          <a class="social-icon linksfooter" :href="telegram" target=_blank><font-awesome-icon :icon="['fab', 'telegram-plane']" /></a>
                          <a class="social-icon linksfooter" :href="github" target=_blank><font-awesome-icon :icon="['fab', 'github']" /></a>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 text-right privacy">
                      <a href="#" type="button" class="btn btn-secondary btn-sm spaces" @click="isOpenPrivacy = !isOpenPrivacy">Privacy</a>
                      <a href="#" type="button" class="btn btn-secondary btn-sm spaces" @click="isOpenTerms = !isOpenTerms">Terms</a>
                      <a href="#" type="button" class="btn btn-secondary btn-sm spaces" @click="isOpenAbout = !isOpenAbout">About Us</a>
                    </div>
                  </div>
                  <div class="row align-items-center flex-row-reverse">
                    <div class="col-lg-12 col-sm-12 mt-3 mt-lg-0 text-center">
                      Copyright © 2020 <a href="https://www.ivse.finance" target="_blank">IvSe Finances</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- pagination-wrapper -->
          <!-- section-wrapper -->
        </div><!-- COL-END -->
      </div>
</template>

<script lang="ts">
import { Modal } from 'vue-neat-modal'
import Privacy from "@/components/statics/Privacy.vue";
import Terms from "@/components/statics/Terms.vue";

export default {
  name: 'Wallet',
  data() {
    return {
      isOpenPrivacy: false,
      isOpenTerms: false,
      github: "",
      twitter: "",
      telegram: ""
    }
  },
    mounted() {
      this.github   = process.env.VUE_APP_IVSE_GITHUB,
      this.twitter  = process.env.VUE_APP_IVSE_TWITTER,
      this.telegram = process.env.VUE_APP_IVSE_TELEGRAM
  },
  components: {
    Privacy,
    Terms,
    Modal
  },
}
</script>


