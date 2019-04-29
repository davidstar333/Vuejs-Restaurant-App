<template>
  <div class="tip-container"> 
    <img class="tip-avatar" v-bind:src="tip_avatar" />
    <div class="tip-text">{{tip_text}}</div>
  </div>
</template>
<script>
  export default {
    name: 'FanTip',
    data () {
      return {
      }
    },
    props: {
      tip_avatar: {
       type: String,
       default () {
         return ''
       }
      },
      tip_text: {
       type: String,
       default () {
         return ''
       }
      }
     },
  }
</script>
<style>
  .tip-container {
    width: 210px;
    min-width: 210px;
    position: relative;
    margin-right: 15px;
  }

  .tip-container .tip-avatar {
    object-fit: cover;
    width: 37px;
    height: 37px;
    background-color: #e6e6e6;
  }

  .tip-container .tip-text {
    background-color: #f6f6f6;
    padding: 10px 10px 10px 40px; 
    font-family: "CircularStd-Medium";
    font-size: 11px;
    color: #242424;
    border-radius: 5px;
    margin-top: -34px;
    margin-left: 7px;
  }
</style>
