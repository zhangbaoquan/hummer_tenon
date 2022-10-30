import {Hummer, Scroller, View} from "@hummer/hummer-front";
import {ItemView} from "../views/itemView";

class RootView extends View {
    constructor() {
        super();
        this.style = {
            width: '100%',
            height: '100%',
            alignItems:'center'
        }
        let head = new View()
        head.style = {
            width: '100%',
            height: 30,
            backgroundColor: '#FFCCBB'
        }
        this.appendChild(head)

        let scrollView = new Scroller()
        scrollView.style = {
            width: '100%',
            maxHeight: 300,
            flexShrink: 1
        }
        for (let i = 0;i<20;i++){
            scrollView.appendChild(new ItemView(i))
        }
        this.appendChild(scrollView)

        let food = new View()
        food.style = {
            width: '100%',
            height: 40,
            backgroundColor:'#12b7f5'
        }
        this.appendChild(food)
    }

}

// 根页面渲染
Hummer.render(new RootView());