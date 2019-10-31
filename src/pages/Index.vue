<template>
  <Layout>
    <BaseHeader screenTitle="Welcome" />
    <main class="p-4 mb-32" role="main">
      <h1>Prototyping Links</h1>
      <p>
        This is the main page which leads to various prototyping paths.
      </p>
      <g-link to="/homescreen" class="btn">Homescreen</g-link>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>


<style>
</style>
