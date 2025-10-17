<template>
  <div class="spinner text-center">
    <p class="text-primary">
      <fa-icon
        class="fa-2x fa-spin"
        :icon="['fal', 'circle-notch']"
      />
    </p>
    <p class="font-weight-bold">
      {{ props.text.length > 0 ? props.text : loadingText }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const loadingText = computed(() => {
  return t('spinner.loading')
})
const props = defineProps({
  text: { type: String, default: '' },
})
</script>
