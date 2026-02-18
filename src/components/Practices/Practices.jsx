import React from 'react'
import { FaBalanceScale, FaGavel, FaLandmark, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import './Practices.scss'

const items = [
  { icon: FaBalanceScale, title: "Гражданское судопроизводства" },
  { icon: FaGavel, title: "Уголовное судопроизводства" },
  { icon: FaLandmark, title: "Административное судопроизводства" },
  { icon: FaChartLine, title: "Экономическое судопроизводства" }
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
}

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const Practices = () => {
  return (
    <section className="practices">
      <div className="practices__container">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="practices__title"
        >
          Моя специализация
        </motion.h2>
        
        <p className="practices__text">Представляя ваши интересы</p>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="practices__grid"
        >
          {items.map((el, i) => {
            const Icon = el.icon
            return (
              <motion.div
                key={i}
                variants={cardAnim}
                className="practices__item"
              >
                <motion.div 
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 180, damping: 12 }}
                  className="practices__icon-wrap"
                >
                  <Icon className="practices__icon" />
                </motion.div>

                <p className="practices__texts">{el.title}</p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default Practices
