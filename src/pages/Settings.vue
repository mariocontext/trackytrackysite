<template>
  <Layout>
    <BaseHeader screenTitle="Settings" />
    <main class="p-8 mb-32 container md:mx-auto" role="main">
      <h1>Settings</h1>
      <section>
        <h2>Section One</h2>
        <form action="#">
          <div>
            <label for="language"
              ><span class="block">Preffered Language</span>
              <select name="language" id="language" class="w-64">
                <option value="they_them">Esperanto</option>
                <option value="he_him">English</option>
                <option value="she_her">Spanish</option>
                <option value="she_her">Chinese</option>
                <option value="she_her">Russian</option>
                <option value="she_her">French</option>
                <option value="she_her">Portugese</option>
                <option value="she_her">Arabic</option>
              </select>
            </label>
            <label for="timezone"
              ><span class="block">Timezone</span>
              <select id="timezone" name="timezone" class="w-64">
                <option value="PST">PST</option>
                <option value="EST">EST</option>
                <option value="CST">CST</option>
              </select>
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
    title: "Settings"
  }
};
</script>


<style>
</style>
