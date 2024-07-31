import React, { useEffect, useRef, useState } from 'react';

const TextRunner = ({ text, duration }) => {
  const textRef = useRef(null); 
  const [userondiv , setUserondiv] = useState(false)

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const animationDuration = `${duration}s`;
      textElement.style.animationPlayState = !userondiv ? 'paused' : 'running';
      textElement.style.animationDuration = animationDuration;
    }
  }, [duration , userondiv]);


  const handleenter = () => {
    setUserondiv(false)
  }
  return (
    <div className="overflow-hidden whitespace-nowrap w-full box-border bg-black text-yellow-200 py-1 bg-opacity-80" onMouseEnter={handleenter}  onMouseLeave={() => setUserondiv(true)} >
     <div
  ref={textRef}
  className="inline-block animate-scroll-text font-lora text-3xl font-bold italic py-1"
>
  {text}
</div>

    </div>
  );
};

export default TextRunner;