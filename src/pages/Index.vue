<template>
  <Layout>
    <BaseHeader screenTitle="Welcome" />
    <main class="mx-auto container p-4 mb-32" role="main" id="welcome">
      <section>
        <div>
          <h1>Welcome to Tracky Tracky</h1>
          <p class="text-center font-semibold">Coordinate maintenance work</p>
        </div>
        <div>
          <h2>Easily track repeated work</h2>
          <p class="text-center font-semibold">
            Taking care of someone or something with other people?
          </p>
          <ul>
            <li>
              Tracky Tracky lets you easily track and coordinate work done on
              tasks that happen over and over.
            </li>
            <li>
              Create maintenance based tasks and set them to be auto created and
              repeated daily, weekly and monthly.
            </li>
            <li>
              Easily add repeated work to them. No need to create a separate
              task each time.
            </li>
          </ul>
          <p class="font-semibold mt-8">
            For example, in the case of caregiving “help to the bathroom” can
            happen multiple times during a day. So can walking the dog or giving
            it its medicines. You could also note if the work varied a bit if
            there were issues.
          </p>
        </div>
        <div>
          <h2>Get everyone on the same page</h2>
          <p class="text-center font-semibold">Having mixups on tasks?</p>
          <ul>
            <li>
              Invite collaborators, share tasks and see what happened with
              others to reduce confusion.
            </li>
            <li>Coordinate your efforts from anywhere at anytime.</li>
            <li>
              No more messing around with paper logs or some hacked together
              online doc to find out what happened.
            </li>
            <li>See the all tasks or only those that are relevant to you.</li>
            <li>View a history of what was done and not done.</li>
          </ul>
        </div>
        <div>
          <h2>
            Why use Tracky Track and not a standard To Do or Reminder app?
          </h2>
          <p>
            We’re hyper focused on enabling people that need to do maintenance
            for people or things and places. We’re not oriented on single tasks
            to be done but tracking work on tasks that repeat themselves,
            particularly for groups of people with shared responsibilities and
            that might occur more than once a day.
          </p>

          <p>
            While many standard task managers have the ability to add repeatable
            tasks, the tasks usually only occur once per day or week. Tracky
            Tracky does this too but also allows you to add work to those tasks
            across many platforms. There’s no need to add more duplicate
            repeating tasks. It also makes it easier to coordinate shared
            efforts.
          </p>
        </div>
        <div>
          <h2>We’re all about helping people answer these questions:</h2>
          <ul class="text-lg flex md:flex-row md:justify-around my-8">
            <li>How often was it done?</li>
            <li>How and when was it done?</li>
            <li>Who did it?</li>
          </ul>
        </div>
      </section>

      <section>
        <div>
          <h2>Get coordinated.</h2>
          <p class="text-center font-semibold">Get Tracky Tracky!</p>
        </div>
      </section>
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

<style scoped>
section > div {
  @apply my-16 p-8 bg-gray-200 rounded-lg;
}

h1,
h2 {
  @apply text-center;
}
</style>
