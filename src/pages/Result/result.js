import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Result = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [result, setResult] = useState('');
  const [message, setMessage] = useState('');
  const [messageTextColor, setMessageTextColor] = useState('');
  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/result.json');
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleOptionChange = (e) => {
    const city = e.target.value;
    setSelectedOption(city);
    setResult('');
    setMessage(jsonData[city]?.message || '');
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCheckResult = () => {
    const cityData = jsonData[selectedOption];
    if (!cityData) {
      setResult('Not a Registered Number. Please enter a registered number only.');
      setMessageTextColor('text-dark-color');
      return;
    }
    const { passedApplicants, restrictedApplicants, message } = cityData;
    if (passedApplicants.includes(Number(phoneNumber))) {
      setResult(message);
      setMessageTextColor('text-[#008000]');
    } else if (restrictedApplicants.includes(Number(phoneNumber))) {
      setResult('Unfortunately, You are not in the shortlisted applicants. However, you can still access daily class recordings on our Official Youtube Channels mentioned below.');
      setMessageTextColor('text-orange-color');
    } else {
      setResult('Not a Registered Number. Please enter a registered number only.');
      setMessageTextColor('text-dark-color');
    }
  };

  return (
    <motion.div
      className="w-full px-[80px] pt-[190px] pb-[30px] res-main-cont"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full text-center fixed bg-primary-color top-[75px] pb-[10px] left-0 res-head-re z-20">
        <h2 className="text-[35px] font-semibold text-orange-color text-center">
          Barho Roshan Mustaqbil K Liye
        </h2>
        <p className="text-[20px] font-medium text-dark-color text-center">Check Your Result</p>
      </div>
      <div className="w-full flex flex-col items-center z-10 res-result-main">
        <motion.div
          className="w-[60%] flex flex-col items-center mb-[20px] res-top-cont"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-dark-color font-semibold text-[18px] text-center">
            <i className="fa-solid fa-mobile-button text-orange-color mr-[5px]"></i>Registered Phone Number
          </h2>
          <p className="text-dark-color font-medium text-[13px] mb-[10px] text-center">Enter your number in this format: 923001234567</p>
          <motion.div
            className="w-full p-[10px] bg-primary-color rounded-md flex justify-center items-center gap-2 border div-focus text-dark-color font-medium text-[15px]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="w-full outline-none bg-transparent"
            />
            <select value={selectedOption} onChange={handleOptionChange} className="w-[50%] p-[5px] outline-none border">
              <option value="">--Select--</option>
              {Object.keys(jsonData).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </motion.div>
          <motion.div
            className="w-full mt-[15px]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button onClick={handleCheckResult} className="w-full bg-orange-color py-[8px] rounded-md text-primary-color uppercase hover-bg-btn">Check Result</button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-[60%] flex flex-col bg-secondary-color shadow-xl p-[15px] rounded-md res-mid-cont text-dark-color"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className={`font-bold mb-[10px] ${messageTextColor}`}>{result}</p>
          <p className={`font-bold text-[14px] mb-[3px] ${messageTextColor}`}>Shortlist Criteria Minimum: 40% Marks</p>
          <p className={`font-bold text-[14px] mb-[3px] ${messageTextColor}`}>Appeared in test but can't find result? Submit your query regarding result only we will respond you as soon as possible.</p>
          <a href='https://forms.gle/5PVjEdZvcxuwCcfL7' target='blank' className="text-[#0d6efd] underline font-bold text-[14px] mb-[3px]">Click here to fill form</a>
          <p className={`font-bold text-[14px] ${messageTextColor}`}>&copy; Labbaik Talent Test Result</p>

          <div className="mt-[20px]">
            <p className="font-bold text-[15px] mb-[3px]">Subscribe to our Official Youtube Channels</p>
            <div>
              <i className="fa-brands fa-youtube text-red-600 me-2"></i><a href='https://www.youtube.com/@labbaikitservice' target='blank' className="font-semibold text-[15px]">Labbaik IT Service</a>
            </div>
            <div>
              <i className="fa-brands fa-youtube text-red-600 me-2"></i><a href='https://www.youtube.com/@Labbaik_Entry_Test_Series' target='blank' className="font-semibold text-[15px]">Labbaik Entry Test Series</a>
            </div>
            <div>
              <i className="fa-brands fa-youtube text-red-600 me-2"></i><a href='https://www.youtube.com/@KHRMS_Official' target='blank' className="font-semibold text-[15px]">KHRMS Medical Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Result;
