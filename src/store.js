// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export const store = new Vuex.Store({
//     state: {
//         user: {
//             username: "",
//         },
//         friends: [
//             {
//               name: "小磊",
//               id: 1,
//             },
//             {
//               name: "小虎",
//               id: 2,
//             },
//             {
//               name: "小恒",
//               id: 3,
//             }
//         ]
//     }
// });

// 使用 store 模式，暂不使用vuex
export default {
  user: {
    userId: 1,
    username: "伊丽莎白·小红",
    userAvatar: "@/assets/avatar0.jpeg"
  },
  friends: [
    {
      userId: 2,
      username: "尼古拉斯·小磊",
      userAvatar: "@/assets/avatar1.jpeg"
    },
    {
      userId: 3,
      username: "莱昂纳多·小虎",
      userAvatar: "@/assets/avatar2.jpeg"
    },
    {
      userId: 4,
      username: "克里斯蒂安·小恒",
      userAvatar: "@/assets/avatar3.jpeg"
    }
  ],
  messages: [
    {
      userId: 2,
      isSender: 0,
      message: "美女你好",
      timestamp: "1"
    },
    {
      userId: 3,
      isSender: 0,
      message: "Hello",
      timestamp: "3"
    },
    {
      userId: 4,
      isSender: 0,
      message: "很高兴认识你",
      timestamp: "5"
    },
    {
      userId: 2,
      isSender: 0,
      message: "在么？",
      timestamp: "4"
    },
    {
      userId: 2,
      isSender: 1,
      message: "你是谁？",
      timestamp: "8"
    },
    {
      userId: 2,
      isSender: 0,
      message: "我是尼古拉斯·小磊",
      timestamp: "11"
    },
    {
      userId: 3,
      isSender: 1,
      message: "hi",
      timestamp: "12"
    }
  ]
}
