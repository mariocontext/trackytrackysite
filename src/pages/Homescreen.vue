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
      <section class="mt-8">
        <h2>Category One</h2>
        <ul
          class="flex flex-col md:flex-row md:items-stretch md:justify-around"
        >
          <li
            class="bg-gray-200 my-4 p-4 inline-block"
            v-for="edge in $page.listings.edges"
            :key="edge.node.thingID"
          >
            <h2>{{ edge.node.title }}</h2>
            <p>{{ edge.node.status }}</p>
            <p>{{ edge.node.cart }}</p>
            <p>{{ edge.node.summary }}</p>
            <g-link to="/category-list" class="btn">View More</g-link>
          </li>
        </ul>
      </section>

      <section class="mt-8">
        <h2>Category Two</h2>
        <ul
          class="flex flex-col md:flex-row md:items-stretch md:justify-around"
        >
          <li
            class="bg-gray-200 my-4 p-4 inline-block"
            v-for="edge in $page.listings.edges"
            :key="edge.node.thingID"
          >
            <h2>{{ edge.node.title }}</h2>
            <p>{{ edge.node.status }}</p>
            <p>{{ edge.node.cart }}</p>
            <p>{{ edge.node.summary }}</p>
            <g-link to="/category-list" class="btn">View More</g-link>
          </li>
        </ul>
      </section>

      <section class="mt-8">
        <h2>Category Three</h2>
        <ul
          class="flex flex-col flex-wrap md:flex-row md:justify-between md:items-stretch"
        >
          <li
            class="bg-gray-200 m-4  p-4 inline-block md:w-64"
            v-for="edge in $page.listings.edges"
            :key="edge.node.thingid"
          >
            <h2>{{ edge.node.title }}</h2>
            <p>{{ edge.node.status }}</p>
            <p>{{ edge.node.cart }}</p>
            <p>{{ edge.node.summary }}</p>
            <g-link to="/category-list" class="btn">View more</g-link>
          </li>
        </ul>
      </section>
    </main>
  </Layout>
</template>

<page-query>
  query Listings {
    listings: allListings (limit: 3, sortBy: "Thingid", order: ASC) {
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
    title: "Homescreen"
  }
};
</script>
