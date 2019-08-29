<template>
  <header class="header nav-undecorated">
    <lu-navbar v-if="navbarmenu" :menu="navbarmenu"></lu-navbar>
    <div class="border-bottom">
      <div class="container-fluid mw-xl">
        <div class="row m-0 py-3 py-lg-5">
          <div class="col p-0">
            <div class="d-flex justify-content-between align-items-center h-100">
              <div class="header-logo  header-logo-lu flex-grow-1 flex-lg-grow-0">
                <a href="#" title="Lunds universitet">
                  <img :src="'lumall/images/logo/logo_lth_' + $root.$i18n.locale +'@1x.png'"
                    alt="Lunds universitet" class=" mw-100">
                     <!--
                    srcset="lumall/images/logo/logo_lth@1x.png 1x, lumall/images/logo/logo_lth@2x.png 2x" -->

                </a>
              </div>
              <div
                class="flex-shrink-1 flex-lg-shrink-0 flex-grow-0 d-flex flex-column justify-content-between h-100 mh-120">
                <div
                  class="h-lg-auto flex-column justify-content-between align-items-end font-size-sm font-size-sm-base flex-grow-0">
                  <nav class="nav text-center h-100 h-lg-auto align-items-center d-lg-none flex-nowrap">
                    <div v-if="hasLogin" class="nav-item">
                      <a v-if="isLoggedIn" class="ml-2 p-1 d-block nav-undecorated" href="/logout"
                        aria-controls="header-logout" aria-expanded="false" :aria-label="$t('logout')">
                        <i class="fal fa-sign-out"></i><br>{{ $t('logout') }} </a>
                      <a v-else class="ml-2 p-1 d-block nav-undecorated" href="/login"
                        aria-controls="header-login" aria-expanded="false" :aria-label="$t('login')">
                        <i class="fal fa-sign-in"></i><br>{{ $t('login') }} </a>
                    </div>
                    <div class="nav-item">
                      <a class="ml-2 p-1 d-block nav-undecorated" href="#header-search-form" data-toggle="collapse"
                        aria-controls="header-search-form" aria-expanded="false" :aria-label="$t('showHideSearch')">
                        <i class="fal fa-search"></i><br>{{ $t('search') }} </a>
                    </div>
                    <div class="nav-item">
                      <a class="ml-2 p-1 d-block nav-undecorated" href="#" data-toggle="modal" data-target="#nav-mobile"
                        aria-controls="nav-mobile" aria-expanded="false" :aria-label="$t('showMenu')">
                        <i class="fal fa-bars"></i><br>{{ $t('menu') }} </a>
                    </div>
                  </nav>
                  <div class="d-none d-lg-flex flex-column flex-xl-row w-100 justify-content-end">
                    <nav class="nav align-items-center justify-content-end flex-1 mb-3 mb-xl-0">
                      <div class="nav-item flex-xl-grow-1">
                        <form class="form-inline pr-xl-3">
                          <div class="input-group input-group-round input-group-sm w-100 flex">
                            <input type="search" class="form-control form-control-sm border-right-0"
                              id="header-search-field">
                            <div class="input-group-append">
                              <button class="btn btn-primary px-2" type="submit">
                                <span class="mr-2">{{ $t('search') }}</span>
                                <i class="fal fa-search"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </nav>
                    <nav class="nav align-items-center justify-content-end">
                      <div v-if="hasLogin" class="nav-item d-none d-lg-block">
                        <a v-if="isLoggedIn" class="nav-link px-0 ml-4" href="/logout"><span class="mr-1"><i
                              class="fal fa-lg fa-sign-out"></i></span> {{ $t('logout') }}</a>
                        <a v-else class="nav-link px-0 ml-4" href="/login"><span class="mr-1"><i
                              class="fal fa-lg fa-sign-in"></i></span> {{ $t('login') }}</a>
                      </div>
                      <div class="nav-item d-none d-lg-block">
                        <a v-if="$root.$i18n.locale == 'sv'" class="nav-link px-0 ml-4" href="#" @click.prevent="switchLocale"><span class="mr-1"><i
                              class="fal fa-lg fa-globe"></i></span> English</a>
                        <a v-else class="nav-link px-0 ml-4" href="#" @click.prevent="switchLocale"><span class="mr-1"><i
                              class="fal fa-lg fa-globe"></i></span> Svenska</a>
                      </div>
                      <div v-if="hasListen" class="nav-item">
                        <a class="nav-link px-0 ml-4" href="#" @click.prevent="listen"><span class="mr-1"><i
                              class="fal fa-lg fa-volume"></i></span> {{ $t('listen') }}</a>
                      </div>
                      <div class="nav-item d-none d-lg-block d-xl-none border-left ml-3 pl-3">
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#nav-mobile"
                          aria-controls="nav-mobile" aria-expanded="false" :aria-label="$t('showMenu')"><i
                            class="fal fa-bars"></i> {{ $t('menu') }}</a>
                      </div>
                    </nav>
                  </div>
                </div>
                <lu-top-menu v-if="topmenu" :menu="topmenu"></lu-top-menu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-search-form collapse collapse-lg pb-2 px-2" id="header-search-form">
        <form class="form-inline px-lg-3">
          <div class="input-group input-group-round input-group-sm w-100 flex">
            <input type="search" class="form-control form-control-sm border-right-0" id="header-search-field-mobile">
            <div class="input-group-append">
              <button class="btn btn-primary px-2" type="submit">
                <span class="mr-2">{{ $t('search') }}</span>
                <i class="fal fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  </header>
</template>

<script>
import LuNavbar from './LuNavbar'
import LuTopMenu from './LuTopMenu'

export default {
  name: 'LuHeader',
  props: {
    topmenu: Array,
    navbarmenu: Array,
    hasListen: Boolean,
    hasLogin: Boolean
  },
  data () {
    return {
    }
  },
  components: {
    LuNavbar,
    LuTopMenu
  },
  computed: {
    apiToken () {
      let metaTag = document.querySelector("meta[name='api-token']")
      return metaTag ? metaTag.getAttribute("content") : ''
    },
    isLoggedIn () {
      return this.hasLogin && this.apiToken !== ''
    }
  },
  methods: {
    switchLocale () {
      this.$root.$i18n.locale = this.$root.$i18n.locale == 'sv' ? 'en' : 'sv'
    },
    listen () {
      // function imported from browsealoud. Why such generic name :(
      toggleBar();
    }
  },
  watch: {
    '$route' (to) {
      document.title = this.$t(to.name)
    }
  },
  mounted () {
    if (this.hasListen) {
      window._baMode = " "
      const baScript = document.createElement("script")
      baScript.setAttribute(
        "src",
        "//www.browsealoud.com/plus/scripts/ba.js"
      );
      baScript.async = true
      document.head.appendChild(baScript)
    }
    document.title = this.$t(this.$router.currentRoute.name)
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
