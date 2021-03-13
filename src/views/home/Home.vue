<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" class="left-top">
        <div class="user">
          <img src="~@/assets/logo.png" alt="" />
          <span class="name">AJH</span>
          <div class="title">超级管理员</div>
        </div>
        <div class="login-msg">
          <div class="login-time-label">
            上次登录时间：
            <span class="login-time">2021-01-08</span>
          </div>

          <div class="login-addr-label">
            上次登录地点：
            <span class="login-addr">厦门</span>
          </div>
        </div>
      </el-card>
      <el-card shadow="hover" class="left-bottom">
        <data-table :table-datas="tableDatas"></data-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card
          shadow="hover"
          v-for="item in countData"
          :key="item.name"
          class="num-card"
          :body-style="{
            padding: 0,
            display: 'flex',
            'align-items': 'center',
            height: '60px',
          }"
        >
          <i
            class="icon"
            :style="{ 'background-color': item.color }"
            :class="`el-icon-${item.icon}`"
          ></i>
          <div class="detail">
            <p class="number">{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover" class="rigth-center">
        <echart :chartData="echartData.order"></echart>
      </el-card>
      <div class="graph">
        <el-card
          shadow="hover"
          class="graph-card"
          :body-style="{ height: '100%', width: '100%' }"
        >
          <echart :chartData="echartData.user" class="bar-graph"></echart>
        </el-card>
        <el-card
          shadow="hover"
          class="graph-card"
          :body-style="{ height: '100%', width: '100%' }"
        >
          <echart :chartData="echartData.video" class="pie-graph"></echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import DataTable from "@/components/context/DataTable";
import Echart from "@/components/common/Echart";

import { request } from "@/network/request";

export default {
  name: "",
  components: {
    DataTable,
    Echart,
  },

  data() {
    return {
      tableDatas: {
        colWidth: 98,
        tableData: [],
        tableLabel: {
          name: "课程",
          todayBuy: "日销量",
          monthBuy: "月销量",
          totalBuy: "总销量",
        },
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 654,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 884,
          icon: "s-cooperation",
          color: "#5ab1f0",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 654,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 884,
          icon: "s-cooperation",
          color: "#5ab1f0",
        },
      ],
      echartData: {
        order: {
          isAxisEchart: true,
          legend: { data: [] },
          xData: [],
          series: [],
        },
        user: {
          isAxisEchart: true,
          legend: { data: [] },
          xData: [],
          series: [],
        },
        video: {
          isAxisEchart: false,
          legend: { data: [] },
          series: [],
        },
      },
    };
  },

  created() {
    request({
      url: "/home/getData",
      //  method: 'get'
    }).then((res) => {
      //  console.log(res)
      res = res.data;
      this.tableDatas.tableData = res.data.tableData;
      console.log(this.tableDatas);
      //order数据
      this.echartData.order.xData = res.data.orderData.date;
      let orderData = res.data.orderData.data;
      Object.keys(orderData[0]).forEach((ele) => {
        this.echartData.order.legend.data.push(ele);
        this.echartData.order.series.push({
          name: ele,
          type: "line",
          data: orderData.map((item) => item[ele]),
        });
      });

      //user数据
      this.echartData.user.xData = res.data.userData.date;
      let userData = res.data.userData.data;
      Object.keys(userData[0]).forEach((ele) => {
        this.echartData.user.legend.data.push(ele);
        this.echartData.user.series.push({
          name: ele,
          type: "bar",
          data: userData.map((item) => item[ele]),
        });
      });

      //video数据
      let videoData = res.data.videoData;
      this.echartData.video.series.push({
        data: videoData,
        type: "pie",
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      });

      //  console.log(this.echartData.video)
    });
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
}
.user {
  position: relative;
  height: 100px;

  border-bottom: 1px solid rgb(226, 226, 226);
}
.user img {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.user .name {
  position: absolute;
  left: 100px;
  top: 15px;
  font-size: 24px;
}
.user .title {
  position: absolute;
  left: 100px;
  top: 45px;
  font-size: 14px;
  color: rgb(150, 150, 150);
}

.login-msg {
  /* position: relative; */
  padding-top: 15px;
  font-size: 14px;
  color: rgb(150, 150, 150);
}
.login-time,
.login-addr {
  padding-left: 50px;
}
.login-time-label {
  margin-bottom: 10px;
}

.el-col-8 {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 707px;
}
[class*="left"] {
  width: 100%;
}
.left-top {
  /* position: relative; */
  height: 200px;
  /* margin-bottom: 20px; */
  /* padding: 20px 20px 0 20px; */
}
.left-bottom {
  height: 490px;
  /* padding: 20px 20px 0 20px; */
}

.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 150px;
}
.num-card {
  width: 32%;
  height: 60px;
}
.icon {
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 30px;
  color: white;
}
.detail {
  margin-left: 10px;
  height: 60px;
}
.detail .number {
  font-size: 26px;
}
.detail .txt {
  font-size: 14px;
  color: dimgray;
}

.rigth-center {
  height: 300px;
  margin-bottom: 10px;
}

.graph {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}
.graph-card {
  position: relative;
  width: 48%;
  height: 243px;
}
.bar-graph {
  position: absolute;
  left: 0;
  height: 250px;
  /* width: 350px; */
  padding-left: 10px;
  /* font-size:12px; */
}

.pie-graph {
  position: absolute;
  top: 40px;
  left: -10px;
  /* width: 350px; */
  height: 200px;
}
</style>


