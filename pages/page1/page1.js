// pages/page1/page1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: '1',
    b: "2",
    "c": "3",
    d: {
      e: 7,
      "f": "9"
    },
    h: "haha"
  },

  onClick: function () {
    this.onClick1()
  },
  onClick1: function (str) {
    console.log("sss")
  },
  aaa: function (params) {

  }
})