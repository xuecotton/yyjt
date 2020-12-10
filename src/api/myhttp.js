import $ from "jquery"
import axios from 'axios' // 引用axios
const _baseUrl = pub_link // 使用到代理
const apiUrl = _baseUrl
// axios 配置
axios.defaults.timeout = 6000 // 设置接口响应时间
axios.defaults.baseURL = apiUrl // 这是调用数据接口,公共接口url+调用接口名

const myhttp={
  _url:pub_link,//本地服务；
  _DetailApi:{   
    getHeader: 'web/homapage/getHeader', // 获取页头
    getFooter:"web/homapage/getFooter",//获取页脚
    getFristColumn_api:'web/column/column_list_tree_easy', //获取一级栏目级二级栏目信息
    // getNoColumn_api:"web/column/column_articles_list_page", //获取二级栏目下的文章列表信息
    getNoColumn_api:"web/column/column_articles_list_page", //获取二级栏目下的文章列表信息
    getarticledeticle_api:'web/article/article_msg',//获取某一篇文章的详细信息；
    module_message_api:'module_message/save',//在线留言页面
    lookup_column_api:'web/column/column_list_tree',//查询当前栏目及下级栏目信息；
    article_api:'web/column/columns_articles_list_tree_easy'
  }, 

    /**
   * @param {*} that this指向
   * @param {*} _url 公共接口地址
   * @param {*} ur 具体接口地址
   * @param {*} data 形参
   * @param {*} cbk 回调
   */
  _InitAjax: function (op) {
    $.ajax({
      type: "POST",
      headers: {
        token: localStorage.getItem('tk'),
      },
      contentType: "application/json",
      url: op._url + op.ur,
      data: JSON.stringify(op.data),
      error: function (request) {
        console.log(request, "ajax请求失败");
      },
      success: function (res) {
        // console.log(res)
        if (res.stateCode == '400' || res.code == '401' ) {
          // window.location.href='/'
          // console.log('token 失效！！！')
          // alert('token失效！！！')
        } else{
          op.cbk(res);
        }
      },
      fail: function (r) {
        console.log("Ajax的fail函数，", r);
      }
    });
  },
//手机号的验证
/**
 * @param {*} tgt 输入框绑定的值
 */
_CheckPhone(tgt) {
  var phone = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
  if (!phone.test(tgt)) {
    alert("手机号格式错误")
    tgt = "";
    return
  }
},
// 验证用户输入不能为空
/**
* @param val 输入框中的值
*/
_checkVal(val){
  if(!val){
    alert("输入的值不能空着")
    return;
  }
},

// 封装post请求
 post:function (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        // console.log(response.data.code)
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
},
// 封装get请求
get:function  (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        reject(err)
      })
  })
}

}
export default myhttp