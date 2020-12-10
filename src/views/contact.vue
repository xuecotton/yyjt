<template>
  <div>
    <!-- 横幅 -->
    <div class="banner_ad">
      <img src="../assets/banner_ad.png" alt="" />
    </div>
    <!-- 内容 -->
    <div >
      <!-- 面包屑 -->
      <div class="line img_flex">
        <div class="container page_container row_flex">
          <el-menu
            default-active="1"
            class="el-menu-demo"
            mode="horizontal"
            text-color="#282828"
            active-text-color="#282828"
            background-color="#f7f7f7"
          >
            <!-- <el-menu-item index="1" @click="myjob">招聘</el-menu-item>
            <el-menu-item index="2">患者招募</el-menu-item>
            <el-menu-item index="3">客服咨询</el-menu-item> -->
            <el-menu-item index="1">联系我们</el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="line_border"></div>
      <!-- 空白侧边 -->
      <div class="border_right"></div>
      <!-- 客服 -->
      <div class="container customer" >
      <!-- <div class="container customer" :class="{ introhid: ishid }"> -->
        <div class="row_flex page_art be_flex">
          <div class="art_box">
            <h3>联系我们</h3>
            <h3 class="subhead">customer service</h3>
            <div class=" link_team">
              敬请联系顾客服务团队，我们将在24小时内回复！
            </div>
          </div>
        </div>
        <div class="link_style">
          <div>
            <div class="way_img">
              <div class="customer_bgm maile_bgm"></div>
              邮箱咨询
            </div>
            <div class="customer_title">
              <div class="customer_text">服务咨询邮箱</div>
              <div>
                njletdz@163.com
              </div>
            </div>
          </div>
          <div>
            <div class="way_img">
              <div class="customer_bgm wct_bgm"></div>
              微信咨询
            </div>
            <div class="customer_title">
              <div class="customer_text">
                <img src="../assets/erweima.jpg" alt="" />
              </div>
              <div>
                扫码咨询官网微信账号
              </div>
            </div>
          </div>
          <div>
            <div class="way_img">
              <div class="customer_bgm phone_bgm"></div>
              热线电话
            </div>
            <div class="customer_title">
              <div class="customer_text">服务咨询电话</div>
              <div>
                0371-1111111
              </div>
            </div>
          </div>
          <div>
            <div class="way_img">
              <div class="customer_bgm adress_bgm"></div>
              公司地址
            </div>
            <div class="customer_title">
              <div class="customer_text">公司地址</div>
              <div>
                河南省郑州市新郑市郑新快速通道与泰山路交叉口河南机电学院
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/style.css"
export default {};
</script>

<style lang="scss" scoped>
.illness_list {
  width: 1110px;
  display: flex;
  justify-content: flex-start;
  margin: 15px auto 120px;
  flex-direction: row;
  flex-wrap: wrap;
}

.illness_one {
  font-size: 16px;
  color: #6a6a6a;
  display: block !important;
  text-align: center;
  padding: 22px !important;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  margin: 20px 10px !important;
  background-color: #fff;
  border-radius: 5px;
  width: 350px;
  box-shadow: 19.799px 19.799px 40px 0px rgba(0, 0, 0, 0.1);
  transition: All 0.4s ease-in-out;
}

.illness_one:hover {
  box-shadow: 29.698px 29.698px 60px 0px rgba(0, 0, 0, 0.3);
  transform: translate(0, -5px);
}

.illness_one a {
  display: block;
  justify-content: flex-start;
  font-size: 14px;
  color: #6a6a6a;
  align-items: center;
}

.illness_one h4 {
  font-size: 22px;
  color: #333333;
  margin-bottom: 14px;
  font-weight: 900;
}

.join_content {
  font-size: 16px;
  line-height: 24px;
}

/* 患者 */

.sick_data {
  width: 50%;
  margin: 30px 0 0;
}

.el-textarea__inner {
  min-height: 100px !important;
}

.el-button {
  font-size: 16px !important;
}

.el-form-item__label {
  font-size: 16px !important;
}

.el-radio__label {
  font-size: 16px !important;
}

.sick {
  margin-bottom: 60px;
}

/* 客服 */

.link_team {
  text-align: center;
  font-size: 16px;
  margin: 12px 0 50px;
  color: #666;
}

.link_style {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}

.way_img {
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
  display: block;
  padding: 25px;
  transition: 0.4s;
  border: 1px solid #d3d3d3;
  font-size: 18px;
  color: #202020;
  text-align: center;
  line-height: 36px;
  cursor: pointer;
  width: 250px;
}

.way_img:hover {
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  transform: translate(0, -5px);
}

.customer_bgm {
  height: 50px;
  line-height: 50px;
  background-repeat: no-repeat;
  background-position: center;
  transition: 1s;
}

.maile_bgm {
  background-image: url("../assets/img/mail (2).png");
}

.way_img:hover .maile_bgm {
  background-image: url("../assets/img/mail.png");
}

.wct_bgm {
  background-image: url("../assets/img/wct (2).png");
}

.way_img:hover .wct_bgm {
  background-image: url("../assets/img/wct.png");
}

.phone_bgm {
  background-image: url("../assets/img/call (2).png");
}

.way_img:hover .phone_bgm {
  background-image: url("../assets/img/call.png");
}

.adress_bgm {
  background-image: url("../assets/img/adress (2).png");
}

.way_img:hover .adress_bgm {
  background-image: url("../assets/img/adress.png");
}

.way_img:hover ~ .customer_title {
  opacity: 1;
  transform: translate(0, -5px);
}

.customer_title {
  opacity: 0;
  top: 20px;
  /* background: #fff; */
  z-index: 999;
  width: 250px;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: normal;
  color: #555555;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.customer_text {
  color: #555555;
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
}

/* 简历 */

.news_transcript {
  width: 910px;
  font-size: 14px;
  color: #6a6a6a;
  margin: 0 auto;
  padding-top: 20px;
  margin-bottom: 120px;
}

.newsft_title {
  text-align: center;
  padding: 10px 0 5px;
  border-bottom: 1px solid #dadadf;
}

.newsft_title h1 {
  font-size: 28px;
  color: #262626;
  font-weight: bolder;
  line-height: 32px;
}

.newsft_remarks {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}

.newsft_time {
  margin-right: 12px;
}

.new_transcript_content {
  margin: 30px 0 0;
}

.new_transcript_content p {
  font-size: 16px;
  color: #6a6a6a;
  line-height: 28px;
  text-align: justify;
}

.news_transcript_text {
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
}

.news_transcript_text img {
  width: 100%;
}

.news_character {
  width: 80%;
}

.news_character_mgl {
  padding-left: 40px;
}

.news_character_mgr {
  padding-right: 40px;
}

.partition {
  margin: 0 20px;
}

.img_border {
  border-radius: 30px 0px 30px 0px;
}

.newsbig_img {
  width: 60%;
}

.new_transcript_content h4 {
  text-align: center;
  font-weight: 900;
  padding: 30px 0 20px;
  font-size: 20px;
}

.reference_data p {
  font-size: 14px !important;
  color: #262626 !important;
}

.newsimg_position_center {
  text-align: center !important;
}

.trade_content_important {
  color: rgb(192, 0, 0) !important;
  font-weight: 700 !important;
}

.join_btn {
  width: 98px;
  padding: 10px;
  text-align: center;
  background-color: #409eff !important;
  font-size: 14px;
  border-radius: 5px;
  color: #fff;
  transition: All 0.1s ease-in-out;
  cursor: pointer;
}

.join_btn:hover {
  background-color: #409eff !important;
  opacity: 0.85;
}

/*  */

.join_padding {
  padding-bottom: 24px;
}

/* 弹窗 */

.resume_title {
  width: 68px;
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 30px !important;
  padding: 0 12px 0 0;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.resume_content {
  margin-left: 68px;
  position: relative;
  font-size: 14px;
}

.resume_content:before {
  display: table;
  content: "";
}

.resume_input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
  height: 30px !important;
  line-height: 30px !important;
  border-radius: 5px !important;
}

.input {
  background-color: #fff !important;
  border: 1px solid #dcdfe6;
  height: 30px !important;
  line-height: 30px !important;
  border-radius: 5px !important;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.clearfis {
  clear: both;
  float: none;
}

.file {
  position: relative;
  display: inline-block;
  background: rgba(26, 71, 176, 1) !important;
  border: 1px solid rgba(26, 71, 176, 1) !important;
  border-radius: 4px;
  padding: 4px 12px;
  overflow: hidden;
  color: #fff;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
}

.file input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
}

.file:hover {
  background: #6cb3fa;
  border-color: #6cb3fa;
  color: #fff;
  text-decoration: none;
}

.topic {
  font-size: 12px;
  color: #606266;
  margin-bottom: 12px;
}

.news_transcript {
  display: none;
}

.blockCss {
  display: block;
}

.intro {
  display: block;
}

.introhid {
  display: none !important;
}

.el-dialog--center {
  width: 300px !important;
}

.footer_center {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 15px;
}

.foot_code {
  width: 120px;
  height: 120px;
}

.pd_15 {
  padding: 15px;
}

.company {
  padding-top: 10px;
}

.foot_er_copy {
  margin-top: 30px;
}
</style>
