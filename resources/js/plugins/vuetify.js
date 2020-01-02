import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'

import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: colors.blue.darken2,
        secondary: colors.blue.darken4,
        // accent: colors.shades.black,
        // error: colors.red.accent3,
      }
    },
  },
}

export default new Vuetify(opts)