<template lang="html">
  <div class="stick_bottom">
    <span>
      <input id="text-input" type="text" name="" value="" placeholder="Message">
    </span>

    <span class="float_right">
      <button type="button" name="button">SEND</button>
    </span>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'textinput',
  methods: {
    postMessage: function () {
      // postMessage
      // post using axios to your chat api server
      axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    getEarlierMessages: function () {
      // getEarlierMessages
      // get earlier messages from chat api server
      let _vm = this
      axios.get('http://localhost:3000/users/1.json')
        .then(function (response) {
          console.log(_vm)
          console.log(this)
          _vm.answer = response.data.name
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getInitialMessages: function () {
      // getInitialMessages
      // get first messages from chat api server
      let _vm = this
      axios.get('http://localhost:3000/users/1.json')
        .then(function (response) {
          console.log(_vm)
          console.log(this)
          _vm.answer = response.data.name
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    scrollToBottom: function () {
      // scroll to the bottom
      // cause the chatui to scroll to bottom
      // more functions at utilities
    }
  }
}
</script>

<style lang="css">

#text-input {
  padding: 7px 12px;
}

.stick_bottom {
  position: relative;
  bottom: 5px;
  width:100%
}

.stick_bottom input {
  /*width: 200px;*/
  /*max-*/
  width:95%
}

</style>
