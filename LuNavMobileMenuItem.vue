<template>
  <li
    v-if="item.children"
    class="mobile-nav-item"
  >
    <div class="mobile-nav-container">
      <router-link
        v-if="item.path"
        :to="item.path"
        class="nav-link"
        @click="emit('link-selected')"
      >
        {{ t(item.label) }}
      </router-link>
      <a
        v-else
        href="#"
        class="nav-link"
        @click.prevent="toggleExpanded"
      >{{ t(item.label) }}</a>
      <div
        class="mobile-nav-toggle"
        :class="[expanded ? '' : 'collapsed']"
        :data-target="'#sm-' + item.id"
        :aria-expanded="expanded"
        :aria-controls="'sm-' + item.id"
        @click="toggleExpanded"
      >
        <span
          v-show="!expanded"
          class="collapse-show"
        >
          <fa-icon
            class="fa-lg"
            :icon="['fal', 'plus-circle']"
          />
        </span>
        <span
          v-show="expanded"
          class="collapse-hide"
        >
          <fa-icon
            class="fa-lg"
            :icon="['fal', 'minus-circle']"
          />
        </span>
      </div>
    </div>
    <Transition name="expand">
      <ul
        v-show="expanded"
        :id="'sm-' + props.item.id"
        class="mobile-nav collapse show"
      >
        <lu-nav-mobile-menu-item
          v-for="subItem in props.item.children"
          :key="subItem.id"
          :item="subItem"
          @link-activated="childLinkActivated"
          @link-selected="childLinkSelected"
        />
      </ul>
    </Transition>
  </li>
  <li
    v-else-if="item.path"
    class="mobile-nav-item"
  >
    <router-link
      :to="item.path"
      class="nav-link"
      @click="emit('link-selected')"
    >
      {{ t(item.label) }}
    </router-link>
  </li>
  <li
    v-else
    class="mobile-nav-item"
  >
    <a
      :href="item.url"
      class="nav-link"
    >
      {{ t(item.label) }}
    </a>
  </li>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  item: { type: Object, required: true },
})

const emit = defineEmits(['link-activated', 'link-selected'])

const { t } = useI18n()
const route = useRoute()
const expanded = ref(false)

const toggleExpanded = function () {
  expanded.value = !expanded.value
}

const childLinkSelected = function () {
  emit('link-selected')
}

const childLinkActivated = function () {
  expanded.value = true
  emit('link-activated')
}

watch(
  () => route.path,
  () => {
    if (!props.item.path) {
      return
    }
    if (route.path === props.item.path) {
      emit('link-activated')
    }
  },
  { immediate: true },
)
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s;
  overflow: hidden;
}

.expand-enter-to,
.expand-leave-from
{
  max-height: 500px;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0px;
}

</style>
