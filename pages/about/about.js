// pages/about/about.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    latitude: 40.22076999999998,
    longitude: 116.23128,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
    gridchange: function (e) {
      this.setData({
        gridCol: e.detail.value
      });
    },
    gridswitch: function (e) {
      this.setData({
        gridBorder: e.detail.value
      });
    },
    menuBorder: function (e) {
      this.setData({
        menuBorder: e.detail.value
      });
    },
    menuArrow: function (e) {
      this.setData({
        menuArrow: e.detail.value
      });
    },
    menuCard: function (e) {
      this.setData({
        menuCard: e.detail.value
      });
    },
    switchSex: function (e) {
      this.setData({
        skin: e.detail.value
      });
    },
  
    // ListTouch触摸开始
    ListTouchStart(e) {
      this.setData({
        ListTouchStart: e.touches[0].pageX
      })
    },
  
    // ListTouch计算方向
    ListTouchMove(e) {
      this.setData({
        ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
      })
    },
  
    // ListTouch计算滚动
    ListTouchEnd(e) {
      if (this.data.ListTouchDirection =='left'){
        this.setData({
          modalName: e.currentTarget.dataset.target
        })
      } else {
        this.setData({
          modalName: null
        })
      }
      this.setData({
        ListTouchDirection: null
      })
    },
  }
})
