<template lang="html">
  <span class="right">
    <sub> {{ time }} {{ period }} </sub>
  </span>
</template>

<script>
export default {
  name: 'time', 
  data () {
    return {
      time: '',
      period: ''
    }
  }
}
</script>

<style lang="css">
</style>
