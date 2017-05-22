import Right from '../Right'
import Hello from '../Hello'
import Something from '../User'
import Bubble from '../messages/Bubble'
import WhatsappBubble from '../messages/WhatsappBubble'
import InstagramBubble from '../messages/InstagramBubble'
import TwitterBubble from '../messages/TwitterBubble'
import ImageBubble from '../messages/ImageBubble'
import VideoBubble from '../messages/VideoBubble'
import HyperlinkBubble from '../messages/HyperlinkBubble'
import MapBubble from '../messages/MapBubble'
import TextInput from '../input_toolbar/TextInput'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    // DateSection, AdminMessage
    TextInput, Bubble,
    WhatsappBubble, InstagramBubble, MapBubble,
    TwitterBubble, ImageBubble, VideoBubble, HyperlinkBubble
  },
  methods: {
    getAnswer: function() {
      let _vm = this
      axios.get('http://localhost:3000/users/1.json')
        .then(function (response) {
          console.log(_vm)
          console.log(this)
          _vm.answer = response.data.name
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  },
  data () { return {
      AllMessages: [
        {type: 'bubble'},
        {type: 'instagram'},
        {type: 'map'},
        {type: 'map'},
        {type: 'bubble'},
        {type: 'right'},
        {type: 'right'},
        {type: 'somethignelse'}
      ],
      getthings: '',
      answer: 'hello there'
    }
  },//data ()
  watch: {
    getthings: function(){
      console.log("tests")

      this.getAnswer()
      // console.log("tests")
      // axios.get('http://localhost:3000/users/1.json')
      //   .then(function (response) {
      //     console.log(response.data)
      //     this.answers.push(response.data)
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   })
    }
  }
}// export default
