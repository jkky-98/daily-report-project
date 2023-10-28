<template>
  <div class="score">
  
    <button @click="updateScore(3)">GOOD</button>
    <button @click="updateScore(1)">SOSO</button>
    <button @click="updateScore(0)">BAD</button>
  </div>
</template>

<script>
export default {
  name: 'DayScore',
  methods: {
    updateScore(score) {
      console.log(score);
      console.log(this.item)

      this.$emit('onUpdateScore',this.item, score); // 부모 컴포넌트에 score wjsekf
    }
  },
  computed: {},
  data() {
    return {
      bottons: [
        {label: 
          'GOOD',
          score: 3
        },
        {label: 
          'SOSO',
          score: 1
        },
        {label: 
          'BAD',
          score: 0}
      ]
    }
    },
  props:[
    'item'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
