(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{fbc9:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-dialog",{ref:"dialog",on:{hide:t.onDialogHide}},[s("q-card",{staticClass:"q-dialog-plugin bg-accent q-pa-md",staticStyle:{"max-width":"1500px","max-height":"1000px",width:"1000px",height:"650px"}},[s("div",{staticClass:"row q-pa-md bg-dark text-white"},[s("div",{staticClass:"col-4"},[t._v("訂單號碼： "+t._s(t.orders._id))]),s("div",{staticClass:"col-4"},[t._v("訂購日期： "+t._s(t.orders.date))]),s("div",{staticClass:"col-4"},[t._v("\n        訂單狀態："),!0===t.orders.order.orderStatus?s("div",{staticClass:"div"},[t._v("已完成")]):t._e(),!1===t.orders.order.orderStatus?s("div",{staticClass:"div"},[t._v("待出貨")]):t._e()])]),s("div",{staticClass:"row bg-primary text-white q-py-md"},[s("div",{staticClass:"col-3",attrs:{align:"center"}},[t._v("商品圖片")]),s("div",{staticClass:"col-3",attrs:{align:"center"}},[t._v("商品名稱")]),s("div",{staticClass:"col-3",attrs:{align:"center"}},[t._v("數量")]),s("div",{staticClass:"col-3",attrs:{align:"center"}},[t._v("價格")])]),t._l(t.orders.products,(function(e){return s("div",{key:e.id,staticClass:"row items-center q-pa-md bg-white"},[s("div",{staticClass:"col-3",attrs:{align:"center"}},[s("img",{staticClass:"text-center",staticStyle:{width:"100px","max-height":"100px"},attrs:{src:e.product.productImage}})]),s("div",{staticClass:"col-3",attrs:{align:"center"}},[t._v(t._s(e.product.productName))]),s("div",{staticClass:"col-3",attrs:{align:"center"}},[t._v(t._s(e.quantity))]),s("div",{staticClass:"col-3",attrs:{align:"center"}},[t._v(t._s(e.product.productPrice))])])})),s("div",{staticClass:"row q-pa-md bg-primary text-white"},[s("div",{staticClass:"col-12"},[t._v("\n        寄送方式："+t._s(t.orders.order.delivery)+"\n      ")])]),s("div",{staticClass:"row q-pa-md bg-white"},[s("div",{staticClass:"col-2"},[s("div",[t._v("\n          寄件人姓名：\n        ")]),s("div",[t._v("\n          手機號碼：\n        ")]),s("div",[t._v("\n          email：\n        ")]),s("div",[t._v("\n          寄送地址：\n        ")]),s("div",[t._v("\n          備註：\n        ")])]),s("div",{staticClass:"col-10 text-dark"},[s("div",[t._v("\n          "+t._s(t.orders.order.recipient)+"\n        ")]),s("div",[t._v("\n          "+t._s(t.orders.order.mobile)+"\n        ")]),s("div",[t._v("\n          "+t._s(t.orders.order.mobile)+"\n        ")]),s("div",[t._v("\n          "+t._s(t.orders.order.address)+"\n        ")]),s("div",[t._v("\n          "+t._s(t.orders.order.remark)+"\n        ")])])]),s("div",{staticClass:"row q-pa-md bg-primary text-white"},[s("div",{staticClass:"col-6"},[t._v("\n        付款方式："+t._s(t.orders.order.pay)+"\n      ")]),s("div",{staticClass:"col-6"},[t._v("\n        發票寄送方式："+t._s(t.orders.order.receiptCarrier)+"\n      ")])]),s("div",{staticClass:"row q-pa-md text-dark bg-white"},[s("div",{staticClass:"col-6"}),"手機條碼"===t.orders.order.receiptCarrier?s("div",{staticClass:"col-6"},[t._v("\n        手機條碼："+t._s(t.orders.order.code)+"\n      ")]):t._e()]),s("q-card-actions",{staticClass:"q-pa-md",attrs:{align:"center"}},[s("q-btn",{attrs:{color:"primary",label:"關閉"},on:{click:t.hide}})],1)],2)],1)},a=[],i={props:{orderInfo:{type:Object}},data(){return{orders:{}}},methods:{onRejected(t){this.$q.notify({type:"negative",message:`${t.length} file(s) did not pass validation constraints`})},show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")}},computed:{},async created(){this.orders=this.orderInfo}},o=i,d=s("2877"),c=s("24e8"),n=s("f09f"),l=s("4b7e"),v=s("9c40"),p=s("eebe"),_=s.n(p),u=Object(d["a"])(o,r,a,!1,null,"95e34242",null);e["a"]=u.exports;_()(u,"components",{QDialog:c["a"],QCard:n["a"],QCardActions:l["a"],QBtn:v["a"]})},fde2:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-pa-xl bg-white"},[s("q-table",{ref:"table",attrs:{title:"我的訂單",data:t.orders,columns:t.columns,"row-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){return[s("q-tr",{attrs:{props:e}},[s("q-td",{key:"productCategories",attrs:{props:e}},[t._v(t._s(e.row._id))]),s("q-td",{key:"productName",attrs:{props:e}},[t._v(t._s(e.row.date))]),s("q-td",{key:"productPrice",attrs:{props:e}},[!1===e.row.order.orderStatus?s("div",[t._v(" 處理中 ")]):t._e(),!0===e.row.order.orderStatus?s("div",[t._v(" 已出貨 ")]):t._e(),!0===e.row.order.cancelStatus?s("div",[t._v(" 已取消 ")]):t._e()]),s("q-td",{key:"productSell",attrs:{props:e}},[t._v("\n            "+t._s(e.row.productSell)+"\n            ")]),s("q-td",{key:"productDescription",attrs:{props:e}},[t._v(t._s(e.row.productDescription))]),s("q-td",{key:"quantitySold",attrs:{props:e}},[t._v(t._s(e.row.quantitySold))]),s("q-td",{key:"editOrDelete"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("q-btn",{staticClass:"bg-white bubble",attrs:{size:"0.7rem"},on:{click:function(s){return t.orderInfo(e.pageIndex)}}},[t._v("查看詳細")])],1),s("div",{staticClass:"col-6"},[s("q-btn",{staticClass:"bg-white bubble",attrs:{to:"/Admin/editProduct",size:"0.7rem"}},[t._v("取消訂單")])],1)])])],1)]}}])})],1)},a=[],i=s("fbc9");const o=[{name:"productCategories",required:!0,label:"訂單編號",align:"left",field:t=>t.productCategories,format:t=>`${t}`},{name:"productName",align:"left",label:"訂購日期",field:"productName"},{name:"productPrice",align:"center",label:"訂單狀態",field:"productImage",style:"width: 10px"},{name:"editOrDelete",align:"center",label:"操作",field:"editOrDelete"}];var d={data(){return{columns:o,orders:[]}},methods:{orderInfo(t){this.order={...this.orders[t]},console.log(this.order),this.$q.dialog({title:"",component:i["a"],parent:this,orderInfo:this.order}).onOk((()=>{console.log("OK")})).onCancel((()=>{console.log("Cancel")})).onDismiss((()=>{console.log("Called on OK or Cancel")}))}},async created(){try{const{data:t}=await this.api.get("/orders/me",{headers:{authorization:"Bearer "+this.$store.getters["user/user"].token}});this.orders=t.result}catch(t){console.log(t),this.$q.dialog({parent:this,title:"錯誤",message:"取得訂單失敗"}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}},c=d,n=s("2877"),l=s("eaac"),v=s("bd08"),p=s("db86"),_=s("9c40"),u=s("eebe"),g=s.n(u),m=Object(n["a"])(c,r,a,!1,null,"46d6259c",null);e["default"]=m.exports;g()(m,"components",{QTable:l["a"],QTr:v["a"],QTd:p["a"],QBtn:_["a"]})}}]);