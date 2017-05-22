<template lang="html">
  <div class="">
    <div class="container-right">
      <span class="other-chat-bubble">
        Try vue-chatview. Here -> http://www.github.com/ytbryan/vue-chatview
         <span class="right"><sub>5:12pm</sub></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.container-right {
  display: flex;
  margin-bottom: 10px;
  justify-content: flex-end;
}

.other-chat-bubble {
  float: left;
  background-color: #4080ff;
  color: white;
  padding: 7px 12px;
  border-radius: 4px;
  max-width: 75%;
}


</style>
