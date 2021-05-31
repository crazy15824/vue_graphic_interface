<template>
  <div class="market-pairs">
    <div class="fixedsize">
    <img src="assets/images/char.png">
    </div>
    <!--<div v-if="symbol" class="fixedsize">
        <KLineWidget
          :symbolInfo="symbolInfo"
          :symbol="symbol.toLocaleUpperCase()"
          ref="kLineRef"
        />
    </div>
    -->
  </div>
</template>

<script>
import { ref, onMounted, reactive } from "vue";
import KLineWidget from "@/tradingview/components/KLineWidget.vue";
import { getSymbols } from "@/tradingview/api/index.js";
import { ws } from "@/tradingview/utils/socket.js";
export default {
  name: "tradingview",
  components: {
    KLineWidget,
  },
  setup() {
    const symbolList = reactive({});
    const symbol = ref("");
    const symbolInfo = ref({});
    const kLineRef = ref(null);
    onMounted(async () => {
      ws.initWebSocket();
      const [list, symbolData] = await getSymbols();
      symbolList.value = list;
      symbol.value = symbolData;
      symbolInfo.value = list[0];
    });
    const symbolHanlder = (e) => {
      symbol.value = e;
      kLineRef.value.setSymbol(e);
    };

    return {
      symbol,
      symbolList,
      symbolInfo,
      symbolHanlder,
      kLineRef,
    };
  },
};
</script>