<template>
  <div class="container mx-auto px-4 max-w-6xl">
    <general-header />
    <general-sidebar />
    <div role="main">
      <slot />
    </div>
    <general-footer />
  </div>
</template>

<script>
import GeneralHeader from "../components/BaseGeneralHeader.vue";
import GeneralFooter from "../components/BaseGeneralFooter.vue";
import GeneralSidebar from "../components/BaseGeneralSidebar.vue";

export default {
  components: {
    GeneralHeader,
    GeneralFooter,
    GeneralSidebar
  }
};
</script>

<style>
</style>
