<template>
  <span class="general-header-container">
    <header
      class="sticky top-0 flex justify-between items-center p-4 border bg-white border-gray-600 border-b-2"
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
        <h1 class="text-xl pl-2 font-normal">
          {{ screenTitle }}
        </h1>
      </span>

      <span v-bind:class="[contextTriggerIsActive ? 'visible' : 'invisible']">
        <i
          v-on:click="showcontextmenu = !showcontextmenu"
          class="material-icons cursor-pointer"
          ><span class="text-4xl">more_vert</span></i
        >
      </span>
    </header>
    <transition name="slide">
      <span
        v-show="showdrawer"
        class="general-nav-drawer min-h-screen bg-white shadow-lg w-64 z-10 fixed inline-block h-full mb-32 p-4 overflow-y-auto"
      >
        <g-link to="/" class="no-underline">
          <g-image
            src="https://via.placeholder.com/150.png?text=Logo"
            width="150"
          />
        </g-link>
        <div class="nav-listing flex flex-col flex-start pt-4 mb-32 h-full">
          <g-link to="/" class="in-component-navbar-links">
            <span class="material-icons in-component-navbar-icons">star</span>
            Proto Paths
          </g-link>
          <g-link to="/intro" class="in-component-navbar-links">
            <span class="material-icons in-component-navbar-icons">star</span>
            Intro
          </g-link>
          <g-link to="/login" class="in-component-navbar-links">
            <span class="material-icons in-component-navbar-icons">star</span>
            Login
          </g-link>
          <g-link to="/homescreen" class="in-component-navbar-links">
            <span class="material-icons in-component-navbar-icons">star</span>
            Homescreen
          </g-link>
          <g-link to="/category-list" class="in-component-navbar-links">
            <span class="material-icons in-component-navbar-icons">star</span>
            Category List
          </g-link>
          <g-link to="/details" class="in-component-navbar-links">
            <span class="material-icons in-component-navbar-icons">star</span>
            Detail
          </g-link>
          <g-link to="/informational" class="in-component-navbar-links">
            <span class="material-icons in-component-navbar-icons">star</span>
            Informational
          </g-link>
          <g-link to="/blog/blog" class="in-component-navbar-links">
            <span class="material-icons in-component-navbar-icons">star</span>
            Blog
          </g-link>
          <g-link to="/reference/style-ref/" class="in-component-navbar-links">
            <span class="material-icons in-component-navbar-icons">star</span>
            Style Reference
          </g-link>
        </div>
      </span>
    </transition>
    <transition name="dropin">
      <div
        v-show="showcontextmenu"
        class="contextmenu fixed right-0 top-0 h-auto w-48 bg-white mt-12 mr-2 p-4 flex flex-col items-start shadow-lg z-20"
      >
        <a href="#" class="in-component-context-menu-links">Sort by Date</a>
        <a href="#" class="no-underline text-black p-4">Sort by Type</a>
        <a href="#" class="no-underline text-black p-4">Filter</a>
        <a href="#" class="no-underline text-black p-4">Search</a>
      </div>
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
.dropin-enter-active,
.dropin-leave-active {
  transition: all 0.3s ease-in-out;
}
.dropin-enter,
.dropin-leave-to {
  transform: translateY(-400px);
  opacity: 0;
}
</style>


<script>
export default {
  props: ["screenTitle"],
  data() {
    return {
      showdrawer: false,
      showcontextmenu: false,
      contextTriggerIsActive: true
    };
  }
};
</script>