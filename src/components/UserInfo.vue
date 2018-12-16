<template>
  <el-row>
    <el-col :span="24" >
      <div class="user-info">
        <div class="item">
          <span class="title">用户名</span>
          <span class="content">hello</span>
        </div>
        <div class="item">
          <span class="title">注册时间</span>
          <span class="content">2018-12-12</span>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
  .user-info{
    margin: 30px 0 0 0;
  }

  .user-info .item{
    padding: 20px 0 10px 0;
    border-bottom: 1px solid #eee;
    width: 500px;
  }

  .user-info .title{
    font-weight: bold;
    text-align:left;
    padding-right: 20px;
    width: 200px;
    display: inline-block;
  }

  .user-info .content{
    text-align:left;
  }

</style>
