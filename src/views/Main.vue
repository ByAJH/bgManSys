<template>
<el-container style="height:100vh;">
  <el-aside width="200px" >
      <con-aside></con-aside>
  </el-aside>
  <el-container>
    <el-header class="el-header">
        <con-header></con-header>
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>

import ConAside from '@/components/context/ConAside'
import ConHeader from '@/components/context/ConHeader'

 export default {
   name: '',
   components: {
       ConAside,
      ConHeader,

   }
 }
</script>

<style scoped>
.el-header {

    background-color: rgb(33, 33, 33);
}
.el-main {
  padding: 0;
}
</style>
