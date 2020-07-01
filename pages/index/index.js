const app = getApp();
Page({
  data: {
    PageCur: 'shouye',
   
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: '北京恒荣盛锦园林工程有限公司',
      imageUrl: '/images/logo.png',
      path: '/pages/index/index'
    }
  },
})