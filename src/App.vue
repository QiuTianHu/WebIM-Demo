<template>
  <div id="app">
    <LoginBox v-if="LoginBoxSeen" />
    <FriendsBox v-bind:friends="friends" />
    <ChatBox />
  </div>
</template>

<script>
import LoginBox from "./components/LoginBox.vue";
import FriendsBox from "./components/FriendsBox.vue";
import ChatBox from "./components/ChatBox.vue";

export default {
  name: "App",
  components: {
    LoginBox,
    FriendsBox,
    ChatBox,
  },
  method: {

  },
  data: function () {
    return {
      LoginBoxSeen: true,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
