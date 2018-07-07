const updateManager = wx.getUpdateManager();

App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  }
})

updateManager.onCheckForUpdate(function (res) {
  // console.log(res.hasUpdate)
})

updateManager.onUpdateReady(function (res) {
  wx.showModal({
    title: '有新的版本了呢~',
    content: '小程序更新已经准备就绪，是否现在重启更新？',
    success: function(res) {
      if (res.confirm) {
        updateManager.applyUpdate()
      }
    }
  })
})

updateManager.onUpdateFailed(function () {
  wx.showModal({
    title: '更新下载失败',
    content: '请别着急，我们会加紧修复！',
  })
})