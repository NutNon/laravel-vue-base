<template>
	<div id="main-layout" v-if="!isLoading">
		<v-navigation-drawer v-model="drawer.isOpen" clipped app overflow>
			<v-list class="pa-0 sidebar">
				<v-list-item-group>
					<v-list-item
						v-for="(item, i) in listItem"
						:key="i"
						:to="item.link">
						<v-list-item-icon>
							<v-icon v-text="item.icon"></v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title v-text="item.text"></v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar color="secondary" dark clipped-left app>
			<v-app-bar-nav-icon
				@click.stop="drawer.isOpen = !drawer.isOpen">
				<v-icon>menu</v-icon>
			</v-app-bar-nav-icon>
			<v-toolbar-title></v-toolbar-title>
		</v-app-bar>

		<v-content>
			<router-view></router-view>
		</v-content>
	</div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
	  name: 'main-layout',
		data: () => ({
      isLoading: true,
			drawer: {
        isOpen: true
			},
			listItem: [
				{
				  link: 'logout',
					icon: 'mdi-logout',
					text: 'ออกจากระบบ'
				},
			]
		}),
		async created () {
	    this.init()
		},
    methods: {
      ...mapActions('Auth', ['populateUserData']),
      async init () {
        try {
          await this.populateUserData()
	        this.isLoading = false
        } catch(err) {
          return this.$router.replace('/login')
        }
      }
    }
	}
</script>

<style lang="scss" scoped>
	@import '../styles/constants';

	.sidebar {
		.v-item--active {
			color: #fff;
			background-color: $primary-color;
		}
	}
</style>