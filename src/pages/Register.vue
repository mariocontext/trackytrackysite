<template>
  <SingleScreen>
    <div class="bg-gray-200 p-8 max-w-xl mx-auto md:mt-16">
      <h1 class="text-center py-4">Brand Logo</h1>
      <section>
        <h2 class="text-center py-4">
          Register
        </h2>
        <div>
          <ul class="single-signon md:w-64 md:mx-auto">
            <li>
              Google
            </li>
            <li class="">
              Twitter
            </li>
            <li>
              Github
            </li>
          </ul>
        </div>
      </section>
      <section class="mx-auto">
        <form action="#">
          <h2 class="mt-8 text-center">
            Create an Account
          </h2>
          <div class="sm:w-1/2 mx-auto">
            <label for="username"
              ><span class="block">Email</span>
              <input type="email" name="email" class="w-64" />
            </label>
            <label for="password"
              ><span class="block">Password</span>
              <input type="password" name="pass" class="w-64" />
            </label>

            <g-link class="btn mt-4 block" to="/homescreen">
              Create Account
            </g-link>
            <g-link class="mt-8 block" to="/pass-reset">
              Forgot your Password? Reset it here
            </g-link>
            <g-link class="mt-4 block" to="/login">
              Already have an account? Login here
            </g-link>
          </div>
        </form>
      </section>
    </div>
  </SingleScreen>
</template>

<style scoped>
.single-signon {
  @apply flex flex-row justify-between;
}
.single-signon li {
  @apply w-20 bg-gray-500 py-8 text-xs text-center rounded-full;
}
</style>

<script>
export default {
  metaInfo: {
    title: "Register"
  }
};
</script>
