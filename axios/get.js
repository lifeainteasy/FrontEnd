import axios from 'axios';

axios.get('https://my-json-server.typicode.com/zofqofhtltm8015/fs/user').then((Response)=>{
    console.log(Response.data);
}).catch((Error)=>{
    console.log(Error);
})