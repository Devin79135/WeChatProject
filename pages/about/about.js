// pages/about/about.js
const common = require('../common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mapImage: '../../images/about/map.png',
    name: '河南睿远信息科技有限公司',
    address: '河南省南阳市宛城区建业凯旋广场B座20号楼721室',
    tel: '18336690666（于军）',

    tabBar: [],
  },

  onShow: function () {
    var that = this;
    common.changeTbData(2, that);
  },

  tabBarBtn: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    common.changeTabState(index, that);
  },
})