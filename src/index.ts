import { RegisterConfig } from "./models/register.config";
import SyntheticClick from './events/SyntheticClick';
export class WebCapture {
    click = false;
    constructor(){

    }
    registerCapture(config: RegisterConfig){
        this.click= true;
        console.log('called demo', config)
    }
}
// if (process.env.NODE_ENV !== 'production') {
//   require('file-loader!../index.html')
// }
var webCapture = new WebCapture();
var syntheticClick = new SyntheticClick();
syntheticClick.registerClick();
webCapture.registerCapture({click: true});