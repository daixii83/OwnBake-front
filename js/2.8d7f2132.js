(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"200b":function(t,s,e){"use strict";e("9dda")},"56b4":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"q-px-md"},[e("div",{staticClass:"q-pa-xl bg-accent"},[e("div",{staticClass:"q-py-xl row fit items-center",attrs:{align:"center"}},[e("div",{staticClass:"col-12"},[e("form",{staticClass:"q-pa-md",on:{submit:function(s){return s.preventDefault(),t.simulateSubmit.apply(null,arguments)}}},[e("div",{staticClass:"panel q-pa-xl q-gutter-y-md bg-white column shadow-2"},[e("div",{staticClass:"q-pb-xl text-h4 text-brown"},[t._v("新用戶註冊")]),e("q-input",{ref:"input",attrs:{filled:"",label:"請輸入用戶名稱",rules:[function(t){return t.length>=4&&t.length<=20||"用戶名稱必須介於4-20個字"}],"lazy-rules":""},model:{value:t.form.username,callback:function(s){t.$set(t.form,"username",s)},expression:"form.username"}}),e("q-input",{ref:"input",attrs:{filled:"",label:"請輸入帳號",rules:[function(t){return t.length>=4&&t.length<=20||"帳號長度必須介於4-20個字"}],"lazy-rules":""},model:{value:t.form.account,callback:function(s){t.$set(t.form,"account",s)},expression:"form.account"}}),e("q-input",{ref:"input",staticClass:"q-pb-md",attrs:{filled:"",label:"請輸入email",rules:[function(t){return!!t||"請輸入您的email"},t.isValidEmail],"lazy-rules":""},model:{value:t.form.email,callback:function(s){t.$set(t.form,"email",s)},expression:"form.email"}}),e("q-input",{attrs:{label:"請輸入密碼",filled:"",type:t.isPwd?"password":"text",rules:[function(t){return t.length>=4&&t.length<=20||"密碼長度必須介於4-20個字"}],"lazy-rules":""},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(s){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.form.password,callback:function(s){t.$set(t.form,"password",s)},expression:"form.password"}}),e("q-input",{attrs:{label:"請確認密碼",filled:"",type:t.isPwdAgain?"password":"text",rules:[function(s){return s===t.form.password||"確認密碼不正確"}],"lazy-rules":""},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwdAgain?"visibility_off":"visibility"},on:{click:function(s){t.isPwdAgain=!t.isPwdAgain}}})]},proxy:!0}]),model:{value:t.form.confirmPassword,callback:function(s){t.$set(t.form,"confirmPassword",s)},expression:"form.confirmPassword"}}),e("q-btn",{staticClass:"q-mt-xl",attrs:{type:"submit",loading:t.submitting,label:"註冊",color:"dark",size:"1.3rem"},on:{click:t.register},scopedSlots:t._u([{key:"loading",fn:function(){return[e("q-spinner-dots")]},proxy:!0}])})],1)])])])])])},n=[],a={data(){return{form:{username:"",account:"",email:"",password:"",confirmPassword:""},isPwd:!0,isPwdAgain:!0,submitting:!1,success:!1,failed:!1}},methods:{simulateSubmit(){this.submitting=!0,setTimeout((()=>{this.submitting=!1}),2e3)},isValidEmail(t){const s=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return s.test(t)||"信箱格式錯誤"},async register(){try{await this.api.post("/users",this.form),this.$q.dialog({parent:this,title:"註冊成功",message:"移至登入頁面"}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}catch(t){this.$q.dialog({parent:this,title:"註冊失敗",message:t.response.data.message}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}}}},l=a,r=(e("200b"),e("2877")),o=e("27f9"),u=e("0016"),c=e("9c40"),m=e("8380"),d=e("eebe"),f=e.n(d),p=Object(r["a"])(l,i,n,!1,null,"ebd0a580",null);s["default"]=p.exports;f()(p,"components",{QInput:o["a"],QIcon:u["a"],QBtn:c["a"],QSpinnerDots:m["a"]})},"9dda":function(t,s,e){}}]);