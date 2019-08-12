<template>
    <div class="bg-dark d-none d-lg-block">
      <div class="container-fluid mw-xl py-0">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark font-size-sm p-0 text-white">
          <div class="collapse navbar-collapse nmx-2" id="navbarSupportedContent">
            <ul class="navbar-nav flex-row ml-auto">
              <lu-navbar-item v-for="item in menu" :key="item.id" :item="item" />
            </ul>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>
import LuNavbarItem from './LuNavbarItem'
export default {
  name: 'LuNavbar',
  props: [
    'menu'
  ],
  data () {
    return {
    }
  },
  components: {
    LuNavbarItem
  }
}
</script>
