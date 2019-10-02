<template>
  <div>
    <h3>Company Index</h3>
    <p>{{ company }}</p>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'

export default {
  computed: {
    company() {
      return this.$store.companies
    }
  }
}
</script>
