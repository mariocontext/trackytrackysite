<template>
  <div class="font-body">
    <general-styles />
    <main class="p-4 container" role="main">
      <slot />
    </main>
  </div>
</template>

<script>
import GeneralStyles from "../components/BaseGeneralStyles.vue";

export default {
  components: {
    GeneralStyles
  }
};
</script>

<style>
</style>
