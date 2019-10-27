<template>
  <div class="font-body">
    <BaseStyles />
    <BaseHeader />
    <main class="p-4 container" role="main">
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>

<script>
export default {
  props: {
    contextTriggerIsActive: Boolean
  },
  data() {
    return {
      showdrawer: false,
      showcontextmenu: false
    };
  }
};
</script>

<style>
</style>
