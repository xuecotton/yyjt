<template>
  <div id="article" class="articles">
      <div v-if="content" class="container">
      <div class="art_box">
        <div class="art_tit">{{content.article_name}}</div>
        <div class="art_con">
          <div class="art_time">
            <div class="art_time_l">{{content.release_time}}</div>
            <div>作者: {{content.article_author}}</div>
          </div>
          <div class="art_txt" v-html="ueditor_text">
            
          </div>
          <div class="page_art">
            <div>
              <a :href='"articles?column_id=" + column_id + "&article_id=" + content.PREV_ID'>
                <span>上一篇</span>
                <i>{{content.PREV_NAME}}</i>
              </a>
            </div>
            <div>
              <a :href='"articles?column_id=" + column_id + "&article_id=" + content.NEXT_ID'>
                <span>下一篇</span>
                <i>{{content.NEXT_NAME}}</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      article_id:"",
      column_id:"",
      content:false,
      art_column_id : "",
      article_name : "",
      article_author : "",
      creat_time : "",
      ueditor_text : "",
      article_vedio_list : "",
      additional_cover : "",
      PREV_NAME : "", //上一篇
      NEXT_NAME : "", //下一篇；
      article_text : "", //person共产党员的标题；
      article_picture : "",//共产党员的图片  ,
      NEXT_ID : "", //下一篇的  article_id
      PREV_ID : "", //上一篇的  article_id
      article_title :"",
      style_id_Show:"",
    }
  },
  methods:{
   
    getArticleDetails() {
      const that = this;
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
    decode64(val){
      return this.Base64.Base64.decode(val)
    },
  },
  
  mounted(){
    this.column_id =  this.pub._LinkParm("column_id");
    this.article_id =  this.pub._LinkParm("article_id");
  }
}
</script>

<style lang="scss" scoped>
    .page_art {
      padding: 0px 30px 30px 30px;
    }

    .page_art i:hover {
      color: #16264b;
    }

    .page_art div {
      font-size: 14px;
      color: #7a7e7f;
      margin-bottom: 10px;
      cursor: pointer;
    }

    .page_art span {
      display: inline-block;
      padding: 5px;
      background-color: #e8ebec;
      border-radius: 2px;
      margin-right: 10px;
    }

    .art_txt {
      padding: 10px 30px 30px 30px;
      text-align: justify;
    }

    .art_time {
      height: 33px;
      line-height: 33px;
      text-align: center;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #a4a6a7;
      display: flex;
      justify-content: center;
    }

    .art_box {
      position: relative;
      width: 960px;
      /* height: 500px; */
      margin: 0 auto;
      top: -63px;
    }

    .art_con {
      background-color: white;
      box-shadow: 0px 6px 8px 0px rgba(7, 17, 27, 0.2);
    }

    .art_tit {
      width: 100%;
      background-color: #e8ebec;
      padding: 15px;
      text-align: center;
      color: #333937;
      font-size: 28px;
      font-weight: 600;
    }

    .art_time_l {
      margin-right: 15px;
    }

    /* 顶部图片 */

    .bann_box img {
      width: 100%;
    }
</style>