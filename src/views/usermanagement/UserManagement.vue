<template>
  <div class="user-mag">
    <div class="form">
      <el-button type="primary" @click="dialogFormVisible = true"
        >+ 新增</el-button
      >
      <el-dialog title="新增用户" :visible.sync="dialogFormVisible">
        <el-form :model="addUserForm">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="addUserForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input v-model="addUserForm.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-input
              v-model="addUserForm.gender"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input
              v-model="addUserForm.address"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addUser">确 定</el-button>
        </div>
      </el-dialog>
      <con-form
        :form="form"
        :formLabel="formLabel"
        @input="searchInput($event)"
      >
        <el-button type="primary" @click="searchUser">查询</el-button>
      </con-form>
    </div>
    <div class="table">
      <data-table :tableDatas="tableDatas" :isLoading="config.isLoading">
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-dialog title="编辑用户" :visible.sync="editDialogFormVisible">
              <el-form :model="addUserForm">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                  <el-input
                    v-model="addUserForm.name"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="年龄" :label-width="formLabelWidth">
                  <el-input
                    v-model="addUserForm.age"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                  <el-input
                    v-model="addUserForm.gender"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                  <el-input
                    v-model="addUserForm.address"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="editUser">确 定</el-button>
              </div>
            </el-dialog>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </data-table>
    </div>
    <!-- <div class="bottom-bar">
      <span @click="prePage"> < 上一页 </span>
      <div class="pages">
        <span v-for="page in config.pages" :key="page">
          <span
              @click="jumpPage(page+config.nextPages)" 
              :class="{active: config.currentPage === page+config.nextPages}"
              v-if="page+config.nextPages <= config.totalPage"
          >{{page+config.nextPages}}</span>
        </span>
        <span v-if="config.currentPage < Math.floor(config.totalPage / config.pages)*config.pages+1">···</span>
        <span @click="jumpPage(config.totalPage)" v-if="config.currentPage < Math.floor(config.totalPage / config.pages)*config.pages+1">{{config.totalPage}}</span>
      </div>
      
      
      <span @click="nextPage">下一页 ></span>
    </div> -->
    <div class="bottom-bar">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="config.totalPage * 10"
        @current-change="changePage"
        :current-change="config.currentPage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import ConForm from "@/components/context/ConForm";
import DataTable from "@/components/context/DataTable";

import {
  getUserData,
  addUserData,
  deleteUserData,
  editUserData,
  searchUserData,
} from "@/network/userData";

export default {
  name: "",
  components: {
    ConForm,
    DataTable,
  },
  data() {
    return {
      form: {
        keyword: "",
      },
      formLabel: [
        {
          search: "keyword",
          label: "",
          type: "",
          options: [
            {
              label: "label one",
              value: "one",
            },
          ],
        },
      ],
      addUserForm: {
        name: "",
        age: "",
        gender: "",
        address: "",
      },
      tableDatas: {
        colWidth: 160,
        tableData: [],
        tableLabel: {
          id: "ID",
          name: "姓名",
          age: "年龄",
          gender: "性别",
          address: "地址",
        },
      },
      config: {
        page: 1,
        totalPage: 20,
        // pages: 6,
        currentPage: 1,
        // nextPages: 0,
        isLoading: true,
      },
      dialogFormVisible: false,
      editDialogFormVisible: false,

      formLabelWidth: "120px",
    };
  },
  methods: {
    changePage(page) {
      this.config.currentPage = page;
      this.sendRequest(page);
    },
    handleEdit(index, row) {
      this.editDialogFormVisible = true;
      // row.gender === "男" ? (row.gender = 1) : (row.gender = 0);
      this.addUserForm = row;
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("确认删除用户？", "确认信息", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确认",
        cancelButtonText: "放弃",
      })
        .then(() => {
          deleteUserData(row.id).then(() => {
            this.sendRequest(this.config.currentPage).then(() => {
              this.$message({
                type: "info",
                message: "删除成功",
              });
            });
          });
        })
        .catch((action) => {
          this.$message({
            type: "info",
            message:
              action === "cancel" ? "放弃保存并离开页面" : "停留在当前页面",
          });
        });
    },
    sendRequest(page) {
      this.config.currentPage = page;
      this.config.isLoading = true;
      return getUserData(page).then((res) => {
        console.log(res);
        this.tableDatas.tableData = res.data[0];
        this.tableDatas.tableData.forEach((item) => {
          item.gender === 0 ? (item.gender = "女") : (item.gender = "男");
        });
        this.config.totalPage = res.data[1];
        this.config.isLoading = false;
      });
    },
    addUser() {
      this.dialogFormVisible = false;
      addUserData(this.addUserForm).then((res) => {
        console.log(res);
        this.sendRequest(1);
      });
    },
    editUser() {
      this.editDialogFormVisible = false;
      editUserData(this.addUserForm).then((res) => {
        console.log(res);
        this.sendRequest(1);
      });
    },
    searchInput(event) {
      this.form.keyword = event;
    },
    searchUser() {
      // console.log(this.form.keyword);
      searchUserData(this.form.keyword).then((res) => {
        console.log(res);
        this.tableDatas.tableData = res.data;
        this.tableDatas.tableData.forEach((item) => {
          item.gender === 0 ? (item.gender = "女") : (item.gender = "男");
        });
        // this.config.currentPage = res.data;
        // this.sendRequest(res.data);
      });
    },
    // prePage() {
    //   this.config.currentPage--;
    //   if (this.config.currentPage < 1) {
    //     this.config.currentPage = 1;
    //   }
    //   if (this.config.currentPage < this.config.nextPages + 1) {
    //     this.config.nextPages -= this.config.pages;
    //   }
    //   this.sendRequest(this.config.currentPage);
    // },
    // jumpPage(page) {
    //   if (page === this.config.totalPage) {
    //     this.config.nextPages =
    //       Math.floor(this.config.totalPage / this.config.pages) *
    //       this.config.pages;
    //   }
    //   this.config.currentPage = page;
    //   this.sendRequest(this.config.currentPage);
    // },
    // nextPage() {
    //   this.config.currentPage++;
    //   if (this.config.currentPage > this.config.totalPage) {
    //     this.config.currentPage = this.config.totalPage;
    //   }
    //   if (this.config.currentPage > this.config.nextPages + this.config.pages) {
    //     this.config.nextPages += this.config.pages;
    //   }
    //   this.sendRequest(this.config.currentPage);
    // },
  },
  created() {
    this.sendRequest(1);
  },
};
</script>

<style scoped>
.user-mag {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: rgb(233, 233, 233);
}
.form {
  display: flex;
  justify-content: space-between;
  height: 40px;
}
.table {
  width: 100%;
  height: 450px;
  margin-top: 20px;
  background-color: #fff;
}
/* .bottom-bar .active {
  color: red;
} */
.bottom-bar {
  /* position: relative; */
  /* width: 100%; */
  margin-left: 650px;
}
/* .bottom-bar span {
  padding: 5px;
  cursor: pointer;
  user-select:none;
  color: rgb(117, 117, 117);
}
.bottom-bar>span:first-child {
  position: absolute;
  right: 400px;
}
.bottom-bar>span:last-child {
  position: absolute;
  right: 0;
}
.bottom-bar>div {
  position: absolute;
  top: 6px;
  left: 750px;
} */
</style>
