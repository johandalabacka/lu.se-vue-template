<template>
  <router-link
    v-if="item.path"
    :to="item.path"
    class="dropdown-item"
  >
    {{ $t(item.label) }}
  </router-link>
  <a
    v-else
    :href="item.url"
    class="dropdown-item"
  >{{ $t(item.label) }}</a>
</template>

<script>
export default {
  name: 'LuDropdownItem',
  props: {
    item: { type: Object, required: true },
  },
  data () {
    return {}
  },
}
</script>
