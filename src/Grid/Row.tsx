import React from 'react';
import './index.less';
import { CompBaseProps } from '..';
import useClassNames from '../_hooks/useClassNames';

export type RowProps = CompBaseProps;

const Row: React.FC<RowProps> = (props) => {
  const { children, style, className } = props;

  const { clsNames } = useClassNames('row', className);

  return (
    <div className={clsNames} style={style}>
      {children}
    </div>
  );
};

export default Row;
