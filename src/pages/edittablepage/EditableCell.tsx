import * as React from 'react';
import {Props,State} from './type';
import {  Input, InputNumber,Form,Select} from 'antd';
import {EditableContext} from './context';
const Option = Select.Option;
const FormItem = Form.Item;

export default class EditableCell extends React.Component<Props, State> {
  getInput = (dataIndex) => {
    switch(dataIndex){
      case  'usingflag':
      case  'istask':
        return <Select  style={{ width: 80 }} >
                <Option value="yes">yes</Option>
                <Option value="no">no</Option>
              </Select>
    }
    return <Input />;
  };
getRulesByDataIndex=(dataIndex)=>{
  switch(dataIndex){
    case  'serverid':
    case  'cluster_id':
    case  'type':
    // case  'serverid':
    // case  'serverid':
    // case  'serverid':
      return [{
        required: true,
        message: `不能为空`,
      }]
  }
}
    render() {
      const {
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        ...restProps
      } = this.props;
      return (
        <EditableContext.Consumer>
          {(form) => {
            const { getFieldDecorator } = form;
            return (
              <td {...restProps}>
                {editing ? (
                  <FormItem style={{ margin: 0 }}>
                    {getFieldDecorator(dataIndex, {
                      rules: [{
                        required: this.getRulesByDataIndex(dataIndex),
                        message: `Please Input ${title}!`,
                      }],
                      initialValue: record[dataIndex],
                    })(this.getInput(dataIndex))}
                  </FormItem>
                ) : restProps.children}
              </td>
            );
          }}
        </EditableContext.Consumer>
      );
    }
  }
  