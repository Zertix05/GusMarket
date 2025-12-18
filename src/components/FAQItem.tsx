'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react'; 

interface FAQItemProps {
  question?: string;
  answer?: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="border-b border-green-light/30 cursor-pointer transition" 
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center py-5 lg:py-7 px-0">
        <h3 className={`font-sans text-lg sm:text-xl font-semibold transition ${isOpen ? 'text-green-main' : 'text-green-dark'}`}>
          {question}
        </h3>
        {/* Анимация вращения иконки */}
        <motion.div
          animate={{
            rotate: isOpen ? 45 : 0,
            backgroundColor: isOpen ? '#4A7C23' : 'rgba(0, 0, 0, 0.05)',
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="
            w-9 h-9
            rounded-full
            flex items-center justify-center
            shrink-0
          "
        >
          <Plus
            size={18}
            className={`transition-colors ${
              isOpen ? 'text-white' : 'text-green-main'
            }`}
          />
        </motion.div>
      </div>
      
      {/* Анимированный контент (slide down/up) */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }} 
        style={{ overflow: 'hidden' }}
      >
        <p className="text-text-medium pb-5 leading-relaxed pr-8">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

export default FAQItem;