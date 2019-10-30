<template>
  <SingleScreen>
    <div class="bg-gray-200 p-8 max-w-xl mx-auto md:mt-16">
      <h1 class="text-center py-4">Brand Logo</h1>
      <section class="flex flex-col items-center">
        <h2 class="text-center py-4">
          Sign in / Register
        </h2>
        <div class="bg-gray-300">
          <ul class="flex flex-row justify-around">
            <li class="w-32 bg-gray-500 p-8 text-center mr-2">
              <span class="material-icons in-component-navbar-icons"
                >google</span
              >
              <span class="block">Google</span>
            </li>
            <li class="w-32 bg-gray-500 p-8 text-center mr-2">
              <span class="material-icons in-component-navbar-icons"
                >twitter</span
              >
              <span class="block">Twitter</span>
            </li>
            <li class="w-32 bg-gray-500 p-8 text-center ml-2">
              <span class="material-icons in-component-navbar-icons"
                >github</span
              >
              <span class="block">Github</span>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <form action="#">
          <label for="username" class="block"
            >Username
            <input type="text" name="username" />
          </label>
          <label for="password" class="block"
            >Password
            <input type="password" name="pass" />
          </label>

          <g-link class="btn mt-4" to="/homescreen">
            Login
          </g-link>
        </form>
      </section>
    </div>
  </SingleScreen>
</template>

<script>
export default {
  metaInfo: {
    title: "Login"
  }
};
</script>
