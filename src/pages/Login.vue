<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Ego商城</span>
      </div>
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
        type="border-card"
        stretch
      >
        <el-tab-pane label="登录" name="login">
          <el-form
            :model="loginForm"
            status-icon
            :label-position="labelPosition"
            ref="loginForm"
            :rules="rules"
          >
            <el-form-item label="用户名" label-width="60px" prop="username">
              <el-input type="text" v-model="loginForm.username"></el-input>
            </el-form-item>

            <el-form-item label="密码" label-width="60px" prop="password">
              <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')"
                >提交</el-button
              >
              <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="注册" name="register">
          <el-form
            :model="registerForm"
            status-icon
            :label-position="labelPosition"
            ref="registerForm"
            :rules="rules2"
          >
            <el-form-item label="用户名" label-width="60px" prop="username">
              <el-input type="text" v-model="registerForm.username"></el-input>
            </el-form-item>

            <el-form-item label="邮箱" label-width="60px" prop="email">
              <el-input type="text" v-model="registerForm.email"></el-input>
            </el-form-item>

            <el-form-item label="密码" label-width="60px" prop="password">
              <el-input
                type="password"
                v-model="registerForm.password"
              ></el-input>
            </el-form-item>

            <el-form-item label="确认密码" label-width="70px" prop="repassword">
              <el-input
                type="password"
                v-model="registerForm.repassword"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('registerForm')"
                >提交</el-button
              >
              <el-button @click="resetForm('registerForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import api from "../api/index.js";
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("用户名不能为空"));
      } else if (value.length < 3) {
        callback(new Error("长度不够"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      activeName: "login",
      labelPosition: "right",
      loginForm: {
        username: "",
        password: "",
      },
      registerForm: {
        username: "",
        email: "",
        password: "",
        repassword: "",
      },
      activeTab: "login",
      rules: {
        username: [{ validator: checkName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
      },
      rules2: {
        username: [{ validator: checkName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        repassword: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    ...mapMutations("login", ["setUser"]),
    handleClick(tab, event) {
      this.activeTab = tab.name;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.activeTab == "login") {
            var params = new URLSearchParams(this.loginForm);
            api.login(params).then((res) => {
              if (res.data.status === 200) {
                this.setUser(res.data);
                localStorage.setItem("ego", JSON.stringify(res.data));
                this.$router.push('/')
              } else {
                const h = this.$createElement;

                this.$notify({
                  title: "登陆失败",
                  message: h(
                    "i",
                    { style: "color: teal" },
                    "用户名密码错误"
                  ),
                });
              }
            });
          } else {
            var params = new URLSearchParams(this.registerForm)
            api.register(params).then(res=>{
              if(res.data.status === 200){
                const h = this.$createElement;

                this.$notify({
                  title: "注册成功",
                  message: h(
                    "i",
                    { style: "color: teal" },
                    "请前往登录页面登录"
                  ),
                });
              }else{
                const h = this.$createElement;

                this.$notify({
                  title: "注册失败",
                  message: h(
                    "i",
                    { style: "color: teal" },
                    "请重新注册"
                  ),
                });
              }
            })
          }
        } else {
          console.log("error submit!!");
          return false;
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
  width: 1200px;
  margin: 0 auto;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  margin: 100px auto;
  text-align: center;
}
</style>