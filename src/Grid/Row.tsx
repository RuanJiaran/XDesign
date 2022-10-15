import React from 'react';
import { handlerClassNames } from '../_utils';
import { RowProps } from './type';

const Row: React.FC<RowProps> = (props) => {
  const { children, style, className } = props;

  const { classNames } = handlerClassNames('row', className);

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
};

export default Row;
