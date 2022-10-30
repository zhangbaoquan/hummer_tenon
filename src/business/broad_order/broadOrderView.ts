import {BasicAnimation, Hummer, Image, Text, View} from "@hummer/hummer-front";
import icon from '../../close.png'

class BroadOrderView extends View {
    constructor() {
        super();
        this.style = {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
        }
        this.initElement()
    }

    initElement() {
        this.initCloseView()
        this.initCardView()
    }

    initCloseView() {
        let body = new View()
        body.style = {
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
        }
        let closeBody = new View()
        closeBody.style = {
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#282b32',
            borderRadius: 50,
            borderWidth: 2.5,
            shadow: '0px 0px 40px #5bc182',
        }
        let image = new Image()
        image.style = {
            width: 45,
            height: 45
        }
        image.src = icon
        closeBody.appendChild(image)
        body.appendChild(closeBody)
        this.appendChild(body)
    }

    initCardView() {
        let body = new View()
        body.style = {
            width: '90%',
            height: 300,
            borderRadius: 30,
            backgroundColor: '#1f2228'
        }
        let head = new View()
        head.style = {
            width: '100%',
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
        }
        let v1 = new View()
        // 注意下面的 position:'absolute'，是要实现后面的View 叠在当前View的关键属性
        v1.style = {
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            flexDirection: 'column',
            position: 'absolute',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: '#1a1d22',
        }
        this.initProgressBar(v1)
        let v2 = new View()
        v2.style = {
            width: '80%',
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ff7226'
        }
        let tv = new Text()
        tv.text = 'R$13,80'
        tv.style = {
            fontSize: 20,
            color: '#ffffff',
        }
        v2.appendChild(tv)
        head.appendChild(v1)
        head.appendChild(v2)
        body.appendChild(head)
        this.appendChild(body)
    }

    // 实现动画效果
    initProgressBar(view: View) {
        let p1 = new View()
        p1.style = {
            width: '100%',
            flexGrow: 30,
            backgroundColor: '#303232'
        }
        let p2 = new View()
        p2.style = {
            width: '100%',
            flexGrow: 1,
            backgroundColor: '#fadc4d'
        }
        let anim = new BasicAnimation('width');
        anim.value = 0;
        anim.duration = 10;
        anim.repeatCount = 3;
        anim.delay = 1;
        anim.easing = 'linear';
        p1.addAnimation(anim, 'key1');
        p2.addAnimation(anim, 'key1');
        view.appendChild(p1);
        view.appendChild(p2);
    }

}

Hummer.render(new BroadOrderView());
