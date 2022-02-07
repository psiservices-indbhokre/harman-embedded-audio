import React from 'react';

export interface CrossProps {
  readonly style?: string;
  readonly color: string;
  readonly lineWidth?: number;
}

export function Cross(props: CrossProps) {
  return (
    <svg viewBox="0 0 18 18" height={18} width={18} className={props.style}>
      <line x1={9} y1={0} x2={9} y2={18} stroke={props.color} strokeWidth={props.lineWidth || 1} />
      <line x1={0} y1={9} x2={18} y2={9} stroke={props.color} strokeWidth={props.lineWidth || 1} />
    </svg>
  );
}