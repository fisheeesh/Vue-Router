<template>
  <div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'jobDetail' , params : {id : job.id}}">
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
        
      ]
    }
  },
  //mounted hook is a good place to fetch data from api
  mounted(){
    fetch('http://localhost:3000/jobs')
    .then(response => response.json())
    .then(data => this.jobs = data)
    .catch(err => console.log(err.message))
  }
}
</script>

<style>
.jobs {
  color: crimson;
}
</style>