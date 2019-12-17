<template>
  <Layout>
    <BaseHeader screenTitle="Details" />
    <main class="p-4 mt-8 mb-32 container mx-auto" role="main">
      <header>
        <h1>Item Detail</h1>
      </header>
      <section class="mt-8">
        <h2>Information</h2>
        Details
      </section>
      <section>
        <h2>Media</h2>
        <div class="videoWrapper">
          <iframe
            width="560"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Details"
  }
};
</script>
