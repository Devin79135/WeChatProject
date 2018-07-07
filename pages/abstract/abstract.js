// pages/abstract/abstract.js
const common = require('../common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabBar: [],
  },

  onShow: function () {
    var that = this;
    common.changeTbData(1, that);
  },
  
  tabBarBtn: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    common.changeTabState(index, that);
  },
})