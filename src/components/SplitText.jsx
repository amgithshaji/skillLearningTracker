import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

const SplitText = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}) => {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      const el = ref.current;

      if (el._rbsplitInstance) {
        try {
          el._rbsplitInstance.revert();
        } catch (_) {}
        el._rbsplitInstance = null;
      }

      let targets;

      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
        onSplit: self => {
          targets = self.chars.length
            ? self.chars
            : self.words.length
            ? self.words
            : self.lines;

          gsap.fromTo(
            targets,
            { ...from },
            {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                once: true,
              },
              onComplete: () => onLetterAnimationComplete?.(),
            }
          );
        }
      });

      el._rbsplitInstance = splitInstance;

      return () => {
        try {
          splitInstance.revert();
        } catch (_) {}
        el._rbsplitInstance = null;
      };
    },
    { dependencies: [text, fontsLoaded] }
  );
const style = {
  textAlign,
  overflow: 'hidden',
  display: 'inline',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  fontSize: 'inherit',
  willChange: 'transform, opacity'
};


  const Tag = tag;

  return (
    <Tag
      ref={ref}
      style={style}
      className={className}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default SplitText;
