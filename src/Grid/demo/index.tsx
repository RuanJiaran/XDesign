import React from 'react';
import { Row, Col } from 'xdesign-ui';

const style: React.CSSProperties = {
  background: '#0052d9',
  padding: '8px 0',
  color: 'white',
  textAlign: 'center',
};

const style2: React.CSSProperties = {
  background: '#4787f0',
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
        <Col style={style}>24</Col>
      </Row>
      <Row style={rowstyle}>
        <Col span={12} style={style}>
          12
        </Col>
        <Col span={12} style={style2}>
          12
        </Col>
      </Row>
      <Row style={rowstyle}>
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
      <Row style={rowstyle}>
        <Col span={6} style={style}>
          6
        </Col>
        <Col span={6} style={style2}>
          6
        </Col>
        <Col span={6} style={style}>
          6
        </Col>
        <Col span={6} style={style2}>
          6
        </Col>
      </Row>
      <Row style={rowstyle}>
        <Col span={2} style={style}>
          2
        </Col>
        <Col span={4} style={style2}>
          4
        </Col>
        <Col span={10} style={style}>
          10
        </Col>
        <Col span={8} style={style2}>
          8
        </Col>
      </Row>
      <Row style={rowstyle}>
        <Col span={1} style={style}>
          1
        </Col>
        <Col span={3} style={style2}>
          3
        </Col>
        <Col span={5} style={style}>
          5
        </Col>
        <Col span={15} style={style2}>
          15
        </Col>
      </Row>
    </>
  );
};

export default Index;
