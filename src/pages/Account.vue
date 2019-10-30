<template>
  <Layout>
    <BaseHeader screenTitle="Account" />
    <main class="p-8 mb-32" role="main">
      <h1>Account</h1>
      <h2>Profile</h2>
      <div class="w-20 bg-gray-500 py-8 text-xs text-center rounded-full">
        Avatar
      </div>
      <section>
        <form action="#">
          <h2 class="mt-8">
            Basic Info
          </h2>
          <div>
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
              ><span class="block">Change Password</span>
              <input type="password" name="pass" class="w-64" />
            </label>

            <g-link to="/" class="btn">Save</g-link>
          </div>
        </form>
      </section>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Account"
  }
};
</script>


<style>
</style>
