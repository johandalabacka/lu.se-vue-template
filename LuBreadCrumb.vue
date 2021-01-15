<template>
  <div class="container pt-2 pt-lg-3 ">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb m-0 p-0 mb-0 font-size-sm  bg-transparent">
        <li v-for="part in partsButLast" :key="part.path" class="breadcrumb-item text-truncate mb-0">
          <router-link :to="part.path">
            {{ part.label }}
          </router-link>
        </li>
        <li class="breadcrumb-item text-truncate mb-0 active" aria-current="page">
          {{ partsLast.label }}
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'LuBreadCrumb',
  data () {
    return {
      parts: []
    }
  },
  computed: {
    partsButLast () {
      if (this.parts.length === 0) {
        return []
      }
      return this.parts.slice(0, -1)
    },
    partsLast () {
      if (this.parts.length === 0) {
        return { label: '' }
      }
      return this.parts[this.parts.length - 1]
    }
  },
  watch: {
    '$route' (to) {
      this.setPath(to.path)
    }
  },
  mounted () {
    this.setPath(this.$route.path)
  },
  methods: {
    getLabel (path) {
      const route = this.$router.options.routes.find(r => r.path === path)
      if (!route) {
        return path
      }
      if (this.$t !== undefined) {
        return this.$t(route.name)
      }
      return route.name
    },
    setPath (path) {
      const paths = [{ path: '/', label: this.getLabel('/') }]
      let accumulatedPath = ''
      path.split('/').forEach(element => {
        if (element === '') { return }
        accumulatedPath += '/' + element
        paths.push({ path: accumulatedPath, label: this.getLabel(accumulatedPath) })
      })
      this.parts = paths
    }
  }
}
</script>
