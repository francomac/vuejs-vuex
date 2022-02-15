<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event created by {{ user.name }}</p>
    <p>There are {{ catLength }} categories</p>
    <ul>
      <li v-for="cat in categories" :key="cat">
        {{ cat }}
      </li>
    </ul>
    <p>First Event is {{ getEventById(1) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    // MAPPING STATE properties

    // userName: state => state.user.name,
    // categories: state => state.categories,
    ...mapState(['user', 'categories']),

    // MAPPING GETTERS

    // catLength() {
    //   return this.$store.getters.catLength
    // },
    // getEvent() {
    //   return this.$store.getters.getEventById
    // },
    ...mapGetters(['catLength', 'getEventById'])
  }
}
</script>

<style>
</style>
