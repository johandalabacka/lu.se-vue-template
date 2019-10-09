<template>
    <div class="spinner text-center">
      <p class="text-primary"><i class="fal fa-circle-notch fa-2x fa-spin"></i></p>
      <p class="font-weight-bold">{{ text }}</p>
    </div>
</template>

<script>
export default {
  name: 'LuSpinner',
  props: {
    text: String
  }
}
</script>
