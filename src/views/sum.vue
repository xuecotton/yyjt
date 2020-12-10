<template>
  <div class="sum">
    <div class="banner_ad">
      <img src="../assets/banner_ad.png" alt="" />
    </div>
    <div class="line img_flex">
      <div class="container page_container row_flex">
        <el-menu
          default-active
          class="el-menu-demo"
          mode="horizontal"
          text-color="#282828"
          active-text-color="#282828"
          background-color="#f7f7f7"
        >
          <el-menu-item class="is-active" index="1">{{
            column_name
          }}</el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="container">
      <div class="disease_content">
        <!-- columnone1 一级栏目下只有二级栏目  其他什么内容都没有 -->
        <div class="disease_list" v-if="columnStyleShow == 'columnone1'">
          <div class="disease_title team_title">
            <h3>{{ column_name }}</h3>
            <h3 class="subhead">{{ column_title }}</h3>
            <ul class="column_son">
              <li
                v-for="(item, k) in columnLists"
                :key="k"
                :class="{ act: item.column_id == tab_id }"
                @click="getRightListClick(item, k)"
              >
                {{ item.column_name }}
              </li>
            </ul>
          </div>
          <div>
            <div class="newscenter_list">
              <ul>
                <li
                  class="new2_item newescontent_list"
                  v-for="(N_item, key) in column_list_first"
                  :key="key"
                >
                  <a
                  @click="JumpToArt(N_item.column_id,N_item.article_id)"
                    
                  >
                    <div class="item_left">
                      <div>{{ N_item.release_time | Length(5, 10) }}</div>
                      <div>{{ N_item.release_time | Length(0, 4) }}年</div>
                    </div>
                    <div class="item_right">
                      <div>{{ N_item.article_name }}</div>
                      <div>
                        {{ N_item.article_text }}
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="page_show row_flex cen_flex">
              <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :hide-on-single-page="false"
                :total="Number(totalCount)"
                layout="prev, pager, next"
                :page-size="pageSize"
              ></el-pagination>
            </div>
          </div>
        </div>
        <!-- columnone2 一级栏目没有二级栏目，直接自己就有文章列表 -->
        <div class="disease_list" v-if="columnStyleShow == 'columnone2'">
          <div class="disease_title team_title">
            <h3>{{ column_name }}</h3>
            <h3 class="subhead">{{ column_title }}</h3>
          </div>
          <div>
            <div class="newscenter_list">
              <ul>
                <li
                  class="new2_item newescontent_list"
                  v-for="(N_item, key) in column_list_first"
                  :key="key"
                >
                  <a
                  @click="JumpToArt(N_item.column_id,N_item.article_id)"
                    
                  >
                    <div class="item_left">
                      <div>{{ N_item.release_time | Length(5, 10) }}</div>
                      <div>{{ N_item.release_time | Length(0, 4) }}年</div>
                    </div>
                    <div class="item_right">
                      <div>{{ N_item.article_name }}</div>
                      <div>
                        {{ N_item.article_text }}
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="page_show row_flex cen_flex">
              <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :hide-on-single-page="false"
                :total="Number(totalCount)"
                layout="prev, pager, next"
                :page-size="pageSize"
              ></el-pagination>
            </div>
          </div>
        </div>
        <!-- columnone3 一级栏目有自己需要展示的内容 -->
        <div class="disease_list" v-if="columnStyleShow == 'columnone3'">
          <div class="disease_title team_title">
            <h3>{{ column_name }}</h3>
            <h3 class="subhead">{{ column_title }}</h3>
            <ul class="column_son">
              <li
                v-for="(item, k) in columnLists"
                :key="k"
                :class="{ act: item.column_id == tab_id }"
                @click="getRightListClick(item, k)"
              >
                {{ item.column_name }}
              </li>
            </ul>
          </div>
          <div>
            <div class="newscenter_list">
              <ul>
                <li
                  class="new2_item newescontent_list"
                  v-for="(N_item, key) in column_list_first"
                  :key="key"
                >
                  <a
                  @click="JumpToArt(N_item.column_id,N_item.article_id)"
                    
                  >
                    <div class="item_left">
                      <div>{{ N_item.release_time | Length(5, 10) }}</div>
                      <div>{{ N_item.release_time | Length(0, 4) }}年</div>
                    </div>
                    <div class="item_right">
                      <div>{{ N_item.article_name }}</div>
                      <div>
                        {{ N_item.article_text }}
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="page_show row_flex cen_flex">
              <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :hide-on-single-page="false"
                :total="Number(totalCount)"
                layout="prev, pager, next"
                :page-size="pageSize"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myhttp from "../api/myhttp.js";
export default {
  data() {
    return {
      column: "", //栏目数据
      list: "", //列表数据
      actColumnId: "", //当前选中栏目id
      // 测试用
      test1: "4201907301607306",
      isActive: "", //选中二级栏目的样式
      index: "0", //二级栏目中的下标
      column_name: "", //根据传递过来的一级栏目中的column_id查询出一级栏目中的值；
      column_title: "", //一级栏目的副标题；
      columnLists: [], //二级栏目中的列表
      listStyle_id: "", //列表样式id
      myStyleId: "", //一级栏目样式
      TwostyleId: "", //二级栏目级样式
      column_id: "", //获取栏目的id;
      column_id2: "", //获取二级栏目的id2
      style_id: "",
      pageSize: 5,
      pageNum: 1,
      column_id_first: "", //获取第一个二级栏目中的栏目的id,目的是为了找到第一个二级栏目中的文章列表
      column_name_first: "", //获取第一个二级栏目中的栏目的column_name,
      column_list_first: [], //获取第一个二级栏目中的栏目的list列表
      tab_id: "", //切换当前的列表颜色，点击此列表显示此列表中的颜色
      // 数据的合并；
      fg: "",
      style_id_Show: "", //展示哪一个样式
      // 控制文章的数据
      article_name: "", //文章的标题；
      article_author: "", //文章的作者；
      creat_time: "", //文章创建的时间；
      article_vedio_list: "", //视频信息；
      additional_cover: "", //视频信息的封面图
      NEXT_NAME: "", //下一页；
      PREV_NAME: "", //上一页；
      ueditor_text: "", //文章的详情；
      article_text: "", //商品加文章中的文章的标题；
      article_picture: "", //共产党员的图片
      NEXT_ID: "", //上一篇的文章的article_id
      PREV_ID: "", //下一篇的文章的article_id
      article_id: "", //获取文章id;
      //不区分传入的column_id 是几级栏目
      column_type: "", //区分栏目的类型；
      notowid: false,
      column_name3: "",
      column_title3: "",
      columnLists3: "",
      totalCount: "",
      Crumbs: "", //面包屑导航判断显示有无用在=映象视频+软件下载+全国优秀共产党员
      Crumbs2: "", //只用在关辉历程+先锋故事
      length: "", // 此length的长度用来判断是否由二级栏目，有二级栏目显示第一个二级栏目中的列表的标题，没有显示一级栏目中以及栏目标题
      column_name_three: "", //二级栏目下的三级栏列表下的第一个文章列表中的名称
      length_three: "", //判断三级栏目的长度
      art_column_id: "", //文章详情下的栏目id
      sty_id: "",
      xxdx_column_id: "",
      column_id_three: "",


      // 控制欄目展示樣式
      columnStyleShow:'',
    };
  },
  methods: {
    ShowStyle() {
      const that = this;
      let style_id = that.style_id; //列表样式
      let fg = that.fg; //判断显示文章详情还是栏目列表
      switch (fg) {
        case "1":
          switch (style_id) {
            case "columnone1":
              that.columnStyleShow = "columnone1";
              break;
            case "columnone2":
              that.columnStyleShow = "columnone2";
              break;
            case "columnone3":
              that.columnStyleShow = "columnone3";
              break;
            case "columntwo1":
              that.columnStyleShow = "columntwo1";
              break;
            case "columntwo2":
              that.columnStyleShow = "columntwo2";
              break;
            case "columntwo3":
              that.columnStyleShow = "columntwo3";
              break;
            // case "10":
            //   that.TwostyleId = true;
            //   that.myStyleId = false;
            //   that.notowid = true;
            //   that.Crumbs = false;
            //   that.Crumbs2 = true;
            //   that.listStyle_id = "10";
            //   break;
            // case "14":
            //   that.TwostyleId = true;
            //   that.myStyleId = false;
            //   that.notowid = true;
            //   that.Crumbs = true;
            //   that.Crumbs2 = false;
            //   that.listStyle_id = "14";
            //   break;
            // case "11":
            //   that.TwostyleId = true;
            //   that.myStyleId = false;
            //   that.notowid = true;
            //   that.Crumbs = true;
            //   that.Crumbs2 = false;
            //   that.listStyle_id = "11";
            //   break;
            // case "08":
            //   that.TwostyleId = true;
            //   that.myStyleId = true;
            //   that.notowid = false;
            //   that.Crumbs = false;
            //   that.Crumbs2 = true;
            //   that.listStyle_id = "08";
            //   break;
            // case "03":
            //   that.TwostyleId = true;
            //   that.myStyleId = true;
            //   that.notowid = false;
            //   that.Crumbs = false;
            //   that.Crumbs2 = true;
            //   that.listStyle_id = "08";
            //   break;
            // case "18":
            //   that.TwostyleId = true;
            //   that.myStyleId = false;
            //   that.notowid = true;
            //   that.Crumbs = false;
            //   that.Crumbs2 = true;
            //   that.listStyle_id = "08";
            //   break;
          }
        case "2":
          switch (style_id) {
            case "columnone1":
              that.columnStyleShow = "columnone1";
              break;
            case "columnone2":
              that.columnStyleShow = "columnone2";
              break;
            case "columnone3":
              that.columnStyleShow = "columnone3";
              break;
            case "columntwo1":
              that.columnStyleShow = "columntwo1";
              break;
            case "columntwo2":
              that.columnStyleShow = "columntwo2";
              break;
            case "columntwo3":
              that.columnStyleShow = "columntwo3";
              break;
            // case "05":
            //   that.TwostyleId = true;
            //   that.myStyleId = false;
            //   that.notowid = true;
            //   that.Crumbs = false;
            //   that.Crumbs2 = true;
            //   that.style_id_Show = "05";
            //   break;
            // case "13":
            //   that.TwostyleId = true;
            //   that.myStyleId = false;
            //   that.notowid = true;
            //   that.Crumbs = true;
            //   that.Crumbs2 = false;
            //   that.style_id_Show = "13";
            //   break;
            // case "17":
            //   that.TwostyleId = true;
            //   that.myStyleId = true;
            //   that.notowid = false;
            //   that.Crumbs = false;
            //   that.Crumbs2 = true;
            //   that.style_id_Show = "17";
            //   break;
          }
      }
    },
    // 查询当前栏目及下级栏目
    getcolumnFirst() {
      const that = this;
      var columnParams = {
        that: that,
        _url: myhttp._url,
        ur: myhttp._DetailApi.getFristColumn_api, // 具体接口
        cbk: that.getcolumnFirstCbk, // 回调
        data: {
          column_id: that.column_id,
        },
      };
      myhttp._InitAjax(columnParams);
    },
    getcolumnFirstCbk(res) {
      // debugger
      const that = this;
      // 此length的长度用来判断
      that.length = res.data.children.length;
      // 一进门就查看当前栏目是几级
      if (res.data.column_type == "column_1") {
        that.column_id = res.data.column_id;
        (that.column_name = res.data.column_name),
          (that.column_title = res.data.column_title);
        that.columnLists = res.data.children;
        (that.column_name3 = res.data.column_name),
          (that.column_title3 = res.data.column_title);
        that.columnLists3 = res.data.children;
        that.style_id = res.data.style_id;
      } else if (res.data.column_type == "column_2") {
        if (res.data.children.length > 0) {
          that.column_id_three = res.data.children[0].column_id;
          that.length_three = res.data.children[0].children.length;
          var columnParams = {
            that: that,
            _url: myhttp._url,
            ur: myhttp._DetailApi.getFristColumn_api, // 具体接口
            cbk: that.getmysecond, // 回调
            data: {
              column_id: res.data.column_pid,
            },
          };
          myhttp._InitAjax(columnParams);
        } else {
          (that.column_name3 = res.data.column_name),
            (that.column_name_first = res.data.column_name),
            (that.column_title3 = res.data.column_title);
          that.columnLists3 = res.data.children;
          that.style_id = res.data.style_id;
          var columnParams = {
            that: that,
            _url: myhttp._url,
            ur: myhttp._DetailApi.getFristColumn_api, // 具体接口
            cbk: that.getmysecond, // 回调
            data: {
              column_id: res.data.column_pid,
            },
          };
          myhttp._InitAjax(columnParams);
        }
      } else if (res.data.column_type == "column_3") {
        that.column_name3 = res.data.column_name;
        that.column_title3 = res.data.column_title;
        that.columnLists3 = res.data.children;
        that.style_id = res.data.style_id;
        that.column_name_first = res.data.column_name;
        var columnParams = {
          that: that,
          _url: myhttp._url,
          ur: myhttp._DetailApi.getFristColumn_api, // 具体接口
          cbk: that.getmysecond, // 回调
          data: {
            column_id: res.data.column_pid,
          },
        };
        myhttp._InitAjax(columnParams);
      } else if (res.data.column_type == "column_4") {
        that.column_name3 = res.data.column_name;
        that.column_title3 = res.data.column_title;
        that.columnLists3 = res.data.children;
        that.style_id = res.data.style_id;
        var columnParams = {
          that: that,
          _url: myhttp._url,
          ur: myhttp._DetailApi.getFristColumn_api, // 具体接口
          cbk: that.getmysecond, // 回调
          data: {
            column_id: res.data.column_pid,
          },
        };
        myhttp._InitAjax(columnParams);
      } else if (res.data.column_type == "coloumn_5") {
        that.column_name3 = res.data.column_name;
        that.column_title3 = res.data.column_title;
        that.columnLists3 = res.data.children;
        that.style_id = res.data.style_id;
        var columnParams = {
          that: that,
          _url: myhttp._url,
          ur: myhttp._DetailApi.getFristColumn_api, // 具体接口
          cbk: that.getmysecond, // 回调
          data: {
            column_id: res.data.column_pid,
          },
        };
        myhttp._InitAjax(columnParams);
      }
      // 判断一级栏目下是否有二级栏目
      // 当判断右侧栏目列表是几级栏目下的列表；

      if (that.length == 0) {
        that.getNoTwoColumn(); //  若无二级二级栏目获取本栏目文章列表；
      } else if (res.data.children[0].children.length != 0) {
        // 二级栏目下的三级栏列表下的第一个文章列表中的名称
        that.length_three = res.data.children[0].children.length;
        that.column_name_three = res.data.children[0].children[0].column_name;
        that.column_id_first = res.data.children[0].children[0].column_id;
        that.column_id = res.data.children[0].children[0].column_id;
        that.getFirstArticle();
        that.column_name_first = res.data.children[0].column_name;
      } else {
        (that.column_id_first = res.data.children[0].column_id), //二级栏目中的第一个二级栏目id
          (that.column_name_first = res.data.children[0].column_name),
          // 因有三级栏目注释
          (that.column_id2 = res.data.children[0].column_id); //二级栏目中的第一个二级栏目id
        that.getFirstArticle();
      }
    },
    getmysecond(res) {
      //当栏目id不是最顶级栏目.继续往上查
      const that = this;
      (that.column_name = res.data.column_name),
        (that.column_title = res.data.column_title);
      that.columnLists = res.data.children;
      if (res.data.children[0].children.length > 0) {
        that.column_name3 = res.data.column_name;
        (that.column_name_first = res.data.children[0].column_name),
          (that.column_title3 = res.data.column_title);
        that.columnLists3 = res.data.children;
        that.style_id = res.data.style_id;
        that.column_name_three = res.data.children[0].children[0].column_name;
      }
    },

    // 若无二级二级栏目获取本栏目文章列表；
    getNoTwoColumn() {
      // debugger
      const that = this;
      var NoTwoColumnPramas = {
        that: that,
        _url: myhttp._url,
        ur: myhttp._DetailApi.getNoColumn_api, // 具体接口
        cbk: that.getNoColumnCbk, // 回调
        data: {
          column_id: that.column_id,
          pageSize: that.pageSize,
          pageNum: that.pageNum,
        },
      };
      myhttp._InitAjax(NoTwoColumnPramas);
    },
    getNoColumnCbk(res) {
      const that = this;
      console.log(res)
      if (res.code == "0") {
        that.column_list_first = res.page.list;
        that.totalCount = res.page.totalCount;
      } else {
        this.$message({
          message: "警告获取信息失败",
          type: "warning",
        });
      }
    },

    // 获取第一个二级栏目中的文章列表
    getFirstArticle() {
      const that = this;
      var HaveTwoColumnFristPramas = {
        that: that,
        _url: myhttp._url,
        ur: myhttp._DetailApi.getNoColumn_api, // 具体接口
        cbk: that.getFirstArticleCbk, // 回调
        data: {
          column_id: that.column_id_first,
          pageSize: that.pageSize,
          pageNum: that.pageNum,
        },
      };
      myhttp._InitAjax(HaveTwoColumnFristPramas);
    },
    getFirstArticleCbk(res) {
      const that = this;
      if (res.code == "0") {
        that.column_list_first = res.page.list;
        that.totalCount = res.page.totalCount;
      } else {
        that.$message({
          message: "二级栏目下的第一个文章列表获取失败",
          type: "info",
          duration: 3000,
        });
      }
    },

    // 点击左侧的二级栏目列表获取右侧对应的文章列表；
    getRightListClick(data, index) {
      // debugger
      const that = this;
      that.column_id_three = "";
      // alert(data)
      // 当点击栏目之后如果此栏目下有下级栏目 , 则此点击事件不执行
      // 如果没有执行
      // 根据此栏目下children的长度是否大于0 来判断，如果大于0 说明有下级，由下级则不执行此函数
      if (data.children.length == 0) {
        const that = this;
        that.tab_id = data.column_id;
        that.fg = 1;
        that.listStyle_id = data.style_id;
        that.column_id2 = data.column_id;
        that.column_name_first = data.column_name;
        var HaveTwoColumnPramas = {
          that: that,
          _url: myhttp._url,
          ur: myhttp._DetailApi.getNoColumn_api, // 具体接口
          cbk: that.GetRightCbk, // 回调
          data: {
            column_id: data.column_id,
            pageSize: that.pageSize,
            pageNum: that.pageNum,
          },
        };
        myhttp._InitAjax(HaveTwoColumnPramas);
      }
    },
    getRightListClick_change(data, index) {
      const that = this;
      that.tab_id = data.column_id;
      that.column_id = data.column_id;
      that.xxdx_column_id = data.column_id;
      that.fg = 1;
      that.listStyle_id = data.style_id;
      if (data.style_id == "06" || data.style_id == "12") {
        that.listStyle_id = "10";
      } else if (data.style_id == "18") {
        that.listStyle_id = "08";
      }

      // that.column_name_first=data.column_name
      that.column_name_three = data.column_name;
      // that.column_name3=data.column_name
      var HaveTwoColumnPramas = {
        that: that,
        _url: myhttp._url,
        ur: myhttp._DetailApi.getNoColumn_api, // 具体接口
        cbk: that.GetRightCbk, // 回调
        data: {
          column_id: data.column_id,
          pageSize: that.pageSize,
          pageNum: that.pageNum,
        },
      };
      myhttp._InitAjax(HaveTwoColumnPramas);
    },
    GetRightCbk(res) {
      const that = this;
      if (res.code == "0") {
        that.column_list_first = res.page.list;
        that.totalCount = res.page.totalCount;
      } else {
        that.$message({
          message: "数据加载失败",
          type: "info",
          duration: 3000,
        });
      }
    },


    // 获取文章的详细信息

    getArticleDetails() {
      const that = this;
      if (that.column_id2) {
        if (that.article_id != "") {
          var getArtdet_par = {
            that: that,
            _url: myhttp._url,
            ur: myhttp._DetailApi.getarticledeticle_api, // 具体接口
            cbk: that.getArticleDetailsCbk, // 回调
            data: {
              column_id: that.column_id2,
              article_id: that.article_id
            }
          };
          myhttp._InitAjax(getArtdet_par);
        }
      } else {
        if (that.article_id != "") {
          var getArtdet_par = {
            that: that,
            _url: myhttp._url,
            ur: myhttp._DetailApi.getarticledeticle_api, // 具体接口
            cbk: that.getArticleDetailsCbk, // 回调
            data: {
              column_id: that.column_id,
              article_id: that.article_id
            }
          };
          myhttp._InitAjax(getArtdet_par);
        }
      }
    },
    getArticleDetailsCbk(res) {
      const that = this;
      if (res.stateCode == "200") {
        that.style_id_Show = res.data.style_id;
        if (res.data.style_id == "07" || res.data.style_id == "16") {
          that.style_id_Show = "05";
        }
        that.art_column_id = res.data.column_id;
        that.article_name = res.data.article_name;
        that.article_author = res.data.article_author;
        that.creat_time = res.data.creat_time;
        that.ueditor_text = Base64.decode(res.data.ueditor_text);
        that.article_vedio_list = res.data.article_vedio;
        that.additional_cover = res.data.additional_cover;
        that.PREV_NAME = res.data.PREV_NAME; //上一篇
        that.NEXT_NAME = res.data.NEXT_NAME; //下一篇；
        that.article_text = res.data.article_text; //person共产党员的标题；
        that.article_picture = res.data.article_picture; //共产党员的图片  ;
        that.NEXT_ID = res.data.NEXT_ID; //下一篇的  article_id
        that.PREV_ID = res.data.PREV_ID; //上一篇的  article_id
        that.article_title = res.data.article_title;
      }
    },
    // 跳转到文章
    JumpToArt(c_id,a_id){
      const that = this;
      that.$router.push({
        path: "/articles",
        name: "articles",
        query: {
          a_id: a_id,
          c_id: c_id,
          fg: "1"
        }
      });
    },


    // 分页操作
    handleCurrentChange(val) {
      console.log(val)
      // debugger
      const that = this;
      if (
        that.column_id_three == that.column_id_first &&
        that.column_id_first != ""
      ) {
        var page_parmas = {
          that: that,
          _url: myhttp._url,
          ur: myhttp._DetailApi.getNoColumn_api, // 具体接口
          cbk: that.getNoColumnCbk, // 回调
          data: {
            column_id: that.column_id_three,
            pageSize: that.pageSize,
            pageNum: val,
          },
        };
        myhttp._InitAjax(page_parmas);
      } else if (
        that.column_id_first == that.column_id2 &&
        that.xxdx_column_id == ""
      ) {
        var page_parmas = {
          that: that,
          _url: myhttp._url,
          ur: myhttp._DetailApi.getNoColumn_api, // 具体接口
          cbk: that.getNoColumnCbk, // 回调
          data: {
            column_id: that.column_id_first,
            pageSize: that.pageSize,
            pageNum: val,
          },
        };
        myhttp._InitAjax(page_parmas);
      } else {
        var page_parmas = {
          that: that,
          _url: myhttp._url,
          ur: myhttp._DetailApi.getNoColumn_api, // 具体接口
          cbk: that.getNoColumnCbk, // 回调
          data: {
            column_id: that.column_id,
            pageSize: that.pageSize,
            pageNum: val,
          },
        };
        myhttp._InitAjax(page_parmas);
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },

    JumpMyart(a_id, s_id) {
      const that = this;
      let column_id = that.column_id;
      let column_id2 = that.column_id2;

      that.$router.push({
        path: "/article",
        name: "article",
        query: {
          c_id: item.target_id1, // 栏目
          a_id: item.target_id2, // 文章
        },
      });
      // that.fg = 2;
      // if (s_id == "07") {
      //   that.style_id_Show = "05";
      // } else if (s_id == "17") {
      //   that.style_id_Show = "17";
      // } else if (s_id == "13") {
      //   that.style_id_Show = "13";
      // } else if (s_id == "05") {
      //   that.style_id_Show = "05";
      // } else {
      //   console.log("其他文章样式，暂无");
      // }
    },
  },
  filters: {
    Length(val, num1, num2) {
      return val.substring(num1, num2);
    },
    toUpperCase(val) {
      return val.toUpperCase();
    },
  },
  // mounted() {
  //   var firstColumn = this.pub._LinkParm("column_id");
  //   var style_id = this.pub._LinkParm("style_id");
  //   console.log(firstColumn, "哈哈哈");
  //   if (firstColumn) {
  //     this.getColumn(firstColumn);
  //   }
  // },
  watch: {
    $route(to, from) {
      //监听路由是否变化
      const that = this;
      if (to.query.column_id != from.query.column_id) {
        // 执行事件
        this.style_id = this.$route.query.style_id;
        (this.column_id = this.$route.query.column_id), //获取栏目的id;
          (this.column_id2 = this.$route.query.column_id2), //获取二级栏目的id2
          (this.tab_id = this.$route.query.column_id), //切换当前的列表颜色，点击此列表显示此列表中的颜色
          (this.article_id = this.$route.query.article_id), //获取文章id;
          // 数据的合并；
          (this.fg = this.$route.query.fg);
        this.ShowStyle();
        this.getcolumnFirst();
        this.getArticleDetails();
      }
    },
  },
  created() {
    this.style_id = this.$route.query.style_id;
    (this.column_id = this.$route.query.column_id), //获取栏目的id;
      (this.column_id2 = this.$route.query.column_id2), //获取二级栏目的id2
      (this.tab_id = this.$route.query.column_id), //切换当前的列表颜色，点击此列表显示此列表中的颜色
      (this.article_id = this.$route.query.article_id), //获取文章id;
      // 数据的合并；
      (this.fg = this.$route.query.fg);
    this.ShowStyle();
    this.getcolumnFirst();
    this.getArticleDetails();
  },
};
</script>

<style lang="scss" scoped>
// 栏目背景图
.banner_ad {
  width: 100%;
  height: 450px;
}

.banner_ad img {
  width: 100%;
  height: 100%;
}

.container {
  width: 1200px;
  margin: 0 auto;
}
.disease_content {
  line-height: 28px;
  text-align: justify;
}
.disease_list {
  margin-bottom: 16px;
  line-height: 24px;
  border-right: 1px solid #e6e6e6;
  display: flex;
  justify-content: flex-start;
}
.disease_title {
  margin-right: 110px;
}
.team_title {
  padding: 5px 0;
}
.newscenter_list {
  display: flex;
  /* width: 1110px; */
  justify-content: space-between;
  margin: 30px auto 30px;
  flex-direction: row;
  flex-wrap: wrap;
}
.art_box h3,
.team_title h3,
.disease_title h3 {
  line-height: 38px;
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
}
.subhead {
  font-size: 22px !important;
}
.new2_item a {
  width: 100%;
  margin-bottom: 30px;
  overflow: hidden;
  display: flex;
}
.new2_item a :hover div {
  color: #d90302;
}
.item_left {
  width: 80px;
}
.item_left div {
  width: 100%;
  white-space: nowrap;
}
.item_right {
  max-width: 800px;
  padding-left: 15px;
  border-left: 2px solid #000;
}
.item_right div {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item_right div:nth-child(1),
.item_left div:nth-child(1) {
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 2px;
  color: #424242;
}
.item_right div:nth-child(2),
.item_left div:nth-child(2) {
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0px;
  color: #424242;
}
.column_son li {
  width: 100%;
  height: 35px;
  line-height: 35px;
}
.line {
  height: 60px;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 60px;
}
.img_flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.page_container {
  height: 100%;
}
.row_flex {
  display: flex;
  flex-direction: row;
}
.el-menu--horizontal > .el-menu-item {
  font-size: 18px !important;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 3px solid #16264b !important;
  font-weight: 900;
  color: #16264b !important;
  background-color: transparent !important;
}
.line_border {
  width: 100%;
  height: 1px;
}
// 当前选中的栏目
.act {
  color: #d90302;
}
</style>
