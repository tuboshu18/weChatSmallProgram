// pages/getStockPrice/getStockPrice.js
var network_util = require('../../utils/network.js');
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
     text: "",
     name: "",
     time: "",
     data: []
  },
  setText: function(e){
    this.setData({
      text: e.detail.value
    })
  },
  getStockPrice:function(){
    var _this = this;
    var text = _this.data.text
    var url = "https://service-elq044xz-1258214072.ap-shanghai.apigateway.myqcloud.com/release/getStocksPrice?lists=";
    url = url+ text
    var data = {
      "httpMethod": "get"
    }
    network_util._get(url, data, function (res) {
      console.log(res.data)
      _this.setData({
        name: res.data.name,
        time: res.data.time,
        data: res.data.data
      })
    }, function (res) {
    }, function () {
    })
  },
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  expInput: function (e) {
    this.setData({ text: e.detail.value })
  }
})