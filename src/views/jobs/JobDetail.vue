<template>
  <h1>Job Detail Page - {{ id }}</h1>
  <div v-if="job">
    <p>Job Title - {{ job.title }}</p>
    <p>Job Detail - {{ job.detail }}</p>
  </div>
</template>

<script>
export default {
    props : ['id'],
    // data(){
    //     return{
    //         id : this.$route.params.id
    //     }
    // }
    data(){
      return{
        job : null
      }
    },
    mounted(){
      fetch('http://localhost:3000/jobs/' + this.id)
      .then(response => response.json())
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>