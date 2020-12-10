<template>
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
              v-if="footer.copyright && footer.copyright.data_status == 'show'"
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
</template>

<script>
import  myhttp  from "../api/myhttp.js";
export default {
  data() {
    return {
      footer: null,
    };
  },
  methods: {
    getFooter() {
      myhttp.post(myhttp._DetailApi.getFooter, {})
        .then((r) => {
          this.footer = r.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getFooter();
  },
};
</script>

<style lang="scss" scoped>
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
