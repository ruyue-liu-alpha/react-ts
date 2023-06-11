import { add } from 'Utils/math';
import React from 'react';
import '../../index.css';

interface IProps {
  a: number;
  b: number;
}

function ComputedOne(props: IProps) {
  const { a, b } = props;
  const sum = add(a, b);

  return <p className="computed-one">{`Hi, I'm computed one, my sum is ${sum}.`}</p>;
}

export default ComputedOne;
