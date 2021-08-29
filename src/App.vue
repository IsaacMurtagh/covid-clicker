<template>
  <floater :floats="floats" />
  <div class="max-w-2xl">
    <div class="flex justify-center space-x-8">
      <div>
        Community Cases: {{ cases }}
      </div>
      <div>
        Cases Per Second: {{ casesPerSecond }}
      </div>
    </div>
    <div class="flex justify-center p-4">
      <earth class="select-none" @earth-click="handleEarthClick" />
    </div>
  </div>
  <shop
    :score="cases"
    @purchase="handlePurchase"
  />
</template>

<script>
import Earth from './components/Earth';
import Shop from './shop/Shop';
import ScoreFloater from './floater/ScoreFloater';
import Floater from './floater/Floater';

export default {
  name: 'App',

  components: {
    Earth,
    Floater,
    Shop,
  },

  data() {
    return {
      cases: 0,
      floats: [],
      purchases: [],
      addCasesInterval: null,
    }
  },

  computed: {
    casesPerSecond() {
      return Math.floor(this.caseGenerator * this.caseMultiplier);
    },

    caseMultiplier() {
      return this.purchases
        .filter(p => p.type == 'upgrade')
        .map(p => p.multiplier)
        .reduce((a, b) => a + b, 1) || 1; 
    },

    caseGenerator() {
      return this.purchases
        .filter(p => p.type == 'generator')
        .map(p => p.spread)
        .reduce((a, b) => a + b, 0);
    }
  },

  created() {
    window.setInterval(this.destroyFloats, 15000)
    window.setInterval(this.addCommunityCases, 1000);
  },

  methods: {
    handleEarthClick(event) {
      this.cases += 1,
      this.floats.push(ScoreFloater.fromEvent({ event, score: 1 }));
    },

    destroyFloats() {
      this.floats = [];
    },

    addCommunityCases() {
      this.cases += this.casesPerSecond;
    },

    handlePurchase(purchase) {
      this.cases -= purchase.cost;
      this.purchases.push(purchase);
    }
  }
}
</script>