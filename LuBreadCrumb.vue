<template>
  <div class="container pt-2 pt-lg-3 ">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb m-0 p-0 mb-0 font-size-sm  bg-transparent">
        <li
          v-for="part in partsButLast"
          :key="part.path"
          class="breadcrumb-item text-truncate mb-0"
        >
          <router-link :to="part.path">
            {{ part.label }}
          </router-link>
        </li>
        <li
          class="breadcrumb-item text-truncate mb-0 active"
          aria-current="page"
        >
          {{ partsLast.label }}
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const parts = ref([])

const partsButLast = computed(() => {
  if (!parts.value.length) {
    return []
  }
  return parts.value.slice(0, -1)
})

const partsLast = computed(() => {
  if (!parts.value.length) {
    return { label: '' }
  }
  return parts.value[parts.value.length - 1]
})

const getLabel = (path) => {
  const matchingRoute = router.getRoutes().find(r => r.path === path)
  if (!matchingRoute) {
    return path
  }
  const routeName = matchingRoute.name
  if (typeof routeName === 'string') {
    return t(routeName)
  }
  return path
}

const setPath = (path) => {
  const paths = [{ path: '/', label: getLabel('/') }]
  let accumulatedPath = ''
  path.split('/').forEach(segment => {
    if (!segment) { return }
    accumulatedPath += `/${segment}`
    paths.push({ path: accumulatedPath, label: getLabel(accumulatedPath) })
  })
  parts.value = paths
}

watch(
  () => route.path,
  (path) => {
    setPath(path)
  },
  { immediate: true },
)
</script>
