import React from 'react';
import './index.less';
import { CompBaseProps } from '..';
import useClassNames from '../_hooks/useClassNames';

export type ColProps = {
  /**
   * @description 每行占用列数
   */
  span?: number;
  /**
   * @description 偏移指定列数
   */
  offset?: number;
} & CompBaseProps;

const Col: React.FC<ColProps> = (props) => {
  const { span = 24, offset, children, style, className } = props;

  const { clsNames } = useClassNames('col', className, {
    [`span-${span}`]: true,
    [`offset-${offset}`]: offset,
  });

  return (
    <div className={clsNames} style={{ ...style, flex: span }}>
      {children}
    </div>
  );
};
export default Col;
