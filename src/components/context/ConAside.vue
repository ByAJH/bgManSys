<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#4a515a"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="$store.state.collapse"
    :collapse-transition="true"
  >
    <h2>课程后台管理系统</h2>
    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.path"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu index="1" v-for="(item, index) in hasChildren" :key="index">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subItem.path"
          v-for="subItem in item.children"
          :key="subItem.path"
          @click="clickMenu(subItem)"
          >{{ subItem.label }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      asideRouter: [
        {
          path: "/main/home",
          name: "home",
          label: "首页",
          icon: "s-home",
        },
        {
          path: "/main/video",
          name: "video",
          label: "视频管理",
          icon: "video-play",
        },
        {
          path: "/main/user",
          name: "user",
          label: "用户管理",
          icon: "user",
        },
        {
          label: "其他",
          name: "other",
          icon: "setting",
          children: [
            {
              path: "/main/page1",
              name: "page1",
              label: "page1",
            },
            {
              path: "/main/page2",
              name: "page2",
              label: "page2",
            },
          ],
        },
      ],
    };
  },
  computed: {
    hasChildren() {
      return this.asideRouter.filter((item) => item.children !== undefined);
    },
    noChildren() {
      return this.asideRouter.filter((item) => item.children === undefined);
    },
  },
  created() {
    this.$bus.$on("loginSuccess", (event) => {
      console.log(event);
      this.asideRouter = event;
    });
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    clickMenu(item) {
      this.$route.path !== item.path ? this.$router.push(item.path) : "";
      item.name === "home"
        ? this.$store.commit("changeCurrentMenu", null)
        : this.$store.commit("changeCurrentMenu", item);
    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100%;
}

.el-menu {
  border: none;
}
h2 {
  padding-top: 10px;
  color: white;
}
</style>
