import {Hummer,View, Text, Scroller, Image, Button, Toast, Request, Dialog, Navigator} from '@hummer/hummer-front'
import backImg from '../header_arrow.png'
// import {ModulesVersionItemView} from '../index/modulesVersionItem'

let moduleScrollView = new Scroller()
let infoDialog = new Dialog()

class RootView extends View {
  constructor() {
    super();
    this.style = {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }
    this.appendTitleBar()
    this.appendScrollView()
    requeestNet()
  }

  appendTitleBar(){
    let titleLayout = new View()
    titleLayout.style = {
      backgroundColor : '#12b7f5',
      flexDirection : 'row',
      width : '100%',
      height : 60,
      alignItems : 'center'
    }

    let back = new Image()
    back.src = backImg
    back.style = {
      width : 24,
      height : 24,
      marginLeft : 16,
      resize : 'contain'
    }
    back.addEventListener('tap',event=>{
      // 关闭页面
      Navigator.popPage()
    })

    let tittle = new Text()
    tittle.text = "coffer hummer"
    tittle.style = {
      fontSize :18,
      flexGrow : 1,
      textAlign : 'center',
      color : '#FFFFFF'
    }

    let save = new Button()
    save.text = '保存'
    save.style = {
      width : 60,
      height : 40,
      backgroundColor: '#FFFFFF',
      fontSize: 12,
      marginRight : 10,
    }
    save.addEventListener("tap",event =>{
       // 调用Native的保存方法
       Toast.show('保存啦')
    })

    this.appendChild(titleLayout)
    titleLayout.appendChild(back)
    titleLayout.appendChild(tittle)
    titleLayout.appendChild(save)
  }

  appendScrollView(){
    moduleScrollView.style = {
      width : '100%',
      height : '100%',
      backgroundColor : '#5c6273'
    }
    this.appendChild(moduleScrollView)
  }

  onCreate() {
    // 页面创建
    console.log('页面创建')
  }

  onAppear() {
    // 页面显示
    console.log('页面显示')
  }

  onDisappear() {
    // 页面隐藏
    console.log('页面隐藏')
  }

  onDestroy() {
    // 页面销毁
    console.log('页面销毁')
    
  }

}

/**
 * 请求网络
 */
function requeestNet(){
  var request = new Request();
  request.url = "https://www.wanandroid.com/tree/json"
  request.method = 'GET'
  request.send((response) => {
    // 这里的response 是一个JSON Object对象

    let data = response.data.data;
    console.log('coffer_tag data.size : '+data.length)
    var size = data.length
    for(var i = 0;i<size;i++){
      moduleScrollView.appendChild(new ModulesItemView(data[i],i))
    }
    
  });
}

/**
 * 最外层的ItemView
 */
class ModulesItemView extends View{
  
  /**
   * 
   * @param data 一级目录下的数据
   * @param position 一级目录下的position
   */
  constructor(data:any,position:number){
    super();
    this.style = {
      width : '100%',
      height : 60,
      backgroundColor : '#95E3C3',
      flexDirection : 'column'
    }
    console.log('coffer_tag content : '+data.name)
    let textName = new Text()
    textName.text = data.name
    textName.style = {
      color : '#5c6273',
      textAlign: 'center',

      fontSize: 20,
    }
    let line = new View()
    line.style = {
        width : '100%',
        height : 3,
        backgroundColor : '#FFFFFF'
    }
    this.appendChild(line)
    this.appendChild(textName)
    this.addEventListener('tap',event =>{
      event.type
      // 弹出dialog
      console.log("第"+position+"个位置")
      // 最外层必须是View，不能是Scroller
      let dialogView = new View()
      dialogView.style = {
        width : '80%',
        height : '80%',
        backgroundColor: '#FFFFFF'
      }
      let scroll = new Scroller()
      scroll.style = {
        width : '100%',
        height : '100%',
        backgroundColor: '#12b7f5'
      }
      dialogView.appendChild(scroll)
      this.appendDialogItemView(scroll,data,position)
      infoDialog.custom(dialogView)

    })
  }

  appendDialogItemView(parentView:View,data:any,position:number){
      var children = data.children
      console.log("children size : " + children.length)
      if(children != null && children.length > 0){
        var size = children.length
        for(var i = 0; i < size ; i++){
          console.log("啦啦 : " + i)
          // 注意这里的回调函数，
          parentView.appendChild(new ModulesVersionItemView(this,children[i],i,this.getPoss.bind(this)))
        }
      }
  }

  getPoss(pos:number):void{
    console.log("位置啦啦 : " + pos)
  }
}

class ModulesVersionItemView extends View{
   /**
     * @param view 父容器，回调使用，用来表示作用域
     * @param data 二级目录下的数据
     * @param position 二级目录下对应的Item position
     * @param listener 回调方法
     */
  constructor(view:any,data:any,position:number,listener:Function){
      super();
      this.style = {
        width : '100%',
        height : 60,
        backgroundColor : '#95E3C3',
        flexDirection : 'column'
      }
      
      console.log('coffer_tag content : '+data.name)
      let textName = new Text()
      textName.text = data.name
      console.log("name is : " + data.name)
      textName.style = {
        color : '#5c6273',
        textAlign: 'center',
        fontSize: 20,
      }
      let line = new View()
      line.style = {
          width : '100%',
          height : 3,
          backgroundColor : '#FFFFFF'
      }
      this.appendChild(line)
      this.appendChild(textName)
      this.addEventListener('tap',event =>{
        console.log("第"+position+"个位置")
        // 注意这里的回调函数的使用，Function里的call方法
        listener.call(view,position)
        infoDialog.dismiss()
      })
  }
}


// 根页面渲染
Hummer.render(new RootView());