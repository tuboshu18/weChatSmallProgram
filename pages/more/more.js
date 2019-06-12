
Page({
  data: {
    balance: 0.00,
    freeze: 0,
    score: 0,
    score_sign_continuous: 0
  },
  onLoad() {

  },
  aboutUs: function () {
    wx.showModal({
      title: '关于我',
      content: '一只生活在苏州的猫',
      showCancel: false
    })
  },
  sourceCodeAddress: function () {
    wx.showModal({
      title: '源码地址',
      content: 'https://tuboshu18.github.io',
      showCancel: false
    })
  },
  blogAddress: function () {
    wx.showModal({
      title: '博客地址',
      content: 'https://blog.csdn.net/qq_35659877',
      showCancel: false
    })
  },
  functionDetail: function(){
    wx.navigateTo({
      url: '/pages/functionDetail/functionDetail',
    })
  }
})