import { motion } from 'framer-motion';
import aboutImage from '../assets/qc_logo_dark.png';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <motion.div 
          className="about-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="about-image">
            <motion.img 
              src={aboutImage}
              alt="Quant Community"
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2>About Quant Community</h2>
            <p className="lead">Empowering the Future of Quantitative Analysis</p>
            <p>
              The Quant Community at IIT Bombay is a vibrant hub of innovation where
              technology meets finance. We foster an environment of learning,
              collaboration, and excellence in quantitative analysis.
            </p>
            <div className="about-stats">
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>500+</h3>
                <p>Community Members</p>
              </motion.div>
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>50+</h3>
                <p>Projects Completed</p>
              </motion.div>
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>20+</h3>
                <p>Active Research Areas</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
