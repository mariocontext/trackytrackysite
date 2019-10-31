<template>
  <Layout>
    <BaseHeader screenTitle="Blog" />
    <main class="p-4 mt-8 mb-32 container mx-auto" role="main">
      <header>
        <h1 class="sr-only">Blog</h1>
      </header>
      <section class="mt-8">
        <ul>
          <li v-for="edge in $page.posts.edges" :key="edge.node.id">
            <h2>{{ edge.node.title }}</h2>
            <p>{{ edge.node.excerpt }}</p>
            <p>{{ edge.node.date }}</p>
            <div v-html="edge.node.content"></div>
          </li>
        </ul>
      </section>
    </main>
  </Layout>
</template>

<page-query>
query Blog {
  posts: allPosts {
    edges {
      node {
        id
        title
        excerpt
        date
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Blog"
  }
};
</script>
