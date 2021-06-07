import React from 'react';
interface IProps{
  /**
  * @description 标题
  */

  text: string;

  /**
   * @description 样式
   */

  styles?: React.CSSProperties
}

export default function Title({
  text,
  styles
}: IProps) {
  return (
    <div style={styles}>{text}</div>
  )
}
