<template>
  <div class="font-body">
    <general-styles />
    <general-header />
    <general-sidebar />
    <main class="p-4 container" role="main">
      <slot />
    </main>
    <general-footer />
  </div>
</template>

<script>
import GeneralStyles from "../components/BaseGeneralStyles.vue";
import GeneralHeader from "../components/BaseGeneralHeader.vue";
import GeneralFooter from "../components/BaseGeneralFooter.vue";
import GeneralSidebar from "../components/BaseGeneralSidebar.vue";

export default {
  components: {
    GeneralStyles,
    GeneralHeader,
    GeneralFooter,
    GeneralSidebar
  }
};
</script>

<style>
</style>
