<template>
  <div class="font-body">
    <general-header />
    <main class="p-4 container" role="main">
      <slot />
    </main>
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
button {
  @apply border border-gray-800 p-4;
}
</style>
