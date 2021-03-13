<template>
  <el-form :inline="true" :model="form">
    <el-form-item v-for="item in formLabel" :key="item.keyword">
      <el-input
        v-model="form[item.keyword]"
        placeholder="请输入"
        v-if="!item.type"
        @input="input($event)"
      ></el-input>
      <!-- <el-input v-model="form[item.keyword]" placeholder="请输入" v-if="item.type===''"></el-input> -->
      <el-select
        v-model="form[item.keyword]"
        placeholder="活动区域"
        v-if="item.type === 'select'"
      >
        <el-option
          v-for="option in item.options"
          :key="option.label"
          :label="option.label"
          :value="option.value"
        ></el-option>
      </el-select>
      <el-switch
        v-model="form[item.keyword]"
        v-if="item.type === 'switch'"
      ></el-switch>
    </el-form-item>
    <el-form-item>
      <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      formInline: {
        user: "",
        region: "",
        type: "",
      },
    };
  },
  props: {
    form: Object,
    formLabel: Array,
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    input(event) {
      this.$emit("input", event);
    },
  },
};
</script>

<style scoped>
</style>
