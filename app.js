// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    var that = this
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.cloud.init({
      env: 'cloud1-5glilnmz7d98aedf'
    })
    console.log(logs)
    wx.setStorageSync('logs', logs)
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: 'cloud1-5glilnmz7d98aedf'
      },
      data: {
        type: 'getOpenId'
      },
      complete: res => {
        console.log('callFunction test result: ', res)
        that.globalData.userInfo = {openId: res.result.openid}
        const openid = res.result.openid
        const db = wx.cloud.database()
        db.collection('user').where({
          _openid: res.result.openid,
        })
        .get({
          success: function(res) {
            console.log(res)
            if(res.data.length == 0){
              console.log("不存在")
              console.log(openid)
              that.register(openid)
              // db.collection('user').add({
              //   data: {
              //     _openid: openid,
              //     name: '测试'
              //   }
              // }).then(res => {
              //   console.log(res)
              // })
              // .catch(console.error)
            }else{
              that.globalData.userInfo = res.data[0]
              console.log(that.globalData.userInfo)
            }
          }
        })
      }
    })

    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
  },
  register(openid){
    console.log(openid)
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: 'cloud1-5glilnmz7d98aedf'
      },
      data: {
        type: 'insertRecord',
        data: {
          _openid: openid,
          name: '测试'
        },
        table: 'user'
      },
      complete: res => {
        console.log('callFunction test result: ', res)
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
