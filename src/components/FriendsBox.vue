<template>
  <!-- 好友列表 -->
    <div>
    <!-- <button id="getFriends" @click="getFriends"> 联系人 </button> -->
    <div v-if="friends.length">
      <!-- <li :key="index" v-for="(friend, index) in friends" @click="chatWithFriend(friend)"> {{ friend.name }} </li> -->
      <div v-for="(friend, index) in friends" :key="index">
          {{ friend.name }} 
      </div>
    </div>
    <p v-else> 没有好友 </p>
    </div>
</template>

<script>
export default {
  name: "FriendsBox",
  props: {
    friends: Object,
  },
};
</script>

<style scoped>
</style>