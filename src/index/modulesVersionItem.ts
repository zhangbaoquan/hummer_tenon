import { Text, View } from "@hummer/hummer-front";
import {CallBackListener} from '../index/SelectCallBack'

export class ModulesVersionItemView extends View{
    /**
     * 
     * @param data 二级目录下的数据
     * @param position 二级目录下对应的Item position
     */
    constructor(data:any,position:number){
        console.log('coffer_tag content 数据: ')
        // constructor(data:any,position:number,listener:CallBackListener){
        super();
        console.log('coffer_tag content : '+data.name)
        let textName = new Text()
        textName.text = data.name
        console.log("name is : " + data.name)
        textName.style = {
          color : '#5c6273',
          textAlign: 'center',
    
          fontSize: 20,
        }
        // let line = new View()
        // line.style = {
        //     width : '100%',
        //     height : 3,
        //     backgroundColor : '#FFFFFF'
        // }
        // this.appendChild(line)
        this.appendChild(textName)
        // this.addEventListener('tap',event =>{
        //     listener
        // })
    }
}