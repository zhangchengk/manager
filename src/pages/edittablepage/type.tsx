/**
 * type文件专门定义接口
 * 
*/

// 传入edittablecell的props
export interface Props {
    editing:any,
    dataIndex:any,
    title:any,
    inputType:any,
    record:any,
    index:any,
    columns: any,
    url:string,
    handleSave?: (one:any) => void;
    onDecrement?: () => void;
}
//edittablecell的state
export interface State {
    data?:any,
    editingKey?:any,
    editing?: boolean;
    
    count?: number;
    dataSource?:any;
}