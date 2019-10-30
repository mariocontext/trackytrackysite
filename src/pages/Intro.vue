<template>
  <SingleScreen>
    <div
      class="bg-gray-200 p-8 max-w-xl mx-auto md:mt-16 flex flex-col items-center"
    >
      <h1 class="text-center">Brand Logo</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
        rerum illum odit fugit assumenda rem dolores inventore iste
        reprehenderit maxime! Iusto.
      </p>
      <g-image
        src="https://via.placeholder.com/300x200.png?text=Intro+Image"
        width="300"
        class="my-8"
      />
      <g-link class="btn" to="/homescreen">
        Next
      </g-link>
      <g-link class="text-sm my-16 block uppercase" to="/homescreen">
        Skip
      </g-link>
    </div>
  </SingleScreen>
</template>

<script>
export default {
  metaInfo: {
    title: "Intro"
  }
};
</script>
