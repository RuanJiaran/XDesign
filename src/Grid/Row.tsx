import React from 'react';
import { handlerClassNames } from '../_utils';
import { RowProps } from './type';

const Row: React.FC<RowProps> = (props) => {
  const { children, style, className, gutter } = props;

  const { classNames } = handlerClassNames('row', className);

  let gutterCss;
  if (gutter instanceof Array && gutter.length === 2) {
    gutterCss = {
      gap: `${gutter[1]}px`,
      marginBottom: `${gutter[0]}px`,
    };
  }

  return (
    <div className={classNames} style={{ ...style, ...gutterCss }}>
      {children}
    </div>
  );
};

Row.defaultProps = {
  gutter: [8, 0],
};

export default Row;
