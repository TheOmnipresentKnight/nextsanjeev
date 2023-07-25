import React from 'react';
import styles from './Span.module.css';

interface SpanProps {
    children: React.ReactNode;
    className?:string
}

const Span: React.FC<SpanProps> = ({ children,className }) => {
  return <span className={className}>{children}</span>;
};

export default Span;
