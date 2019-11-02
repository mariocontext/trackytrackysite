<template>
  <span></span>
</template>

<style>
html,
body {
  font-family: Neucha, sans-serif;
}

p {
  @apply leading-relaxed mb-4;
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

main a,
main a:link {
  @apply underline;
}
a:hover {
  @apply text-primary;
}

button,
.button,
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

input,
select,
textarea {
  @apply border border-gray-800 sketchy-2 px-4 py-2 text-lg;
}

input[type="submit"] {
  @apply border border-gray-800 p-4 sketchy-1 inline-block p-4 cursor-pointer;
}

label {
  @apply block mt-4 mb-2 font-semibold;
}

/* accessible custom checkboxes */

.c-checkbox__label {
  @apply cursor-pointer;
}
.c-checkbox__label:after {
  content: "";
  @apply inline-block align-middle w-6 h-6 border-2 border-gray-500 ml-4 rounded cursor-pointer;
}

.c-checkbox input:focus + .c-checkbox__label {
  outline: dashed 2px lightgrey;
  outline-offset: 5px;
}

.c-checkbox input:checked + .c-checkbox__label:after {
  @apply border-gray-800;
  background: url("/images/checkmark.svg") center/12px no-repeat;
}

.c-checkbox input:focus:not(:focus-visible) {
  outline: none;
}

/* accessible custom radios */

.c-radio__label {
  @apply cursor-pointer;
}

.c-radio__label:after {
  content: "";
  @apply inline-block align-middle w-6 h-6 border-2 border-gray-600 ml-2 mr-4 rounded-full cursor-pointer;
}

.c-radio input:focus + .c-radio__label {
  outline: dashed 2px lightgrey;
  outline-offset: 5px;
}

.c-radio input:checked + .c-radio__label:after {
  @apply border-gray-600 border-4 bg-gray-900 rounded-full;
}

.c-radio input:focus:not(:focus-visible) {
  outline: none;
}

/* accessible custom toggle which is really a checkbox */

.c-toggle__label {
  @apply relative cursor-pointer;
}
.c-toggle__label:before {
  content: "";
  @apply inline-block align-middle w-12 h-6 border-2 border-gray-600 ml-2 mr-4 rounded-full cursor-pointer;
}

.c-toggle__label:after {
  content: "";
  @apply inline-block align-middle w-6 h-6 border-2 border-gray-600 ml-2 mr-4 rounded-full cursor-pointer absolute left-0;
}

.c-toggle input:focus + .c-toggle__label {
  outline: dashed 2px lightgrey;
  outline-offset: 5px;
}

.c-toggle input:checked + .c-toggle__label:before {
  @apply border-gray-600 border-2 bg-gray-400 rounded-full;
}

.c-toggle input:checked + .c-toggle__label:after {
  @apply bg-gray-700 border-0;
  left: 1.5rem;
  transition: all 0.2s ease-out;
}

.c-toggle input:not(:checked) + .c-toggle__label:after {
  transition: all 0.2s ease-in;
}

.c-toggle input:focus:not(:focus-visible) {
  outline: none;
}

/* pure css tab styling */

/* not sure how accessible these are */

.c-tabs {
  @apply relative;
}

.c-tab__label {
  @apply inline-block cursor-pointer mr-4;
}

.tab__content {
  display: none;
}

.c-tabs input:checked + .c-tab__label {
  @apply border-b-2 mb-4 border-gray-800;
}

.tab__trigger {
  @apply inline-block;
}

.c-tabs input.tab-1:checked ~ .tab__content_area .tab__content.content-1 {
  display: block;
}

.c-tabs input.tab-2:checked ~ .tab__content_area .tab__content.content-2 {
  display: block;
}

.c-tabs input.tab-3:checked ~ .tab__content_area .tab__content.content-3 {
  display: block;
}

.c-tabs input:focus + .c-tab__label {
  outline: dashed 2px lightgrey;
  outline-offset: 5px;
}

.c-tabs input:focus:not(:focus-visible) {
  outline: none;
}

/* videos */

.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>