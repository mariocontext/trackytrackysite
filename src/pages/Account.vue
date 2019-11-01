<template>
  <Layout>
    <BaseHeader screenTitle="Account" />
    <main class="p-8 mb-32 container md:mx-auto" role="main">
      <h1>Account</h1>
      <h2>Profile</h2>
      <g-image
        class="rounded-full"
        src="https://via.placeholder.com/150x150.png?text=Avatar"
        width="150"
      />
      <section>
        <form action="#">
          <h2 class="mt-8">
            Basic Info
          </h2>
          <div>
            <label for="pronoun"
              ><span class="block">Preferred Pronoun</span>
              <select id="pronoun" name="pronoun" class="w-64">
                <option value="they_them">They/Them</option>
                <option value="he_him">He/Him</option>
                <option value="she_her">She/Her</option>
              </select>
            </label>
            <label for="first_name"
              ><span class="block">First name</span>
              <input
                type="text"
                id="first_name"
                name="first_name"
                class="w-64"
              />
            </label>
            <label for="last_name"
              ><span class="block">Last name</span>
              <input type="text" id="last_name" name="last_name" class="w-64" />
            </label>
            <label for="email"
              ><span class="block">Email</span>
              <input type="email" id="email" name="email" class="w-64" />
            </label>
            <label for="password"
              ><span class="block">Change Password</span>
              <input type="password" id="pass" name="pass" class="w-64" />
            </label>

            <g-link to="/" class="btn mt-4">Save</g-link>
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
