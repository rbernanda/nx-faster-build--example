
import { Button as AntdButton, ButtonProps } from 'antd';
import React from 'react';
import styles from './button.module.scss';

export const Button: React.FC<ButtonProps> = (props) => (
  <AntdButton {...props}>{props.children}</AntdButton>
);

export default Button
