<template>
  <div>
    <div class="header">
      <div class="main_top">
        <div class="logo">
          <!-- <img :src="logo.data_img" alt="" /> -->
          <img src="../assets/logo.png" alt="" />
        </div>
        <div class="navBar">
          <ul>
            <li v-for="(item, i) in mainNav.children" :key="i" class="nav">
              <!-- 栏目事件 -->
              <a
                v-if="item.target_type == 'target_column'"
                :href="
                  '/sum?column_id=' +
                    item.target_id1 +
                    '&style_id=' +
                    item.style_id +
                    '&article_id='
                "
                >{{ item.navigation_name }}</a
              >
              <!-- 文章事件 -->
              <a
                v-if="item.target_type == 'target_article'"
                :href="
                  '/article?c_id=' +
                    item.target_id1 +
                    '&a_id=' +
                    item.target_id2
                "
                >{{ item.navigation_name }}</a
              >
              <!-- 空事件 -->
              <a v-if="item.target_type == 'target_null'" href="javascript:;">{{
                item.navigation_name
              }}</a>
              <!-- target_url 外链事件 -->
              <a
                v-if="item.target_type == 'target_url'"
                :href="item.target_id1"
                >{{ item.navigation_name }}</a
              >
              <!-- 内联事件 target_internal_link -->
              <a
                v-if="item.target_type == 'target_internal_link'"
                :href="'/satisfied'"
              >{{
                item.navigation_name
              }}</a>
              <div>
                <!-- {{item.chidren.navigation_name}} -->
              </div>
              <ul v-if="item.chidren != []">
                <li v-for="(s, k) in item.children" :key="k">
                  <!-- 栏目事件 -->
                  <a
                    v-if="s.target_type == 'target_column'"
                    :href="
                      '/sum?column_id=' +
                        s.target_id1 +
                        '&style_id=' +
                        s.style_id +
                        '&article_id='
                    "
                    >{{ s.navigation_name }}</a
                  >
                  <!-- 文章事件 -->
                  <a
                    v-if="s.target_type == 'target_article'"
                    :href="
                      '/article?c_id=' +
                        s.target_id1 +
                        '&a_id=' +
                        s.target_id2
                    "
                    >{{ s.navigation_name }}</a
                  >
                  <!-- 空事件 -->
                  <a
                    v-if="s.target_type == 'target_null'"
                    href="javascript:;"
                    >{{ s.navigation_name }}</a
                  >
                  <!-- target_url 外链事件 -->
                  <a
                    v-if="s.target_type == 'target_url'"
                    :href="s.target_id1"
                    >{{ s.navigation_name }}</a
                  >
                  <!-- 内联事件 target_internal_link -->
                  <a
                    v-if="s.target_type == 'target_internal_link'"
                    :href="'/satisfied'"
                    >{{ s.navigation_name }}</a
                  >
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
  </div>
</template>

<script>
import  myhttp from "../api/myhttp.js";
export default {
  data() {
    return {
      mainNav: "",
      logo: "",
    };
  },
  methods: {
    getHeader(){
      myhttp.post(myhttp._DetailApi.getHeader,{})
      .then((r) => {
          console.log(r);
          this.mainNav = r.data.main_navigation;
          this.logo = r.data.logo;
          console.log(r.data.main_navigation.children);
        })
        .catch((err) => {
          console.log(err);
        });
    }
        
  },
  mounted() {
    this.getHeader()
  },
};
</script>
<style lang="scss" scoped>
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
</style>
