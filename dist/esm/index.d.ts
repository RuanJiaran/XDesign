import Button, { ButtonProps } from './Button';
import Space from './Space';
import { Row, Col } from './Grid';
import Input from './Input';
import Checkbox from './Checkbox';
import InputNumber from './InputNumber';
import Radio from './Radio';
import Select from './Select';
import Slider from './Slider';
import Table from './Table';
import Textarea from './Textarea';
import Form from './Form';
import Icon from './Icon';
export declare type CompBaseProps = {
    /**
     * @description 组件内容
     */
    children?: React.ReactNode;
    /**
     * @description 类名
     */
    className?: string;
    /**
     * @description 样式
     */
    style?: React.CSSProperties;
};
export { Button, Space, Row, Col, Icon, Input, Checkbox, InputNumber, Radio, Select, Slider, Table, Textarea, Form, };
export type { ButtonProps };
