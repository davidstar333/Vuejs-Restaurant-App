<template>
  <v-app>
    <v-content>
      <transition name="fade">
          <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>
.v-content {
    max-width: 375px;
    margin: auto;
    padding: 0px;
    background-color: white;
}
.container {
    padding: 0px;
}
h2 {
    font-size: 1.4rem;
}
button.success {
    background-color: #50e3c2 !important;
}
.footer {
    background-color: #fff;
    width: 375px;
    position: fixed;
    bottom: 0;
}
@media (max-width: 414px) {
    .v-content {
        max-width: 100%;
    }
    .footer {
        background-color: #fff;
        width: 100%;
        position: fixed;
        bottom: 0;
    }
}
</style>