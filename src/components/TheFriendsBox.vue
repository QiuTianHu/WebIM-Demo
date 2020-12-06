<template>
  <div>
    <router-view :key="$route.path" />
    <!-- v-card 里是对话框卡片 -->
    <v-card>
      <!-- v-list 里是对话 -->
      <v-list subheader dense>
        <v-subheader>尼古拉斯·磊</v-subheader>
        <!-- <v-list-item> 里是单个信息 -->
        <v-list-item>
          <v-list-item-avatar size="24px">
            <img src="@/assets/avatar1.jpeg" alt="avatar1" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> 美女你好 </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar size="24px">
            <img src="@/assets/avatar1.jpeg" alt="avatar1" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> 在么？ </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="text-right align-self-start">
            <v-list-item-title> 你是谁？ </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar size="24px">
            <img src="@/assets/avatar1.jpeg" alt="avatar1" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> 我是尼古拉斯·磊 </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-text-field
        placeholder="发送信息"
        outlined
        dense
        style="padding: 0px 20px; font-size: 13px"
      ></v-text-field>
    </v-card>
  </div>
</template>