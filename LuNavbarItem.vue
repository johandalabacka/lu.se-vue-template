<template>
    <li v-if="! item.children" class="nav-item">
      <router-link v-if="item.path" :to="item.path" class="nav-link px-3">{{ $t(item.label) }}</router-link>
      <a v-else class="nav-link px-3" :href="item.url">{{ $t(item.label) }}</a>
    </li>
    <li v-else class="nav-item dropdown dropdown-hover">
      <router-link v-if="item.path" :to="item.path" class="nav-link dropdown-toggle px-3">
        {{ $t(item.label) }}  &nbsp;<i class="fal fa-chevron-down"></i></router-link>
      <a v-else class="nav-link dropdown-toggle px-3" :href="item.url" id="sm-lu-fakulteter"
        aria-haspopup="true">
        {{ $(item.label) }} &nbsp;<i class="fal fa-chevron-down"></i>
      </a>
      <div class="dropdown-menu dropdown-menu-right text-primary" aria-labelledby="sm-lu-fakulteter">
        <lu-dropdown-item v-for="subItem in item.children" :key="subItem.id" :item="subItem"/>
      </div>
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
