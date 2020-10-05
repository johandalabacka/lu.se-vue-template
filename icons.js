import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faChevronDown, faChevronRight,
  faGlobe,
  faMinusCircle,
  faPlusCircle,
  faSearch,
  faSignIn,
  faTimes,
  faVolume
} from '@fortawesome/pro-light-svg-icons'



import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faBars,
  faChevronDown, faChevronRight,
  faGlobe,
  faMinusCircle,
  faPlusCircle,
  faSearch,
  faSignIn,
  faTimes,
  faVolume
)
Vue.component('fa-icon', FontAwesomeIcon)
