<template>
    <el-table
      :data="tableDatas.tableData"
      style="width: 100%"
      v-loading="isLoading"
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center'}">
      <el-table-column
        v-for="(val, key) in tableDatas.tableLabel" :key="key"
        :prop="key"
        :label="val"
        >
      </el-table-column>
      <slot></slot>
    </el-table>
</template>

<script>
 export default {
   name: '',
   components: {

   },
   data() {
       return {
           
       }
   },
   props: {
       tableDatas: Object,
       isLoading: {
         type: Boolean,
         default: false
       }
   },
   mounted() {
       console.log(this.tableDatas)
   }
 }
</script>

<style scoped>
.cell {
  text-align: center;
}
 
</style>
