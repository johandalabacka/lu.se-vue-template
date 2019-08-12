<template>
  <div class="modal fade" id="nav-mobile" tabindex="-1" role="dialog" aria-labelledby="nav-mobile-label"
    aria-hidden="true">
    <div class="modal-dialog my-0 mx-auto" role="document">
      <div class="modal-content border-0 rounded-0">
        <nav class="nav border-bottom p-3 flex-row justify-content-between align-items-center sticky-top bg-white">
          <div id="nav-mobile-label" class="h3 m-0"><span class="sr-only">Lunds universitet</span>
          </div>
          <button type="button" class="border-0 bg-transparent cursor-pointer lh-0 p-2 nm-2" data-dismiss="modal"
            aria-controls="mobileMenu" aria-expanded="false" aria-label="Dölj meny">
            <span aria-hidden="true"><i class="fal fa-times fa-lg"></i></span>
          </button>
        </nav>
        <ul class="mobile-nav mobile-nav-root border-0 nav-collapse font-size-sm nav-undecorated">
          <lu-nav-mobile-item v-for="item in menu" :key="item.id" :item="item"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LuNavMobileItem from './LuNavMobileItem'

export default {
  name: 'LuNavMobile',
  props: [
    'menu'
  ],
  data () {
    return {
    }
  },
  components: {
    LuNavMobileItem
  }
}
</script>
