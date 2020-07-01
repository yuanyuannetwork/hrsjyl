// pages/anli/anli.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true,
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: '../../images/bjcy/001.jpg'
    }, {
      id: 1,
        type: 'image',
        url: '../../images/bjgc/001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: '../../images/bjjk/001.jpg'
    }, {
      id: 3,
      type: 'image',
      url: '../../images/bjyb/001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: '../../images/bjzh/000.jpg'
    }, {
      id: 5,
      type: 'image',
      url: '../../images/bjyb/002.jpg'
    }, {
      id: 6,
      type: 'image',
      url: '../../images/bjcy/001.jpg'
    }],
    anlijson:[
      {
        "title":"北京燕橙别墅庭院景观设计",
        "img":"../../images/bjyb/001.jpg",
        "href":"",
        "city":"北京",
        "text":"花台花池星罗棋布，奇花异草广植其间。蜂蝶花间穿梭，游人曲径心醉。",
        "author":"赵强",
        "authorimg":"../../../../images/shejishi/7.jpg",
        "attentionfill":"1000",
        "appreciatefill":"568",
        "messagefill":"123"
      },{
        "title":"北京京科别墅庭院景观设计",
        "img":"../../images/bjjk/001.jpg",
        "href":"",
        "city":"北京",
        "text":"海上生明月，天涯共此时。供桌庭院中，祭月共举杯。团圆喜笑颜，赏月食甜饼。月圆人也圆，酒香花儿艳。中秋节祝朋友，家圆人圆事事圆，甜甜蜜蜜幸福园。",
        "author":"赵强",
        "authorimg":"../../../../images/shejishi/7.jpg",
        "attentionfill":"1020",
        "appreciatefill":"238",
        "messagefill":"102"
      },{
        "title":"北京屋顶花园景观设计",
        "img":"../../images/bjcy/001.jpg",
        "href":"",
        "city":"北京",
        "text":"完美的空间使用，天空之境式的开放设计",
        "author":"赵强",
        "authorimg":"../../../../images/shejishi/7.jpg",
        "attentionfill":"1200",
        "appreciatefill":"223",
        "messagefill":"102"
      },{
        "title":"北京中式花园庭院景观设计",
        "img":"../../images/bjzh/000.jpg",
        "href":"",
        "city":"北京",
        "text":"海上生明月，天涯共此时。供桌庭院中，祭月共举杯。团圆喜笑颜，赏月食甜饼。月圆人也圆，酒香花儿艳。中秋节祝朋友，家圆人圆事事圆，甜甜蜜蜜幸福园。",
        "author":"赵强",
        "authorimg":"../../../../images/shejishi/7.jpg",
        "attentionfill":"1670",
        "appreciatefill":"248",
        "messagefill":"101"
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  }

})
