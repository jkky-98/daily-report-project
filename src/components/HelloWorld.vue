<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ author }}</h2>
    <p>Deadline : {{ day + 5 }}</p>
    <p v-html="explain"></p>
    <p>In progress : {{seen ? 'Yes' : 'No'}}</p>
    <button @click='updateLove'>좋아요</button>
    <p>{{love}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    updateLove() {
      this.love++;

      
    }
  },
  data() {
    return {
      love: 0,
      msg: 'Welcome to Semose',
      author: 'Ajou University',
      explain: '<strong>Semose is a web application that helps student to manage your real estate purchase and sale.<strong>',
      day: 50,
      seen: true,
    }
  }
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
