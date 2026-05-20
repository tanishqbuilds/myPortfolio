import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onFinish }) => {
  const [text, setText] = useState("< Hello, World! />");
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPhase(1);
      setText("Welcome to my digital space");
    }, 1200);

    const timer2 = setTimeout(() => {
      setPhase(2);
      setText("Tanishq Kulkarni");
    }, 2400);

    const timer3 = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-[#0b0b0c] flex flex-col items-center justify-center text-white z-50 overflow-hidden">
      {/* Background glowing particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,194,255,0.08)_0%,transparent_70%)]" />
      
      <div className="relative z-10 flex flex-col items-center space-y-4">
        {/* Glowing ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="w-16 h-16 border-2 border-t-[#00c2ff] border-r-transparent border-b-[#00c2ff]/30 border-l-transparent rounded-full mb-6"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={text}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.4 }}
            className="text-xl md:text-2xl font-mono tracking-widest text-center px-4"
          >
            <span className="text-[#00c2ff]">{`{ `}</span>
            <span className="text-white font-semibold">{text}</span>
            <span className="text-[#00c2ff]">{` }`}</span>
          </motion.div>
        </AnimatePresence>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 3.2, ease: "easeInOut" }}
          className="h-[2px] bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent mt-4"
        />
      </div>
    </div>
  );
};

export default Preloader;
