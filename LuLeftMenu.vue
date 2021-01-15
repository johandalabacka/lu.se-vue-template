<template>
  <div class="d-none d-xl-block col-xl-3 collapse">
    <ul class="nav-accordion nav-collapse nav-undecorated">
      <lu-left-menu-item v-for="item in menu" :key="item.id" :item="item" />
    </ul>
  </div>
</template>

<script>
import LuLeftMenuItem from './LuLeftMenuItem'

export default {
  name: 'LuLeftMenu',
  components: {
    LuLeftMenuItem
  },
  props: {
    menu: { type: Array, required: true }
  },
  data () {
    return {
    }
  }
}
</script>
