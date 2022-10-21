import React, { useEffect, useState } from 'react';
import { handlerClassNames } from '../_utils';
import { paginationDefaultProps } from './defaultProps';
import { PaginationProps } from './type';
import { Button } from '../Button';
import { Space } from '../Space';

const Pagination: React.FC<PaginationProps> = (props) => {
  const { total, current, pageSize, size, className, style, onChange } = props;

  const [currentPage, setCurrentPage] = useState<number>(current as number);

  const { classNames, compClassPrefix } = handlerClassNames('pagination', className);

  const minPageNum = 1;
  const maxPageNum = Math.ceil(total / (pageSize as number));

  let pageNumArr = [];
  for (let i = 1; i <= maxPageNum; i++) {
    pageNumArr.push(i);
  }

  useEffect(() => {
    currentPage < minPageNum && setCurrentPage(minPageNum);
    currentPage > maxPageNum && setCurrentPage(maxPageNum);
  }, [currentPage]);

  return (
    <div className={classNames} style={style}>
      <div>共 {total} 条数据</div>
      <Space>
        <Button ghost={true} size={size} onClick={() => setCurrentPage(currentPage - 1)}>
          {'<'}
        </Button>
        {pageNumArr.map((i) => {
          return (
            <Button
              ghost={true}
              size={size}
              type={currentPage === i ? 'primary' : 'default'}
              onClick={() => setCurrentPage(i)}
            >
              {i}
            </Button>
          );
        })}
        <Button ghost={true} size={size} onClick={() => setCurrentPage(currentPage + 1)}>
          {'>'}
        </Button>
      </Space>
    </div>
  );
};

Pagination.defaultProps = paginationDefaultProps;

export default Pagination;
