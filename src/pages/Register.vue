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
              <g-image
                class="rounded-full"
                src="https://via.placeholder.com/75x75.png?text=Google"
                width="75"
                alt="Sign/Register with Google"
              />
            </li>
            <li class="">
              <g-image
                class="rounded-full"
                src="https://via.placeholder.com/75x75.png?text=Twitter"
                width="75"
                alt="Sign/Register with Twitter"
              />
            </li>
            <li>
              <g-image
                class="rounded-full"
                src="https://via.placeholder.com/75x75.png?text=Github"
                width="75"
                alt="Sign/Register with Github"
              />
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
            <label for="pronoun"
              ><span class="block">Preferred Pronoun</span>
              <select name="pronoun" class="w-64">
                <option value="they_them">They/Them</option>
                <option value="he_him">He/Him</option>
                <option value="she_her">She/Her</option>
              </select>
            </label>
            <label for="first_name"
              ><span class="block">First name</span>
              <input type="text" name="first_name" class="w-64" />
            </label>
            <label for="last_name"
              ><span class="block">Last name</span>
              <input type="text" name="last_name" class="w-64" />
            </label>
            <label for="email"
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
  @apply rounded-full;
}
</style>

<script>
export default {
  metaInfo: {
    title: "Register"
  }
};
</script>
