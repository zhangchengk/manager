import * as React from 'react';
//创建上下文，将参数form值放入上下文value，其余放入props



export const EditableContext = React.createContext(null);

export const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
      <tr {...props} />
    </EditableContext.Provider>
  );