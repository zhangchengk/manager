import axios from 'axios';


//执行post请求，获取数据
export async function getData(url:string,json:any){
    let data:any;
    {
        await axios.post(url,json).then(function (response) {
        console.log(response);
        data= response.data.detailMsg.data;
      })
      .catch(function (error) {
        console.log(error);
        return null;
      });
    }
    return data;
}