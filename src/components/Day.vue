<template>
  <div class="day">
    <h1 class="day-title">
      {{$route.params.date}} 
      <!--라우터에 동적 파라미터인 :date를 받아옴-->
    <ul class='day-list'>
      <li
        v-for="item in items"
        :key="item.id"
        class="day-list-item"
  
      >
        <div class='time'> <!--시간부분-->
          <h2>{{item.id}}
          </h2>
        </div>

        <div class='action'> <!--행동부분-->
          <input type="text" v-model="item.action"
          placeholder="한 일을 입력하세요">
        </div>

        <day-score
          @onUpdateScore="onUpdateScore"
          :item="item">
          
        </day-score>

        <div class='note'>
          <textarea v-model='item.note'
          placeholder="메모를 입력하세요">
          </textarea>
        </div>

      </li>
    </ul>
    </h1>
  </div>
</template> 

<script>
import DayScore from './DayScore.vue'

export default {
  name: 'DayComponent',
  methods: {
    onUpdateScore(item, score) {
      item.score = score;
    }
  },
  computed: {},
  components: {
    'day-score': DayScore
  },
  data() {
    return {
      items : [
        {
          action: "",
          id: '2018-04-01-08-10',
          note: "",
          open: false,
          score: undefined,
        },
        {
          action: "",
          id: "2018-04-01-10-12",
          note: "",
          open: false,
          score: undefined,
        },
        {
          action: "",
          id: "2018-04-01-12-14",
          note: "",
          open: false,
          score: undefined,
        }
      ]
    }
    },
  props:{}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
