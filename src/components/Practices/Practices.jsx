import React from 'react'
import { motion } from 'framer-motion'
import { 
    HiBriefcase,
    HiLockClosed,
    HiDocumentText,
    HiHome,
    HiCurrencyDollar,
    HiPresentationChartLine
 } from 'react-icons/hi';
 import './Practices.scss'
import { title } from 'framer-motion/client';


 const practices = [
    {
        icon: HiBriefcase,
        title: "Закон о гражданских правах",
        text: "Задача организации, в особенности же начало повседневной работы по формированию позиции требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач."
    },
    {
        icon: HiLockClosed,
        title: "Правила безопасности",
        text: "Задача организации, в особенности же начало повседневной работы по формированию позиции требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач."
    }, 
    {
        icon: HiDocumentText,
        title: "Закон о товарных знаках",
        text: "Задача организации, в особенности же начало повседневной работы по формированию позиции требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач."
    },
    {
        icon: HiHome,
        title: "Судебная практика по недвижимости",
        text: "Задача организации, в особенности же начало повседневной работы по формированию позиции требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач."
    },
    {
        icon: HiCurrencyDollar,
        title: "Налоговые споры",
        text: "Задача организации, в особенности же начало повседневной работы по формированию позиции требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач."
    },
    {
        icon: HiPresentationChartLine,
        title: "Страхование Восстановление",
        text: "Задача организации, в особенности же начало повседневной работы по формированию позиции требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач."
    }
 ]
 
 const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
 }

 const item = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
 }
const Practices = () => {
  return (
    <>
        <section className="practices">
            <motion.h2
                className="title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                >
                    Наши практики
                </motion.h2>

                <motion.div
                    className="grid"
                    variants={container}
                    initial= "hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    >
                    {practices.map((p, i) => (
                        <motion.div
                            key={i}
                            className="card"
                            variants={item}
                            whileHover={{ y: -8 }}
                        >
                            <p.icon className="icon" />
                            <h3>{p.title}</h3>
                            <p>{p.text}</p>
                        </motion.div>
                    ))}
                    </motion.div>
        </section>
    </>
    
  )
}

export default Practices