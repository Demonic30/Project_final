<template>
  <div>
       <button @click="getUser()">get User from API</button> <br>
    {{user}}
      </div>
    
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'App1',
  components: {
  },
  methods: {
    ...mapActions({
      getUser: 'getUser'
    })
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  }
}

</script>

<style>
	/* #app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	} */
</style>