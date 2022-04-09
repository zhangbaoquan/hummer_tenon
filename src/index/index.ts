import {Hummer,View, Text, Scroller, Image, Button, Toast, Request, Dialog} from '@hummer/hummer-front'
import backImg from '../header_arrow.png'

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

  onCreate(){

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
      // 弹出dialog
      let dialogView = new View()
      dialogView.style = {
        width : '80%',
        height : '80%',
        backgroundColor: '#FFFFFF'
      }
      dialogView.addEventListener('tap',event =>{
        
        infoDialog.dismiss()
      })
      infoDialog.custom(dialogView)
    })
  }

  // loadData(data :any){
    
  // }
}

/**
 * Dialog 中的ItemView
 */
class ModulesVersionItemView extends View{

}

// 根页面渲染
Hummer.render(new RootView());