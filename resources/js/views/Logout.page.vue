<template>
	<div id="logout"></div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'logout',
	  created () {
      this.onLogoutHandler()
	  },
    methods: {
      ...mapActions('Auth', ['logout']),
	    async onLogoutHandler () {
        await this.logout()
        return this.$router.replace('/login')
	    }
    }
  }
</script>
