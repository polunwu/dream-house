import { useRef, useState, useEffect, useLayoutEffect } from 'react';

interface ITransTextProps {
  children: React.ReactNode;
  paddingX?: number;
  paddingY?: number;
  textStyle?: React.CSSProperties;
}

export function TransText({
  children,
  paddingX = 0,
  paddingY = 0,
  textStyle = {},
}: ITransTextProps) {
  const initialized = useRef(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [boxWidth, setBoxWidth] = useState<number>(0);
  const [boxHeight, setBoxHeight] = useState<number>(0);
  const [textOriginalWidth, setTextOriginalWidth] = useState<number>(0);
  const [textOriginalHeight, setTextOriginalHeight] = useState<number>(0);

  const saveBoxSize = () => {
    if (boxRef.current) {
      const boxWidth = boxRef.current.getBoundingClientRect().width;
      const boxHeight = boxRef.current.getBoundingClientRect().height;
      setBoxWidth(boxWidth);
      setBoxHeight(boxHeight);
    }
  };

  const saveTextOriginalSize = () => {
    if (textRef.current) {
      const textOriginalWidth = textRef.current.getBoundingClientRect().width;
      const textOriginalHeight = textRef.current.getBoundingClientRect().height;
      setTextOriginalWidth(textOriginalWidth);
      setTextOriginalHeight(textOriginalHeight);
    }
  };

  const updateTextTransformSize = () => {
    if (initialized.current && textRef.current) {
      const scaleX = (boxWidth - paddingX * 2) / textOriginalWidth;
      const scaleY = (boxHeight - paddingY * 2) / textOriginalHeight;
      textRef.current.style.transform = `scale(${scaleX}, ${scaleY})`;
    }
  };

  useEffect(() => {
    // Init Box size, Text original size
    if (initialized.current) {
      return;
    }
    initialized.current = true;

    saveBoxSize();
    saveTextOriginalSize();
  }, []);

  useLayoutEffect(() => {
    // Also Save Box size when screen resize
    window.addEventListener('resize', saveBoxSize);
    return () => window.removeEventListener('resize', saveBoxSize);
  }, []);

  useEffect(() => {
    updateTextTransformSize();
  }, [
    boxWidth,
    boxHeight,
    textOriginalWidth,
    textOriginalHeight,
    paddingX,
    paddingY,
  ]);

  return (
    <div
      ref={boxRef}
      className='absolute inset-0'
      style={{
        padding: `${paddingY}px ${paddingX}px`,
      }}
    >
      <p
        ref={textRef}
        className='inline-block origin-top-left'
        style={{
          height: '18px',
          lineHeight: '22px',
          fontSize: '18px',
          ...textStyle,
        }}
      >
        {children}
      </p>
    </div>
  );
}
