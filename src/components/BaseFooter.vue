<template>
  <footer
    class="w-full fixed bottom-0 border border-gray-600 border-t-2 bg-white z-10 xl:hidden "
  >
    <div class="nav-listing flex flex-row justify-around w-full">
      <g-link to="/homescreen" class="in-component-navbar-links">
        <span class="material-icons in-component-navbar-icons">stars</span>
        <span>Home</span>
      </g-link>
      <g-link to="/informational" class="in-component-navbar-links">
        <span class="material-icons in-component-navbar-icons">stars</span>
        <span>Info</span>
      </g-link>
      <g-link to="/account" class="in-component-navbar-links">
        <span class="material-icons in-component-navbar-icons">stars</span>
        <span>Account</span>
      </g-link>
    </div>
  </footer>
</template>
<style scoped>
.in-component-navbar-links {
  @apply flex flex-col text-gray-800 text-center text-xs;
}
.in-component-navbar-icons {
  @apply text-5xl mb-2;
}
</style>