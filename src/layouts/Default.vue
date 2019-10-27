<template>
  <div>
    <general-header />
    <div class="p-4 container" role="main">
      <slot />
    </div>
    <general-footer />
  </div>
</template>

<script>
import GeneralHeader from "../components/BaseGeneralHeader.vue";
import GeneralFooter from "../components/BaseGeneralFooter.vue";

export default {
  components: {
    GeneralHeader,
    GeneralFooter
  }
};
</script>

<style>
</style>
