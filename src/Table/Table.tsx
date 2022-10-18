import React from 'react';
import { tableDefaultProps } from './defaultProps';
import { TableProps } from './type';

const Talbe: React.FC<TableProps> = (props) => {
  return <>我是 Table 组件</>;
};

Talbe.defaultProps = tableDefaultProps;

export default Talbe;
