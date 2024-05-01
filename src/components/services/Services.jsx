import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Currently working in
          <br />
          B2B UI Team.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>UI</motion.b> Intern
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Software</motion.b> AG.
          </h1>
          <button>WHAT DO I WORK ON HERE?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Angular</h2>
          <p>
            Implemented real-time notification feature and image preloader on
            the website to enhance user engagement and experience.
          </p>
            <button>Go</button>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Hugo</h2>
          <p>
            Executed routine UI maintenance, Deployed feature requests, resolved
            bugs and executed UX improvements for both internal tool user
            interfaces and the company’s documentation portal
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>React</h2>
          <p>
            Engineered and developed a responsive front-end for an internal
            support tool, ensuring a seamless user experience. Conducted
            debugging and maintenance on the technical content delivery setup.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Symfony</h2>
          <p>
            Upgraded existing Symfony application from legacy version (2) to the
            latest version (6) for improved security, library compatibility, and
            ease of future maintenance. Orchestrated the configuration of Apache
            website hosting to optimize performance.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
