// pages/control/control.js
// 1.获取到当前环境的数据库对象
const db = wx.cloud.database()
// 2.获取到要操作的集合
const recordCol = db.collection("record")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: '在线',
    isClick: false,
    isLock: false,
    openFace: false,
    temp: 200,
    time: 120,
    maxTime: 180,
    maxTemp: 300,
    modes: [
      {name: '智能自动', icon: 'zidongguanli'},
      {name: '紫外线', icon: 'ziwaixian'},
      {name: '臭氧', icon: 'chouyang'},
    ],
    current: 0,
  },
  startDisinfect(){
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
  handleLock(e) {
    this.setData({ isLock: !this.data.isLock })
    console.log();
    if(this.data.isLock){
      const dataNow = new Date()
      recordCol.add({
        // 添加的数据需要写在方法的data选项中
        data: {
          name: "李梅",
          type: '解锁',
          createAt: dataNow
        }
      })
    }
  },
  handleFace() {
    this.setData({ openFace: !this.data.openFace })
  },
  onChangeTime(event) {
    wx.showToast({
      icon: 'none',
      title: `设置时长为：${event.detail} 分钟`,
    });
    this.setData({ time: event.detail })
  },
  onChangeTemp(event) {
    wx.showToast({
      icon: 'none',
      title: `设置温度为：${event.detail} ℃`,
    });
    this.setData({ temp: event.detail })
  },
  startMode(e) {
    this.setData({ current: e.currentTarget.dataset.index })
  },
  toHistory() {
    wx.navigateTo({
      url: '/pages/history/history',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('options', options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})