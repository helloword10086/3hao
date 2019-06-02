// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     flag:true 
  },
  chance(){
    this.setData({
      flag: false
    })
  },
  concel(){
    this.setData({
      flag: true
    })
  },
  consfrim(e){
    this.setData({
      flag: true
    })
  },
  detail(){
    console.log('-------');
    wx.switchTab({
      url: '../Take-out/Take-out',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#202021',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
    wx.setNavigationBarTitle({
      title: '附近的点'
    })
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