(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/address/edit/edit"],{"028d":function(e,t,n){"use strict";n.r(t);var i=n("fb69"),a=n("367a");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);n("61b4");var o,d=n("f0c5"),c=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);t["default"]=c.exports},"367a":function(e,t,n){"use strict";n.r(t);var i=n("b970"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=a.a},"61b4":function(e,t,n){"use strict";var i=n("ec4d"),a=n.n(i);a.a},b970:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n("9e95");var i=n("e228"),a=function(){return Promise.all([n.e("common/vendor"),n.e("components/mpvue-citypicker/mpvueCityPicker")]).then(n.bind(null,"0f51"))},s={components:{mpvueCityPicker:a},data:function(){return{userId:0,editType:"edit",id:"",name:"",tel:"",detailed:"",isDefault:!1,cityPickerValue:[0,0,1],themeColor:"#007AFF",region:{label:"请点击选择地址",value:[],cityCode:""}}},methods:{onCancel:function(e){console.log(e)},chooseCity:function(){this.$refs.mpvueCityPicker.show()},onConfirm:function(e){console.log(e),this.region=e,this.cityPickerValue=e.value},isDefaultChange:function(e){this.isDefault=e.detail.value},del:function(){var t=this;e.showModal({title:"删除提示",content:"你将删除这个收货地址",success:function(n){n.confirm?e.setStorage({key:"delAddress",data:{id:t.id},success:function(){e.navigateBack()}}):n.cancel&&console.log("用户点击取消")}})},save:function(){var t={userId:this.userId,name:this.name,head:this.name.substr(0,1),tel:this.tel,contactName:this.name,contactPhone:this.tel,address:{region:this.region,detailed:this.detailed},isDefault:this.isDefault};"edit"==this.editType&&(t.id=this.id),t.name?t.tel?t.address.detailed?0!=t.address.region.value.length?(t.addressInfo=t.address.region.label,t.district=t.address.region.cityCode,t.value=t.address.region.value,t.address=t.address.detailed,t.defaultFlag=t.isDefault?"1":"0",console.log(t),e.showLoading({title:"正在提交"}),console.log(t),(0,i.saveUserAddress)(t).then(function(n){if(console.log(n),0!=n.data.code||null==n.data.data)return e.showToast({title:null!=n.data.msg?n.data.msg:"保存失败",icon:"none"}),e.hideLoading(),!1;e.showLoading({title:"保存成功"}),e.setStorage({key:"saveAddress",data:t,success:function(){e.hideLoading(),e.navigateBack()}})})):e.showToast({title:"请选择收件地址",icon:"none"}):e.showToast({title:"请输入收件人详细地址",icon:"none"}):e.showToast({title:"请输入收件人电话号码",icon:"none"}):e.showToast({title:"请输入收件人姓名",icon:"none"})}},onLoad:function(t){var n=this,i=e.getStorageSync("userId");this.userId=i,this.editType=t.type,"edit"==t.type&&e.getStorage({key:"address",success:function(e){console.log(e),n.id=e.data.id,n.name=e.data.name,n.tel=e.data.tel,n.detailed=e.data.address.detailed,n.isDefault=e.data.isDefault,n.cityPickerValue=e.data.address.region.value,n.region=e.data.address.region}})},onBackPress:function(){if(this.$refs.mpvueCityPicker.showPicker)return this.$refs.mpvueCityPicker.pickerCancel(),!0},onUnload:function(){this.$refs.mpvueCityPicker.showPicker&&this.$refs.mpvueCityPicker.pickerCancel()}};t.default=s}).call(this,n("543d")["default"])},e93d:function(e,t,n){"use strict";(function(e){n("3075");i(n("66fd"));var t=i(n("028d"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},ec4d:function(e,t,n){},fb69:function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return i})}},[["e93d","common/runtime","common/vendor"]]]);