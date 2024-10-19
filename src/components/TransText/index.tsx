import { useRef } from 'react';

interface ITransTextProps {
  children: React.ReactNode;
}

export function TransText({ children }: ITransTextProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  return (
    <div ref={boxRef} className='inline-block origin-top-left'>
      <p ref={textRef}>{children}</p>
    </div>
  );
}
