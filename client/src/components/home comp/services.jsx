import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion for animations
import S1 from '../../images/ceramic.jpg';
import S2 from '../../images/paint-protection.jpg';
import S3 from '../../images/denting.jpg';
import S4 from '../../images/interior.jpeg';
import S5 from '../../images/wrap.jpg';
import S6 from '../../images/paint-protection.jpg';
import S7 from '../../images/insurance.jpg';
import S8 from '../../images/interior_modification.jpeg';
import S9 from '../../images/servies.jpg';

export default function Services() {
    const services = ['Ceramic and Graphene coatings', 'Paint protection films', 'Body-shop (Denting & Painting)', 'Detailing and Interior cleaning',
        'Wrap Jobs', 'Insurance Claim', 'Interior Modification', 'Other Services'];

    const images = [S1, S2, S3, S4, S5, S6, S7, S8, S9];

    return (
        <>
            <div className="flex p-10 mx-16 flex-wrap gap-10 ">
                {images.map((image, index) => (
                    <Link to={`/${services[index]}`} key={index}>
                        <motion.div
                            className="flex bg-black font-black cursor-pointer h-48 w-96 text-white justify-center items-end text-wrap hover:scale-105 hover:shadow-xl transition-transform ease-in-out"
                            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
                                transition: { duration: 0.3 }, // Add transition duration
                                filter: 'brightness(0.8)', // Add filter effect
                                color: '#f8d347' // Add font color change on hover
                            }} // Animation while hovering
                            initial={{ scale: 1 }} // Initial animation state
                            animate={{ scale: 1 }} // Animation when rendered
                        >
                            <p className="mb-5 text-wrap">{services[index]}</p>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </>
    )
}
