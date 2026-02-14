//配置页面区域信息

const vue = new Vue({
  el: '#setting_All',
  data: {
    introduce: {
      name: '网站介绍',
      img_path: './img/文章封面/网站介绍.png',
      allegorical: '双击查看动态效果 >',
      date: '2022-9-22',
      super_admin: '[站长]盗梦之末',
      read_count: '582',
      comments: '1245',
      good: '9851',
    },
    firstGame: {
      name: '[游戏] 《 星空列车与白的旅行 》',
      img_path: './img/文章封面/文章封面列车.jpg',
      allegorical: '立春天, 风渐暖, 伊人一去不复还 >',
      date: '2022-10-25',
      super_admin: '[站长]盗梦之末',
      read_count: '2349',
      comments: '10',
      good: '21',
    },
    SecondGame: {
      name: '[游戏] 《 ATRI 》',
      img_path: './img/文章封面/ATRI壁纸.jpg',
      allegorical: '所谓理想, 是拯救不放弃的自己 >',
      date: '2022-10-25',
      super_admin: '[站长]盗梦之末',
      read_count: '2349',
      comments: '10',
      good: '21',
    },
    ThirdGame: {
      name: '[动漫] 《 天气之子 》',
      img_path: './img/文章封面/天气之子图片.jpg',
      allegorical: '天气因你逆转, 世界因你天晴 >',
      date: '2022-10-25',
      super_admin: '[站长]盗梦之末',
      read_count: '2349',
      comments: '10',
      good: '21',
    },
    FourthGame: {
      name: '[游戏] 《 生命的备件 》',
      img_path: './img/文章封面/生命的备件.jpg',
      allegorical: '我爱你, 真的至死不渝 >',
      date: '2022-10-25',
      super_admin: '[站长]盗梦之末',
      read_count: '2349',
      comments: '10',
      good: '21',
    },
    FifthGame: {
      name: '[游戏] 《 心跳文学社 》',
      img_path: './img/文章封面/心跳文学社.jpg',
      allegorical: '在这无限选择的世界里, 珍重这特别的日期 >',
      date: '2022-9-22',
      super_admin: '[站长]永远の文学部',
      read_count: '9999',
      comments: '9999',
      good: '10000',
    },
    SixthGame: {
      name: '[动漫] 《 紫罗兰的永恒花园 》',
      img_path: './img/文章封面/紫罗兰的永恒花园.jpg',
      allegorical: '你将不在是道具，而是人如其名的人 >',
      date: '2022-9-22',
      super_admin: '[站长]盗梦之末',
      read_count: '582',
      comments: '1245',
      good: '9851',
    },
    SeventhGame: {
      name: '[动漫] 《 Lycoris Recoil 》',
      img_path: './img/文章封面/Lycoris_Recoil.jpg',
      allegorical: '这个动漫画质不错 >',
      date: '2022-9-22',
      super_admin: '[站长]盗梦之末',
      read_count: '582',
      comments: '1245',
      good: '9851',
    },
    EighthGame: {
      name: '[游戏] 《 君与彼女与彼女之恋 》',
      img_path: './img/文章封面/君与彼女与彼女之恋.jpg',
      allegorical: '期待下一次在时空的彼端重逢 >',
      date: '2022-9-22',
      super_admin: '[站长]盗梦之末',
      read_count: '582',
      comments: '1245',
      good: '9851',
    },
    NinthGame: {
      name: '[游戏] 《 千恋万花 》',
      img_path: './img/文章封面/千恋万花_丛雨.jpg',
      allegorical: '绫泣举首望旧月，今月曾照旧时人 >',
      date: '2022-9-22',
      super_admin: '[站长]盗梦之末',
      read_count: '0721',
      comments: '1245',
      good: '9851',
    },
  },
  //配置文字删除动效，无法用于页面渲染
  text_delete: [
    //#region
    '此夜曲中闻折柳，何人不起故园情?',
    '天长地久有时尽，此恨绵绵无绝期',
    '何当共剪西窗烛，却话巴山夜雨时',
    '黄粱一梦终得醒，却见明心已惘然',
    '忽如一夜春风来，千树万树梨花开',
    '往事繁华不堪忆，凉酒入喉断魂肠',
    '天若有情天亦老，月若无恨月长圆',
    '立春天，风渐暖，伊人一去不复还',
    '浊酒一杯家万里，燕然未勒归无计',
    '更祝明朝风日好，梅花满眼踏新年',
    '万里悲秋常作客，百年多病独登台',
    '空庭寂寞雨纷乱，湖心落樱映孤月',
    '纵有万般非吾属，伴得白马啸西风',
    '醉里挑灯看剑，梦回吹角连营',
    '不知天上宫阙，今夕是何年?',
    '春不知夏去，一雨方知深秋',
    '相约红尘伴，回望理因缘',
    '红霞撒天外，掩映夕阳时',
    '朝阳照瀑水，楼阁虹霓中',
    '但愿人长久，千里共婵娟',
    '举杯邀明月，对影成三人',
    '相顾无相识，长歌怀采薇',
    '落花有情，流水无意',
    '青青子衿，悠悠我心',
    '薇尔莉特·伊芙加登',
    //#endregion
  ],
})

//--------------------------------------------------------------------------------

//集合处理
//#region
//说实话我感觉我的使用并不恰当, 一对多情况应当不只是我作为代码分解使用
class Manager {
  messages = {}
  on(msgName, callback) {
    if (this.messages[msgName]) {
      this.messages[msgName].push(callback)
    } else {
      this.messages[msgName] = [callback]
    }
  }
  emit(msgName, ...param) {
    if (this.messages[msgName]) {
      this.messages[msgName].forEach((callback) => callback.call(this, ...param))
    }
  }
}
//#endregion
const manager = new Manager()

//向外部暴露 manager on/emit

//--------------------------------------------------------------------------------

//控制执行周期
window.addEventListener('DOMContentLoaded', () => {

  //--------------------------------------------------------------------------------

  // 控制上方小三角移动
  triangle()()
  //#region
  function triangle() {
    const triangle = document.querySelector('.triangle')
    let element_Xpage
    return () => {
      document.querySelector('#top_ul').addEventListener('click', (e) => {
        if (e.composedPath()[1].nodeName === 'LI') {
          element_Xpage = e.target.offsetLeft + 20
          animation(triangle, element_Xpage)
        }
      })
    }
  }
  //#endregion

  //--------------------------------------------------------------------------------

  //禁止鼠标复制/鼠标右键菜单(美观)

  document.addEventListener(
    'contextmenu',
    function (event) {
      event.preventDefault()
    },
    false
  )
  document.addEventListener(
    'selectstart',
    function (event) {
      event.preventDefault()
    },
    false
  )

  //--------------------------------------------------------------------------------

  //右边跟随的工作台
  task_bar_setting()()
  task_bar()()
  //#region
  function task_bar_setting() {
    let task_bar_setting_obj = {}
    let stap //暂时记录时间

    return () => {
      //节流函数
      manager.on('Plase_Wait', (obj) => {
        //将参数释放
        let { fun, delay, name, step_true_run } = obj
        //先设置为 true
        task_bar_setting_obj[name] = true
        //备份时间
        stap = delay
        //还需不需要计时器?
        step_true_run ? (delay = 0) : (delay = stap)
        //标准的节流
        task_bar_setting_obj[name]
          ? setTimeout(() => {
              fun.call(this), (task_bar_setting_obj[name] = true)
            }, delay)
          : null
        task_bar_setting_obj[name] = false
      })
    }
  }

  
  function task_bar() {
    const task_bar = document.querySelector('.hot_message')
    let change_element_top
    let static
    let manager_obj
    return () => {
      change_element_top = () => {
        static = window.pageYOffset - 465
        if (static > 0) {
          task_bar.style.top = `${static}px`
          manager.emit('Plase_Wait', { ...manager_obj, step_true_run: true })
        } else {
          task_bar.style.top = `${0}px`
          manager.emit('Plase_Wait', { ...manager_obj, step_true_run: false })
        }
      }
      manager_obj = { name: 'change_element_top', fun: change_element_top, delay: 1000, step_true_run: false }

      document.addEventListener('scroll', manager.emit('Plase_Wait', manager_obj))
    }
  }
  //#endregion

  //--------------------------------------------------------------------------------

  //文章图片惰性加载
  lazy_img()()
  //#region

  function lazy_img() {
    const img_div = document.querySelectorAll('.active .img')
    let img_path
    return () => {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((target) => {
          img_path = target.target.nextElementSibling.innerText
          target.isIntersecting ? ((target.target.style.background = ` url(${img_path}) no-repeat center`), (entries[0].target.style.backgroundSize = ' cover '), io.unobserve(entries[0].target)) : null
        })
      })
      img_div.forEach((element) => io.observe(element))
    }
  }

  //#endregion

  //--------------------------------------------------------------------------------

  //返回按钮回滚页面头部
  document.querySelector('#back_top').addEventListener('click', (e) => {
    Page_animation(e.target, 0, 5)
  })

  //--------------------------------------------------------------------------------

  //利用 JS 更改文章体的翻转样式
  change_other_div_setting()()
  Add_ClassName(document.querySelectorAll('.body>.active>div'))()
  //#region

  function change_other_div_setting() {
    return () => {
      //双击文章元素隐藏
      manager.on('other_animation_hidden', (obj) => {
        let { All_div, self, bottom_text } = obj
        All_div.forEach((element) => {
          element !== self ? ((element.style.width = '0%'), (element.style.boxShadow = '0px 0px 0px 0px #90cd4f')) : (element.classList.add('run_anmiation', 'clean_index'), element.setAttribute('active_hot_text', `${bottom_text}`))
        })
      })

      //双击文章元素出现
      manager.on('other_animation_appear', (obj) => {
        obj.forEach((element) => {
          element.style.boxShadow = '0px 10px 10px 1px rgb(0 0 0 / 30%)'
          element.style.width = '75%'
          element.classList.remove('run_anmiation', 'clean_index')
          element.removeAttribute('active_hot_text')
        })
      })
    }
  } //setting_something

  function Add_ClassName(active_style) {
    let flag = true
    let bottom_text
    return () => {
      active_style.forEach((element) => {
        element.addEventListener('dblclick', () => {
          if (flag) {
            bottom_text = element.children[3].innerText.replace('>', '')
            manager.emit('other_animation_hidden', { All_div:active_style,self: element, bottom_text })
            flag = false
          } else {
            manager.emit('other_animation_appear',active_style)
            flag = true
          }
        })
      })
    }
  }

  //#endregion

  //--------------------------------------------------------------------------------

  //现在的时间
  getTime()()
  //#region

  function getTime() {
    const time_now = document.querySelector('#time_now')
    let stringDate = null
    return () => {
      setInterval(() => {
        stringDate = new Date()
        time_now.innerText = `${stringDate.getHours()}时${stringDate.getMinutes()}分${stringDate.getSeconds()}秒`
      }, 1000)
    }
  }

  //#endregion

  //--------------------------------------------------------------------------------

  //删除动效
  //#region
  class Delete_Text_Setting {
    constructor() {
      this.i = 0
      this.timer = {}
      this.add_time = 500
      this.delete_time = 200
      this.text = document.querySelector('#delete_text > .text')
      this.add_text()
      this.delete_text()
      this.re_begin()
      begin_show()
    }
    //显示文字需要
    add_text() {
      manager.on('show_text', (vue_each_text) => {
        this.timer.one = setInterval(() => {
          //这是代码混淆吗? 我为什么会喜欢这种写法啊? 难改死了
          this.i >= vue_each_text.length ? (clearInterval(this.timer.one), (this.timer.one = null), manager.emit('delete_text', vue_each_text)) : ((this.text.innerText += vue_each_text[this.i]), this.i++)
        }, this.add_time)
      })
    }
    //删除文字需要
    delete_text() {
      manager.on('delete_text', (vue_each_text) => {
        //添加删除的定时器
        this.timer.two = setInterval(() => {
          if (this.i > 0) {
            //将文字逐渐替换为空
            //   - 文字重复情况发生时会导致删除顺序错乱, 修改的话不知道怎么才能合理的达成
            this.text.innerText = this.text.innerText.replace(vue_each_text[this.i - 1], '')
            this.i--
          } else {
            //话说 clearInterval 真的有用吗? 不知道指向 null 能不能释放
            clearInterval(this.timer.two)
            this.timer.two = null
            return
          }
        }, this.delete_time)
        //在增加删除定时器的那一刻开启重启倒计时
        manager.emit('re_begin', vue_each_text)
      })
    }
    re_begin() {
      manager.on('re_begin', (vue_each_text) => {
        setTimeout(() => {
          this.text.innerText = ''
          begin_show()
        }, vue_each_text.length * this.delete_time)
      })
    }
  }

  //没有什么能够阻挡我防止开辟新空间 ^v^
  const begin_show = (()=>{
    let random_choose
    return ()=>{
      random_choose = vue.$text_delete[parseInt(Math.random() * vue.$text_delete.length)]
      manager.emit('show_text', random_choose.split(''))
    }
  })()


  new Delete_Text_Setting()

  //--------------------------------------------------------------------------------


  //对于 Swiper 的设置
  new Swiper('.mySwiper', {
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    delay: 1200,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    lazy: {
      loadPrevNext: true,
    },
  })
})
