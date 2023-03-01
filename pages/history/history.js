// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    record: [
      {name: '张三', time: '2023-02-28 09:02', type: '负离子'},
      {name: '张三', time: '2023-02-27 15:02', type: '强杀菌'},
    ],
    unLockList: [
      {name: '张三', time: '2023-02-26 11:37'},
    ]
  },
  onChange(event) {
    this.setData({ active: event.detail.index })
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