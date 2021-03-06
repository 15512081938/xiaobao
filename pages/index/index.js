//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    search: [
      { img: "https://m.boxuegu.com/_nuxt/img/logo.4ba874d.png" }
    ],
    nav: [
      { img: "https://attachment-center.boxuegu.com/data/picture/online/2019/10/24/19/027d44b8c1f34fdfb655ec87157f7520.jpg" }
    ],
    meuns: [
      { img: "https://m.boxuegu.com/web/images/index/course.png", text: "就业课" },
      { img: "https://m.boxuegu.com/web/images/index/mircoCourse.png", text: "提升课" },
      { img: "https://m.boxuegu.com/web/images/index/freeMicroCourse.png", text: "免费课" },
      { img: "https://m.boxuegu.com/web/images/index/courseType.png", text: "课程分类" }
    ],
    content: [
      {
        img: "https://file.boxuegu.com/f6c878722f394a7c9bd12c0319f00037.png",
        title: "JavaEE",
        introdute: "JavaEE是一个开放的、基于标准的平台",
        study: "1784人学习",
        price: "￥14980.00"
      },
      {
        img: "https://file.boxuegu.com/e19c53c6c1fa468aad6e11cb61d81b9a.png",
        title: "Python+人工智能",
        introdute: "最有前景的开发职位",
        study: "877人学习",
        price: "￥14900.00"
      },
      {
        img: "https://file.boxuegu.com/3940be1c755a44eeb8e2e0aaf984756e.png",
        title: "前端与移动开发",
        introdute: "用户界面的构筑者",
        study: "1230人学习",
        price: "￥14980.00"
      },
      {
        img: "https://file.boxuegu.com/6c0ffe21a06d421d90be8a0061c14c1a.png",
        title: "软件测试",
        introdute: "变量，常量，函数，循环，判断，遍历，数组，对象等等知识点",
        study: "189人学习",
        price: "￥12980.00"
      },
    ],
    tj: [
      {
        img: "https://file.boxuegu.com/e6432db4d06c42b9aca7aede22ba9437.jpg",
        title: "所有人都能学的数据分析课",
        study: "1784人学习",
        price: "￥14980.00"
      },
      {
        img: "https://file.boxuegu.com/989b9bd2a12d471b8e7579b7182d08b6.png",
        title: "MySQL数据库性能优化项目实战",
        study: "107人学习",
        price: "￥14900.00"
      },
      {
        img: "https://file.boxuegu.com/df25a3e7031a48d39a896d4e38d3d3d5.png",
        title: "Java并发编程原理精讲",
        study: "1230人学习",
        price: "￥14980.00"
      },
      {
        img: "https://file.boxuegu.com/854b60de9d6742dbb29a47370b7c8650.png",
        title: "GAN生成对抗网络入门到精通",
        study: "189人学习",
        price: "￥12980.00"
      },
      {
        img: "https://file.boxuegu.com/746a8e78655a4b3ca97ccad5390fbc4b.png",
        title: "基于Kylin搞定千亿级电信数据分析",
        study: "189人学习",
        price: "￥12980.00"
      },
      {
        img: "https://file.boxuegu.com/90bb08a6bacd49baa5492c5eaa94c060.jpg",
        title: "游戏AI实战课—深入浅出tensorflow.js",
        study: "189人学习",
        price: "￥12980.00"
      }
    ],
    free: [
      {
        img: "https://file.boxuegu.com/74773be265b840b3af9da88f6f42841d.jpg",
        title: "2小时用Go语言实现人脸识别抖音甩狗头",
        study: "1784人学习",
      },
      {
        img: "https://file.boxuegu.com/7e1535f414a64d3fa4d60e7c8a84cca3.jpg",
        title: "JavaEE在线就业班2.0(试听课)",
        study: "107人学习",
      },
      {
        img: "https://file.boxuegu.com/3ed09c2ae4ea4542add4ac8b098c9535.jpg",
        title: "Axure基础课",
        study: "1230人学习",
      },
      {
        img: "https://file.boxuegu.com/6a0330c2237b4ed3af2a2703cc2f1419.jpg",
        title: "产品经理职业公开课",
        study: "189人学习",
      },
      {
        img: "https://file.boxuegu.com/ccc47386e2b048658f944d0db943321c.jpg",
        title: "短视频创造营探店精品课程",
        study: "189人学习",
      },
      {
        img: "https://file.boxuegu.com/49b20b70e42e446cafc60f9c6fd98d84.jpg",
        title: "剪辑大神50招",
        study: "189人学习",
      }
    ]
  }

})
