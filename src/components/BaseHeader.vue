<template>
  <span class="general-header-container">
    <header
      class="sticky top-0 flex justify-between items-center p-4 border bg-white border-gray-600 border-b-2 z-10"
    >
      <!--
        We may want the header to disappear when content is scrolled down and reappear when scrolled up
      -->
      <span>
        <i
          v-on:click="showdrawer = !showdrawer"
          class="material-icons cursor-pointer"
          ><span class="text-4xl">menu</span></i
        >
      </span>

      <span>
        <h1 class="text-xl pl-2 font-normal truncate">
          {{ screenTitle }}
        </h1>
      </span>
    </header>
    <transition name="slide">
      <span
        v-show="showdrawer"
        class="general-nav-drawer min-h-screen bg-white shadow-lg w-64 z-10 fixed inline-block h-full mb-32 p-4 overflow-y-auto"
      >
        <g-link to="/" class="no-underline">
          <g-image
            class="rounded-full"
            src="https://via.placeholder.com/100.png?text=Logo"
            width="100"
          />
        </g-link>
        <div class="nav-listing flex flex-col flex-start pt-4 mb-32 h-full">
          <g-link to="/" class="in-component-navbar-links">
            <span class="material-icons in-component-navbar-icons">star</span>
            Home
          </g-link>
          <g-link to="/reference/style-ref/" class="in-component-navbar-links">
            <span class="material-icons in-component-navbar-icons">star</span>
            Style Reference
          </g-link>
        </div>
      </span>
    </transition>
  </span>
</template>

<style>
/* In Component Styles */
.in-component-navbar-links {
  @apply font-semibold no-underline py-4;
}
.in-component-navbar-links:hover {
  @apply text-secondary;
}
.in-component-navbar-icons {
  position: relative;
  top: 5px;
}
.in-component-context-menu-links {
  @apply no-underline text-black p-4;
}
/* transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-enter, .slide-leave-to
/* .slide-leave-active below version 2.1.8 */ {
  transform: translateX(-256px);
}
</style>


<script>
export default {
  props: ["screenTitle"],
  data() {
    return {
      showdrawer: false,
      contextTriggerIsActive: true
    };
  }
};
</script>