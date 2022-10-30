import {Text, View} from "@hummer/hummer-front";

export class ItemView extends View {
    constructor(position: number) {
        super();
        this.style = {
            width: '80%',
            height: 30,
            marginTop: 10,
            marginLeft:30,
            marginBottom: 10,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: '#FFCC22'
        }

        let tx = new Text()
        tx.style = {
            fontSize: 12,
        }
        tx.text = '第' + position + '个'
        this.appendChild(tx)
    }
}