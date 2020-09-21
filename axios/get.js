import axios from 'axios';
import abd from './a.json';

axios.get('https://raw.githubusercontent.com/zofqofhtltm8015/fs/master/db.json').then((Response)=>{
    console.log(Response.data);
    abd.abd = {a:'24'};
    console.log(abd);
}).catch((Error)=>{
    console.log(Error);
})