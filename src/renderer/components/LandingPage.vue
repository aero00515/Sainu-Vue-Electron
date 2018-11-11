<template>
  <div class="wrapper">
      <div class="titlebox">
        <div class="title">Welcome to SaiNu!</div>
        <div class="subtitle">You might be the one we're lookng for.</div>
      </div>
      <div class="namebox">
        <input type="text" class="name-input" placeholder="Your Name"
              @input="(event) => {
                setSaiNuer(event.target.value);
              }"/>
      </div>
      <div class="next">
        <router-link to="/sainuer" class="btn btn-primary btn-landing">
          Next <span class="icon-right-arrow">></span>
        </router-link>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters({
    sainuer: 'getSaiNuer',
  }),
  methods: mapActions([
    'setSaiNuer',
  ]),
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
