import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import illustration from '../../assets/img/Developer activity-pana.png';
import illustrationTwo from '../../assets/img/Developer activity-cuate.png';
import Footer from '../../components/Footer';

function Home() {
    return (
        <>
            <section className="w-full px-[80px] pt-[80px] pb-[20px] flex justify-center res-home" id='home'>
                <div className="w-[50%] pt-[150px] res-sub-home">
                    <motion.h2 className="text-[45px] font-bold text-dark-color" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                        Welcome to Official Web Portal <span className="text-orange-color">Labbaik IT Services</span>
                    </motion.h2>
                    <motion.p className="w-[85%] mb-[30px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                        Pakistan's first State of the Art full fledged unique Tech Up-Skill Program <span className="text-orange-color">Barho Roshan Mustaqbil k Liye</span> in collaboration with KHREWS & LETS launched by Labbaik IT Services.
                    </motion.p>
                    <motion.h3 className="mt-[-20px] mb-[20px] text-dark-color italic font-semibold hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
                        Registrations Closed
                    </motion.h3>
                    <Link className="text-primary-color uppercase bg-orange-color px-[45px] py-[13px] rounded-full text-center hover-bg-btn" title='Check Your Result' to='/result'>Result
                    </Link>
                    <a className="text-primary-color uppercase bg-orange-color px-[45px] py-[13px] rounded-full hidden" href="https://forms.gle/nSuXsibcbkESz7mA8" title='Register Yourself' target='blank'>
                        Register Yourself
                    </a>
                </div>
                <motion.div className="w-[50%] flex justify-center items-start pt-[40px] pl-[20px] res-sub-img-home" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                    <img className="w-[600px] h-[500px]" src={illustration} alt="illustration" />
                </motion.div>
            </section>
            
            <section id='about' className="w-full bg-secondary-color px-[80px] py-[80px] flex flex-col justify-center items-center gap-6 res-about">
                <div className="flex flex-col justify-center items-center res-head-about">
                    <motion.h2 className="text-[45px] font-semibold text-orange-color text-center" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                        About Us
                    </motion.h2>
                    <motion.p className="text-dark-color font-semibold text-[14px] w-[50%] text-center" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                        At Labbaik IT Services, we take a holistic approach to education, combining theoretical knowledge with practical, hands-on experience.
                    </motion.p>
                </div>
                <motion.div className="w-full flex gap-4 res-sub-about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
                    <div className="w-[50%] res-img-about">
                        <img src={illustrationTwo} alt='illustrationTwo' />
                    </div>
                    <div className="w-[50%] bg-primary-color p-[15px] rounded-lg shadow-lg res-sub-cont-about">
                        <h2 className="text-orange-color font-bold text-[17px]">Labbaik IT Services: Empowering Through Free Education</h2>
                        <p className="text-dark-color font-semibold text-[15px]">"Labbaik IT Services, where we are at the forefront of revolutionizing education and technology in Pakistan. Established with a vision to empower individuals with the skills and knowledge necessary to succeed in the digital age, Labbaik IT Services stands as a beacon of innovation and excellence in the realm of tech education."</p>
                        <h2 className="text-orange-color font-bold text-[17px] mt-[10px]">Free Courses Offered:</h2>
                        <ul className="list-disc text-dark-color font-semibold text-[15px] flex flex-col gap-2 pl-[20px]">
                            <li><h3>Advance Graphic Designing Course:</h3></li>
                            <li><h3>Advance Web Development (Front End) Course:</h3></li>
                            <li><h3>Advance WordPress Development Course:</h3></li>
                            <li><h3>Advance Digital Marketing Course:</h3></li>
                            <li><h3>Advance SEO & Blogging Course:</h3></li>
                            <li><h3>Advance Daraz Ecommerce Store Course:</h3></li>
                            <li><h3>Advance Video Editing Course:</h3></li>
                            <li><h3>Advance Freelancing Course:</h3></li>
                        </ul>

                        <h2 className="text-orange-color font-bold text-[17px] mt-[10px]">Fully-Funded Scholarship Tracks:</h2>
                        <ul className="list-disc text-dark-color font-semibold text-[15px] flex flex-col gap-2 pl-[20px]">
                            <li><h3>MDCAT Preparation Track:</h3></li>
                            <li><h3>ECAT Preparation Track:</h3></li>
                            <li><h3>LAT Preparation Track:</h3></li>
                            <li><h3>CSS Preparation Track:</h3></li>
                        </ul>
                    </div>
                </motion.div>
            </section>
            <Link to='/announcements'>
                <motion.div className='notification-div' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <i className="fa-solid fa-bell notification-icon"></i>
                </motion.div>
            </Link>

            <Footer />
        </>
    )
}

export default Home;
