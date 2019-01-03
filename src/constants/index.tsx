import * as React from "react";
import'./index.css';
/**
 * 公用的全局变量
*/

/**
 * 一：可编辑表列名  table columns
 * */ 

/**1 数据统计服务 <注册服务表>*/
export const SERVERLIST_COLUMNS =[
  {
    title: '服务',
    dataIndex: 'serverid',
    width: 250,
    editable: true,
    fixed: 'left' ,
    
  },
  {
    title: '描述',
    dataIndex: 'description',
    width: 250,
    editable: true,
  },
  {
    title: '是否启用',
    dataIndex: 'usingflag',
    width: 250,
    editable: true,
    classname :'selector'
  },
  {
    title: '集群',
    dataIndex: 'cluster_id',
    editable: true,
  }
];
/**2 数据统计服务 <服务&常规处理器配置表>*/
export const SERVE_PROGRESS_COLUMNS =[
  {
    title: '服务',
    dataIndex: 'serverid',
    width: 150,
    editable: true,
    fixed: 'left' ,
  },
  {
    title: '数据处理器',
    dataIndex: 'type',
    width: 150,
    editable: true,
  },
  {
    title: '是否启用',
    dataIndex: 'usingflag',
    width: 100,
    editable: true,
  },
  {
    title: '匹配规则',
    dataIndex: 'mapping',
    width: 300,
    editable: true,
  },
  {
    title: '集群',
    dataIndex: 'cluster_id',
    width: 200,
    editable: true,
  },{
    title: '用户信息',
    dataIndex: 'user_info',
    width: 300,
    editable: true,
  },{
    title: '用户信息描述',
    dataIndex: 'user_info_desc',
    width: 300,
    editable: true,
  },{
    title: '是否与其他服务占共有资源数据',
    dataIndex: 'common_flag',
    // width: '10%',
    editable: true,
  }
];
/**3 数据统计服务 <集群配置表>*/
export const CLUSTER_COLUMNS =[
  {
    title: '集群',
    dataIndex: 'cluster_id',
    width: 120,
    editable: true,
    fixed: 'left' ,
  },
  {
    title: 'HOSTS',
    dataIndex: 'hosts',
    width: 150,
    editable: true,
  },
  {
    title: '端口',
    dataIndex: 'port',
    width: 100,
    editable: true,
  },
  {
    title: 'ES_U',
    dataIndex: 'username',
    width: 100,
    editable: true,
  },
  {
    title: 'ES_P',
    dataIndex: 'password',
    width: 100,
    editable: true,
  },{
    title: 'http',
    dataIndex: 'http',
    width: 100,
    editable: true,
  },{
    title: 'HDFS-SITE文件名',
    dataIndex: 'hdfs_site_name',
    width: 150,
    editable: true,
  },{
    title: 'HDFS-CORE文件名',
    dataIndex: 'hdfs_core_name',
    width: 150,
    editable: true,
  },
  {
    title: 'HDFS ROOT路径',
    dataIndex: 'hdfs_root_path',
    width: 150,
    editable: true,
  },{
    title: 'HBASE-DEFAULT文件名',
    dataIndex: 'hbase_default_name',
    width: 150,
    editable: true,
  },{
    title: 'HBASE-SITE文件名',
    dataIndex: 'hbase_site_name',
    width: 150,
    editable: true,
  },{
    title: 'HBASE SITE路径',
    dataIndex: 'hbase_root_path',
    editable: true,
  }
];
/**4 数据统计服务 <定制数据处理器>*/
export const PROGRESS_COLUMNS =[
  {
    title: '服务',
    dataIndex: 'serverid',
    width: 250,
    editable: true,
    fixed: 'left' ,
  },
  {
    title: '定制数据处理器',
    dataIndex: 'type',
    width: 300,
    editable: true,
  },
  {
    title: '是否启用',
    dataIndex: 'usingflag',
    width: 150,
    editable: true,
    classname :'selector'
  },
  {
    title: '集群',
    dataIndex: 'cluster_id',
    editable: true,
  }
];

/**5 日志服务 <TOKEN>*/
export const UNITLOG_TOKEN_COLUMNS =[
  {
    title: '租户id',
    dataIndex: 'yylogid',
    width: 250,
    editable: true,
    fixed: 'left' ,
  },
  {
    title: '应用id',
    dataIndex: 'yylogappid',
    width: 250,
    editable: true,
  },
  {
    title: 'Token',
    dataIndex: 'token',
    width: 250,
    editable: true,
    classname :'selector'
  },
  {
    title: '配置字段',
    dataIndex: 'attribute',
    editable: true,
  }
];

/**6 日志服务 <用户方配置>*/
export const UNITLOG_USERCONFIG_COLUMNS =[
  {
    title: '应用ID',
    dataIndex: 'yylogid',
    width: 100,
    editable: true,
    fixed: 'left' ,
  },
  {
    title: 'APPID',
    dataIndex: 'yylogappid',
    width: 150,
    editable: true,
  },
  {
    title: 'HIVE表名(text格式)',
    dataIndex: 'hivetable4text',
    width: 180,
    editable: true,
  },
  {
    title: 'HIVE表名(parquet格式)',
    dataIndex: 'hivetable4parquet',
    width: 180,
    editable: true,
  },
  {
    title: 'ES索引',
    dataIndex: 'es_index',
    width: 80,
    editable: true,
  },{
    title: 'ES TYPE',
    dataIndex: 'es_type',
    width: 100,
    editable: true,
  },{
    title: '配置字段',
    dataIndex: 'attribute',
    width: 200,
    editable: true,
  },{
    title: 'HDFS分区字段',
    dataIndex: 'hdfs_partition',
    width: 150,
    editable: true,
  },
  {
    title: 'JSON字段',
    dataIndex: 'column_name',
    width: 200,
    editable: true,
  },{
    title: '日志内容字段',
    dataIndex: 'origin',
    width: 100,
    editable: true,
  },{
    title: '是否数据转换',
    dataIndex: 'istask',
    editable: true,
  }
];
/**7 日志服务 <限流配置>*/
export const UNITLOG_CAPACITY_COLUMNS =[
  {
    title: '应用ID',
    dataIndex: 'appid',
    width: 200,
    editable: true,
    fixed: 'left' ,
  },
  {
    title: 'APPID',
    dataIndex: 'app_type',
    width: 120,
    editable: true,
  },
  {
    title: '最大容量',
    dataIndex: 'max_threshold',
    width: 180,
    editable: true,
  },
  {
    title: '报警容量',
    dataIndex: 'alarm_threshold',
    width: 180,
    editable: true,
  },
  {
    title: '已用容量',
    dataIndex: 'current_size',
    width: 80,
    editable: true,
  },{
    title: '报警邮件接收人',
    dataIndex: 'alarm_emails',
    width: 300,
    editable: true,
  },{
    title: '最近一次报警时间',
    dataIndex: 'last_alarm_send_time',
    width: 200,
    editable: true,
  },{
    title: '最近一次超容时间',
    dataIndex: 'last_overflow_send_time',
 
    editable: true,
  }
];

/**8 日志服务 <TaskInfo>*/
export const UNITLOG_TaskInfo_COLUMNS =[
  {
    title: '文件日期',
    dataIndex: 'date',
    width: 180,
    editable: true,
    fixed: 'left' ,
  },
  {
    title: '执行结果',
    dataIndex: 'flag',
    width: 200,
    editable: true,
   
  },
 
  {
    title: '脚本内容',
    dataIndex: 'content',
    width: 500,
    editable: false,
    render: (text, record, index) => <span className='col'>{text}</span>,
  },
  
  {
    title: '错误详情',
    dataIndex: 'errorMessage',
    editable: false,
  },
];
/***
 * 二：后台请求路径
 */
//1  数据统计服务 <注册服务表> 
export const GETSERVERLIST_URL = 'DataStatistic/manage/getserverList';
//2  数据统计服务 <常规数据处理器> 
export const GETSERVER_PROCESS_URL = 'DataStatistic/manage/getMappingConfig';
//3  数据统计服务 <集群配置> 
export const CLUSTER_URL = 'DataStatistic/manage/getClusterConfig';
//4  数据统计服务 <特殊数据处理器> 
export const GET_PROCESS_URL = '/DataStatistic/manage/getProcessMappingConfig';


//5  日志服务 <Token> 
export const UITLOG_TOKEN_URL = '/UniteLogSearch/manage/log/getToken';
//6  日志服务 <用户方配置> 
export const UITLOG_USERCONFIG_URL = '/UniteLogSearch/manage/log/getConfig';
//7  日志服务 <限流配置> 
export const UITLOG_CAPACITY_URL = '/UniteLogSearch/manage/log/getCapacityConfig';
//8  日志服务 <定时任务执行情况> 
export const UITLOG_TASKINFO_URL = '/UniteLogSearch/manage/log/getTaskInfo';

const test_columns = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
];