<template>
  <div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'jobDetail' , params : {id : job.title}}">
        <h3 class="jobs">{{ job.title }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { id: 1, title: 'Web Developer', detail: 'Develop Website' },
        { id: 2, title: 'Web Designer', detail: 'Design Website' },
        { id: 3, title: 'SEO Expert', detail: 'Optimize Website' }
      ]
    }
  }
}
</script>

<style>
.jobs {
  color: crimson;
}
</style>