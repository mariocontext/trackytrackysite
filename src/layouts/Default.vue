<template>
  <div class="font-body">
    <general-styles />
    <general-header />
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

export default {
  components: {
    GeneralStyles,
    GeneralHeader,
    GeneralFooter
  }
};
</script>

<style>
button {
  @apply border border-gray-800 p-4 sketchy-1;
}
</style>
