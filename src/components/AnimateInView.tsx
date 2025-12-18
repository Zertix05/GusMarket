'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimateInViewProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  yOffset?: number; // Сдвиг по Y (например, 40px)
  className?: string;
}

const AnimateInView: React.FC<AnimateInViewProps> = ({ 
    children, 
    delay = 0, 
    yOffset = 40,
    className = '',
    ...rest // Остальные Framer Motion пропсы
}) => {
  const variants = {
    hidden: { 
        opacity: 0, 
        y: yOffset 
    },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.8, 
            delay: delay, 
            ease: [0.25, 0.46, 0.45, 0.94] 
        } 
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible" // Запуск при входе во вьюпорт
      viewport={{ once: true, amount: 0.1 }} // Срабатывает 1 раз, когда 10% элемента видно
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimateInView;