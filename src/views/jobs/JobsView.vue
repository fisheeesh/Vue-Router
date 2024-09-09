<template>
  <h1>Jobs Title</h1>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{name : 'jobDetail', params : {id : job.id}}">
        <h3 class="jobs">{{ job.title }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
    data(){
        return{
            jobs: [
                {id: 1, title: "Project Manger", detail : "Lead project"},
                {id: 2, title: "UI/UX Designer", detail : "Design UI/UX"},
                {id: 3, title: "Frontend Developer", detail : "Develop Frontend"},
                {id: 4, title: "Backend Developer", detail : "Develop Backend"},
            ]
        }
    }
}
</script>

<style>
.jobs{
    color: crimson;
}
</style>