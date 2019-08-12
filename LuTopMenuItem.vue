<template>
  <li v-if="item.children" class="nav-item dropdown dropdown-hover ">
    <router-link v-if="item.path" :to="item.path" class="nav-link text-nowrap dropdown-toggle " id="dropdown-studera"
      aria-haspopup="true">{{ item.label }}</router-link>
    <a v-else :href="item.url" class="nav-link text-nowrap dropdown-toggle " id="dropdown-studera"
      aria-haspopup="true">{{ item.label }}</a>
    <div class="dropdown-menu font-size-base" aria-labelledby="dropdown-studera">
      <lu-dropdown-item v-for="subMenuItem in item.children" :key="subMenuItem.id" :item="subMenuItem"/>
    </div>
  </li>
  <li v-else class="nav-item">
    <router-link v-if="item.path" :to="item.path" class="nav-link text-nowrap" id="dropdown-start"
      aria-haspopup="true">{{ item.label }}</router-link>
    <a v-else :href="item.url" class="nav-link text-nowrap" id="dropdown-start" aria-haspopup="true">{{ item.label }}</a>
  </li>
</template>

<script>
import LuDropdownItem from './LuDropdownItem'

export default {
  name: 'LuTopMenuItem',
  props: ['item'],
  data () {
    return {
    }
  },
  components: {
    LuDropdownItem
  }
}
</script>
