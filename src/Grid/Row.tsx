import React from 'react';
import classNames from 'classnames';
import { clsPrefix } from '../_config';
import './index.less';

const classPrefix = `${clsPrefix}-row`;

type IProps = {
  /**
   * @description 类名
   */
  className: string;
  /**
   * @description 样式
   */
  style: React.CSSProperties;
  /**
   * @description 内容
   */
  children: React.ReactNode;
};

const Row: React.FC<IProps> = (props) => {
  const { children, style, className } = props;

  const classes = classNames(classPrefix, className);

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default Row;
