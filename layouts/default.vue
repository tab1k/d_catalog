<template>
  <div class="d-flex flex-column flex-lg-row h-lg-100 gap-1">
    <Sidebar/>

    <div class="flex-lg-fill overflow-x-auto ps-lg-1 vstack vh-lg-100 position-relative">
      <Navbar/>

      <div class="flex-fill overflow-y-lg-auto scrollbar bg-body rounded-top-4 rounded-top-start-lg-4 rounded-top-end-lg-0 border-top border-lg shadow-2">



        <nuxt/>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Navbar from '~/components/Navbar.vue'
export default {
  components: {
    Sidebar,
    Navbar,
  }
}
</script>


