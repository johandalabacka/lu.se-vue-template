<template>
  <li v-if="! item.children" class="nav-item">
    <router-link v-if="item.path" :to="item.path" class="nav-link px-3">
      {{ $t(item.label) }}
    </router-link>
    <a v-else class="nav-link px-3" :href="item.url">{{ $t(item.label) }}</a>
  </li>
  <li v-else class="nav-item dropdown dropdown-hover">
    <router-link v-if="item.path" :to="item.path" class="nav-link dropdown-toggle px-3">
      {{ $t(item.label) }}  &nbsp;<fa-icon :icon="['fal', 'chevron-down']" />
    </router-link>
    <a
      v-else class="nav-link dropdown-toggle px-3" :href="item.url"
      aria-haspopup="true"
    >
      {{ $t(item.label) }} &nbsp;<fa-icon :icon="['fal', 'chevron-down']" />
    </a>
    <div class="dropdown-menu dropdown-menu-end text-primary">
      <LuDropdownItem v-for="subItem in item.children" :key="subItem.id" :item="subItem" />
    </div>
  </li>
</template>

<script>
import LuDropdownItem from './LuDropdownItem.vue'

export default {
  name: 'LuNavbarItem',
  components: {
    LuDropdownItem
  },
  props: {
    item: { type: Object, required: true }
  },
  data () {
    return {
    }
  }
}
</script>
