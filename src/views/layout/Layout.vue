<template>
  <el-container>
    <el-header>
      <Headers></Headers>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="18" :offset="3">
          <router-view></router-view>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Headers from './Header'
export default {
  components: {
    'Headers': Headers
  },
  name: 'Index',
  data() {
    return {}
  }
}
</script>
