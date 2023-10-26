<template>
  <nav class="nav">
    <ul class="nav-list">
        <li>
            <button @click="today">
                <span>오늘</span>
            </button>

        </li>
        <li>
            <router-link to="/calender">
                <span>달력</span>
            </router-link>
        </li>
        <li>
            <router-link to="/setting">
                <span>설정</span>
            </router-link>
        </li>
        <li>
            <router-link to="/about">
                <span>소개</span>
            </router-link>
        </li> 
    </ul>
  </nav>
</template>

<script>
import moment from 'moment'

export default {
  name: 'NavComponent',
  methods: {
    today(){
      let todayUrl = '/day/' + moment(new Date()).format('YYYY-MM-DD');
      this.$router.push(todayUrl);
    }
  },
  computed: {},
  data() {
    return {}
    },
  props:{
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
