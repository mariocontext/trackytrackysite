<template>
  <div class="font-body">
    <general-header />
    <general-sidebar />
    <main class="p-4 container" role="main">
      <slot />
    </main>
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
