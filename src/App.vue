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
    /* .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    } */

/*base code*/
.hide {
  display: none;
}
.cover {
    position: absolute;
    top: 0;
    background: rgba(0,0,0,0.5);
    width: 375px;
    height: 100vh;
    z-index: 10;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.animated.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}
@-webkit-keyframes bounceInRight {
  0%, 100%, 60%, 75%, 90% {
    -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
    transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0)
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0)
  }
  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0)
  }
  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0)
  }
  100% {
    -webkit-transform: none;
    transform: none
  }
}

@keyframes bounceInRight {
  0%, 100%, 60%, 75%, 90% {
    -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
    transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    -ms-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0)
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    -ms-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0)
  }
  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    -ms-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0)
  }
  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    -ms-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0)
  }
  100% {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none
  }
}
.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight
}

@-webkit-keyframes bounceInLeft {
  0%, 100%, 60%, 75%, 90% {
    -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
    transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0)
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0)
  }
  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0)
  }
  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0)
  }
  100% {
    -webkit-transform: none;
    transform: none
  }
}
@keyframes bounceInLeft {
  0%, 100%, 60%, 75%, 90% {
    -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
    transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    -ms-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0)
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    -ms-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0)
  }
  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    -ms-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0)
  }
  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    -ms-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0)
  }
  100% {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none
  }
}
.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft
}


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
    font-size: 17px;
    font-weight: 400;
    font-family: 'CircularStd-Bold';
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
    .cover {
        position: absolute;
        top: 0;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100vh;
        z-index: 10;
    }
    #choose-protein {
        position: fixed;
        bottom: 0;
        z-index: 30;
        background-color: #fff;
        width: 100%;
        border-top: 1px solid #ccc;
    }
}
</style>