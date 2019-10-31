<template>
  <div class="font-body">
    <BaseStyles />
    <div>
      <slot />
    </div>
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
