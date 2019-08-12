<template>
  <router-link v-if="item.path" :to="item.path" class="dropdown-item">{{ item.label }}</router-link>
  <a v-else :href="item.url" class="dropdown-item">{{ item.label }}</a>
</template>

<script>
export default {
  name: 'LuDropdownItem',
  props: ['item'],
  data () {
    return {}
  }
}
</script>
