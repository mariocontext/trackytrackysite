<template>
  <span></span>
</template>

<style>
html,
body {
  font-family: Neucha, sans-serif;
}

h1 {
  @apply text-3xl;
}
h2 {
  @apply text-2xl;
}
h3 {
  @apply text-xl;
}

h4 {
  @apply text-lg;
}

h5 {
  @apply text-base font-semibold;
}

h6 {
  @apply text-sm font-semibold;
}

input {
  @apply sketchy-2;
}

button,
.btn {
  @apply border border-gray-800 p-4 sketchy-1 inline-block;
}

button:hover,
.btn:hover {
  @apply shadow;
}
</style>