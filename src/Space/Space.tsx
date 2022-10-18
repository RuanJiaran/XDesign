import React from 'react';
import { handlerClassNames } from '../_utils';
import { SpaceProps } from './type';

const Space: React.FC<SpaceProps> = (props) => {
  const { size, direction, className, children, style } = props;
  const { classNames } = handlerClassNames('space', [`direction-${direction}`], className);

  return (
    <div className={classNames} style={{ gap: size, ...style }}>
      {children}
    </div>
  );
};

Space.defaultProps = {
  size: 8,
  direction: 'horizontal',
};

export default Space;
