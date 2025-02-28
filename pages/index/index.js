Page({

  /**
   * 页面的初始数据
   */
  data: {
    //被点击的首页导航栏标签的索引
    currentIndexNav: 0,
    //首页导航数据
    navList: [],
    //首页轮播图
    swiperList: [],
    //首页视频数据
    videosList: []
  },

  /**
   * 点击首页导航按钮
   */
  activeNav(e) {
    //console.log(123);
    this.setData({
      //e表示事件源 tagert表示当前点击的标签对象 dataset表示自定义的数据集 index表示数据集中的index
      currentIndexNav: e.target.dataset.index
    })
  },

  /**
   * 获取首页导航数据
   */
  getNavList() {
    let that = this;
    var code;
    //利用小程序内置发送请求的方法
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
      success(res) {
        //console.log(res);
        if (res.data.code === 0) {
          that.setData({
            navList: res.data.data.navList,
            code: res.data.code
          })
        }
      }
    })
  },

  /**
   * 获取首页轮播图数据
   */
  getSwiperList() {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res) {
        //console.log(res);
        if (res.data.code === 0) {
          that.setData({
            swiperList: res.data.data.swiperList
          })
        }
      }
    });
  },

  /**
   * 获取首页视频数据列表
   */
  getVideosList() {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res) {
        //console.log(res);
        if (res.data.code === 0) {
          that.setData({
            videosList: res.data.data.videosList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //1 获取首页导航数据
    this.getNavList();
    //2 获取首页轮播图数据
    this.getSwiperList();
    //3 获取首页视频数据
    this.getVideosList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})