<template>
  <div class="container pt-2 pt-lg-3 ">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb m-0 p-0 mb-0 font-size-sm  bg-transparent">
        <li v-for="part in parts" :key="part.path" class="breadcrumb-item text-truncate mb-0">
          <router-link :to="part.path">{{ part.label }}</router-link>
        </li>
        <!-- <li class="breadcrumb-item text-truncate mb-0"><a href="/static/lumall/#.html">Start</a></li>
        <li class="breadcrumb-item text-truncate mb-0 active" aria-current="page">Företagsekonomi</li> -->
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
  watch: {
    '$route' (to) {
      this.setPath(to.path)
    }
  },
  methods: {
    getLabel (path) {
      let route = this.$router.options.routes.find(r => r.path === path)
      if (!route) {
        return path
      }
      if (this.$t !== undefined) {
        return this.$t(route.name)
      }
      return route.name
    },
    setPath (path) {
      let paths = [{path: '/', label: this.getLabel('/')}]
      let accumulatedPath = ''
      path.split('/').forEach(element => {
        if (element === '') { return }
        accumulatedPath += '/' + element
        paths.push({path: accumulatedPath, label: this.getLabel(accumulatedPath)})
      })
      this.parts = paths
    }
  },
  mounted () {
    this.setPath(this.$route.path)
  }
}
</script>
