<template>
  <div>
    
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
    };
  },
  methods: {
    getColumn(column_id) {
      // 获取栏目逻辑: 接收传过来的column_id 查询column树,若column_pid不为空,说明不是一级栏目,需要拿着这个column_pid作为column_id向上查询;
      myhttp
        .post(myhttp._DetailApi.lookup_column_api, { column_id: column_id })
        .then((r) => {
          console.log(r);
          if (r.data.column_type == "column_1") {
            //如果当前一级栏目,,,判断有没有子栏目
            this.column = r.data;
            this.actColumnId = r.data.children[0].column_id;
            this.getList(actColumnId);
          } else if (r.data.column_type == "column_2") {
            //如果当前二级栏目
            this.getColumn(r.data.column_pid);
          }

          // if (r.data.column_pid == "") {
          //   this.column = r.data;
          //   if(r.data.column_type=='"column_1'){
          //     this.actColumnId = r.data.children[0].column_id;
          //   }else{
          //     this.actColumnId = r.data.column_id;
          //   }
          //   this.getList(this.actColumnId);
          // } else {
          //   this.getColumn(r.data.column_pid);
          //   this.actColumnId = column_id;
          //   this.getList(column_id);
          // }
        });
    },
    getList(column_id) {
      myhttp
        .post(myhttp._DetailApi.getNoColumn_api, {
          column_id: column_id,
          pageNum: "1",
          pageSize: "5",
        })
        .then((r) => {
          console.log(r);
          this.list = r.page.list;
          console.log(this.list);
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页${val}`);
    },

    // 切换栏目
    changeActColumn(nums) {
      this.actColumnId = nums;
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
  mounted() {
    var firstColumn = this.pub._LinkParm("column_id");
    var style_id = this.pub._LinkParm("style_id");
    console.log(firstColumn, "哈哈哈");
    if (firstColumn) {
      this.getColumn(firstColumn);
    }
  },
};
</script>

<style lang="scss" scoped>
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
  margin-right: 150px;
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
  border: 1px solid #e6e6e6;
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
