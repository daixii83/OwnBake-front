(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{a9f9:function(t,s,e){},cdbf:function(t,s,e){"use strict";e("a9f9")},f68e:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"q-px-md bg-primary"},[e("div",{staticClass:"q-px-xl q-py-xl bg-accent"},[e("q-breadcrumbs",{staticClass:"text-brown q-py-md",scopedSlots:t._u([{key:"separator",fn:function(){return[e("q-icon",{attrs:{size:"1.5em",name:"chevron_right",color:"primary"}})]},proxy:!0}])},[e("q-breadcrumbs-el",{attrs:{label:"Home",icon:"home"}}),e("q-breadcrumbs-el",{attrs:{label:"購物車",icon:"navigation"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-1"}),e("div",{staticClass:"col-md-10"},[e("q-stepper",{ref:"stepper",attrs:{"header-nav":"","alternative-labels":"",contracted:t.$q.screen.lt.sm,color:"primary",animated:""},model:{value:t.step,callback:function(s){t.step=s},expression:"step"}},[e("q-step",{attrs:{name:1,title:"寄送與付款方式",icon:"settings",done:t.done1}},[e("div",{staticClass:"row q-py-md justify-center",attrs:{align:"center"}},[e("div",{staticClass:"col-12"},[e("q-table",{ref:"table",staticStyle:{width:"100%","max-width":"1500px"},attrs:{title:"購物車",data:t.products,columns:t.columns,"row-key":"name","binary-state-sort":""},scopedSlots:t._u([{key:"body",fn:function(s){return[e("q-tr",{attrs:{props:s}},[e("q-td",{key:"productCategories",attrs:{props:s}},[t._v(t._s(s.row.product.productCategories))]),e("q-td",{key:"productName",attrs:{props:s}},[t._v(t._s(s.row.product.productName))]),e("q-td",{key:"productImage",attrs:{props:s}},[e("img",{staticClass:"text-center",staticStyle:{width:"100px","max-height":"100px"},attrs:{src:s.row.product.productImage}})]),e("q-td",{key:"productPrice",attrs:{props:s}},[t._v(t._s(s.row.product.productPrice))]),e("q-td",{key:"quantity",staticClass:"justify-center",attrs:{props:s}},[e("q-input",{ref:"num",staticStyle:{"max-width":"100px"},attrs:{rounded:"",outlined:"",type:"number","lazy-rules":"",rules:[function(t){return t>=1||"商品最小數量為1"}]},on:{input:function(e){return t.updateCart(s.pageIndex,s.row.quantity)}},model:{value:s.row.quantity,callback:function(e){t.$set(s.row,"quantity",t._n(e))},expression:"props.row.quantity"}})],1),e("q-td",{key:"subtotal",attrs:{props:s}},[t._v("\n                      "+t._s(t.total)+"\n                      ")]),e("q-td",{key:"delete",attrs:{props:s}},[e("q-btn",{staticClass:"bg-white q-px-md bubble",attrs:{size:"0.7rem"},on:{click:function(e){return t.updateCart(s.pageIndex,s.row.quantity=0)}}},[e("q-icon",{attrs:{size:"20px",name:"far fa-trash-alt"}})],1)],1)],1)]}}])})],1),e("div",{staticClass:"col-12 q-py-xl"},[e("div",{staticClass:"text-body1 q-py-md"},[t._v("還有想要購買的商品嗎？")]),e("q-btn",{staticClass:"bg-white q-px-md bubble",attrs:{size:"1rem",to:"/Products"}},[e("q-icon",{attrs:{size:"20px",name:"far fa-hand-point-right"}}),t._v("繼續購買")],1)],1),e("div",{staticClass:"col-12"},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col-6 text-body1 q-pr-md",attrs:{align:"right"}},[t._v("\n                  請選擇寄送方式：\n                ")]),e("div",{staticClass:"col-6 q-pt-md",attrs:{align:"left"}},[e("q-select",{staticStyle:{width:"200px"},attrs:{rounded:"",outlined:"",options:t.delOptions,rules:[function(t){return t.length>1||"請選擇寄送方式"}]},model:{value:t.order.delivery,callback:function(s){t.$set(t.order,"delivery",s)},expression:"order.delivery"}})],1)])]),e("div",{staticClass:"col-12"},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col-6 text-body1 q-pr-md",attrs:{align:"right"}},[t._v("\n                  請選擇付款方式：\n                ")]),e("div",{staticClass:"col-6 q-pt-md",attrs:{align:"left"}},[e("q-select",{staticStyle:{width:"200px"},attrs:{rounded:"",outlined:"",options:t.payOptions,rules:[function(t){return t.length>1||"請選擇付款方式"}]},model:{value:t.order.pay,callback:function(s){t.$set(t.order,"pay",s)},expression:"order.pay"}})],1)])])]),e("q-stepper-navigation",{attrs:{align:"end"}},[e("q-btn",{attrs:{color:"primary",label:"下一步"},on:{click:function(){t.done1=!0,t.step=2}}})],1)],1),e("q-step",{attrs:{name:2,title:"填寫寄送資料",icon:"create_new_folder",done:t.done2}},[e("div",{staticClass:"row q-py-md text-body1"},[e("div",{staticClass:"col-12 q-pt-xl q-gutter-md"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-10"},[t._v("寄送方式： "+t._s(t.order.delivery)+" ")]),e("div",{staticClass:"col-1"})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-4"},[t._v("收件人")]),e("div",{staticClass:"col-6"},[e("q-input",{ref:"recipient",attrs:{outlined:"",type:"text","lazy-rules":"",rules:[function(t){return t&&t.length>0||"請輸入收件人"}]},model:{value:t.order.recipient,callback:function(s){t.$set(t.order,"recipient",s)},expression:"order.recipient"}})],1),e("div",{staticClass:"col-1"})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-4"},[t._v("手機號碼")]),e("div",{staticClass:"col-6"},[e("q-input",{ref:"mobile",attrs:{outlined:"",type:"text","lazy-rules":"",rules:[function(t){return t&&t.length>0&&t!==Number||"請輸入手機號碼"}]},model:{value:t.order.mobile,callback:function(s){t.$set(t.order,"mobile",s)},expression:"order.mobile"}})],1),e("div",{staticClass:"col-1"})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-4"},[t._v("email")]),e("div",{staticClass:"col-6"},[e("q-input",{ref:"email",attrs:{outlined:"",type:"text","lazy-rules":"",rules:[function(t){return t&&t.length>0||"請輸入email"}]},model:{value:t.order.email,callback:function(s){t.$set(t.order,"email",s)},expression:"order.email"}})],1),e("div",{staticClass:"col-1"})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-4"},[t._v("收件地址")]),e("div",{staticClass:"col-6"},[e("q-input",{ref:"mobile",attrs:{outlined:"",type:"text","lazy-rules":"",rules:[function(t){return t&&t.length>0||"請輸入收件地址"}]},model:{value:t.order.address,callback:function(s){t.$set(t.order,"address",s)},expression:"order.address"}})],1),e("div",{staticClass:"col-1"})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-4"},[t._v("備註")]),e("div",{staticClass:"col-6"},[e("q-input",{attrs:{outlined:"",type:"textarea"},model:{value:t.order.remark,callback:function(s){t.$set(t.order,"remark",s)},expression:"order.remark"}})],1),e("div",{staticClass:"col-1"})]),e("div",{staticClass:"row q-pt-xl"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-10"},[t._v("付款方式： "+t._s(t.order.pay)+" ")]),e("div",{staticClass:"col-1"})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-4"},[t._v("信用卡號")]),e("div",{staticClass:"col-6"},[e("q-input",{attrs:{outlined:"",mask:"#### #### #### ####","fill-mask":"#",rules:[function(t){return t&&t.length>0&&t!==Number||"請輸入信用卡號"}]},model:{value:t.order.card,callback:function(s){t.$set(t.order,"card",s)},expression:"order.card"}})],1),e("div",{staticClass:"col-1"})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-4"},[t._v("持卡人姓名")]),e("div",{staticClass:"col-6"},[e("q-input",{attrs:{outlined:"",rules:[function(t){return t&&t.length>0||"請輸入持卡人姓名"}]},model:{value:t.order.cardHolder,callback:function(s){t.$set(t.order,"cardHolder",s)},expression:"order.cardHolder"}})],1),e("div",{staticClass:"col-1"})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-4"},[t._v("有效期限")]),e("div",{staticClass:"col-8"},[e("q-input",{attrs:{outlined:"",rules:[function(t){return t&&t.length>0&&t!==Number||"請輸入有效期限"}],mask:"##/##","fill-mask":"#"},model:{value:t.order.cardExpiry,callback:function(s){t.$set(t.order,"cardExpiry",s)},expression:"order.cardExpiry"}})],1)])]),e("div",{staticClass:"col-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-4"},[t._v("安全碼")]),e("div",{staticClass:"col-6"},[e("q-input",{attrs:{outlined:"",rules:[function(t){return t&&t.length>0&&t!==Number||"請輸入安全碼"}],mask:"###","fill-mask":"#"},model:{value:t.order.cardCSC,callback:function(s){t.$set(t.order,"cardCSC",s)},expression:"order.cardCSC"}})],1),e("div",{staticClass:"col-1"})])]),e("div",{staticClass:"col-1"})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-5"},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col-6 text-body1 q-pr-md",attrs:{align:"right"}},[t._v("\n                    請選擇發票寄送方式：\n                  ")]),e("div",{staticClass:"col-6 q-pt-md",attrs:{align:"left"}},[e("q-select",{staticStyle:{width:"200px"},attrs:{rounded:"",outlined:"",options:t.recOptions,rules:[function(t){return t.length>1||"請選擇發票寄送方式"}]},model:{value:t.order.receipt,callback:function(s){t.$set(t.order,"receipt",s)},expression:"order.receipt"}})],1)])]),"電子發票"===t.order.receipt?e("div",{staticClass:"col-5"},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col-6 text-body1 q-pr-md",attrs:{align:"right"}},[t._v("\n                    載具類型：\n                  ")]),e("div",{staticClass:"col-6 q-pt-md",attrs:{align:"left"}},[e("q-select",{staticStyle:{width:"200px"},attrs:{rounded:"",outlined:"",options:t.carOptions},model:{value:t.order.receiptCarrier,callback:function(s){t.$set(t.order,"receiptCarrier",s)},expression:"order.receiptCarrier"}})],1)])]):t._e(),e("div",{staticClass:"col-1"})])])]),e("q-stepper-navigation",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"上一步"},on:{click:function(s){t.step=1}}})],1),e("div",{staticClass:"col-6",attrs:{align:"end"}},[e("q-btn",{attrs:{color:"primary",label:"下一步"},on:{click:function(){t.done2=!0,t.step=3}}})],1)])])],1),e("q-step",{attrs:{name:3,title:"確認訂單",icon:"add_comment",done:t.done3}},[e("div",{staticClass:"row q-pt-md q-pb-md text-normal"},[e("div",{staticClass:"col-12 q-pt-md  text-h6",attrs:{align:"center"}},[t._v("請確認訂單資訊是否正確")]),e("div",{staticClass:"col-12 q-pb-xl text-normal text-grey",attrs:{align:"center"}},[t._v("如需修改可點選上方步驟返回")]),e("div",{staticClass:"col-12 q-gutter-y-md text-normal",attrs:{align:"center"}},[e("div",{staticClass:"row text-h6 text-bold",attrs:{align:"center"}},[e("div",{staticClass:"col-12"},[t._v("\n                寄送方式： "+t._s(t.order.delivery)+"\n              ")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6",attrs:{align:"end"}},[e("div",{staticClass:"text-body1"},[t._v("收件人姓名：")]),e("div",{staticClass:"text-body1"},[t._v("手機號碼：")]),e("div",{staticClass:"text-body1"},[t._v("email：")]),e("div",{staticClass:"text-body1"},[t._v("寄送地址：")]),e("div",{staticClass:"text-body1"},[t._v("備註：")])]),e("div",{staticClass:"col-6",attrs:{align:"start"}},[e("div",{staticClass:"text-body1"},[t._v(" "+t._s(t.order.recipient)+" ")]),e("div",{staticClass:"text-body1"},[t._v(" "+t._s(t.order.mobile)+" ")]),e("div",{staticClass:"text-body1"},[t._v(" "+t._s(t.order.email)+" ")]),e("div",{staticClass:"text-body1"},[t._v(" "+t._s(t.order.address)+" ")]),e("div",{staticClass:"text-body1"},[t._v(" "+t._s(t.order.remark)+" ")])])]),e("div",{staticClass:"row text-h6 text-bold",attrs:{align:"center"}},[e("div",{staticClass:"col-12"},[t._v("\n                付款方式： "+t._s(t.order.pay)+"\n              ")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6",attrs:{align:"end"}},[e("div",{staticClass:"text-body1"},[t._v("信用卡號：")]),e("div",{staticClass:"text-body1"},[t._v("持卡人姓名：")]),e("div",{staticClass:"text-body1"},[t._v("有效期限：")]),e("div",{staticClass:"text-body1"},[t._v("安全碼：")])]),e("div",{staticClass:"col-6",attrs:{align:"start"}},[e("div",{staticClass:"text-body1"},[t._v(" "+t._s(t.order.card)+" ")]),e("div",{staticClass:"text-body1"},[t._v(" "+t._s(t.order.cardHolder)+" ")]),e("div",{staticClass:"text-body1"},[t._v(" "+t._s(t.order.cardExpiry)+" ")]),e("div",{staticClass:"text-body1"},[t._v(" "+t._s(t.order.cardCSC)+" ")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("q-table",{ref:"table",staticStyle:{width:"100%","max-width":"1500px"},attrs:{title:"購物車",data:t.products,columns:t.columns1,"row-key":"name","binary-state-sort":"",flat:""},scopedSlots:t._u([{key:"body",fn:function(s){return[e("q-tr",{attrs:{props:s}},[e("q-td",{key:"productCategories",attrs:{props:s}},[t._v(t._s(s.row.product.productCategories))]),e("q-td",{key:"productName",attrs:{props:s}},[t._v(t._s(s.row.product.productName))]),e("q-td",{key:"productImage",attrs:{props:s}},[e("img",{staticClass:"text-center",staticStyle:{width:"100px","max-height":"100px"},attrs:{src:s.row.product.productImage}})]),e("q-td",{key:"productPrice",attrs:{props:s}},[t._v(t._s(s.row.product.productPrice))]),e("q-td",{key:"quantity",attrs:{props:s}},[t._v(t._s(s.row.quantity))])],1)]}}])}),e("div",[t._v("總金額："+t._s(t.total))])],1)])])]),e("q-stepper-navigation",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",color:"primary",label:"上一步"},on:{click:function(s){t.step=2}}})],1),e("div",{staticClass:"col-6",attrs:{align:"end"}},[e("q-btn",{attrs:{color:"primary",label:"結帳",disabled:0===t.products.length},on:{click:t.checkout}})],1)])])],1)],1)],1),e("div",{staticClass:"col-md-1"})])],1)])},r=[];const i=[{name:"productCategories",required:!0,label:"商品種類",align:"left",field:t=>t.product.productCategories,format:t=>`${t}`,sortable:!0},{name:"productName",align:"left",label:"商品名稱",field:"product.productName"},{name:"productImage",align:"center",label:"商品圖片",field:"product.productImage"},{name:"productPrice",align:"center",label:"價格",field:"product.productPrice"},{name:"quantity",align:"center",label:"數量",field:"quantity"},{name:"delete",align:"center",label:"刪除",field:"delete"}],l=[{name:"productCategories",required:!0,label:"商品種類",align:"left",field:t=>t.product.productCategories,format:t=>`${t}`,sortable:!0},{name:"productName",align:"left",label:"商品名稱",field:"product.productName"},{name:"productImage",align:"center",label:"商品圖片",field:"product.productImage"},{name:"productPrice",align:"center",label:"價格",field:"product.productPrice"},{name:"quantity",align:"center",label:"數量",field:"quantity"}];var o={data(){return{products:[],columns:i,columns1:l,step:1,done1:!1,done2:!1,done3:!1,delOptions:["宅配(冷藏寄送)","7-11取貨","全家取貨","到店取貨"],payOptions:["信用卡","i-bon付款","linePay"],recOptions:["電子發票","二聯式統一發票","捐贈發票"],carOptions:["手機條碼","會員載具"],order:{delivery:"",pay:"",recipient:"",mobile:"",email:"",address:"",remark:"",card:"",cardHolder:"",cardExpiry:"",cardCSC:"",receipt:"",receiptCarrier:"",orderStatus:!1}}},methods:{async updateCart(t,s){try{await this.api.patch("/users/me/cart",{product:this.products[t].product._id,quantity:this.products[t].quantity},{headers:{authorization:"Bearer "+this.$store.getters["user/user"].token}}),0===s&&(this.products.splice(t,1),this.$store.commit("user/updateCart",this.user.cart-1))}catch(e){console.log(e),this.$q.dialog({parent:this,title:"錯誤",message:"修改購物車失敗"}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}},async checkout(){try{await this.api.post("/orders",this.order,{headers:{authorization:"Bearer "+this.$store.getters["user/user"].token}}),console.log(this.order),this.$router.push("/Member/MyOrders"),this.$q.dialog({parent:this,title:"成功",message:"結帳成功"}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}catch(t){console.log(t),this.$q.dialog({parent:this,title:"錯誤",message:t.response.data.message}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}},reset(){this.done1=!1,this.done2=!1,this.done3=!1,this.step=1},isValidEmail(t){const s=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return s.test(t)||"信箱格式錯誤"},eReceipt(){this.recOptions="電子載具"}},computed:{user(){return this.$store.getters["user/user"]},total(){return this.products.reduce(((t,s)=>t+s.quantity*s.product.productPrice),0)}},async created(){try{const{data:t}=await this.api.get("/users/me/cart",{headers:{authorization:"Bearer "+this.$store.getters["user/user"].token}});this.products=t.result}catch(t){console.log(t),this.$q.dialog({parent:this,title:"錯誤",message:"取得購物車失敗"}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}},c=o,d=(e("cdbf"),e("2877")),n=e("ead5"),p=e("0016"),u=e("079e"),v=e("f531"),m=e("87fe"),C=e("eaac"),y=e("bd08"),b=e("db86"),g=e("27f9"),q=e("9c40"),f=e("ddd8"),x=e("b19c"),h=e("eebe"),_=e.n(h),w=Object(d["a"])(c,a,r,!1,null,"1f91d0be",null);s["default"]=w.exports;_()(w,"components",{QBreadcrumbs:n["a"],QIcon:p["a"],QBreadcrumbsEl:u["a"],QStepper:v["a"],QStep:m["a"],QTable:C["a"],QTr:y["a"],QTd:b["a"],QInput:g["a"],QBtn:q["a"],QSelect:f["a"],QStepperNavigation:x["a"]})}}]);