// pages/index/index.js
const common = require('../common.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerImage: [
      "../../images/index/banner/banner_0.jpg",
      "../../images/index/banner/banner_1.jpg",
      "../../images/index/banner/banner_2.jpg",
      "../../images/index/banner/banner_3.jpg",
      "../../images/index/banner/banner_4.jpg",
      "../../images/index/banner/banner_5.jpg",
    ],

    serviceType: [
      {
        typeName: 'App开发',
        typeImage: '../../images/index/app.png',
        typeURL: '#'
      },
      {
        typeName: '网站建设',
        typeImage: '../../images/index/web.png',
        typeURL: '#'
      },
      {
        typeName: '微信开发',
        typeImage: '../../images/index/wechat.png',
        typeURL: '#'
      }
    ],

    serviceTrade: [
      [
        {
          tradeName: '商店',
          tradeImage: '../../images/index/shop.png',
          tradeURL: '#'
        },
        {
          tradeName: '社区',
          tradeImage: '../../images/index/part.png',
          tradeURL: '#'
        },
        {
          tradeName: '媒体',
          tradeImage: '../../images/index/media.png',
          tradeURL: '#'
        },
        {
          tradeName: '医疗',
          tradeImage: '../../images/index/medical.png',
          tradeURL: '#'
        }
      ],
      [
        {
          tradeName: '餐饮',
          tradeImage: '../../images/index/food.png',
          tradeURL: '#'
        },
        {
          tradeName: '旅游',
          tradeImage: '../../images/index/travel.png',
          tradeURL: '#'
        },
        {
          tradeName: '电子政务',
          tradeImage: '../../images/index/gov.png',
          tradeURL: '#'
        },
        {
          tradeName: '物联网',
          tradeImage: '../../images/index/riot.png',
          tradeURL: '#'
        }
      ],
      [
        {
          tradeName: '教育',
          tradeImage: '../../images/index/edu.png',
          tradeURL: '#'
        },
        {
          tradeName: '汽车',
          tradeImage: '../../images/index/car.png',
          tradeURL: '#'
        },
        {},{}
      ]
    ],

    animationData: {},

    tabBar: [],
  },

  onShow: function () {
    var that = this;
    common.changeTbData(0, that);

    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease'
    })

    this.animation = animation;

    this.animation.scale(.5).step(0).scale(1).step();

    this.setData({
      animationData: this.animation.export()
    })
  },

  clickThisBtn: function(){
    wx.showToast({
      title: '暂时没有开发完毕，敬请期待！😋',
      icon: 'none'
    })
  },

  tabBarBtn: function(e){
    var that = this;
    var index = e.currentTarget.dataset.index;
    common.changeTabState(index, that);
  },
})