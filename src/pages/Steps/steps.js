import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import litsQR02 from '../../assets/img/lits-qr-code-02.8786c43fc2a897e302ba.png';
import letsQR from '../../assets/img/lets-qr-code.7248fd793cabf86fb62d.png';

function Steps() {
    return (
        <>
            <div className="bg-secondary-color min-h-screen pt-[90px] pb-[45px] px-[80px] res-main-steps-cont">
                <h5 className="text-orange-color text-[25px] mb-4 font-bold">Guidelines to Join WhatsApp Community</h5>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-primary-color rounded-lg shadow-lg p-6"
                    >
                        <div className="mb-4">
                            <p className="text-dark-color font-medium">Welcome Applicants, Please read these instructions very carefully & act accordingly.</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-dark-color font-medium">Let's understand the structure first!</p>
                            <p className="text-dark-color font-medium">We are going to provide you the invite link of the two communities.</p>
                            <ul className="text-dark-color font-medium">
                                <li>KHREWS - LITS</li>
                                <li>KHREWS - LETS</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <p className="text-dark-color font-medium">KHREWS - LITS (LITS stands for Labbaik IT Services)</p>
                            <p className="text-dark-color font-medium">This community is only for the applicants registered in IT Courses.</p>
                            <p className="text-dark-color font-medium"><strong>Only IT Courses Applicants</strong> can Join the KHREWS - LITS Official WhatsApp Community using this Link or Scan the QR code.</p>
                            <a className="text-orange-color font-medium underline" href="https://chat.whatsapp.com/H8z7ekJkC4CJRr0PSR7vbU">Click here to join WhatsApp Community</a>
                            <p className="text-dark-color font-medium">Please Note: Once you join the community you will find following multiple separate groups based on the specific course you can request to join the only one specific group in which you have registered already. If you request to join more than one group your application will be rejected.</p>
                            <p className="text-dark-color font-medium">LITS - Advance Graphic Designing</p>
                            <p className="text-dark-color font-medium">LITS - Advance Web Development</p>
                            <p className="text-dark-color font-medium">LITS - Advance WordPress Development</p>
                            <p className="text-dark-color font-medium">LITS - Advance Digital Marketing</p>
                            <p className="text-dark-color font-medium">LITS - Advance SEO & Blogging</p>
                            <p className="text-dark-color font-medium">LITS - Advance Daraz Ecommerce</p>
                            <p className="text-dark-color font-medium">LITS - Advance Video Editing</p>
                            <p className="text-dark-color font-medium">LITS - Advance Freelancing</p>
                            <p className="text-dark-color font-medium">Note: If any applicant submitted the Registration Form more than one time, only the first response interest will be considered as final & other responses will be null & void.</p>
                        </div>
                        <hr className="my-4 border-orange-color"/>
                        <div className="flex items-center">
                            <img className="mr-2 w-32" src={litsQR02} alt="lits qr code"/>
                            <span className="text-dark-color font-medium">KHREWS - LITS Community QR Code</span>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-primary-color rounded-lg shadow-lg p-6"
                    >
                        <div className="mb-4">
                            <p className="text-dark-color font-medium">KHREWS - LETS (LETS stands for Labbaik Entry Test Services)</p>
                            <p className="text-dark-color font-medium">This community is only for the applicants registered in Non-IT Courses.</p>
                            <p className="text-dark-color font-medium"><strong>Only MDCAT, ECAT, LAT & CSS Applicants</strong> can Join the KHREWS - LETS Official WhatsApp Community using this Link or Scan the QR code.</p>
                            <a className="text-orange-color font-medium underline" href="https://chat.whatsapp.com/JebUgGKLv8w0LFDU3kSR5r">Click here to join WhatsApp Community</a>
                            <p className="text-dark-color font-medium">Please Note: Once you join the community you will find following multiple separate groups based on the specific course you can request to join the only one specific group in which you have registered already. If you request to join more than one group your application will be rejected.</p>
                            <p className="text-dark-color font-medium">LETS - MDCAT Preparation</p>
                            <p className="text-dark-color font-medium">LETS - ECAT Preparation</p>
                            <p className="text-dark-color font-medium">LETS - LAT Preparation</p>
                            <p className="text-dark-color font-medium">LETS - CSS Preparation</p>
                            <p className="text-dark-color font-medium">Note: If any applicant submitted the Registration Form more than one time, only the first response interest will be considered as final & other responses will be null & void.</p>
                        </div>
                        <hr className="my-4 border-orange-color"/>
                        <div className="flex items-center">
                            <img className="mr-2 w-32" src={letsQR} alt="lets qr code"/>
                            <span className="text-dark-color font-medium">KHREWS - LETS Community QR Code</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Steps;
