<template>
  <li v-if="item.children" class="nav-item dropdown dropdown-hover ">
    <router-link v-if="item.path" id="dropdown-studera" :to="item.path" class="nav-link text-nowrap dropdown-toggle "
                 aria-haspopup="true"
    >
      {{ $t(item.label) }}
    </router-link>
    <a v-else id="dropdown-studera" :href="item.url" class="nav-link text-nowrap dropdown-toggle "
       aria-haspopup="true"
    >{{ $t(item.label) }}</a>
    <div class="dropdown-menu font-size-base" :class="[lastItem ? 'dropdown-menu-right' : '']" aria-labelledby="dropdown-studera">
      <lu-dropdown-item v-for="subMenuItem in item.children" :key="subMenuItem.id" :item="subMenuItem" />
    </div>
  </li>
  <li v-else class="nav-item">
    <router-link v-if="item.path" id="dropdown-start" :to="item.path" class="nav-link text-nowrap"
                 aria-haspopup="true"
    >
      {{ $t(item.label) }}
    </router-link>
    <a v-else id="dropdown-start" :href="item.url" class="nav-link text-nowrap" aria-haspopup="true">{{ $t(item.label) }}</a>
  </li>
</template>

<script>
import LuDropdownItem from './LuDropdownItem'

export default {
  name: 'LuTopMenuItem',
  components: {
    LuDropdownItem
  },
  props: {
    item: { type: Object, required: true },
    lastItem: Boolean
  },
  data () {
    return {
    }
  }
}
</script>
