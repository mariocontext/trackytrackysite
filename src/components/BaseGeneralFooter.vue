<template>
  <footer class="w-full fixed bottom-0 bg-gray-600 p-4">
    <div
      class="nav-listing flex flex-row justify-around text-white pt-4 w-full"
    >
      <g-link to="/about" class="in-component-navbar-links">
        <span class="material-icons in-component-navbar-icons">stars</span>
        <span>About</span>
      </g-link>
      <g-link to="/faq" class="in-component-navbar-links">
        <span class="material-icons in-component-navbar-icons"
          >access_time</span
        >
        <span>FAQ</span>
      </g-link>
      <g-link to="/sections/sectionone" class="in-component-navbar-links">
        <span class="material-icons in-component-navbar-icons">settings</span>
        <span>Section One</span>
      </g-link>
    </div>
  </footer>
</template>
<style scoped>
.in-component-navbar-links {
  @apply flex flex-col text-white text-center text-xs;
}
.in-component-navbar-icons {
  @apply text-5xl mb-2;
}
</style>