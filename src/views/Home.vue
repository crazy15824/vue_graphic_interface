<template>
  <Header />
  <div class="container-fluid mtb15 no-fluid">
    <div class="row sm-gutters">
      <div class="col-md-3">
       <Pairs />
       <div class="topspace"></div>
       <News />
      </div>
      <div class="col-md-9">
        <Tokeninfo />
        <div class="topspace"></div>
        <tradingview />
        <div class="topspace"></div>
        <Orders />
      </div>
    </div>
  </div>
  <Footer />

</template>

<script lang="ts">
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Orders from "@/components/Orders.vue"
import Tokeninfo from "@/components/Tokeninfo.vue"
import Pairs from "@/components/Pairs.vue"
import News from "@/components/News.vue"
import tradingview from '@/tradingview/tradingview.vue';

export default ({
  name: "Home",
  data() {
    return {
    }
  },
  components: {
    tradingview,
    Header,
    Orders,
    Pairs,
    News,
    Tokeninfo,
    Footer,
  }
});
</script>

