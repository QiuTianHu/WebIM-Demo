<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn text> 联系人 </v-btn>
      <v-btn text> 会话 </v-btn>

      <v-spacer></v-spacer>

      <v-avatar size="36">
        <img src="@/assets/avatar1.jpeg" alt="avatar1" />
      </v-avatar>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        登录
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <!-- v-card 里是联系人卡片 -->
            <v-card>
              <v-list subheader>
                <v-subheader>联系人</v-subheader>
                <!-- <v-list-item> 里是单个联系人 -->
                <v-list-item>
                  <v-list-item-avatar size="36px">
                    <img src="@/assets/avatar1.jpeg" alt="avatar1" />
                  </v-list-item-avatar>
                  <v-list-item-content>尼古拉斯·磊</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-avatar size="36px">
                    <img src="@/assets/avatar2.jpeg" alt="avatar1" />
                  </v-list-item-avatar>
                  <v-list-item-content>莱昂纳多·虎</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-avatar size="36px">
                    <img src="@/assets/avatar3.jpeg" alt="avatar1" />
                  </v-list-item-avatar>
                  <v-list-item-content>克里斯蒂安·恒</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          <v-spacer></v-spacer>

          <!-- v-card 里是对话框卡片 -->
          <v-col>
            <v-card>
              <v-list subheader>
                <v-subheader>尼古拉斯·磊</v-subheader>
                <!-- <v-list-item> 里是单个信息 -->
                <v-list-item>
                  <v-list-item-avatar size="36px">
                    <img src="@/assets/avatar1.jpeg" alt="avatar1" />
                  </v-list-item-avatar>
                  <v-list-item-content>你好</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-avatar size="36px">
                    <img src="@/assets/avatar1.jpeg" alt="avatar1" />
                  </v-list-item-avatar>
                  <v-list-item-content>在么</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content class="text-right align-self-start">
                    <v-list-item-title> 你是谁？ </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-avatar size="36px">
                    <img src="@/assets/avatar1.jpeg" alt="avatar1" />
                  </v-list-item-avatar>
                  <v-list-item-content>我是尼古拉斯·磊</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
