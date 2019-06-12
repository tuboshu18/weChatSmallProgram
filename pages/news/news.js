// pages/news/news.js
var network_util = require('../../utils/network.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList: [],
    inputVal: "",
    inputShowed: false
  },
  getNews: function(){
    var channel =  ['头条', '财经', '体育', '娱乐', '军事']
    var _this = this;
    var index =  parseInt(Math.random()*4)
    var url = "https://service-1jq48o7j-1258214072.ap-shanghai.apigateway.myqcloud.com/release/getNews";
    var data = {
      "httpMethod": "get"
    }
    url = url + "?channel=" + channel[index]
    network_util._get(url, data, function (res) {
      var list = res.data.body.data
      var newsList = []
      for(var index in list){
        var title =  list[index].title
        var content = list[index].content
        content = content.replace("&#xe", "")
        var jsonObject = { "title": title, "content": content}
        newsList.push(jsonObject)
      }
      _this.setData({
        newsList: newsList
      })
    }, function (res) {

    }, function () {
      
    })
  },
  search: function(){
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    var _this = this;
    var url = "https://.apigateway.myqcloud.com/release/getOther?title=";//该接口为付费接口，所以不提供访问。
    var inputVal = this.data.inputVal
    url = url + inputVal
    var data = {
      "httpMethod": "get"
    }
    this.hideInput()
    network_util._get(url, data, function (res) {
      var list = res.data.showapi_res_body.pagebean.contentlist
      var newsList = []
      for (var index in list) {
        var title = list[index].title
        var content = list[index].content
        var jsonObject = { "title": title, "content": content }
        newsList.push(jsonObject)
      }
      _this.setData({
        newsList: newsList
      })
    }, function (res) {

    }, function () {
      wx.hideLoading()
    })
  },
  onLoad: function (options) {
    this.getNews()
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
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
})