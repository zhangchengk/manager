import * as React from 'react';
import { Table, Popconfirm, Form,Button } from 'antd';
import axios from 'axios';
export default class DataStatisticProgress extends React.Component {
    process=()=>{
        {
            axios.post("/DataStatistic/statistic/excute",{}).then(function (response) {
                
          })
          .catch(function (error) {
            console.log(error);
            return null;
          });
        }
      return null;
      }
    render(){
        return(
       <Button type='primary' onClick={this.process}>
           开始数据收集
        </Button>
        );
    }
}


