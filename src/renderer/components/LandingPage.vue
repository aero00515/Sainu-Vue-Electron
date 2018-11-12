<template>
  <div class="wrapper">
      <div class="titlebox">
        <div class="title">Welcome to SaiNu!</div>
        <div class="subtitle">You might be the one we're lookng for.</div>
      </div>
      <div class="namebox">
        <input
          type="text" class="name-input"
          placeholder="Your Name"
          v-model="sainuer"/>
      </div>
      <div class="next">
        <router-link to="/sainuer"
          class="btn btn-primary btn-landing"
          @click.native="() => {
            setSaiNuer(sainuer);
          }">
          Next <span class="icon-right-arrow">></span>
        </router-link>
      </div>
  </div>
</template>

<script>
import logger from 'electron-timber';

export default {
  data: () => ({
    sainuer: '',
  }),
  methods: {
    setSaiNuer(value) {
      this.$socket.emit('setSaiNuer', value);
    },
  },
  sockets: {
    setSaiNuer(val) {
      logger.log('this method was fired by the socket server. eg: io.emit("setSaiNuer", data)', val);
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


.titlebox
  flex: 2
  display: flex
  justify-content: center
  flex-direction: column
  text-align: center

  .title
    font-size: 60px


.namebox
  flex: 1


.next
  flex: 1

</style>
