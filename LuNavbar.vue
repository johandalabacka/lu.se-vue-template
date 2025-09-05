<template>
  <div class="bg-dark d-none d-lg-block">
    <div class="container-fluid mw-xl py-0">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark font-size-sm p-0 text-white">
        <div
          id="navbarSupportedContent"
          class="collapse navbar-collapse nmx-2"
        >
          <ul class="navbar-nav flex-row ms-auto">
            <LuNavbarItem
              v-for="item in menu"
              :key="item.id"
              :item="item"
            />
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import LuNavbarItem from './LuNavbarItem.vue'
export default {
  name: 'LuNavbar',
  components: {
    LuNavbarItem,
  },
  props: {
    menu: { type: Array, required: true },
  },
  data () {
    return {
    }
  },
}
</script>
