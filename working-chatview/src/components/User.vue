<template>
  <div class="user">
    <div v-for="user in users">
      <p>Username: {{ user.username }}</p>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      users: [
        {username: 'Bryan'},
        {username: 'Gwen'},
        {username: 'Gabriel'}
      ]
    }
  }
}
</script>
