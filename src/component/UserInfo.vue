<template>
  <div class="header-operation">
    <a-dropdown-button class="user-profile-component">
      {{ userStore.user?.username }}
      <template v-slot:overlay>
        <a-menu class="user-profile-dropdown">
          <a-menu-item key="4" @click="logout">登出</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown-button>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const { removeUser } = userStore

function logout() {
  //将token信息用store存，登出直接全部清空
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  removeUser()
  message.success('已退出登录', 1)
  router.replace('/login')
}
</script>

<style>
.user-profile-dropdown {
  border-radius: 2px !important;
}
.user-operation > * {
  margin-left: 30px !important;
}

.header-operation {
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-top: 17px;
}
</style>
