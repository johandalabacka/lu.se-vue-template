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
        @click="$emit('link-selected')"
      >
        {{ $t(item.label) }}
      </router-link>
      <a
        v-else
        href="#"
        class="nav-link"
        @click.prevent="toggleExpanded"
      >{{ $t(item.label) }}</a>
      <div
        class="mobile-nav-toggle"
        :class="[expanded ? '' : 'collapsed']"
        :data-target="'#sm-' + item.id"
        :aria-expanded="expanded"
        :aria-controls="'sm-' + item.id"
        @click="toggleExpanded"
      >
        <span
          v-show="! expanded"
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
        :id="'sm-' + item.id"
        class="mobile-nav collapse show"
      >
        <lu-nav-mobile-menu-item
          v-for="subItem in item.children"
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
      @click="$emit('link-selected')"
    >
      {{ $t(item.label) }}
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
      {{ $t(item.label) }}
    </a>
  </li>
</template>

<script>
export default {
  name: 'LuNavMobileMenuItem',
  props: {
    item: { type: Object, required: true },
  },
  emits: ['link-activated', 'link-selected'],
  data () {
    return {
      expanded: false,
    }
  },
  watch: {
    '$route' (to) {
      if (this.$route.path === this.item.path) {
        this.$emit('link-activated')
      }
    },
  },
  mounted () {
    if (this.$route.path === this.item.path) {
      this.$emit('link-activated')
    }
  },
  methods: {
    toggleExpanded () {
      this.expanded = !this.expanded
    },
    childLinkSelected () {
      // Resend event upwards
      this.$emit('link-selected')
    },
    childLinkActivated () {
      this.expanded = true
      // Resend event upwards
      this.$emit('link-activated')
    },
  },
}
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
