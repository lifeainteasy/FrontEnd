import axios from 'axios';
import abd from './a.json';

axios.get('https://raw.githubusercontent.com/zofqofhtltm8015/fs/master/db.json').then((Response)=>{
    console.log(Response.data);
}).catch((Error)=>{
    console.log(Error);
})