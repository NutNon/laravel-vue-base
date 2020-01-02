<template>
	<v-content>
		<v-container
			class="fill-height"
			fluid>
			<v-row
				align="center"
				justify="center">
				<v-col
					cols="12"
					sm="8"
					md="4">
					<v-card class="elevation-12">
						<v-toolbar
							color="primary"
							dark
							flat>
							<v-toolbar-title>เข้าสู่ระบบ</v-toolbar-title>
						</v-toolbar>
						<v-card-text>
							<v-form>
								<v-text-field
									v-model="loginForm.username"
									label="ชื่อผู้ใช้"
									name="login"
									prepend-icon="person"
									type="text" />

								<v-text-field
									v-model="loginForm.password"
									id="password"
									label="รหัสผ่าน"
									name="password"
									prepend-icon="lock"
									type="password" />
							</v-form>
						</v-card-text>
						<v-card-actions class="pt-0 pb-4 px-4">
							<v-spacer />
							<v-btn @click="onLoginHandler" large width="150" color="primary">
								<span>เข้าสู่ระบบ</span>
							</v-btn>
							<v-spacer />
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-content>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'login',
    computed: {
      // Map Vuex state.
      ...mapState({
        loginForm: state => state.Auth.loginForm,
      }),
    },
    data: () => ({
      step: 1,
      compareTableEditCommentDialog: false,

      // TODO: Mock
      items: [],
      compareTableSearch: '',
      // TODO: Mock
      headers: [
        {
          text: 'วันเวลา',
          align: 'left',
          value: 'dateTime',
        },
        {
          text: 'เลขที่บัญชี',
          sortable: false,
          value: 'accountNumber',
        },
        {
          text: 'ยอดเงิน',
          align: 'right',
          value: 'amount',
        },
        { text: 'สถานะการเทียบ', value: 'status' },
        { text: 'หมายเหตุ', value: 'comment' },
        {
          text: '',
          value: 'action',
          sortable: false,
          width: 50
        },
      ],
      // TODO: Mock
      tableData: [
        {
          dateTime: '15/12/2019 16:01',
          accountNumber: 'X5486',
          amount: 2000.00,
          status: 'ตรงกับ Statement',
          comment: '',
        },
        {
          dateTime: '15/12/2019 16:02',
          accountNumber: 'X9564',
          amount: 500.00,
          status: 'รายการใน Statement ไม่ตรง',
          comment: '',
        },
        {
          dateTime: '15/12/2019 16:11',
          accountNumber: 'X1122',
          amount: 400.00,
          status: 'ตรงกับ Statement',
          comment: '',
        },
        {
          dateTime: '15/12/2019 16:14',
          accountNumber: 'X3521',
          amount: 200.00,
          status: 'ตรงกับ Statement',
          comment: '',
        },
        {
          dateTime: '15/12/2019 16:16',
          accountNumber: 'X7545',
          amount: 500.00,
          status: 'รายการใน Database ไม่ตรง',
          comment: 'ลูกค้าเพิ่งฝากยอดเมื่อวาน',
        },
      ],
      // TODO: Mock
      compareForm: {
        comment: ''
      }
    }),
    methods: {
      ...mapActions('Account', ['populateAccounts']),
      ...mapActions('Auth', ['login']),
	    async onLoginHandler () {
        try {
          await this.login()
          return this.$router.replace('/')
        } catch {
          alert('ชื่อผู้ใช้หรือรหัสผ่านผิด')
        }
	    }
    }
  }
</script>
