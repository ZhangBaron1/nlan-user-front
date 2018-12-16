<template>
  <el-row>
    <el-col :span="18" :offset="3">
      <el-menu :default-active.sync="activeIndex" class="menu" mode="horizontal" :router="true" >
        <el-menu-item index="1" :route="{path: '/home'}">首页</el-menu-item>
        <el-menu-item index="2" :route="{path: '/tos'}">服务条款 Tos</el-menu-item>
        <el-menu-item index="3" :route="{path: '/test'}">测试一下</el-menu-item>
        <el-menu-item index="4" style="float: right" v-on:click="signOut">退出登录</el-menu-item>
        <el-menu-item index="5" style="float: right" :route="{path: '/user_info'}">{{UserName}}</el-menu-item>

      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import store from '@/store'

export default {
  name: 'Headers',
  data() {
    return {
      UserName: '我是用户名',
      activeIndex: '1'
    }
  },
  created() {
    console.log(this.$route.path)
    if (this.$route.path === '/home') {
      this.activeIndex = '1'
    }

    if (this.$route.path.indexOf('tos') !== -1) {
      this.activeIndex = '2'
    }

    if (this.$route.path.indexOf('test') !== -1) {
      this.activeIndex = '3'
    }

    if (this.$route.path.indexOf('user_info') !== -1) {
      this.activeIndex = '5'
    }
  },
  methods: {
    signOut() {
      store.dispatch('FedLogOut').then(() => {
        location.replace(`http://${location.host}/#/login`)
      })
    }
  }
}
</script>
