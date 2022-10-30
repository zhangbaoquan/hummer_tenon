import { Hummer, Text, View } from "@hummer/hummer-front";
import{childView} from './childView'

class RootView extends View {
    constructor() {
        super();

        this.style = {
            width: '100%',
            height: '100%',
            flexDirection : 'column',
            // justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#FFFFFF',
            
        }
        this.appendChild(new childView());
        let line = new View()
        line.style = {
            width : '100%',
            height : 1,
            backgroundColor : '#FFFFFF'
        }
        this.appendChild(line)
        this.appendChild(new childView());
    }

    onAppear() {
        // 页面显示
        console.log('页面显示')
        let data = Hummer.pageInfo;
        console.log('coffer_tag map: ' + JSON.stringify(data));
        let appId = data.params.appId;
        console.log('coffer_tag appId: ' + appId);
    }
}

Hummer.render(new RootView());