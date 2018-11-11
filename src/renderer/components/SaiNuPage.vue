<template>
  <div class="wrapper">
    <div>{{sainuer}}, you're on!</div>
    <div class="loading-dots">We're listening<span>.</span><span>.</span><span>.</span></div>
    <button class="btn" v-on:click="(event) => {
      clickEmit('tweettttt');
    }">Tweet</button>
    {{message}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import logger from 'electron-timber';

export default {
  computed: mapGetters({
    sainuer: 'getSaiNuer',
    message: 'getMessage',
  }),
  methods: {
    clickEmit(value) {
      this.$socket.emit('tweet', value);
    },
  },
  sockets: {
    tweet(val) {
      logger.log('this method was fired by the socket server. eg: io.emit("tweet", data)', val);
    },
  },
};
</script>

<style lang="sass" scpoed>

.wrapper
  width: 100%
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column


.loading-dots span
  animation-name: blink
  animation-duration: 1.4s
  animation-iteration-count: infinite
  animation-fill-mode: both


.loading-dots span:nth-child(2)
  animation-delay: .2s


.loading-dots span:nth-child(3)
  animation-delay: .4s


@keyframes blink
    0%
      opacity: .1
    20%
      opacity: 1
    100%
      opacity: .1

</style>
