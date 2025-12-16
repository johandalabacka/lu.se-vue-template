<template>
  <div class="row d-none d-xl-block font-size-xl-lg font-weight-light">
    <ul class="nav justify-content-end nav-header-main flex-nowrap">
      <LuTopMenuItem
        v-for="(menuItem, index) in menu"
        :key="menuItem.id"
        :item="menuItem"
        :last-item="index + 1 == menu.length"
      />
    </ul>
  </div>
</template>

<script setup>
import LuTopMenuItem from './LuTopMenuItem.vue'

defineProps({
  menu: { type: Array, required: true },
})

</script>
