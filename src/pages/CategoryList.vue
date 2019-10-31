<template>
  <Layout>
    <BaseHeader screenTitle="Category Listing" />
    <main class="p-4 mt-8 mb-32 container mx-auto" role="main">
      <section class="mt-8">
        <h2>Category Listing</h2>
        <ul class="flex flex-col flex-wrap md:flex-row md:items-stretch">
          <li
            class="bg-gray-200 mt-4 mr-8 mb-4 p-4 inline-block  md:w-64"
            v-for="edge in $page.listings.edges"
            :key="edge.node.thingID"
          >
            <h2>{{ edge.node.title }}</h2>
            <p>{{ edge.node.status }}</p>
            <p>{{ edge.node.cart }}</p>
            <p>{{ edge.node.summary }}</p>
            <g-link to="/details" class="btn">Details</g-link>
          </li>
        </ul>
      </section>
    </main>
  </Layout>
</template>

<page-query>
  query Listings {
    listings: allListings (sortBy: "Thingid", order: ASC) {
      edges {
        node {
          thingid
          title
          status
          cart
          summary
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "Category Listing"
  }
};
</script>
