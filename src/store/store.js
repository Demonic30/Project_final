import Vue from 'vue'
import Vuex from 'vuex'
// import UserProvider from '@/resources/user_provider'
// const userService = new UserProvider()

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // user: {},
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    number: 3,
    question: null,
    question_type: null,
    answer1: null,
    answer2: null,
    answer3: null,
    answer4: null,
    no_question: 1,
    status: 0

  },

  mutations: {
    // SET_USER(state, data) {
    //   state.user = data
    // },
    setimage1(state, data) {
      state.image1 = data
    },
    setimage2(state, data) {
      state.image2 = data
    },
    setimage3(state, data) {
      state.image3 = data
    },
    setimage4(state, data) {
      state.image4 = data
    },
    setnumber(state, data) {
      state.number = data
    },
    setquestion(state, data) {
      state.question = data
    },
    setquestion_type(state, data) {
      state.question_type = data
    },
    setanswer1(state, data) {
      state.answer1 = data
    },
    setanswer1(state, data) {
      state.answer2 = data
    },
    setanswer1(state, data) {
      state.answer3 = data
    },
    setanswer1(state, data) {
      state.answer4 = data
    },
    setno_question(state, data) {
      state.no_question = data
    },
    setquestion_type(state, data) {
      state.status = data
    },
  },
  getters: {
    image1: state => state.image1,
    image2: state => state.image2,
    image3: state => state.image3,
    image4: state => state.image4,
    number: state => state.number,
    question: state => state.question,
    question_type: state => state.question_type,
    answer1: state => state.answer1,
    answer2: state => state.answer2,
    answer3: state => state.answer3,
    answer4: state => state.answer4,
    no_question: state => state.no_question,
    status: state => state.status
  }

});