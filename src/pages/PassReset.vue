<template>
  <SingleScreen>
    <div class="bg-gray-200 p-8 max-w-xl mx-auto md:mt-16">
      <h1 class="text-center py-4">Brand Logo</h1>
      <section class="mx-auto">
        <form action="#" class="flex flex-col items-center">
          <div>
            <h2 class="text-center">
              Password Reset
            </h2>
            <p class="max-w-xs">
              After entering your email address, you'll get an email with a link
              to reset your password
            </p>
            <form action="">
              <label for="email"
                ><span class="block">Email</span>
                <input type="email" name="email" class="w-64" />
              </label>

              <g-link class="btn my-4" to="/actual-reset">Start Reset</g-link>
            </form>

            <g-link class="block my-4" to="/login"
              >Go back to Login page</g-link
            >
          </div>
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
