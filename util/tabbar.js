function setTabBar(){
  return [
    {
      icon: '../../images/index/index.png',
      selectedIcon: '../../images/index/indexSelected.png',
      title: '首页',
      URL: '/pages/index/index',
      selected: 0
    },
    {
      icon: '../../images/index/abstract.png',
      selectedIcon: '../../images/index/abstractSelected.png',
      title: '简介',
      URL: '/pages/abstract/abstract',
      selected: 0
    },
    {
      icon: '../../images/index/about.png',
      selectedIcon: '../../images/index/aboutSelected.png',
      title: '关于',
      URL: '/pages/about/about',
      selected: 0
    }
  ]
}

module.exports = {
  setTabBar: setTabBar
}