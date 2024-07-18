import Car1 from '../../images/car1.png';
import Car2 from '../../images/car2.jpeg';
import Car3 from '../../images/car3.jpeg';
import Car4 from '../../images/car4.jpeg';
import Car5 from '../../images/car5.jpeg';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion from framer-motion for animations

export default function Title() {
    const [no, setNo] = useState(0);
    const images = [Car1, Car2, Car3, Car4, Car5];

    useEffect(() => {
        const interval = setInterval(() => {
            setNo(prevNo => (prevNo + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="rounded-2xl w-full h-[600px] overflow-hidden relative">
                <AnimatePresence>
                    <motion.img
                        key={no}
                        src={images[no]}
                        alt=""
                        className="object-cover w-full h-full absolute top-0 left-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>
            </div>
        </>
    );
}
