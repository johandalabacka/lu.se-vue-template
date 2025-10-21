<template>
  <header class="header nav-undecorated">
    <LuNavbar
      v-if="props.navbarmenu"
      :menu="props.navbarmenu"
    />
    <div class="border-bottom">
      <div class="container-fluid mw-xl">
        <div
          class="row m-0"
          :class="[props.compact ? 'py-2' : 'py-3 py-lg-5']"
        >
          <div class="col p-0">
            <div class="d-flex justify-content-between align-items-center h-100">
              <div class="header-logo header-logo-lu flex-grow-1 flex-lg-grow-0">
                <a
                  :href="props.logoUrl"
                  :title="props.logoTitle"
                >
                  <img
                    v-if="props.logoSrc"
                    :src="props.logoSrc"
                    :alt="props.logoTitle"
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
                    <div
                      v-if="props.hasLogin"
                      class="nav-item"
                    >
                      <a
                        v-if="props.isLoggedIn"
                        class="ms-2 p-1 d-block nav-undecorated"
                        href="#"
                        aria-controls="header-logout"
                        aria-expanded="false"
                        :aria-label="t('luvt.header.logout')"
                        @click.prevent="emit('logout')"
                      >
                        <BAvatar
                          v-if="props.avatar"
                          size="sm"
                          variant="primary"
                          :text="props.avatar"
                        />
                        <fa-icon
                          v-else
                          :icon="['fal', 'sign-out']"
                        />
                        <br>
                        {{ t('luvt.header.logout') }}
                      </a>
                      <a
                        v-else
                        class="ms-2 p-1 d-block nav-undecorated"
                        href="#"
                        aria-controls="header-login"
                        aria-expanded="false"
                        :aria-label="t('luvt.header.login')"
                        @click.prevent="emit('login')"
                      >
                        <fa-icon :icon="['fal', 'sign-in']" />
                        <br>
                        {{ t('luvt.header.login') }}
                      </a>
                    </div>
                    <div
                      v-if="props.hasSearch"
                      class="nav-item"
                    >
                      <a
                        class="ms-2 p-1 d-block nav-undecorated"
                        href="#"
                        data-toggle="collapse"
                        aria-controls="header-search-form"
                        aria-expanded="false"
                        :aria-label="t('luvt.header.show_hide_search')"
                        @click.prevent="toggleSearch"
                      >
                        <fa-icon :icon="['fal', 'search']" />
                        <br>
                        {{ t('luvt.header.search') }}
                      </a>
                    </div>
                    <div class="nav-item">
                      <a
                        class="ms-2 p-1 d-block nav-undecorated"
                        href="#"
                        aria-controls="nav-mobile"
                        aria-expanded="false"
                        :aria-label="t('luvt.header.show_menu')"
                        @click.prevent="showNavMobileMenu"
                      >
                        <fa-icon :icon="['fal', 'bars']" />
                        <br>
                        {{ t('luvt.header.menu') }}
                      </a>
                    </div>
                  </nav>
                  <div class="d-none d-lg-flex flex-column flex-xl-row w-100 justify-content-end">
                    <nav
                      v-if="props.hasSearch"
                      class="nav align-items-center justify-content-end flex-1 mb-3 mb-xl-0"
                    >
                      <div class="nav-item flex-xl-grow-1">
                        <form
                          class="form-inline pe-xl-3"
                          @submit.prevent="search"
                        >
                          <div class="input-group input-group-round input-group-sm w-100 flex">
                            <input
                              id="header-search-field"
                              ref="headerSearchField"
                              v-model="searchField"
                              type="search"
                              class="form-control form-control-sm border-end-0"
                              :placeholder="props.searchPlaceholder"
                            >
                            <div class="input-group-append">
                              <button
                                class="btn btn-primary px-2"
                                type="submit"
                              >
                                <span class="me-2">{{ t('luvt.header.search') }}</span>
                                <fa-icon :icon="['fal', 'search']" />
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </nav>
                    <nav class="nav align-items-center justify-content-end">
                      <div
                        v-if="props.hasLogin"
                        class="nav-item d-none d-lg-block"
                      >
                        <a
                          v-if="props.isLoggedIn"
                          class="nav-link px-0 ms-4"
                          href="#"
                          @click.prevent="emit('logout')"
                        >
                          <span class="me-1">
                            <BAvatar
                              v-if="props.avatar"
                              size="1.8em"
                              variant="primary"
                              :text="props.avatar"
                            />
                            <fa-icon
                              v-else
                              class="fa-lg"
                              :icon="['fal', 'sign-out']"
                            />
                          </span>
                          {{ t('luvt.header.logout') }}
                        </a>
                        <a
                          v-else
                          class="nav-link px-0 ms-4"
                          href="#"
                          @click.prevent="emit('login')"
                        >
                          <span class="me-1">
                            <fa-icon
                              class="fa-lg"
                              :icon="['fal', 'sign-in']"
                            />
                          </span>
                          {{ t('luvt.header.login') }}
                        </a>
                      </div>
                      <div class="nav-item d-none d-lg-block">
                        <a
                          v-if="isSwedish"
                          class="nav-link px-0 ms-4"
                          href="#"
                          @click.prevent="switchLocale"
                        >
                          <span class="me-1">
                            <fa-icon
                              class="fa-lg"
                              :icon="['fal', 'globe']"
                            />
                          </span> English
                        </a>
                        <a
                          v-else
                          class="nav-link px-0 ms-4"
                          href="#"
                          @click.prevent="switchLocale"
                        >
                          <span class="me-1">
                            <fa-icon
                              class="fa-lg"
                              :icon="['fal', 'globe']"
                            />
                          </span> Svenska
                        </a>
                      </div>
                      <div class="nav-item d-none d-lg-block d-xl-none border-start ms-3 ps-3">
                        <a
                          class="nav-link"
                          href="#"
                          aria-controls="nav-mobile"
                          aria-expanded="false"
                          :aria-label="t('luvt.header.show_menu')"
                          @click.prevent="showNavMobileMenu"
                        >
                          <fa-icon :icon="['fal', 'bars']" />
                          {{ t('luvt.header.menu') }}
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
                <LuTopMenu
                  v-if="props.topmenu"
                  :menu="props.topmenu"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <transition name="slide">
        <div
          v-show="! searchCollapsed"
          id="header-search-form"
          class="header-search-form collapse-lg pb-2 px-2"
        >
          <form
            class="form-inline px-lg-3"
            @submit.prevent="search"
          >
            <div class="input-group input-group-round input-group-sm w-100 flex">
              <input
                id="header-search-field-mobile"
                ref="searchFieldMobile"
                v-model="searchField"
                type="search"
                class="form-control form-control-sm border-end-0"
                :placeholder="props.searchPlaceholder"
              >
              <div class="input-group-append">
                <button
                  class="btn btn-primary px-2"
                  type="submit"
                >
                  <span class="me-2">{{ t('luvt.header.search') }}</span>
                  <fa-icon :icon="['fal', 'search']" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </transition>
    </div>
    <LuNavMobileMenu
      ref="navMobileMenu"
      :menu="props.mobilemenu"
    />
    <div style="display: none">
      <!-- bury the button for browsealoud -->
      <div id="__ba_launchpad" />
    </div>
  </header>
</template>

<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import BAvatar from './BAvatar.vue'
import LuNavbar from './LuNavbar.vue'
import LuTopMenu from './LuTopMenu.vue'
import LuNavMobileMenu from './LuNavMobileMenu.vue'

const props = defineProps({
  topmenu: { type: Array, default: null },
  mobilemenu: { type: Array, default: null },
  navbarmenu: { type: Array, default: null },
  hasLogin: { type: Boolean, default: false },
  isLoggedIn: { type: Boolean, default: false },
  avatar: { type: String, default: '' },
  hasSearch: { type: Boolean, default: false },
  emptySearch: { type: Boolean, default: false },
  searchPlaceholder: { type: String, default: '' },
  logoUrl: { type: String, required: true },
  logoTitle: { type: String, required: true },
  logoSrc: { type: String, required: true },
  compact: { type: Boolean, default: false },
})

const emit = defineEmits(['login', 'logout', 'search'])

const route = useRoute()
const router = useRouter()

const { t, locale } = useI18n()

const searchField = ref('')
const searchCollapsed = ref(true)

const navMobileMenu = ref(null)
const searchFieldMobile = ref(null)
const headerSearchField = ref(null)

const isSwedish = computed(() => locale.value === 'sv')

const updateDocumentTitle = () => {
  const current = router.currentRoute.value
  const metaTitle = typeof current.meta?.title === 'string' ? current.meta.title : null
  if (metaTitle) {
    document.title = t(metaTitle)
    return
  }
  const routeName = current.name
  if (typeof routeName === 'string') {
    document.title = t(routeName)
  }
}

watch(
  () => route.fullPath,
  () => {
    updateDocumentTitle()
  },
  { immediate: true },
)

const switchLocale = () => {
  const nextLocale = isSwedish.value ? 'en' : 'sv'
  locale.value = nextLocale
  document.documentElement.lang = nextLocale
  localStorage.setItem('language', nextLocale)
  updateDocumentTitle()
}

const showNavMobileMenu = () => {
  navMobileMenu.value?.show()
}

const toggleSearch = () => {
  searchCollapsed.value = !searchCollapsed.value
  if (!searchCollapsed.value) {
    nextTick(() => {
      searchFieldMobile.value?.focus()
    })
  }
}

const search = () => {
  const value = searchField.value.trim()
  if (!value) {
    return
  }
  emit('search', value)
  if (props.emptySearch) {
    searchField.value = ''
    return
  }
  nextTick(() => {
    searchFieldMobile.value?.select()
    headerSearchField.value?.select()
  })
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
