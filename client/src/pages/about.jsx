import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from 'framer-motion'; // Import motion for animations
import Nav from '../components/home comp/nav';
import Footer from '../components/footer';

const About = () => {
    const milestones = [
        { year: 1998, description: 'Career Beginnings at Maruti. Joined Maruti and began his career in the automotive industry' },
        { year: 2000, description: 'Managerial Role at Maruti. Promoted to a managerial role and started overseeing multiple branches of Maruti' },
        { year: 2008, description: 'Entrepreneurial Venture: Workshop Establishment. Established his own workshop, marking the beginning of his entrepreneurial journey' },
        { year: 2010, description: 'Workshop Expansion and Growth. Expanded the workshop\'s services and customer base, solidifying its reputation in the community' },
        { year: 2015, description: 'Innovation in Automotive Services. Introduced innovative services and technology to stay ahead in the competitive automotive market' },
        { year: 2024, description: 'A Decade of Excellence: Celebrating 16 Years. Celebrating over a decade of successful operations, providing top-notch service to loyal customers' }
    ];

    return (
        <>
            <Nav/>
            <div className='mt-10 mb-10 px-5' style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>About Our Workshop</Typography>
                <Grid container spacing={3} justifyContent="center">
                    {milestones.map((milestone, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                                    <CardContent>
                                        <Typography variant="h6" sx={{ marginBottom: '15px', color: '#333' }}>{milestone.year}</Typography>
                                        <Typography sx={{ textAlign: 'justify', color: '#666' }}>{milestone.description}</Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
                {/* Uncommented section: Owner's Photo */}
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Card sx={{ maxWidth: 345, margin: 'auto', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                        {/* <CardMedia
                            component="img"
                            height="auto"
                            image="/path/to/owners-photo.jpg" // Replace with actual path to owner's photo
                            alt="Owner's Photo"
                        /> */}
                        <CardContent>
                            <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '10px', color: '#333' }}>Owned by Mr. Ayub Sayyed</Typography>
                            <Typography variant="body1" sx={{ textAlign: 'center', color: '#666' }}>With Over 25 years of Experience</Typography>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
            <Footer/>
        </>
    );
};

export default About;
