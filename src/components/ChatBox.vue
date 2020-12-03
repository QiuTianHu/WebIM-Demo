<template>
  <!-- 聊天窗口 -->
  <div
    style="
      position: fixed;
      right: 8px;
      bottom: 0px;
      border: 1px solid;
      width: 400px;
      max-height: 500px;
    "
  >
    <!-- 标题栏 -->
    <div style="border-bottom: 1px solid">
      <!-- {{ chatFriend.name }} -->
    </div>
    <!-- 聊天内容 -->
    <div style="min-height: 440px; max-height: 440px; overflow-y: scroll">
      <div v-for="chatContent in chatContents" :key="chatContent" style="border: 1px solid">
        {{ chatContent.text }}
      </div>
    </div>
    <!-- 聊天输入框 -->
    <div style="height: 34px">
      <input
        v-model="chatText"
        placeholder="输入消息"
        style="width: 330px; height: 26px"
      />
      <button @click="sendMessage" style="width: 50px">发送</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "ChatBox"
};
</script>

<style scoped>
</style>