import { Hummer, Text, View } from "@hummer/hummer-front";

class childView extends Text{
    constructor(){
        super();
        this.style = {
            fontSize: 20,
            color: '#000000',
        }
        this.text = 'coffer TestView'
    }
}