<template>
  <Layout>
    <BaseHeader screenTitle="Details" />
    <main class="p-4 mt-8 mb-32 container mx-auto" role="main">
      <header>
        <h1 class="sr-only">Details</h1>
      </header>
      <section class="mt-8">
        <ul class="flex flex-col flex-wrap md:flex-row md:items-stretch">
          <li
            class="mt-4 mr-8 mb-4 p-4 inline-block  md:w-64"
            v-for="edge in $page.listings.edges"
            :key="edge.node.thingID"
          >
            <h2>{{ edge.node.title }}</h2>
            <p>{{ edge.node.status }}</p>
            <p>{{ edge.node.cart }}</p>
            <p>{{ edge.node.summary }}</p>
            <p>{{ edge.node.location }}</p>
            <p>{{ edge.node.ratings }}</p>
          </li>
        </ul>
      </section>
    </main>
  </Layout>
</template>

<page-query>
  query Listings {
    listings: allListings ( filter: { thingid:  { in: ["1"] }}) {
      edges {
        node {
          thingid
          title
          status
          cart
          summary
          location
          ratings
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "Details"
  }
};
</script>
