<template><!-- v-if="prompt" -->
    <div class="update-dialog" v-if="prompt">
      <div class="update-dialog__content">
        A new version is available
      </div>
      <div class="update-dialog__actions">
        <button class="btn btn-secondary-light buttonalign" @click="refresh">Refresh</button>
      </div>
    </div>
</template>

<script>

export default {
  name: "Update",
   data() {
    return {
      prompt: false,
    };
  },
  created() {
    if (this.workbox) {
      this.workbox.addEventListener("waiting", () => {
        this.prompt = true;
      });
      this.workbox.addEventListener("isUpdate", () => {
        this.prompt = true;
      });
      this.workbox.addEventListener("externalwaiting", () => {
        this.prompt = true;
      });
    }else{
       console.log("Error, we don't have a workbox object.") 
      }
  },
  methods: {
    async refresh() {
      this.prompt = false;
      await this.workbox.messageSW({ type: "SKIP_WAITING" });
    },
  },
}
</script>

<style>
.update-dialog {
  position: fixed; /* or absolute */
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 12px;
  max-width: 576px;
  color: white;
  background-color: #0859a9;
  text-align: left;
}

.buttonalign{
    float: right;
    margin-top: 10px;    
    padding: 5px !important;
}
</style>