<template>
  <div class="spinner text-center">
    <p class="text-primary">
      <fa-icon class="fa-2x fa-spin" :icon="['fal', 'circle-notch']" />
    </p>
    <p class="font-weight-bold">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'LuSpinner',
  props: {
    text: { type: String, default: '' }
  }
}
</script>
