<template>
  <div class="container mx-auto px-4 max-w-6xl">
    <general-header />
    <div role="main">
      <slot />
    </div>
    <general-footer />
  </div>
</template>

<script>
import GeneralHeader from "../components/GeneralHeader.vue";
import GeneralFooter from "../components/GeneralFooter.vue";

export default {
  components: {
    GeneralHeader,
    GeneralFooter
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
