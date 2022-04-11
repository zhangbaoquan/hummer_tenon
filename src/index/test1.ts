import { Hummer, Text, View } from "@hummer/hummer-front";
import{childView} from './childView'

class RootView extends View {
    constructor() {
        super();

        this.style = {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#12b7f5',
        }

        // let textView = new Text();
        // textView.text = "~ Hello Hummer ~";
        // textView.style = {
        //     fontSize: 20,
        //     color: '#000000',
        // }

        // this.appendChild(textView);
        this.appendChild(new childView());
    }

    // onAppear() {
    //     // 页面显示
    //     console.log('页面显示')
    //     let data = Hummer.urlContent;
    //     let appId = Hummer.appId;
    //     console.log('coffer_tag map: ' + JSON.stringify(data));
    //     console.log('coffer_tag appId: ' + appId);
    // }
}

Hummer.render(new RootView());