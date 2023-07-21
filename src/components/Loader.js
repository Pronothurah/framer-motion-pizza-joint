import React from 'react';
import { motion, useCycle } from 'framer-motion';

const loadVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    },
    animationTwo: {
        x: 0,
        y: [0, -40],
        transition: {
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
}

const Loader = () => {

    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
        <motion.div className='loader'
            variants={loadVariants}
            animate={animation}
            >

        </motion.div>
        <div onClick={() => cycleAnimation()}
            style={{cursor: 'pointer'}}
        ></div>
    </>
    
  )
}

export default Loader