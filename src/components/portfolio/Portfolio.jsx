import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Unified Healthcare Interface",
    img: "../public/doctor.jpg",
    desc: "The development of a Unified Healthcare Interface, showcasing expertise in integrating advanced technologies like BERT-based medical dialogue summarization, blockchain for data security, and decentralized storage using IPFS. Introduced a novel approach to enhance medical information quality, contributing to improved patient outcomes and system efficiency.",
  },
  {
    id: 2,
    title: "Hugo Blog-Site",
    img: "../public/blog.avif",
    desc: "Designed a visually captivating and customized website using HTML, CSS, and JavaScript, aligning seamlessly with web guidelines and executed responsive design techniques to ensure optimal user experience across all devices.",
  },
  {
    id: 3,
    title: "Mars data scraping",
    img: "../public/mars.jpg",
    desc: "Leveraged Python programming skills to design and implement a web scraping solution using Splinter and Beautiful Soup, resulting in the extraction of data from 10 Mars-related websites. Implemented data cleaning techniques on the scraped Mars data using Pandas library, resulting in a streamlined dataset ready for analysis and visualization.",
  },
  {
    id: 4,
    title: "Publication",
    img: "../public/publication.jpg",
    desc: "Emerging Research in Computing, Information, Communication, AI and ML Secured the acceptance of the paper titled ”Unified Healthcare Interface” (Paper ID: 62) at ERCICAM 2024 hosted at NMIT Bengaluru and the 2nd ICIITCEE 2024.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Project Code</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Project work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
