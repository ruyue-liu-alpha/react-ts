import React from 'react';

interface HelloProps {
  name: string;
  age: number;
}
export default function Hello(props: HelloProps) {
  const { name, age } = props;
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
      {list.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
