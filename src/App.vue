<template>
  <div id="app">
    <div class="header">
      <div class="main_top">
        <div class="logo">
          <img :src="logo.data_img" alt="" />
          <!-- <img src="../assets/logo.png" alt="" /> -->
        </div>
        <div class="navBar">
          <ul>
            <li
              v-for="item in mainNav.children"
              :key="item.navigation_id"
              class="nav"
            >
              <!-- 栏目事件 -->
              <a @click="GoNav(item)">{{ item.navigation_name }}</a>
              <div>
                <!-- {{item.chidren.navigation_name}} -->
              </div>
              <ul v-if="item.chidren != []">
                <li v-for="s in item.children" :key="s.navigation_id">
                  <!-- 栏目事件 -->
                  <a @click="GoNav(item)">{{ s.navigation_name }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="login">
          <ul>
            <li>
              <a href="#"> 登录 </a>
            </li>
            <li>
              <a href="#"> / </a>
            </li>
            <li>
              <a href="#"> 注册 </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view />
    <div calss="footer" v-if="footer">
      <!-- <div class="link">
      <div class="link_box">
        <div class="intr_title">
          <div class="title_e">RELATED LINKS</div>
          <div class="title_c">相关链接</div>
        </div>
        <ul class="link_list">
          <li>
            <a target="_Blank" href="http://gxt.henan.gov.cn/">省工信厅</a>
          </li>
          <li>
            <a target="_Blank" href="http://scjg.henan.gov.cn/">省市场监管局</a>
          </li>
          <li><a target="_Blank" href="http://www.henan.gov.cn/">省政府</a></li>
          <li>
            <a target="_Blank" href="http://gzw.henan.gov.cn/">省国资委</a>
          </li>
        </ul>
      </div>
    </div> -->
      <div class="footer">
        <div class="f_main">
          <div class="f_left">
            <ul>
              <li>
                <a href="javascript:;">
                  <span
                    v-if="
                      footer.company_tel &&
                        footer.company_tel.data_status == 'show'
                    "
                    >{{ footer.company_tel.data_remark }}</span
                  >&nbsp;&nbsp;
                  <span
                    v-if="footer.email && footer.email.data_status == 'show'"
                    >{{ footer.email.data_remark }}</span
                  >
                </a>
              </li>
              <li
                v-if="
                  footer.company_address &&
                    footer.company_address.data_status == 'show'
                "
              >
                <a href="javascript:;">
                  {{ footer.company_address.data_remark }}
                </a>
              </li>
              <li
                v-if="
                  footer.copyright && footer.copyright.data_status == 'show'
                "
              >
                <a href="javascript:;">
                  <span v-if="footer.copyright.data_status == 'show'">{{
                    footer.copyright.data_remark
                  }}</span
                  >&nbsp;&nbsp;
                  <span
                    v-if="
                      footer.record_number1 &&
                        footer.record_number1.data_status == 'show'
                    "
                    >{{ footer.record_number1.data_remark }}</span
                  >&nbsp;&nbsp;
                  <span
                    v-if="
                      footer.record_number2 &&
                        footer.record_number2.data_status == 'show'
                    "
                    >{{ footer.record_number2.data_remark }}</span
                  >
                </a>
              </li>
            </ul>
          </div>
          <div class="f_right">
            <div v-if="footer.wechat.data_status == 'show'">
              <div>{{ footer.wechat.data_name }}</div>
              <img :src="footer.wechat.data_img" alt="" />
            </div>
            <div v-if="footer.micro_blog.data_status == 'show'">
              <div>{{ footer.micro_blog.data_name }}</div>
              <img :src="footer.micro_blog.data_img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myhttp from "./api/myhttp.js";
export default {
  name: "app",
  data() {
    return {
      mainNav: "",
      logo: "",
      footer: null,
    };
  },
  methods: {
    getFooter() {
      myhttp
        .post(myhttp._DetailApi.getFooter, {})
        .then((r) => {
          if (r.stateCode == "200" || r.code == "0") {
            this.footer = r.data;
          } else {
            this.$message({
              message: r.stateMsg ? r.stateMsg : r.msg,
              type: "info",
              duration: 2000,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHeader() {
      myhttp
        .post(myhttp._DetailApi.getHeader, { terminal_id: "101" })
        .then((r) => {
          console.log(r);
          if (r.stateCode == "200" || r.code == "0") {
            this.mainNav = r.data.main_navigation;
            this.logo = r.data.logo;
            console.log(r.data.main_navigation.children);
          } else {
            this.$message({
              message: r.stateMsg ? r.stateMsg : r.msg,
              type: "info",
              duration: 2000,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    GoNav(item) {
      const that = this;
      switch (item.target_type) {
        case "target_internal_link":
          that.Go_target_internal_link(item);
          break;
        case "target_article":
          that.$router.push({
            path: "/article",
            name: "article",
            query: {
              c_id: item.target_id1, // 栏目
              a_id: item.target_id2, // 文章
            },
          });
          break;
        case "target_url":
          window.location.href = item.target_id1;
          break;
        case "target_column":
          that.GoStyleId(item);
          break;
        case "target_null" :
          break;
      }
    },
    // 内部链接
    Go_target_internal_link(item) {
      const that = this;
      switch (item.target_id1) {
        case "0":
          LinkIndexGo();
          break;
        case "1":
          that.$router.push({
            path: "/contact",
            name: "contact"
          });
          break;
        case "2":
          that.$router.push({
            path: "/Mailbox",
            name: "Mailbox"
          });
          break;
        case "3":
          that.$router.push({
            path: "/satisfied",
            name: "satisfied"
          });
          break;
      }
    },
    // 通过style_id 跳转页面
    GoStyleId(item) {
      const that = this;
      console.log(item);
      switch (item.style_id) {
        case "02": // 网站导航
          that.$router.push({
            path: "/alldist",
            name: "alldist",
            query: {
              c_id: item.target_id1 // 栏目
            }
          });
          break;
        default:
          that.$router.push({
            path: "/sum",
            name: "sum",
            query: {
              column_id: item.target_id1,
              style_id: item.style_id,
              fg: "1",
              article_id: ""
            }
          });
          break;
      }
    },
  },
  created() {
    /**
     * 获取头部和底部信息
     * 点击导航
     *      内部链接
     *          走内部链接的函数 每一个链接分别对应不同的页面
     *      外部链接
     *          直接跳转页面
     *      栏目
     *          走栏目的函数   根据不同的样式跳转不同页面
     *      文章事件
     *          直接走文章详情
     */
    this.getHeader();
    this.getFooter();
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}

.header {
  width: 100%;
  height: 84px;
  margin: 0 auto;
  position: absolute;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.26);
}
.header::before {
  content: "";
  display: block;
  clear: both;
}
.main_top {
  width: 1200px;
  margin: 0 auto;
  height: 84px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.logo {
  width: 194px;
  height: 54px;
}
.logo img {
  width: 100%;
  height: 100%;
}
.navBar {
  //   width: 800px;
  height: 84px;
}
.login {
  width: 130px;
  height: 48px;
  padding: 0 10px;
  font-weight: 600;
  background-color: #fff;
}
.navBar > ul {
  //   width: 800px;
  margin: 0 auto;
}

.navBar > ul {
  height: 100%;
  font-size: 16px;
  display: flex;
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.login ul {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.login ul li {
  margin: 0 3px;
}
.navBar > ul li a {
  color: #fff;
  font-weight: bolder;
  cursor: pointer;
}
.navBar > ul li a:hover {
  color: #d90302;
}
.login > ul li a {
  color: #d90302;
  font-weight: 800;
}
.navBar > ul > li {
  text-align: center;
  /* max-width: 98px; */
  line-height: 84px;
  padding: 0 10px;
  height: 84px;
  position: relative;
}
.navBar > ul > li a {
  display: block;
  width: 100%;
  height: 100%;
}
.navBar > ul > li ul {
  position: absolute;
  top: 55px;
  left: calc(50% - 50px);
  display: none;
}
.navBar > ul > li > ul > li {
  width: 100px;
  height: 40px;
  line-height: 40px;
  /* background:  #d90302; */
  background: #d90302;
}

.navBar > ul > li:hover ul {
  display: block;
}
.navBar > ul > li > ul > li:hover {
  background: #fff;
}

/*
  页脚
  
*/
.footer {
  width: 100%;
  height: 190px;
  margin-top: 300px;
  background-color: #303030;
}
.f_main {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
.f_left ul {
  max-width: 800px;
}
.f_left ul a {
  display: inline-block;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 1px;
  color: #858585;
}
.f_left ul a:hover {
  color: #e15958;
}
.f_right {
  width: 360px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.f_right div {
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 1px;
  color: #858585;
  text-align: center;
}
.f_right div img {
  width: 104px;
  height: 104px;
}
/* 底部链接 */
.link {
  width: 100%;
  height: 270px;
  background: #eee;
}
.link_box {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 80px 0 0 0;
}
.link_list {
  width: 600px;
  height: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.link_list li a {
  display: block;
  height: 28px;
  font-size: 16px;
  line-height: 28px;
  font-weight: 600;
  letter-spacing: 0;
  color: #434343;
  cursor: pointer;
}
.link_list li a:hover {
  color: #d90302;
}
.title_e {
  width: 100%;
  font-size: 26px;
  line-height: 40px;
  letter-spacing: 0px;
  color: #434343;
}
.title_c {
  width: 100%;
  font-size: 22px;
  line-height: 40px;
  letter-spacing: 2px;
  color: #d90301;
  font-weight: 600;
  opacity: 0.8;
}
</style>
