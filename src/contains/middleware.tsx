import * as React from "react";
import EditableTable from '../pages/edittablepage/Editable';
import axios from 'axios';
import IndexPage from '../pages/indexpage/main'
import OnlineESDataShow from '../pages/datashow/online_es'
import OpensearchESDataShow from '../pages/datashow/opensearch_es'
import LogDesignDiagram from '../pages/datashow/logservice_design'
import LogApiDiagram from '../pages/datashow/logservice_use_api'
import LogProcessDiagram from '../pages/datashow/logservice_process'
import DataStatisticProgress from '../pages/programpage/statisticprogram'
import StatisticDiagram from '../pages/datashow/statistic_design'
const columns = require('../constants/index');
 interface props{
    tabletype:any
}
export default class MiddleWare extends React.Component<props>{
    constructor(props){
        super(props);
        console.log(this.props.tabletype);
    }
    async getData(url:string,json:any){
        let data:any;
        {
            await  axios.post(url,json).then(function (response) {
            console.log(response);
            data= response.data.detailMsg.data;
          })
          .catch(function (error) {
            console.log(error);
            return null;
          });
        }
        this.setState({data:data});
    } 
    /**
     * 根据tabletype  分发不同的列 给edittable
     * 
     * 字符串含义：
     * statistic-server-list ：sta_server
     * statistic-server-process-mapping : sta_sp_mapping
     * statistic-cluster :sta_cluster
     * statistic-process :sta_process
     * 
     * unitelog-token :unitelog_token
     * unitelog-userconfig :unitelog_user_config
     * unitelog-capacity-config:unitelog_capacity_config
     * unitelog_taskinfo
     * 
     * on_cluster_es_store:数据看板 线上es 存储前25
     * */ 
    render(){
        let column_param = [];
        let post_url = '';
        switch(this.props.tabletype){    
            case 'index':{
                return <IndexPage />;
            }
            case 'on_cluster_es_store':{
                return <OnlineESDataShow />;
            }
            case 'opensearch_es':{
                return <OpensearchESDataShow />;
            }
            case 'logservice_design':{
                return <LogDesignDiagram />;
            } 
            case 'logservice_use':{
                return <LogApiDiagram />;
            }case 'logservice_process':{
                return <LogProcessDiagram />;
            }
            case 'sta_start':{
                return <DataStatisticProgress />;
            }
            case 'statistic_design':{
                return <StatisticDiagram />;
            }
            case 'sta_server':{        
                column_param = columns.SERVERLIST_COLUMNS.slice(0);
                post_url = columns.GETSERVERLIST_URL;
                break;
            }
            case 'sta_sp_mapping':{
                column_param = columns.SERVE_PROGRESS_COLUMNS.slice(0);
                post_url = columns.GETSERVER_PROCESS_URL;
                break;
             }
             case 'sta_cluster':{
                column_param = columns.CLUSTER_COLUMNS.slice(0);
                post_url = columns.CLUSTER_URL;
                break;
             }
             case 'sta_process':{
                column_param = columns.PROGRESS_COLUMNS.slice(0);
                post_url = columns.GET_PROCESS_URL;
                break
             }
            //  -----------------------------------------------------
             case 'unitelog_token':{
                column_param = columns.UNITLOG_TOKEN_COLUMNS.slice(0);
                post_url = columns.UITLOG_TOKEN_URL;
                break
             }
             case 'unitelog_user_config':{
                column_param = columns.UNITLOG_USERCONFIG_COLUMNS.slice(0);
                post_url = columns.UITLOG_USERCONFIG_URL;
                break
             }
             case 'unitelog_capacity_config':{
                column_param = columns.UNITLOG_CAPACITY_COLUMNS.slice(0);
                post_url = columns.UITLOG_CAPACITY_URL;
                break
             }
             case 'unitelog_taskinfo':{
                column_param = columns.UNITLOG_TaskInfo_COLUMNS.slice(0);
                post_url = columns.UITLOG_TASKINFO_URL;
                break
             }
             
    }
    return <EditableTable columns={column_param} url={post_url}/>;
    }   
      
}