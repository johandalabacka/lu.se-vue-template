<template>
  <div class="d-none d-xl-block col-xl-3 collapse">
    <ul class="nav-accordion nav-collapse nav-undecorated">
      <LuLeftMenuItem
        v-for="item in props.menu"
        :key="item.id"
        :item="item"
      />
    </ul>
  </div>
</template>

<script setup>
import LuLeftMenuItem from './LuLeftMenuItem.vue'

const props = defineProps({
  menu: { type: Array, required: true },
})

</script>
