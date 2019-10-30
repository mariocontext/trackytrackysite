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
              Enter a strong password (minimum 8 characters, uppercase,
              lowercase, and at least one number and special characters like
              #,!,%) Or use a Password manager like
              <a href="https://1password.com/" target="_blank">1Password </a> to
              generate and track your passwords.
            </p>
            <form action="">
              <label for="password"
                ><span class="block">Email</span>
                <input type="password" name="password" class="w-64" />
              </label>

              <g-link class="btn my-4" to="/login">Reset Password</g-link>
            </form>
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
