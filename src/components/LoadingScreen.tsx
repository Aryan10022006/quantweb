import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="loading-content">
        <motion.div 
          className="loading-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.2, 1],
            opacity: 1
          }}
          transition={{ 
            duration: 1.5,
            times: [0, 0.6, 1],
            repeat: Infinity
          }}
        >
          QC
        </motion.div>
        <motion.div 
          className="loading-binary"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} style={{ 
              animationDelay: `${i * 0.1}s`,
              opacity: Math.random() > 0.5 ? 1 : 0.5
            }}>
              {Math.random() > 0.5 ? '1' : '0'}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
