<!--
@click.native https://github.com/vuejs/vue-router/issues/800
-->
<template>
  <li v-if="props.item.children && props.item.path">
    <router-link
      :to="props.item.path"
      class="nav-link collapse"
      :class="[expanded ? 'show' : 'collapsed']"
      @click="toggleExpanded"
    >
      <div class="float-end ml-2">
        <fa-icon :icon="['fal', expanded ? 'chevron-down' : 'chevron-right']" />
      </div>
      {{ t(props.item.label) }}
    </router-link>
    <ul
      class="nav-accordion collapse"
      :class="[expanded ? 'show': '']"
    >
      <lu-left-menu-item
        v-for="subItem in props.item.children"
        :key="subItem.id"
        :item="subItem"
        @link-selected="childLinkSelected"
      />
    </ul>
  </li>
  <li v-else-if="props.item.path">
    <router-link
      :to="props.item.path"
      class="nav-link"
      @click="emit('link-selected')"
    >
      {{ t(props.item.label) }}
    </router-link>
  </li>
  <li v-else>
    <a
      :href="props.item.url"
      class="nav-link"
    >
      {{ t(props.item.label) }}
    </a>
  </li>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  item: { type: Object, required: true },
})

const emit = defineEmits(['link-selected'])

const expanded = ref(false)

const route = useRoute()
const { t } = useI18n({ useScope: 'global' })

const emitIfActive = (path) => {
  const targetPath = props.item?.path
  if (targetPath && path === targetPath) {
    emit('link-selected')
  }
}

const toggleExpanded = () => {
  expanded.value = !expanded.value
}

const childLinkSelected = () => {
  emit('link-selected')
  expanded.value = true
}

watch(() => route.path, emitIfActive)

onMounted(() => {
  emitIfActive(route.path)
})
</script>
