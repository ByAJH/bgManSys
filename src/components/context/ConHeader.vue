<template>
    <header id="header">
        <div class="l-content">
            <el-button type="primary" icon="el-icon-menu" size="mini" class="menu-btn" @click="changeCollapse"></el-button>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path: current.path}" v-if="current">
                    {{current.label}}
                </el-breadcrumb-item>

            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click" >
                <span class="el-dropdown-link">
                    <img :src="avator" class="avator"/>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>

import { mapState } from 'vuex'

 export default {
   name: '',
   components: {

   },
   data() {
       return {
           avator: require('@/assets/logo.png')
       }
   },
   computed: {
       ...mapState({
       current: state => state.currentMenu!==null ? state.currentMenu : ''
     })

   },
   methods: {
       changeCollapse() {
           this.$store.commit('changeCollapse')
       }
   }
 }
</script>

<style scoped>
#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
.l-content {
    display: flex;
    align-items: center;
    /* flex: 1; */
}
.el-breadcrumb {
    margin-left: 10px;
} 
.avator {
    width: 30px;
    height: 30px;
}

</style>

<style>
.el-breadcrumb__item:last-child .el-breadcrumb__inner {
    color: white;
}
.el-breadcrumb__item .el-breadcrumb__inner {
    color: #333;
}
</style>