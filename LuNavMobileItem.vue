<template>
  <li v-if="item.children" class="mobile-nav-item">
    <div class="mobile-nav-container">
      <router-link v-if="item.path" :to="item.path"  class="nav-link" data-dismiss="modal">{{ $t(item.label) }}</router-link>
      <a v-else href="#" @click.prevent="toggleExpanded" class="nav-link">{{ $t(item.label) }}</a>
      <div class="mobile-nav-toggle" :class="[expanded ? '' : 'collapsed']" :data-target="'#sm-' + item.id"
         :aria-expanded="expanded" :aria-controls="'sm-' + item.id" @click="toggleExpanded">
        <span v-show="! expanded" class="collapse-show">
          <fa-icon class="fa-lg" :icon="['fal', 'plus-circle']" />
        </span>
        <span v-show="expanded" class="collapse-hide">
           <fa-icon class="fa-lg" :icon="['fal', 'minus-circle']" />
        </span>
      </div>
    </div>
    <transition name="slide">
      <ul v-show="expanded" class="mobile-nav collapse show" :id="'sm-' + item.id">
        <lu-nav-mobile-item v-for="subItem in item.children" :key="subItem.id" :item="subItem" @link-selected="childSelected"/>
      </ul>
    </transition>
  </li>
  <li v-else-if="item.path" class="mobile-nav-item">
    <router-link :to="item.path" class="nav-link" data-dismiss="modal">
      {{ $t(item.label) }}
    </router-link>
  </li>
  <li v-else class="mobile-nav-item">
    <a :href="item.url" class="nav-link">
      {{ $t(item.label) }}
    </a>
  </li>
</template>

<script>
export default {
  name: 'LuNavMobileItem',
  props: {
    item: Object
  },
  data () {
    return {
      expanded: false
    }
  },
  watch: {
    '$route' (to) {
      // If link is selected emit link-selected to parent
      if (to.path === this.item.path) {
        this.$emit('link-selected')
      }
    }
  },
  methods: {
    toggleExpanded () {
      this.expanded = !this.expanded
    },
    childSelected () {
      this.expanded = true
      // Resend event upwards
      this.$emit('link-selected')
    }
  }
}
</script>

<style scoped>
.slide-enter-active {
   transition-duration: 0.5s;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   transition-duration: 0.5s;
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 500px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>
