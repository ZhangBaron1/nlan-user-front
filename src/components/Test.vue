<template>
  <div class="tos">
    <h1>测试调用接口</h1>
    <p>这个页面会调用一个接口</p>
    <p>此接口只有已登录用户才能调用</p>
    <p>为登录用户会重定向到登录页面</p>
    <p>接口返回的数据为: </p>
    <div class="msg">{{msg}}</div>
  </div>
</template>

<script>
import { test } from '@/api/test'

export default {
  data() {
    return {
      msg: '我是本地数据，等待接口返回数据中...'
    }
  },
  created() {
    this.getTestData()
  },
  methods: {
    getTestData() {
      return new Promise((resolve, reject) => {
        test().then(response => {
          console.log('test....', response)
          this.msg = response.info.test
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
</script>

<style>
  .tos {
    margin: 30px 0 0 0;
  }
  .msg {
    color: green; 
  }
</style>
