import * as React from 'react';
import axios from 'axios';
import { Table, Popconfirm, Form,Button } from 'antd';
import {State} from './type';
//上下文
import {EditableContext,EditableRow} from './context';
//表格单元
import  EditableCell  from "./EditableCell";
//传参props
import {TestProps} from '../../contains/type'
import {guid} from '../../utils/uuid'
const EditableFormRow = Form.create()(EditableRow);


export default class EditableTable extends React.Component <TestProps, State>{
  data = [];
  columns=[];    
  constructor(Props) {
    super(Props);    
    this.state = {data:this.data,  editingKey: '' };
    this.columns=this.props.columns;
    
    // this.getData(this.props.url,{});
  }
  //初始化执行一次
  componentDidMount(){
    
  }
  //props发生改变时执行
  componentWillReceiveProps(nextProps){
    this.columns=nextProps.columns;
    const item=
      {
        title: '操作',
        dataIndex: 'operation',
        fixed: 'right',
        width: 200,
        render: (text, record) => {
          const editable = this.isEditing(record);
          return (
            <div>
              {editable ? (
                <span>
                  <EditableContext.Consumer>
                    {form => (
                      <a
                        href="javascript:;"
                        onClick={() => this.save(form, record.id)}
                        style={{ marginRight: 8 }}
                      >
                        保存
                      </a>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm
                    title="确定要取消吗?"
                    onConfirm={() => this.cancel()}
                  >
                    <a>取消</a>
                  </Popconfirm>
                </span>
              ) : (
                <a onClick={() => this.edit(record.id)}>编辑</a>
               
              )}
               <Popconfirm
                    title="确定要删除吗?"
                    onConfirm={() => this.delete(record.id)}
                  >
              <a  style={{ marginLeft: 8 }}>删除</a>
              </Popconfirm>

              {/* <a onClick={() => this.add()} style={{ marginLeft: 8 }}>add</a> */}
            </div>
            
          );
        },
      }
    ;
    this.columns.push(item);
    this.getData(nextProps.url,{});
  }
  /**
   * 获取后台数据
   * 说明：这里用axios的同步机制，研究过后发现，加上同步字段，
   * getdata放在的调用是在第一次完全加载之后再调用的
   * 这里去掉 async  await  使用异步方法也没啥问题
  */
  async getData(url:string,json:any){
    let data=[];
    {
        await  axios.post(url,json).then(function (response) {
        console.log(response);
        data=data.concat(response.data.detailMsg.data) ;
      })
      .catch(function (error) {
        console.log(error);
        return data;
      });
    }
    // if(data !=this.state.data){
      this.setState({data:data});
    // }
} 



  isEditing = (record) => {
    return record.id === this.state.editingKey;
  };

//编辑 改变state 是cell呈现输入状态
  edit=(id)=> {
    this.setState({ editingKey: id });
  };

// 保存编辑的数据 入库update以及setstate
  save=(form, id)=> {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => id === item.id);
      if (index > -1) {
        const item = newData[index];
  
  
        //后台数据库操作 进行update操作 然后更改state
  
  
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ data: newData, editingKey: '' });
      } else {
        newData.push(this.data);
        this.setState({ data: newData, editingKey: '' });
      }
    });
  };
  //取消编辑
  cancel = () => {
    this.setState({ editingKey: '' });
  };
//删除
delete=(id)=>{
  const newData = [...this.state.data];
  const index = newData.findIndex(item => id === item.id);
  if (index > -1) {
    //后台数据库操作 进行delete操作 然后更改state

    //删除 state中一行
    newData.splice(index, 1);
    this.setState({ data: newData, editingKey: '' });
    
  }
};

add=()=>{
  const newData = [...this.state.data];
  const index = newData.length;
  const gid = guid();
  
  const item = {id : gid }
  newData.push(item);
  this.setState({ data: newData, editingKey: gid });

}
// 扩展列方法
//  expandedRowRender=(record) =>{
//   return <p>{record.content}</p>;
// }
  render() {
    
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };

    const columns = this.props.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType:'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    return (
      <div>
     <Button type='primary' onClick={this.add}>增加</Button>
     {/* <Button icon="icon-off" ></Button> */}
      <p/>
      <Table
        components={components}
        bordered
        dataSource={this.state.data}
        rowKey="id"
        columns={columns}
        rowClassName={() => 'editable-row'}
        scroll={{ x: 1800, y: 800 }} 
        // expandedRowRender={this.expandedRowRender} 扩展列
      >
     
      </Table>
      </div>
    );
  }
}


          