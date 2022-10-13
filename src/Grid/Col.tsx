import React from 'react';
import classNames from 'classnames';
import { clsPrefix } from '../_config';
import './index.less';

const classPrefix = `${clsPrefix}-col`;

type IProps = {
  /**
   * @description 每行占用列数
   */
  span: number;
  /**
   * @description 偏移指定列数
   */
  offset: number;
  /**
   * @description 额外样式
   */
  style: React.CSSProperties;
  /**
   * @description 内容
   */
  children: React.ReactNode;
};

const Col: React.FC<IProps> = (props) => {
  const { span = 24, offset, children, style } = props;

  const classes = classNames(classPrefix, {
    [`${classPrefix}-span-${span}`]: true,
    [`${classPrefix}-offset-${offset}`]: offset,
  });

  return (
    <div className={classes} style={{ ...style, flex: span }}>
      {children}
    </div>
  );
};
export default Col;
