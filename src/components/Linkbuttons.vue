<template>
    <div className="nav-link nav-link-lg navsearch socialmedia">
        <a :href="telegram" target=_blank><span className="imgLink"><font-awesome-icon :icon="['fab', 'telegram']" /></span></a>
        <a :href="github" target=_blank><span className="imgLink"><font-awesome-icon :icon="['fab', 'github']" /></span></a>
        <a :href="twitter" target=_blank><span className="imgLink"><font-awesome-icon :icon="['fab', 'twitter']" /></span></a>
    </div>
</template>

<script lang="ts">
export default({
	data() {
    	return {
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
})
</script>