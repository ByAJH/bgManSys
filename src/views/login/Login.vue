<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <h2>管理员系统</h2>
      <el-form-item label="账号" prop="pass">
        <el-input
          type="text"
          v-model="ruleForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="Pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item style="margin-left: 0px; color: white; width: 100%">
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          style="width: 100%"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from "@/network/admin";
export default {
  name: "",
  components: {},
  data() {
    return {
      ruleForm: {
        username: "",
        pass: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
      login(this.ruleForm.username, this.ruleForm.pass).then((res) => {
        console.log(res);
        if (res.data.code === 20000) {
          this.$message.warning("登录成功");
          this.$store.dispatch("transMenu", {
            menu: res.data.menu,
            router: this.$router,
          });
          this.$router.push("/main");
          setTimeout(() => {
            this.$bus.$emit("loginSuccess", res.data.aside);
          }, 500);
        } else {
          this.$message.warning("登录失败");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgb(241, 241, 241);
  background-image: url("~@/assets/img/loginbgi.jpg");
  background-size: 100% 100%;
}
h2 {
  /* position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, 0); */
  margin: 20px 0 20px 170px;
}
.demo-ruleForm {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-60%, -60%);
  width: 450px;
  padding-right: 80px;
  background-color: rgba(207, 207, 207, 0.5);
}
.el-form-item__content {
  margin-left: 200px;
}
</style>
