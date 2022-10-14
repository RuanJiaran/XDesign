import React from 'react';
import { Icon, Space } from 'xdesign-ui';
import { copy } from '../../_utils';

const style: React.CSSProperties = {
  background: '#f3f3f3',
  height: '80px',
  width: '120px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '5px',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  cursor: 'pointer',
};

const IconWrap = (props: { name: string; spin?: boolean }) => {
  const { name, spin = false } = props;
  return (
    <>
      <div style={style} onClick={() => copy(name)}>
        <Icon type={name} spin={spin} />
        <span>{name}</span>
      </div>
    </>
  );
};

const Index = () => {
  return (
    <Space>
      <IconWrap name="loading" spin={true} />
      <IconWrap name="back" />
      <IconWrap name="delete" />
      <IconWrap name="edit" />
      <IconWrap name="settings" />
      <IconWrap name="cancel" />
      <IconWrap name="down" />
      <IconWrap name="home" />
      <IconWrap name="favoriteslist" />
      <IconWrap name="close" />
      <IconWrap name="increase" />
      <IconWrap name="collection" />
    </Space>
  );
};

export default Index;
