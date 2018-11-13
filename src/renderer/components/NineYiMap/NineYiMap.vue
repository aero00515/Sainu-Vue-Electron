<template>
  <v-popover offset="16">
    <div class="tooltip-target b3">
      <div>area A</div>
      <div>area B</div>
    </div>

    <template slot="popover">
      <input
        class="tooltip-content"
        v-model="errrrr"
        placeholder="Target Locating..."/>
      <button class="btn" v-close-popover
        v-on:click="(event) => {
          targetLocated(errrrr);
        }">Locked On</button>
    </template>
  </v-popover>
</template>

<script>
export default {
  data: () => ({
    errrrr: '',
  }),
  methods: {
    targetLocated(value) {
      this.$socket.emit('aware', value);
    },
  },
};
</script>

<style lang="sass" scpoed>
.tooltip
  &.popover
    $color: #f9f9f9

    .popover-inner
      background: $color
      color: black
      padding: 24px
      border-radius: 5px
      box-shadow: 0 5px 30px rgba(black, .1)

    .popover-arrow
      border-color: $color
</style>
