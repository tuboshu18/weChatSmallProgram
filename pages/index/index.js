//获取应用实例

var network_util = require('../../utils/network.js');
var util = require('../../utils/util.js');

const app = getApp()
var location;
var isOpenSetting = false;
var longi;
var lat;
Page({
  data: {
    location: '苏州市',
    hasRefresh: false,
    nowBackGround: [100, 8],
    nowTemperature: '26 ℃',
    nowWind: '晴/东北风  微风',
    hourlyArr: [],
    listData: []
  },
  gotest: function() {
    wx.navigateTo({
      url: '../scrollView/scrollView',
    })
  },
  getDax: function () {
    var _this = this;
    var url1010 = "https://service-qklda2y1-1258214072.ap-shanghai.apigateway.myqcloud.com/release/getDas?type=1010";
    var url1011 = "https://service-qklda2y1-1258214072.ap-shanghai.apigateway.myqcloud.com/release/getDas?type=1011";
    var url1012 = "https://service-qklda2y1-1258214072.ap-shanghai.apigateway.myqcloud.com/release/getDas?type=1012";
    var url1020 = "https://service-qklda2y1-1258214072.ap-shanghai.apigateway.myqcloud.com/release/getDas?type=1020";
    var url1110 = "https://service-qklda2y1-1258214072.ap-shanghai.apigateway.myqcloud.com/release/getDas?type=1110";
    var url1111 = "https://service-qklda2y1-1258214072.ap-shanghai.apigateway.myqcloud.com/release/getDas?type=1111";
    var url1112 = "https://service-qklda2y1-1258214072.ap-shanghai.apigateway.myqcloud.com/release/getDas?type=1112";
    var url1114 = "https://service-qklda2y1-1258214072.ap-shanghai.apigateway.myqcloud.com/release/getDas?type=1114";
    var data = {
      "httpMethod": "get"
    }
    var dataList = []
    network_util._get(url1010, data, function (res) {
      dataList.push(res.data.result.lists['1010'])
      _this.setData({
        listData: dataList
      }) 
    }, function (res) {
    }, function () {
    })
    network_util._get(url1011, data, function (res) {
      dataList.push(res.data.result.lists['1011'])
      _this.setData({
        listData: dataList
      }) 
    }, function (res) {
    }, function () {
    })
    network_util._get(url1012, data, function (res) {
      dataList.push(res.data.result.lists['1012'])
      _this.setData({
        listData: dataList
      }) 
    }, function (res) {
    }, function () {
    })
    network_util._get(url1020, data, function (res) {
      dataList.push(res.data.result.lists['1020'])
      _this.setData({
        listData: dataList
      }) 
    }, function (res) {
    }, function () {
    })
    network_util._get(url1110, data, function (res) {
      dataList.push(res.data.result.lists['1110'])
      _this.setData({
        listData: dataList
      }) 
    }, function (res) {
    }, function () {
    })
    network_util._get(url1111, data, function (res) {
      dataList.push(res.data.result.lists['1111'])
      _this.setData({
        listData: dataList
      }) 
    }, function (res) {
    }, function () {
    })
    network_util._get(url1112, data, function (res) {
      dataList.push(res.data.result.lists['1112'])
      _this.setData({
        listData: dataList
      }) 
    }, function (res) {
    }, function () {
    })
    network_util._get(url1114, data, function (res) {
      dataList.push(res.data.result.lists['1114'])
      _this.setData({
        listData: dataList
      })  
    }, function (res) {
    }, function () {
    })
  },
  Weather: function(lat, longi) {
    var _this = this;
    //数据集合
    var url = "https://free-api.heweather.com/s6/weather";
    var data = {
      key: "bfe57b76f65f4bf7a4223e4ebbfd345a", 
      location: location ? longi + "," + lat : "shanghai",
      lang: "zh",
      unit: "m"
    };
    network_util._get(url, data, function (res) {
      // console.log(res.data.HeWeather6[0])
      var now = res.data.HeWeather6[0].now;
      var hourly = res.data.HeWeather6[0].hourly;
      var daily = res.data.HeWeather6[0].daily_forecast;
      var lift = res.data.HeWeather6[0].lifestyle;
      _this.setData({
        nowBackGround: [now.cond_code, now.tmp],
        nowTemperature: now.tmp + "℃", 
        nowWind: now.cond_txt + "/" + now.wind_dir + "   " + now.wind_sc+"级",
        hourlyArr: hourly,
        dailyForecast: daily,
        lifeStyle: [lift[2], lift[1], lift[6], lift[5]],

      })
    }, function (res) {

    }, function () {
      // 数据成功后，停止下拉刷新
      wx.stopPullDownRefresh();
      wx.hideLoading()
    });
    
  },
  //地理反编码
  genCodeLocation: function(lat, longi) {
    var _this = this;
    var url = "https://restapi.amap.com/v3/geocode/regeo";
    var data = {
      key: "05e62c98ebc533cb8811ae71ca817033",
      location: longi + "," + lat
    }
    network_util._get(url, data, function (res) {
      // console.log(res.data)
      _this.setData({
        location: res.data.regeocode.addressComponent.district + res.data.regeocode.addressComponent.township
      })
    }, function (res) {

    }, function () {
      location = "youzhi"
      _this.Weather(lat, longi)
    })
  },
  onLoad: function () {
    this.getDax()
    this.getLocationAction()
  },
  getLocationAction: function() {
    // var location;
    var _this = this;
    wx.getLocation({
      success: function (res) {
        lat = res.latitude
        longi = res.longitude
        wx.showLoading({
          title: '加载中',
          mask: true
        })
        _this.genCodeLocation(lat, longi)
      },
      fail: function () {
        _this.Weather("", "");
      }
    }) 
  },
  onShow : function() {
    // if (isOpenSetting) {
    //   this.getLocationAction()
    // }
  },
  chooseLocation: function() {
      var isopenLoction;
      var _this = this;
      wx.getSetting({
        success: (res) => {
          // console.log(res)
          isopenLoction = res.authSetting["scope.userLocation"]
          // console.log(isopenLoction)
          if (isopenLoction) {
            wx.chooseLocation({
              success: function (res) {
                // console.log(res)
                _this.setData({
                  location: res.address,
                })
                longi=res.longitude
                lat=res.latitude
                location = res.latitude + ":" + res.longitude
                _this.Weather(res.latitude, res.longitude)
              },
            })
          } else {
            wx.showToast({
              title: '没有开启位置权限，请开启',
              icon: "none",
              duration: 1000
            })
            
              wx.openSetting({
                success: (res) => {
                  isOpenSetting = res.authSetting["scope.userLocation"]
                  _this.getLocationAction()
                }
              })
           
          }
        }
      })
  },
  onShareAppMessage: function () {
    return {
      title: '缅因猫的小屋',
      path: '/pages/index/index',
    }
  },
  onPullDownRefresh: function() {
    this.Weather(longi, lat);
  },
  getStockPrice: function(){
    wx.navigateTo({

      url: '/pages/getStockPrice/getStockPrice',

    })
  },
  getdasInfo: function (event){
    var listData = this.data.listData
    var index = parseInt(event.currentTarget.id)
    wx.navigateTo({
      url: '/pages/dasInfo/dasInfo?inxnm=' + listData[index].inxnm + "&yesy_price=" + listData[index].yesy_price + "&open_price=" + listData[index].open_price + "&last_price=" + listData[index].last_price + "&uptime=" + listData[index].uptime + "&typeid=" + listData[index].typeid + "&rise_fall_per=" + listData[index].rise_fall_per + "&rise_fall=" + listData[index].rise_fall + "&low_price=" + listData[index].low_price + "&high_price=" + listData[index].high_price + "&amplitude_price_per=" + listData[index].amplitude_price_per
    })
  }
})
