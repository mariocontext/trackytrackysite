<template>
  <span></span>
</template>

<style>
html,
body {
  font-family: Neucha, sans-serif;
}

h1 {
  @apply text-4xl py-2;
}

h2 {
  @apply text-3xl py-2;
}

h3 {
  @apply text-2xl py-2;
}

h4 {
  @apply text-xl py-2;
}

h5 {
  @apply text-lg font-semibold py-2;
}

h6 {
  @apply text-base font-semibold py-2;
}

label {
  @apply block mt-4 mb-2 font-semibold;
}

a,
a:link {
  @apply underline;
}
a:hover {
  @apply text-primary;
}

input,
select,
textarea {
  @apply border border-gray-800 sketchy-2 px-4 py-2 text-lg;
}

input[type="submit"] {
  @apply border border-gray-800 p-4 sketchy-1 inline-block p-4 cursor-pointer;
}

button,
.btn {
  @apply border border-b-2 border-gray-800 p-4 sketchy-1 inline-block cursor-pointer;
  @apply no-underline !important;
}

button:hover,
.btn:hover {
  @apply bg-primary text-gray-900;
}

button:disabled {
  @apply cursor-not-allowed opacity-50;
}

th,
tr,
td {
  @apply p-4;
}
</style>