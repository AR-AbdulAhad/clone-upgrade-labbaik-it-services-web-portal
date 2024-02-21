import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import announcementsLogo from './../../assets/img/bg-illustration.png';

function Announcements() {
    return (
        <>
            <motion.div 
                className="w-full px-[80px] pt-[190px] pb-[30px] res-announce-main" 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}>
                <motion.div 
                    className="w-full text-center fixed bg-primary-color top-[75px] pb-[10px] left-0 res-announce-head z-20" 
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.2 }}>
                    <h3 className="text-[35px] font-semibold text-orange-color">
                        Barho Roshan Mustaqbil K Liye
                    </h3>
                    <p className="text-[20px] font-medium text-dark-color">Latest Announcements</p>
                </motion.div>

                <motion.div 
                    className="w-[65%] res-annouce-cont z-10" 
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.4 }}>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 20 Feb 2024</span>
                        </div>

                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Important Announcement for IT Applicants</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[10px]">Once you enter the number & if you are in the shortlisted applicants for IT specifically you will see a joining link for the Final Shortlisted Community for IT Applicants. Once maximum students joined the community. I'll create the course groups in the community. Before requesting any course group in the community, read the below instructions very carefully.</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[3px]">- Applicant can request to join only One Course Group</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[10px]">- If any applicant requested more than one course to join both requests will be Rejected</p>
                            <div className="hidden">
                                <p className="text-orange-color font-bold text-[17px]">Class Schedule for IT Courses:</p>
                                <p className="text-dark-color font-medium text-[14px] mb-[3px]">Mon - Tue : Freelancing (Content Writing)</p>

                                <p className="text-dark-color font-medium text-[14px] mb-[3px]">Wed - Thur : Search Engine Optimization (SEO)</p>
                                <p className="text-dark-color font-medium text-[14px] mb-[3px]">Sat - Sun : Web Development</p>
                                <p className="text-dark-color font-medium text-[14px] mb-[3px]">Sat - Sun : WordPress Development</p>
                                <p className="text-dark-color font-medium text-[14px] mb-[3px]">Sat - Sun : Digital Marketing</p>
                                <p className="text-dark-color font-medium text-[14px] mb-[10px]">Sat - Sun : Daraz Ecommerce</p>
                            </div>
                            <div>
                            <Link to='/final-shortlisted-result' className="text-orange-color underline font-semibold text-[14px]">Click to see Final Shortlisted Applicants - Male & Female</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 17 Feb 2024</span>
                        </div>

                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Important Announcement</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[3px]">Orientation Class: Friday, 23 Feb 2024 </p>
                            <p className="text-dark-color font-medium text-[14px] mb-[3px]">Online Classes: Starting from Saturday, 24 Feb 2024.</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[3px]">Online Platform: Google Meet</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[3px]">Classes Days: Sat & Sun (2 days live classes in a week & 05 days for your practice)</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[10px]">Shortlisted Students will be added to their relevant groups before Orientation date 23 Feb 2024.</p>

                            <p className="text-orange-color font-bold text-[17px]">Announcement for MDCAT/ECAT/LAT Applicants:</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[10px]">All Students will be added to their relevant groups soon in the next 2/3 days.</p>

                            <p className="text-orange-color font-bold text-[17px]">Announcement for CSS Applicants:</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[3px]">Descriptive Screening Test for CSS Aspirants will be conducted on: Sunday, 25 Feb 2024</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[3px]">Test Mode: Online - Google Form</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[3px]">Paper Pattern: 100 Marks (05 questions x 20 marks each)</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[3px]">Topics: Current Affairs & Pakistan Affairs</p>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 15 Feb 2024</span>
                        </div>

                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Important Announcement</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[3px]">Orientation Class: Exact time will be announced tomorrow. </p>
                            <p className="text-dark-color font-medium text-[14px] mb-[3px]">Online Classes: Starting from Saturday, 24 Feb 2024.</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[3px]">Online Platform: Google Meet</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[3px]">We have huge number of applicants so Please keep patience you will be added to the specific groups within couple of days.</p>

                            <p className="text-dark-color font-medium text-[14px]">We are truly humbled and inspired by the overwhelming number of applications we received. Please keep patience and stay connected with us & avoid unnecessary messages. We are diligently working through each application to give them the attention they deserve.</p>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 15 Feb 2024</span>
                        </div>

                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Online IT Talent Test Result Announced</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[3px]">Note: Online MDCAT Talent Test Result will be Announced : 16 Feb 2024</p>
                            <Link to='/result' className="text-orange-color underline font-semibold text-[14px]">Click here to Check Talent Test Result</Link>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 11 Feb 2024</span>
                        </div>

                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Labbaik Online Talent Test</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[10px]"><strong>Important Instructions</strong><br></br>Online Test will be conducted using Google Form. </p>
                            <p className="text-dark-color font-medium text-[14px] mb-[10px]">Step 01: Join the Labbaik Online Talent Test Community using the joining link mentioned below. <br></br> Please note: only those students who are going to attempt the Online Test is allowed to join this community.</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[3px]">Step 02: Further there are only two groups in this community. Join only relevant group, to avoid any unnecessary issues & conflicts. <br></br><br></br> - Talent Test - IT Applicants <br></br> <a href='https://chat.whatsapp.com/GZ8N86kDaEz7zrOBKGyXD8' className="text-orange-color underline font-semibold text-[14px]">Whatsapp Group</a> <br></br><br></br> - Talent Test - MDCAT Applicants <br></br> <a href='https://chat.whatsapp.com/HCKGxEugH94KxfgVu8I6MH' className="text-orange-color underline font-semibold text-[14px]">Whatsapp Group</a></p>

                            <p className="text-dark-color font-medium text-[14px] mt-[3px]">Stay Connected! Google Form Link will be shared exactly at 06 PM Sunday, 11 Feb 2024 in the relevant specific group which is mentioned above.</p>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 07 Feb 2024</span>
                        </div>

                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Online Talent Test Date Announced</p>
                            <p className="text-dark-color font-medium text-[14px] mb-[10px]">Sunday, 11 Feb 2024</p>
                            <p className="text-dark-color font-medium text-[14px]"><strong>Important Note!</strong><br></br>We're thrilled to announce the date for our highly anticipated Online Talent Test, which is open to applicants from all over Pakistan. The procedure to attempt the quiz will be announced on Saturday, February 10, 2024.</p>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 05 Feb 2024</span>
                        </div>

                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p  className="text-orange-color font-bold text-[17px]">Karachi Talent Test Result Announced</p>
                            <Link to='/result' className="text-orange-color underline font-semibold text-[14px]">Click here to Check Talent Test Result</Link>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 30 Jan 2024</span>
                        </div>

                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Labbaik Online Talent Test</p>
                            <p className="text-dark-color font-medium text-[14px]">Online Test Procedure, Date & Time will be announced on 5th Feb 2024. <br></br>Stay Connected with our Official Website Announcement Section!</p>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 30 Jan 2024</span>
                        </div>

                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Lahore Talent Test Result Announced</p>
                            <Link to='/result' className="text-orange-color underline font-semibold text-[14px]">Click here to Check Talent Test Result</Link>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 26 Jan 2024</span>
                        </div>
                        <p className="text-dark-color font-medium text-[13px] mb-[5px]">Karachi Test Location & Time Announced</p>
                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Karachi</p>
                            <p className="text-dark-color font-medium text-[14px]">
                                <i className="fa-solid fa-calendar-day text-orange-color mr-[5px]"></i>
                                Sunday, 28 Jan 2024 - 10:00 AM
                            </p>
                            <p className="text-dark-color font-medium text-[14px]"><i className="fa-solid fa-location-dot text-orange-color mr-[5px]"></i>Al Hina Garden, E-86, Block 4, Gulshan-e-Iqbal, Karachi</p>
                            <a href='https://maps.app.goo.gl/AVgtZSZrRr7DssXX9' className="text-orange-color underline font-semibold text-[14px]">Google Map</a>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 22 Jan 2024</span>
                        </div>

                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Rawalpindi Talent Test Result Announced</p>
                            <Link to='/result' className="text-orange-color underline font-semibold text-[14px]">Click here to Check Talent Test Result</Link>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 19 Jan 2024</span>
                        </div>
                        <p className="text-dark-color font-medium text-[13px] mb-[5px]">Lahore Test Location & Time Announced</p>
                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Lahore</p>
                            <p className="text-dark-color font-medium text-[14px]"><i className="fa-solid fa-calendar-day text-orange-color mr-[5px]"></i>Sunday, 21 Jan 2024 - 10:00 AM</p>
                            <p className="text-dark-color font-medium text-[14px]"><i className="fa-solid fa-location-dot text-orange-color mr-[5px]"></i>Aspire College Main Muslim Town, Wahdat Road, Lahore</p>
                            <a href='https://maps.app.goo.gl/MevMi7c6k51CjJiv8' className="text-orange-color underline font-semibold text-[14px]">Google Map</a>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 15 Jan 2024</span>
                        </div>

                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Gujranwala Talent Test Result Announced</p>
                            <Link to='/result' className="text-orange-color underline font-semibold text-[14px]">Click here to Check Talent Test Result</Link>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 11 Jan 2024</span>
                        </div>
                        <p className="text-dark-color font-medium text-[13px] mb-[5px]">Rawalpindi Test Location & Time Announced</p>
                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Rawalpindi</p>
                            <p className="text-dark-color font-medium text-[14px]"><i className="fa-solid fa-calendar-day text-orange-color mr-[5px]"></i>Sunday, 14 Jan 2024 - 10:00 AM</p>
                            <p className="text-dark-color font-medium text-[14px]"><i className="fa-solid fa-location-dot text-orange-color mr-[5px]"></i>Siddique Public School, Main Campus 6th Road, Satellite Town, Rawalpindi, Punjab</p>
                            <a href='https://maps.app.goo.gl/ygAFnNGRWxR8kTbm6' className="text-orange-color underline font-semibold text-[14px]">Google Map</a>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 08 Jan 2024</span>
                        </div>

                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Sargodha Talent Test Result Announced</p>
                            <Link to='/result' className="text-orange-color underline font-semibold text-[14px]">Click here to Check Talent Test Result</Link>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 02 Jan 2024</span>
                        </div>
                        <p className="text-dark-color font-medium text-[13px] mb-[5px]">Gujranwala Test Location & Time Announced</p>
                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Gujranwala</p>
                            <p className="text-dark-color font-medium text-[14px]"><i className="fa-solid fa-calendar-day text-orange-color mr-[5px]"></i>Sunday, 07 Jan 2024 - 10:00 AM</p>
                            <p className="text-dark-color font-medium text-[14px]"><i className="fa-solid fa-location-dot text-orange-color mr-[5px]"></i>Aspire College Gujranwala (Boys Campus) near Board of Intermediate & Secondary Education, Faisal Town Gujranwala, Punjab</p>
                            <a href='https://maps.app.goo.gl/ooY6oyp3ZP384Ps89' className="text-orange-color underline font-semibold text-[14px]">Google Map</a>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 02 Jan 2024</span>
                        </div>

                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Sialkot Talent Test Result Announced</p>
                            <Link to='/result' className="text-orange-color underline font-semibold text-[14px]">Click here to Check Talent Test Result</Link>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 28 Dec 2023</span>
                        </div>
                        <p className="text-dark-color font-medium text-[13px] mb-[5px]">We are overwhelmed with gratitude and excitement to share some fantastic news! Our WhatsApp community has reached its maximum capacity, thanks to your incredible response and engagement. In response to the overwhelming demand, we are thrilled to announce that we've created a brand new WhatsApp community to accommodate even more amazing individuals like you!. Thank you for being an integral part of our growing community.<br></br><br></br>Best Regards<br></br> Admin Labbaik IT Services</p>
                        <p><Link to='/join-community' className="text-orange-color underline font-semibold text-[14px]">Click here to see the updated invite link of the WhatsApp Community.</Link></p>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 28 Dec 2023</span>
                        </div>
                        <p className="text-dark-color font-medium text-[13px] mb-[5px]">Sargodha Test Location & Time Announced</p>
                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Sargodha</p>
                            <p className="text-dark-color font-medium text-[14px]"><i className="fa-solid fa-calendar-day text-orange-color mr-[5px]"></i>Sunday, 31 Dec 2023 - 10:00 AM</p>
                            <p className="text-dark-color font-medium text-[14px]"><i className="fa-solid fa-location-dot text-orange-color mr-[5px]"></i>ITM College, Satellite Town, Sargodha, Punjab, Pakistan</p>
                            <a href='https://maps.app.goo.gl/hkBcoP712qap6YLF7' className="text-orange-color underline font-semibold text-[14px]">Google Map</a>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 26 Dec 2023</span>
                        </div>

                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Chakwal Talent Test Result Announced</p>
                            <Link to='/result' className="text-orange-color underline font-semibold text-[14px]">Click here to Check Talent Test Result</Link>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 19 Dec 2023</span>
                        </div>
                        <p className="text-dark-color font-medium text-[13px] mb-[5px]">Sialkot Test Location & Time Announced</p>
                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Sialkot</p>
                            <p className="text-dark-color font-medium text-[14px]"><i className="fa-solid fa-calendar-day text-orange-color mr-[5px]"></i>Sunday, 24 Dec 2023 - 10:00 AM</p>
                            <p className="text-dark-color font-medium text-[14px]"><i className="fa-solid fa-location-dot text-orange-color mr-[5px]"></i>Govt Murray College Hockey Ground, Sialkot Punjab (Entrance: Main College Gate)</p>
                            <a href='https://maps.app.goo.gl/ej2cPCjix5d6YV3N7' className="text-orange-color underline font-semibold text-[14px]">Google Map</a>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 13 Dec 2023</span>
                        </div>
                        <p className="text-dark-color font-medium text-[13px] mb-[5px]">Test Syllabus Preparation Pdf</p>
                        <a href='https://docs.google.com/document/d/19XuKVTFPWlRzGKLxHMvWwACzHhtjCJPNV4J6I6XnIFY/edit?usp=sharing' className="text-orange-color underline font-semibold text-[14px]">Click here to see Entry Test Syllabus</a>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 09 Dec 2023</span>
                        </div>
                        <p className="text-dark-color font-medium text-[13px] mb-[5px]">Chakwal Test Location & Time Announced</p>

                        <div className="bg-secondary-color px-[15px] py-[20px] rounded-md shadow-xl">
                            <p className="text-orange-color font-bold text-[17px]">Chakwal</p>
                            <p className="text-dark-color font-medium text-[14px]"><i className="fa-solid fa-calendar-day text-orange-color mr-[5px]"></i>Sunday, 17 Dec 2023 - 10:00 AM</p>
                            <p className="text-dark-color font-medium text-[14px]"><i className="fa-solid fa-location-dot text-orange-color mr-[5px]"></i>Horizon Degree and Commerce College, Chakwal Punjab</p>
                            <a href='https://maps.app.goo.gl/sDPScSqkF8kVrjUT9' className="text-orange-color underline font-semibold text-[14px]">Google Map</a>
                        </div>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 07 Dec 2023</span>
                        </div>
                        <p className="text-dark-color font-medium text-[13px]">Website Updated</p>
                        <p><Link to='/join-community' className="text-orange-color underline font-semibold text-[14px]">Click here to see the steps to Join the WhatsApp Community.</Link></p>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 04 Dec 2023</span>
                        </div>
                        <p className="text-dark-color font-medium text-[13px]">Website Updated, More Details About the Program is available on the Website.</p>
                    </div>

                    <div className="mb-[30px]">
                        <div className="mb-[5px]">
                            <i className="fa-solid fa-bullhorn text-orange-color mr-[5px]"></i>
                            <span className="text-dark-color font-semibold text-[15px]">Date: 01 Dec 2023</span>
                        </div>
                        <p className="text-dark-color font-medium text-[13px]">Official Website Launched & Registration for the Physical Talent Test Started</p>
                    </div>
                    </motion.div>
                    <motion.img 
                    src={announcementsLogo} 
                    alt='announcement image' 
                    className="w-[700px] fixed top-[240px] right-[-100px] res-announce-img" 
                    initial={{ opacity: 0, x: 100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.5, delay: 0.6 }} />
            </motion.div>
        </>
    )
}

export default Announcements