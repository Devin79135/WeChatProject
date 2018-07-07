function changeTabState(index, that) {
  var tb = require('../util/tabbar.js');
  var stb = tb.setTabBar();
  for (var idx in stb) {
    stb[idx].selected = 0;
  }
  stb[index].selected = 1;
  that.setData({
    tabBar: stb
  })
}

function changeTbData(index, that) {
  var tb = require('../util/tabbar.js');
  var stb = tb.setTabBar();
  stb[index].selected = 1;
  that.setData({
    tabBar: stb
  })
}

module.exports = {
  changeTabState: changeTabState,
  changeTbData: changeTbData
}