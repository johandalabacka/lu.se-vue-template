<template>
  <div class="row d-none d-xl-block font-size-xl-lg font-weight-light">
    <ul class="nav justify-content-end nav-header-main flex-nowrap">
      <lu-top-menu-item v-for="(menuItem, index) in menu" :key="menuItem.id" :item="menuItem" :lastItem="index + 1 == menu.length"></lu-top-menu-item>
    </ul>
  </div>
</template>

<script>
import LuTopMenuItem from './LuTopMenuItem'

export default {
  name: 'LuTopMenu',
  props: ['menu'],
  data () {
    return {
    }
  },
  components: {
    LuTopMenuItem
  }
}
</script>
