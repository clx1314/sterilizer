// pages/control/control.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLock: false,
    openFace: false,
    temp: 100,
    time: 50,
    maxTime: 90,
    maxTemp: 200,
    modes: [
      {name: '智能自动', icon: 'zidongguanli'},
      {name: '紫外线', icon: 'ziwaixian'},
      {name: '臭氧', icon: 'chouyang'},
    ],
    current: 0,
  },
  handleLock() {
    this.setData({ isLock: !this.data.isLock })
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