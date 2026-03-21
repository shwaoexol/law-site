import React from 'react'
import { FaBalanceScale, FaGavel, FaLandmark, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import './Practices.scss'
import { useTranslation } from 'react-i18next';

const items = [
  { icon: FaBalanceScale, key: "practice_civil" },
  { icon: FaGavel, key: "practice_criminal" },
  { icon: FaLandmark, key: "practice_administrative" },
  { icon: FaChartLine, key: "practice_economic" }
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
  const { t } = useTranslation()

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
          {t('services_title')}
        </motion.h2>
        
        <p className="practices__text">
          {t('representation_title')}
        </p>

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

                <p className="practices__texts">
                  {t(el.key)}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default Practices
