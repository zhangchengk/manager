import * as React from "react";
import * as ReactDOM from "react-dom";
import { Switch,  Route, Redirect,HashRouter} from 'react-router-dom';
import '../../../node_modules/_antd@3.11.6@antd/dist/antd.css';
import MiddleWare from '../../contains/middleware';
import { Layout,Icon,Menu} from 'antd';
import './index.css';
// const style = require('./index.css');
const { Header, Content, Footer,Sider } = Layout;
const { SubMenu } = Menu;

export default class MainPage extends React.Component {
        // sta_server
        state = {
                collapsed: false,
                tabletype: 'sta_server',
        }
  

  toggle = () => {
    this.setState({collapsed: !(this.state.collapsed)});
  };

  changeTableType  =(e) =>{
          this.setState({tabletype:e.key});
  }

  render(){
    
 let root  = (
  <div>
       
               <Layout style={{ minHeight: '100vh' }}>   
                        {/* left sider */}
                        <Sider
                             trigger={null}
                              collapsible
                             collapsed={this.state.collapsed}
                        >
                       <div className='logo' >后台管理系统</div>
                                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                                <SubMenu key="sub1" title={<span><Icon type="laptop" />数据统计管理</span>}>
                                        <Menu.Item key="sta_server" onClick={this.changeTableType}>服务注册管理</Menu.Item>
                                        <Menu.Item key="sta_sp_mapping" onClick={this.changeTableType}>常规处理器匹配管理</Menu.Item>
                                        <Menu.Item key="sta_process" onClick={this.changeTableType}>定制处理器匹配管理</Menu.Item>
                                        <Menu.Item key="sta_cluster" onClick={this.changeTableType}>数据集群源配置管理</Menu.Item>
                                        <Menu.Item key="sta_start" onClick={this.changeTableType}>启动数据统计</Menu.Item>
                                        </SubMenu>
                                        <SubMenu key="sub2" title={<span><Icon type="laptop" />日志服务后台管理</span>}>
                                        <Menu.Item key="unitelog_token" onClick={this.changeTableType}>服务Token注册管理</Menu.Item>
                                        <Menu.Item key="unitelog_user_config" onClick={this.changeTableType}>用户方配置管理</Menu.Item>
                                        <Menu.Item key="unitelog_capacity_config" onClick={this.changeTableType}>限流邮件提醒管理</Menu.Item>
                                        <Menu.Item key="unitelog_taskinfo" onClick={this.changeTableType}>定时任务执行情况</Menu.Item> 
                                        <Menu.Item key="unitelog_taskrepair" >日志文件修复</Menu.Item>                                      
                                        </SubMenu>
                                        <SubMenu key="sub3" title={<span><Icon type="laptop" />统一搜索授权管理</span>}>
                                        <Menu.Item key="9">授权详细管理</Menu.Item>
                                        <Menu.Item key="10">授权模型管理</Menu.Item>
                                        <Menu.Item key="11">被授权模型管理</Menu.Item>
                                        <Menu.Item key="12">搜索授权处理</Menu.Item>
                                        </SubMenu> 
                                        
                                        <SubMenu key="sub4" title={<span><Icon type="laptop" />集群数据看板</span>}>
                                        <Menu.Item key="on_cluster_es_store" onClick={this.changeTableType}>线上ES</Menu.Item>
                                        <Menu.Item key="opensearch_es" onClick={this.changeTableType}>统一搜索ES</Menu.Item>
                                        </SubMenu>

                                         <SubMenu key="sub5" title={<span><Icon type="laptop" />文档查看</span>}>
                                        <Menu.Item key="logservice_design" onClick={this.changeTableType}>日志服务整体设计</Menu.Item>
                                        <Menu.Item key="logservice_process" onClick={this.changeTableType}>日志服务流程图</Menu.Item>
                                        <Menu.Item key="logservice_use" onClick={this.changeTableType}>日志服务使用文档</Menu.Item>
                                        <Menu.Item key="statistic_design" onClick={this.changeTableType}>数据收集整体设计</Menu.Item>
                                        </SubMenu>
                                 </Menu>
                         </Sider>
                                  

                        {/* right content */}
                        <Layout>
                                <Header style={{ background: '#fff', padding: 0 }} >
                                        <Icon
                                          className="trigger"
                                          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                          onClick={this.toggle}
                                          style={{margin: '0 40px 0'}}
                                        />
                                </Header>

                                <Content style={{ margin: '24px 16px 0' }}>
                                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                       <MiddleWare tabletype={this.state.tabletype}/>
                                        </div>
                                </Content>

                                <Footer style={{ textAlign: 'center' }}>
                                 ManagePlatForm Design ©2018 Created by zhangchengk
                                </Footer>
                        </Layout>
                </Layout>
        
  </div>
 )


 return root;
 
}
}


