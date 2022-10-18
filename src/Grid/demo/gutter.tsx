import React from 'react';
import { Row, Col } from 'xdesign-ui';

const style: React.CSSProperties = {
  background: '#0052d9',
  color: 'white',
  padding: '8px 0',
  textAlign: 'center',
};

const style2: React.CSSProperties = {
  background: '#4787f0',
  padding: '8px 0',
  color: 'white',
  textAlign: 'center',
};

const Index = () => {
  return (
    <>
      <Row gutter={[20, 0]}>
        <Col style={style}>24</Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={12} style={style}>
          12
        </Col>
        <Col span={12} style={style2}>
          12
        </Col>
      </Row>
      <Row gutter={[20, 8]}>
        <Col span={8} style={style}>
          8
        </Col>
        <Col span={8} style={style2}>
          8
        </Col>
        <Col span={8} style={style}>
          8
        </Col>
      </Row>
      <Row gutter={[0, 8]}>
        <Col span={12} style={style2}>
          12
        </Col>
        <Col span={12} style={style2}>
          12
        </Col>
      </Row>
      <Row>
        <Col span={24} style={style}>
          24
        </Col>
      </Row>
    </>
  );
};

export default Index;
