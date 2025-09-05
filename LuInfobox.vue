<template>
  <div class="pimcore_area_snippet pimcore_area_content">
    <div class="pimcore_area_infobox pimcore_area_content">
      <div class="bg-sky-50 mb-6 p-5">
        <p class="h3 mt-0 mb-3">
          {{ title }}
        </p>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LuInfobox',
  props: {
    title: { type: String, required: true },
  },
}
</script>
