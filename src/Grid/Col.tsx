import React from 'react';
import { handlerClassNames } from '../_utils';
import { ColProps } from './type';

const Col: React.FC<ColProps> = (props) => {
  const { span, offset, children, style, className } = props;

  const { classNames } = handlerClassNames(
    'col',
    [`span-${span}`],
    {
      [`offset-${offset}`]: offset,
    },
    className,
  );

  return (
    <div className={classNames} style={{ ...style, flex: span }}>
      {children}
    </div>
  );
};

Col.defaultProps = {
  span: 24,
};

export default Col;
