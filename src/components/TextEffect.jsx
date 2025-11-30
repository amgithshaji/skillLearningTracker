import React from 'react'
import SplitText from "./SplitText";

function TextEffect() {
      const handleAnimationComplete = () => {

      console.log('All letters have animated!');
};
  return (
 <SplitText
 text={`Track Progress <span class="blue-word">Now</span>`}
className="text-center font-semibold text-xl sm:text-2xl md:text-3xl"

  splitType="chars"
  delay={100}
  duration={0.6}
  ease="power3.out"
/>

  )
}

export default TextEffect