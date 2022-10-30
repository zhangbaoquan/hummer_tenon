import { Hummer, Switch, Text, View } from "@hummer/hummer-front";

export class childView extends View {
    constructor() {
        super();
        // 最外层横向布局，左边是上下两个文本，右边是switch
        this.style = {
            width: '100%',
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            backgroundColor: '#12b7f5'
        }
        this.initTextContainer()
        this.initSwitch()

    }

    initTextContainer() {
        let viewBody = new View()
        viewBody.style = {
            flexGrow: 1,
            justifyContent : 'center',
            flexDirection: 'column',
            paddingLeft : 20,
            backgroundColor: '#fcfdc4'
        }
        let t1 = new Text()
        t1.text = "哈哈哈哈"
        t1.style = {
            fontSize: 12,
            color: '#5c6273'
        }

        let t2 = new Text()
        t2.text = "啦啦啦啦啦啦啦啦啦"
        t2.style = {
            fontSize: 12,
            color: '#5c6273'
        }
        viewBody.appendChild(t1)
        viewBody.appendChild(t2)
        this.appendChild(viewBody)
    }

    initSwitch() {
        let viewBody = new View()
        viewBody.style = {
            width: 60,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#c0f8c1'
        }

        let st = new Switch()
        st.style = {
            width: '100%',
            height: 30,
            marginRight: 15,
        }
        st.checked = true
        viewBody.appendChild(st)
        this.appendChild(viewBody)
    }
}