// 1.获取到当前环境的数据库对象
const db = wx.cloud.database()
// 2.获取到要操作的集合
const recordCol = db.collection("record")
const deviceCloud = db.collection("device")
import Dialog from '@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isClick: false,
    deviceList: [{name: '2号消毒柜', status: '在线', openFace: true, isLock: true}],
    isLock: false,
  },
  startDisinfect(){
    this.setData({ deviceList: [{name: '2号消毒柜', status: '使用中', openFace: true, isLock: true}]})
    this.setData({ 
      isClick: true,
      status: '使用中'
    })
    wx.showLoading({
      title: '开始消毒',
    })
    setTimeout(function () {
      wx.showLoading({
        title: '正在消毒中...',
      })
    }, 2000)
    setTimeout(()=> {
      wx.hideLoading()
      this.setData({ isClick: false })
    }, 4000)
    const dataNow = new Date()
    recordCol.add({
      // 添加的数据需要写在方法的data选项中
      data: {
        name: "李梅",
        type: '智能自动',
        createAt: dataNow
      }
    })
  },
  startControl(e){
    const deviceName = e.currentTarget.dataset.name
    wx.switchTab({
      url: '/pages/control/control'
    })
  },
   // 扫码
   async clickaddNew () {
    let that = this;
    wx.scanCode({
      success(result) {
        console.log('扫码结果', result)
        deviceCloud.add({
          // 添加的数据需要写在方法的data选项中
          data: {
            name: "智能消毒柜",
            isLock: false,
            openFace: false,
            status: '离线',
          }
        }) 
        this.getDevice()
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDevice()
    
  },
  getDevice(){
    var that = this
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      data: {
        type: 'selectRecord',
        table: 'device'
      },
      complete: res => {
        console.log('callFunction test result: ', res)
        that.setData({
          deviceList: res.result.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})