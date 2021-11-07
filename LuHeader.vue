<template>
  <header class="header nav-undecorated">
    <lu-navbar v-if="navbarmenu" :menu="navbarmenu" />
    <div class="border-bottom">
      <div class="container-fluid mw-xl">
        <div class="row m-0" :class="[compact ? 'py-2' : 'py-3 py-lg-5']">
          <div class="col p-0">
            <div class="d-flex justify-content-between align-items-center h-100">
              <div class="header-logo header-logo-lu flex-grow-1 flex-lg-grow-0">
                <a :href="logoUrl" :title="logoTitle">
                  <img v-if="logoSrc"
                       :src="logoSrc"
                       :alt="logoTitle"
                       class="mw-100"
                  >
                </a>
              </div>
              <div
                class="flex-shrink-1 flex-lg-shrink-0 flex-grow-0 d-flex flex-column justify-content-between h-100 mh-120"
              >
                <div
                  class="h-lg-auto flex-column justify-content-between align-items-end font-size-sm font-size-sm-base flex-grow-0"
                >
                  <nav
                    class="nav text-center h-100 h-lg-auto align-items-center d-lg-none flex-nowrap"
                  >
                    <div v-if="hasLogin" class="nav-item">
                      <a
                        v-if="isLoggedIn"
                        class="ml-2 p-1 d-block nav-undecorated"
                        href="#"
                        aria-controls="header-logout"
                        aria-expanded="false"
                        :aria-label="$t('logout')"
                        @click.prevent="$emit('logout')"
                      >
                        <i v-if="isLoggedIn === true" class="fal fa-sign-out" />
                        <lu-avatar v-else small :text="avatar" />
                        <br>
                        {{ $t('logout') }}
                      </a>
                      <a
                        v-else
                        class="ml-2 p-1 d-block nav-undecorated"
                        href="#"
                        aria-controls="header-login"
                        aria-expanded="false"
                        :aria-label="$t('login')"
                        @click.prevent="$emit('login')"
                      >
                        <fa-icon :icon="['fal', 'sign-in']" />
                        <br>
                        {{ $t('login') }}
                      </a>
                    </div>
                    <div v-if="hasSearch" class="nav-item">
                      <a
                        class="ml-2 p-1 d-block nav-undecorated"
                        href="#"
                        data-toggle="collapse"
                        aria-controls="header-search-form"
                        aria-expanded="false"
                        :aria-label="$t('showHideSearch')"
                        @click.prevent="toggleSearch"
                      >
                        <fa-icon :icon="['fal', 'search']" />
                        <br>
                        {{ $t('search') }}
                      </a>
                    </div>
                    <div class="nav-item">
                      <a
                        class="ml-2 p-1 d-block nav-undecorated"
                        href="#"
                        aria-controls="nav-mobile"
                        aria-expanded="false"
                        :aria-label="$t('showMenu')"
                        @click.prevent="showNavMobile"
                      >
                        <fa-icon :icon="['fal', 'bars']" />
                        <br>
                        {{ $t('menu') }}
                      </a>
                    </div>
                  </nav>
                  <div class="d-none d-lg-flex flex-column flex-xl-row w-100 justify-content-end">
                    <nav v-if="hasSearch" class="nav align-items-center justify-content-end flex-1 mb-3 mb-xl-0">
                      <div class="nav-item flex-xl-grow-1">
                        <form class="form-inline pr-xl-3" @submit.prevent="search">
                          <div class="input-group input-group-round input-group-sm w-100 flex">
                            <input
                              id="header-search-field"
                              ref="headerSearchField"
                              v-model="searchField"
                              type="search"
                              class="form-control form-control-sm border-right-0"
                              :placeholder="searchPlaceholder"
                            >
                            <div class="input-group-append">
                              <button class="btn btn-primary px-2" type="submit">
                                <span class="mr-2">{{ $t('search') }}</span>
                                <fa-icon :icon="['fal', 'search']" />
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </nav>
                    <nav class="nav align-items-center justify-content-end">
                      <div v-if="hasLogin" class="nav-item d-none d-lg-block">
                        <a
                          v-if="isLoggedIn"
                          class="nav-link px-0 ml-4"
                          href="#"
                          @click.prevent="$emit('logout')"
                        >
                          <span class="mr-1">
                            <i v-if="isLoggedIn === true" class="fal fa-lg fa-sign-out" />
                            <lu-avatar v-else :text="avatar" />
                          </span>
                          {{ $t('logout') }}
                        </a>
                        <a
                          v-else
                          class="nav-link px-0 ml-4"
                          href="#"
                          @click.prevent="$emit('login')"
                        >
                          <span class="mr-1">
                            <fa-icon class="fa-lg" :icon="['fal', 'sign-in']" />
                          </span>
                          {{ $t('login') }}
                        </a>
                      </div>
                      <div class="nav-item d-none d-lg-block">
                        <a
                          v-if="$root.$i18n.locale == 'sv'"
                          class="nav-link px-0 ml-4"
                          href="#"
                          @click.prevent="switchLocale"
                        >
                          <span class="mr-1">
                            <fa-icon class="fa-lg" :icon="['fal', 'globe']" />
                          </span> English
                        </a>
                        <a v-else class="nav-link px-0 ml-4" href="#" @click.prevent="switchLocale">
                          <span class="mr-1">
                            <fa-icon class="fa-lg" :icon="['fal', 'globe']" />
                          </span> Svenska
                        </a>
                      </div>
                      <div v-if="hasListen" class="nav-item">
                        <a class="nav-link px-0 ml-4" href="#" @click.prevent="listen">
                          <span class="mr-1">
                            <fa-icon class="fa-lg" :icon="['fal', 'volume']" />
                          </span>
                          {{ $t('listen') }}
                        </a>
                      </div>
                      <div class="nav-item d-none d-lg-block d-xl-none border-left ml-3 pl-3">
                        <a
                          class="nav-link"
                          href="#"
                          aria-controls="nav-mobile"
                          aria-expanded="false"
                          :aria-label="$t('showMenu')"
                          @click.prevent="showNavMobile"
                        >
                          <fa-icon :icon="['fal', 'bars']" />
                          {{ $t('menu') }}
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
                <lu-top-menu v-if="topmenu" :menu="topmenu" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <transition name="slide">
        <div v-show="! searchCollapsed" id="header-search-form" class="header-search-form collapse-lg pb-2 px-2">
          <form class="form-inline px-lg-3" @submit.prevent="search">
            <div class="input-group input-group-round input-group-sm w-100 flex">
              <input
                id="header-search-field-mobile"
                ref="searchFieldMobile"
                v-model="searchField"
                type="search"
                class="form-control form-control-sm border-right-0"
                :placeholder="searchPlaceholder"
              >
              <div class="input-group-append">
                <button class="btn btn-primary px-2" type="submit">
                  <span class="mr-2">{{ $t('search') }}</span>
                  <fa-icon :icon="['fal', 'search']" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </transition>
    </div>
    <lu-nav-mobile ref="navMobile" :menu="mobilemenu" />
    <div style="display: none">
      <!-- bury the button for browsealoud -->
      <div id="__ba_launchpad" />
    </div>
  </header>
</template>

<script>
import LuNavbar from './LuNavbar'
import LuTopMenu from './LuTopMenu'
import LuNavMobile from './LuNavMobile'
import LuAvatar from './LuAvatar.vue'

export default {
  name: 'LuHeader',
  components: {
    LuNavbar,
    LuTopMenu,
    LuNavMobile,
    LuAvatar
  },
  props: {
    topmenu: { type: Array, default: null },
    mobilemenu: { type: Array, default: null },
    navbarmenu: { type: Array, default: null },
    hasListen: Boolean,
    hasLogin: Boolean,
    isLoggedIn: { type: [Boolean, String], default: false },
    hasSearch: Boolean,
    emptySearch: Boolean,
    searchPlaceholder: { type: String, default: '' },
    logoUrl: { type: String, required: true },
    logoTitle: { type: String, required: true },
    logoSrc: { type: String, required: true },
    compact: Boolean
  },
  data () {
    return {
      searchField: '',
      searchCollapsed: true
    }
  },
  computed: {
    avatar () {
      if (typeof this.isLoggedIn === 'boolean') {
        return ''
      }
      return this.isLoggedIn.split(' ').map(x => x.charAt(0)).join('').substr(0, 2)
    }
  },
  watch: {
    $route (to) {
      if (to.meta?.title) {
        document.title = this.$t(to.meta.title)
      } else {
        document.title = this.$t(to.name)
      }
    }
  },
  mounted () {
    if (this.hasListen) {
      // window._baMode = " "
      const baScript = document.createElement('script')
      baScript.setAttribute('src', '//www.browsealoud.com/plus/scripts/ba.js')
      baScript.async = true
      document.head.appendChild(baScript)
    }
    if (this.$router.currentRoute.meta?.title) {
      document.title = this.$t(this.$router.currentRoute.meta.title)
    } else {
      document.title = this.$t(this.$router.currentRoute.name)
    }
  },
  methods: {
    async switchLocale () {
      this.$root.$i18n.locale = this.$root.$i18n.locale === 'sv' ? 'en' : 'sv'
      document.getElementsByTagName('html')[0].lang = this.$root.$i18n.locale
      localStorage.setItem('language', this.$root.$i18n.locale)
      await this.$nextTick()
      if (this.titlePrefix) {
        console.log(`${this.$t(this.titlePrefix)} | ${this.$t(this.$route.name)}`)
        document.title = `${this.$t(this.titlePrefix)} | ${this.$t(this.$route.name)}`
      } else {
        document.title = this.$t(this.$route.name)
      }
    },
    listen () {
      // function imported from browsealoud. Why such generic name :(
      // eslint-disable-next-line no-undef
      toggleBar()
    },
    showNavMobile () {
      this.$refs.navMobile.show()
    },
    toggleSearch () {
      this.searchCollapsed = !this.searchCollapsed
      if (!this.searchCollapsed) {
        // Wait until rendered to set fokus
        this.$nextTick(() => this.$refs.searchFieldMobile.focus())
      }
    },
    search () {
      if (this.searchField.trim()) {
        this.$emit('search', this.searchField)
        if (this.emptySearch) {
          this.searchField = ''
        } else {
          this.$refs.searchFieldMobile.select()
          this.$refs.headerSearchField.select()
        }
      }
    }
  },
  i18n: {
    messages: {
      sv: {
        menu: 'Meny',
        search: 'Sök',
        showHideSearch: 'Visa och dölj sökfält',
        showMenu: 'Visa meny',
        listen: 'Lyssna',
        login: 'Logga in',
        logout: 'Logga ut'
      },
      en: {
        menu: 'Menu',
        search: 'Search',
        showHideSearch: 'Show and hide search field',
        showMenu: 'Show menu',
        listen: 'Listen',
        login: 'Log in',
        logout: 'Log out'
      }
    }
  }
}
</script>

<style scoped>
.slide-enter-active {
   transition-duration: 0.2s;
   transition-timing-function: linear;
}

.slide-leave-active {
   transition-duration: 0.2s;
   transition-timing-function: linear;
}

.slide-enter-to, .slide-leave {
   max-height: 50px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>
