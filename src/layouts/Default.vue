<template>
  <div class="container mx-auto px-4 max-w-6xl">
    <header class="flex flex-row max-w-xl space-around py-2">
      <strong class="inline-block">
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/faq/">FAQ</g-link>
      </nav>
    </header>
    <div role="main">
      <slot />
    </div>
    <footer role="banner">
      <p>My copyright info goes here</p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
