import React from 'react';
import { Row, Col } from 'xdesign-ui';

const style: React.CSSProperties = {
  background: '#0052d9',
  padding: '8px 0',
  color: 'white',
  textAlign: 'center',
};

const style2: React.CSSProperties = {
  background: '#266fe8',
  padding: '8px 0',
  color: 'white',
  textAlign: 'center',
};

const rowstyle: React.CSSProperties = {
  marginBottom: '8px',
};

const Index = () => {
  return (
    <>
      <Row style={rowstyle}>
        <Col span={11} style={style}>
          11
        </Col>
        <Col span={11} offset={2} style={style}>
          11
        </Col>
      </Row>
      <Row style={rowstyle}>
        <Col span={2} style={style}>
          2
        </Col>
        <Col span={6} offset={2} style={style}>
          6
        </Col>
        <Col span={10} offset={4} style={style}>
          10
        </Col>
      </Row>
    </>
  );
};

export default Index;
