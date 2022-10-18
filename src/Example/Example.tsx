import React from 'react';
import { exampleDefaultProps } from './defaultProps';
import { ExampleProps } from './type';

const Alert: React.FC<ExampleProps> = (props) => {
  return <>我是 Example 组件</>;
};

Alert.defaultProps = exampleDefaultProps;

export default Alert;
