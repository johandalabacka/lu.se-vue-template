<!--
@click.native https://github.com/vuejs/vue-router/issues/800
-->
<template>
  <li v-if="item.children && item.path">
    <router-link
      :to="item.path"
      class="nav-link collapse"
      :class="[expanded ? 'show' : 'collapsed']"
      @click="toggleExpanded"
    >
      <div class="float-end ml-2">
        <fa-icon :icon="['fal', expanded ? 'chevron-down' : 'chevron-right']" />
      </div>
      {{ $t(item.label) }}
    </router-link>
    <ul
      class="nav-accordion collapse"
      :class="[expanded ? 'show': '']"
    >
      <lu-left-menu-item
        v-for="subItem in item.children"
        :key="subItem.id"
        :item="subItem"
        @link-selected="childLinkSelected"
      />
    </ul>
  </li>
  <li v-else-if="item.path">
    <router-link
      :to="item.path"
      class="nav-link"
      @click="$emit('link-selected')"
    >
      {{ $t(item.label) }}
    </router-link>
  </li>
  <li v-else>
    <a
      :href="item.url"
      class="nav-link"
    >
      {{ $t(item.label) }}
    </a>
  </li>
</template>

<script>
export default {
  name: 'LuLeftMenuItem',
  props: {
    item: { type: Object, required: true },
  },
  emits: ['link-selected'],
  data () {
    return {
      expanded: false,
    }
  },
  watch: {
    '$route' (to) {
      // If link is selected emit link-selected to parent
      if (to.path === this.item.path) {
        this.$emit('link-selected')
      }
    },
  },
  mounted () {
    if (this.$route.path === this.item.path) {
      this.$emit('link-selected')
    }
  },
  methods: {
    toggleExpanded () {
      this.expanded = !this.expanded
    },
    childLinkSelected () {
      this.$emit('link-selected')
      this.expanded = true
    },
  },
}
</script>
