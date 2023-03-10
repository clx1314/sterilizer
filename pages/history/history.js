// pages/history/history.js
import moment from '../../utils/moment'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    disinfect: [],
    deblocking: []
  },
  onChange(event) {
    this.setData({ active: event.detail.index })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      data: {
        type: 'selectRecord',
        table: 'record'
      },
      complete: res => {
        console.log('recordrecord: ', res)
        const record = res.result.data.map(item => {
          return {...item, createAt: moment(item.createAt).format('YYYY-MM-DD HH:mm') }
        })
        that.setData({
          disinfect: record.filter(item=>{
            if(item.type!=='解锁'){
              return item
            }
          }),
          deblocking: record.filter(item=>{
            if(item.type==='解锁'){
              return item
            }
          })
        })
      }
    })
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