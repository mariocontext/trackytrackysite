<template>
  <Layout>
    <BaseHeader screenTitle="Homescreen" />
    <main class="p-4 mt-8 mb-32 container mx-auto" role="main">
      <header>
        <h1 class="sr-only">Homescreen</h1>
        <g-image
          class="mx-auto"
          src="https://via.placeholder.com/1024x400.png?text=Some+Hero+Image"
          width="1024"
        />
      </header>
      <section>
        This is the homescreen
      </section>
    </main>
  </Layout>
</template>


<script>
export default {
  metaInfo: {
    title: "Homescreen"
  }
};
</script>
