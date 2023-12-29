// import React, { useState, useCallback, useEffect, useRef } from 'react'
// import { Row, Col, Form, FormControl, Button } from 'react-bootstrap';
// import CaptchaComponent from '../../component/CaptchaComponent';
// import { fetch } from '../../../utils';
// import useRazorpay from "react-razorpay";
// import CryptoJS from "crypto-js";
// import { useNavigate } from 'react-router-dom';

// const DonateNow = () => {
//   const Razorpay = useRazorpay();
//   const navigate = useNavigate();
//   const numberToWords = require('number-to-words');
//   const [captchaValue, setCaptchaValue] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [headsData, setHeadsData] = useState();
//   const [errorAmountMessage, setErrorAmountMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const getDonateHeads = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch('/donation/heads', 'get', null, null);
//       setHeadsData(response.data.data.headList);
//       setIsLoading(false);
//     } catch (error) {
//       setIsLoading(false);
//     }
//   };
//   useEffect(() => {
//     getDonateHeads();
//   }, []);

//   const [customAmount, setCustomAmount] = useState('');
//   const [donationAmount, setDonationAmount] = useState(0);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const handleClick = (id) => {
//     if (selectedItem !== id) {
//       setCustomAmount('');
//     }
//     setSelectedItem(id);
//     if (id === 0) {
//       setDonationAmount(parseFloat(customAmount) || 0);
//     } else if (headsData && headsData.find(item => item.donation_head_id === id)) {
//       const selectedItemData = headsData.find(item => item.donation_head_id === id);
//       setDonationAmount(parseFloat(selectedItemData.head_amount) || 0);
//     }
//     if (validationErrors.donationAmount) {
//       setValidationErrors({ ...validationErrors, donationAmount: '' });
//     }
//   };
//   const [validationErrors, setValidationErrors] = useState({
//     fname: '',
//     lname: '',
//     email: '',
//     mobile: '',
//     address: '',
//   });
//   const [formData, setFormData] = useState({
//     fname: '',
//     lname: '',
//     email: '',
//     mobile: '',
//     address: '',
//     pan: '',
//   });
//   const amountText = numberToWords.toWords(donationAmount || + customAmount);
//   // console.log('donationAmount', donationAmount)
//   const handleAmountChange = (e) => {
//     const enteredAmount = parseFloat(e.target.value);
//     console.log("enteredAmount", enteredAmount)
//     if (donationAmount !== null && enteredAmount >= donationAmount) {
//       setErrorAmountMessage('Entered amount should be greater than or equal to the selected donation amount.');
//     } else {
//       setErrorAmountMessage('');
//     }
//     setDonationAmount(enteredAmount);
//   };



//   const validateForm = () => {
//     const errors = {};
//     let isValid = true;
//     if (selectedItem !== "other" && !donationAmount) {
//       errors.donationAmount = 'Donation amount is required';
//       isValid = false;
//     }
//     else if (selectedItem === "other" && (!customAmount || customAmount <= 0)) {
//       errors.donationAmount = 'Enter donation amount';
//       isValid = false;
//     }


//     if (!formData.fname.trim()) {
//       errors.fname = 'First Name is required';
//       isValid = false;
//     }
//     if (!formData.lname.trim()) {
//       errors.lname = 'Last Name is required';
//       isValid = false;
//     }
//     if (!formData.email.trim()) {
//       errors.email = 'email is required';
//       isValid = false;
//     } else if (!isValidemail(formData.email)) {
//       errors.email = 'Invalid email address';
//       isValid = false;
//     }
//     if (!formData.mobile.trim()) {
//       errors.mobile = 'Mobile is required';
//       isValid = false;
//     }
//     if (!formData.address.trim()) {
//       errors.address = 'Address is required';
//       isValid = false;
//     }
//     // if (!captchaValue) {
//     //   errors.captcha = 'Please complete the reCAPTCHA';
//     // }
//     setValidationErrors(errors);
//     return isValid;
//   };
//   const isValidemail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const displayRazorpay = useCallback(
//     (result, key) => {
//       try {
//         const options = {
//           key, // Enter the Key ID generated from the Dashboard
//           amount: result.amount,
//           currency: result.currency,
//           name: "Muskaan",
//           description: "online order of muskaan store",
//           image: { logo: `logoimg` },
//           order_id: result.id,
//           handler: async (data) => {
//             setIsLoading(true);
//             setErrorMessage("");
//             try {
//               const body = {
//                 razorpayPaymentId: data.razorpay_payment_id,
//                 razorpayOrderId: data.razorpay_order_id,
//                 razorpaySignature: data.razorpay_signature
//               };
//               const response = await fetch(
//                 '/donation/verify',
//                 'POST',
//                 body,
//                 null
//               );
//               if (response == false) {
//                 setIsLoading(false);
//                 setErrorMessage(response.massage);
//                 return false;
//               }
//               setIsLoading(false);
//               navigate('/');

//             } catch (error) {
//               setIsLoading(false);
//               setErrorMessage("something went wrong");
//             }
//           },
//           prefill: {
//             name: result.notes.customer_name,
//             email: result.notes.customer_email,
//             contact: result.notes.customer_contact,
//           },
//           notes: {
//             ...result.notes,
//             address: "Muskaan, Plot No. 264-65, Behind Canara Bank, Neelbad, Bhopal, India – 462 044",
//           },
//           theme: {
//             color: "#090909",
//           },
//         };
//         const paymentObject = new window.Razorpay(options);
//         paymentObject.open();
//         setIsLoading(false);
//       } catch (error) {
//         setErrorMessage("something went wrong");
//       }
//     },
//     [navigate] // Ensure to include navigate in the dependencies array
//   );



//   const [donatePlace, setDonatePlace] = useState('');
//   const handleSubmit = async () => {
//     try {
//       if (validateForm()) {
//         const body = {
//           fname: formData.fname,
//           lname: formData.lname,
//           email: formData.email,
//           mobile: formData.mobile,
//           adderss: formData.address,
//           donation_head_id: selectedItem,
//           donation_amount: donationAmount || customAmount,
//           pan_no: formData.pan_no,
//         };
//         setIsLoading(true); // Setting isLoading to true here

//         const response = await fetch('/donation/save', 'POST', body, null);
//         console.log('submited data', response)
//         if (response) {
//           setDonatePlace(response.data.data);
//           displayRazorpay(response.data.data.order, response.data.data.RAZORPAY_KEY_ID);
//         } else {
//           setDonatePlace(response.data);
//         }
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   };
//   return (
//     <>
//       <p><em><strong>Together, let’s make the world one bit better!</strong></em></p>
//       <div className="button-list">
//         <hr />
//         <h5 className="mb-0 p-0"> <strong>Choose Contribution Amount <span className='text-danger'>*</span> </strong></h5>
//         {headsData?.map((i) => (
//           i.display_status && (
//             <li key={i.donation_head_id}>
//               <label
//                 className={`daily-anadhaanam acc ${selectedItem === i.donation_head_id ? 'acc-active' : ''}`}
//                 onClick={() => handleClick(i.donation_head_id)}
//               >
//                 <input
//                   type="radio"
//                   name="donationOption"
//                   value={i.donation_head_id}
//                   checked={selectedItem === i.donation_head_id}
//                   onChange={() => handleClick(i.donation_head_id)}
//                 />
//                 <div className="daily-text"> {i.head_name}</div>
//                 <span className="daily-amt">
//                   &nbsp; <strong>₹ {i.head_amount}</strong>
//                 </span>
//               </label>
//             </li>
//           )
//         ))}

//         <li>
//           <label className={`daily-anadhaanam acc ${selectedItem === 0 ? 'acc-active' : ''}`}>
//             <input
//               type="radio"
//               name="donationOption"
//               value="other"
//               checked={selectedItem === 0}
//               onChange={() => handleClick(0)}
//             />
//             <div className="daily-text" style={{ width: '15px' }}>
//               <strong> <i className="fa fa-inr"></i> </strong>
//             </div>
//             <input
//               type='number'
//               style={{ width: "320px" }}
//               placeholder='Type Your Own Amount'
//               className={`border-0 ${selectedItem === 0 ? 'acc-input-place acc-active' : ''}`}
//               onClick={() => handleClick(0)}
//               value={customAmount}
//               onChange={(e) => setCustomAmount(e.target.value)}
//             />
//           </label>
//         </li>

//         {selectedItem !== null && selectedItem !== 0 && (
//           <div className='mt-2'>
//             <strong style={{ fontSize: '15px' }}>{selectedItem === 'other' ? 'other' : headsData.find(item => item.donation_head_id === selectedItem)?.head_name} : </strong>
//             <input
//               type="number"
//               value={donationAmount}
//               onChange={handleAmountChange}
//             /> <font size='2'><em >(Entered amount should be greater than to the selected donation amount)</em></font>
//             {errorAmountMessage && <div style={{ color: 'red' }}>{errorAmountMessage}</div>}
//           </div>
//         )}

//         {validationErrors.donationAmount && (
//           <p className="error text-danger m-0">{validationErrors.donationAmount}</p>
//         )}
//         <div className='text-center'>
//           <h6 className='py-2 mt-4 main-color p-0 m-0 '>Your contribution amount: <i className="fa fa-inr"></i> {donationAmount || customAmount || 0} </h6>
//           <h6 className='text-capitalize text-info'><em>Rupees {amountText} Only</em></h6>
//         </div>


//       </div>
//       <div className='parsnal-info'>
//         <hr />
//         <h5 className='mb-0 p-0'>
//           <strong>Personal information <span className='text-danger'>*</span> </strong>
//         </h5>
//         <Form className='mt-3'>
//           <Row>
//             <Form.Group className="mb-3" as={Col} md="6">
//               <FormControl
//                 type='text'
//                 name='fname'
//                 placeholder='First Name *'
//                 className='contact-input'
//                 value={formData.fname}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   setFormData({ ...formData, fname: value });
//                   setValidationErrors((prevErrors) => ({
//                     ...prevErrors,
//                     fname: value.trim() ? '' : 'First Name is required',
//                   }));
//                 }}
//               />
//               {validationErrors.fname && <p className="error text-danger m-0">{validationErrors.fname}</p>}
//             </Form.Group>
//             <Form.Group className="mb-3" as={Col} md="6">
//               <FormControl
//                 type='text'
//                 name='lname'
//                 placeholder='Last Name *'
//                 className='contact-input'
//                 value={formData.lname}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   setFormData({ ...formData, lname: value });
//                   setValidationErrors((prevErrors) => ({
//                     ...prevErrors,
//                     lname: value.trim() ? '' : 'Last Name is required',
//                   }));
//                 }}
//               />
//               {validationErrors.lname && <p className="error text-danger m-0">{validationErrors.lname}</p>}
//             </Form.Group>
//             <Form.Group className="mb-3" as={Col} md="4">
//               <FormControl
//                 type='email'
//                 name='email'
//                 placeholder='E-mail Address *'
//                 className='contact-input'
//                 value={formData.email}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   setFormData({ ...formData, email: value });
//                   setValidationErrors((prevErrors) => ({
//                     ...prevErrors,
//                     email: value.trim() ? '' : 'email is required',
//                   }));
//                 }}
//               />
//               {validationErrors.email && <p className="error text-danger m-0">{validationErrors.email}</p>}
//             </Form.Group>
//             <Form.Group className="mb-3" as={Col} md="4">
//               <FormControl
//                 type='number'
//                 name='mobile'
//                 placeholder='Mobile *'
//                 className='contact-input'
//                 value={formData.mobile}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   setFormData({ ...formData, mobile: value });
//                   setValidationErrors((prevErrors) => ({
//                     ...prevErrors,
//                     mobile: value.trim() ? '' : 'Mobile  is required',
//                   }));
//                 }}
//               />
//               {validationErrors.mobile && <p className="error text-danger m-0">{validationErrors.mobile}</p>}
//             </Form.Group>

//             <Form.Group className="mb-3" as={Col} md="4">
//               <FormControl
//                 type='text'
//                 name='pan_no'
//                 placeholder='PAN No.'
//                 className='contact-input'
//                 value={formData.pan_no}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   setFormData({ ...formData, pan_no: value })
//                 }}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" as={Col} md="12">
//               <Form.Control
//                 as="textarea"
//                 name='address'
//                 placeholder='Address *'
//                 rows={3}
//                 className='contact-input'
//                 value={formData.address}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   setFormData({ ...formData, address: value });
//                   setValidationErrors((prevErrors) => ({
//                     ...prevErrors,
//                     address: value.trim() ? '' : 'Address is required',
//                   }));
//                 }}
//               />
//               {validationErrors.address && <p className="error text-danger m-0">{validationErrors.address}</p>}
//             </Form.Group>
//             <Form.Group as={Col} md="5">
//               <font color="red" size='2' >{errorMessage}</font>
//               <Button
//                 className='btn main-bg text-white py-2 px-2 border-none'
//                 onClick={handleSubmit}
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Please wait...' : 'Send Message'}
//               </Button>


//             </Form.Group>
//           </Row>
//         </Form>
//       </div>
//     </>
//   );
// };

// export default DonateNow;





import React, { useState, useCallback, useEffect, useRef } from 'react'
import { Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import CaptchaComponent from '../../component/CaptchaComponent';
import { fetch } from '../../../utils';
import useRazorpay from "react-razorpay";
import CryptoJS from "crypto-js";
import { useNavigate } from 'react-router-dom';

const DonateNow = () => {
  const Razorpay = useRazorpay();
  const navigate = useNavigate();
  const numberToWords = require('number-to-words');
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [headsData, setHeadsData] = useState();
  const [errorAmountMessage, setErrorAmountMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const getDonateHeads = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/donation/heads', 'get', null, null);
      setHeadsData(response.data.data.headList);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getDonateHeads();
  }, []);

  const [customAmount, setCustomAmount] = useState('');
  const [donationAmount, setDonationAmount] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleClick = (id) => {
    if (selectedItem !== id) {
      setCustomAmount('');
    }
    setSelectedItem(id);
    if (id === 0) {
      setDonationAmount(parseFloat(customAmount) || 0);
    } else if (headsData && headsData.find(item => item.donation_head_id === id)) {
      const selectedItemData = headsData.find(item => item.donation_head_id === id);
      setDonationAmount(parseFloat(selectedItemData.head_amount) || 0);
    }
    if (validationErrors.donationAmount) {
      setValidationErrors({ ...validationErrors, donationAmount: '' });
    }
  };
  const [validationErrors, setValidationErrors] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    address: '',
  });
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    address: '',
    pan: '',
  });
  const amountText = numberToWords.toWords(donationAmount || + customAmount);
  // console.log('donationAmount', donationAmount)

  const handleAmountChange = (e) => {
    const enteredAmount = parseFloat(e.target.value);
    console.log("enteredAmount", enteredAmount);
    const selectedHead = headsData.find((i) => i.donation_head_id === selectedItem);
    if (selectedHead && enteredAmount < selectedHead.head_amount) {
      // setErrorAmountMessage(`Entered amount should be greater than ₹${selectedHead.head_amount}.`);
      // setErrorAmountMessage(`Entered amount should be greater than or equal to the selected donation amount.`);

    } else {
      setErrorAmountMessage('');
    }

    setDonationAmount(enteredAmount);
  };



  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // if (selectedItem !== 0 && !donationAmount) {
    //   errors.donationAmount = 'Donation amount is required';
    //   isValid = false;
    // }        else if (selectedItem === 0 && (!customAmount || customAmount <= 0)) {
    //   errors.donationAmount = 'Enter donation amount';
    //   isValid = false;
    // } 

    if (selectedItem !== 0 && !donationAmount) {
      errors.donationAmount = 'Please select a donation head';
      isValid = false;
    } else {
      const selectedHead = headsData.find((item) => item.donation_head_id === selectedItem);
        if (selectedItem !== 0 && (!donationAmount || donationAmount < selectedHead.head_amount)) {
        errors.donationAmount = `Entered amount should be greater than or equal to ₹${selectedHead.head_amount}.`;
        isValid = false;
      } else if (selectedItem === 0 && (!customAmount || customAmount <= 0)) {
        errors.donationAmount = 'Enter donation amount';
        isValid = false;
      }
    }


    if (!formData.fname.trim()) {
      errors.fname = 'First Name is required';
      isValid = false;
    }
    if (!formData.lname.trim()) {
      errors.lname = 'Last Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = 'email is required';
      isValid = false;
    } else if (!isValidemail(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }
    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile is required';
      isValid = false;
    }
    if (!formData.address.trim()) {
      errors.address = 'Address is required';
      isValid = false;
    }
    // if (!captchaValue) {
    //   errors.captcha = 'Please complete the reCAPTCHA';
    // }
    setValidationErrors(errors);
    return isValid;
  };
  const isValidemail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };



  const displayRazorpay = useCallback(
    (result, key) => {
      try {
        const options = {
          key, // Enter the Key ID generated from the Dashboard
          amount: result.amount,
          currency: result.currency,
          name: "Muskaan",
          description: "online order of muskaan store",
          image: { logo: `logoimg` },
          order_id: result.id,
          handler: async (data) => {
            setIsLoading(true);
            setErrorMessage("");
            try {
              const body = {
                razorpayPaymentId: data.razorpay_payment_id,
                razorpayOrderId: data.razorpay_order_id,
                razorpaySignature: data.razorpay_signature
              };
              const response = await fetch(
                '/donation/verify',
                'POST',
                body,
                null
              );
              if (response == false) {
                setIsLoading(false);
                setErrorMessage(response.massage);
                return false;
              }
              setIsLoading(false);
              navigate('/thankyou');

            } catch (error) {
              setIsLoading(false);
              setErrorMessage("something went wrong");
            }
          },
          prefill: {
            name: result.notes.customer_name,
            email: result.notes.customer_email,
            contact: result.notes.customer_contact,
          },
          notes: {
            ...result.notes,
            address: "Muskaan, Plot No. 264-65, Behind Canara Bank, Neelbad, Bhopal, India – 462 044",
          },
          theme: {
            color: "#090909",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        setIsLoading(false);
      } catch (error) {
        setErrorMessage("something went wrong");
      }
    },
    [navigate] // Ensure to include navigate in the dependencies array
  );



  const [donatePlace, setDonatePlace] = useState('');
  const handleSubmit = async () => {
    try {
      if (validateForm()) {
        const body = {
          fname: formData.fname,
          lname: formData.lname,
          email: formData.email,
          mobile: formData.mobile,
          adderss: formData.address,
          donation_head_id: selectedItem,
          donation_amount: donationAmount || customAmount,
          pan_no: formData.pan_no,
        };
        setIsLoading(true); // Setting isLoading to true here
        const response = await fetch('/donation/save', 'POST', body, null);
        console.log('submited data', response)
        if (response) {
          setDonatePlace(response.data.data);
          displayRazorpay(response.data.data.order, response.data.data.RAZORPAY_KEY_ID);
        } else {
          setDonatePlace(response.data);
        }
        setIsLoading(false);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  return (
    <>
      <p><em><strong>Together, let’s make the world one bit better!</strong></em></p>
      <div className="button-list">
        <hr />
        <h5 className="mb-0 p-0"> <strong>Choose Contribution Amount <span className='text-danger'>*</span> </strong></h5>
        {headsData?.map((i) => (
          i.display_status && (
            <li key={i.donation_head_id}>
              <label
                className={`daily-anadhaanam acc ${selectedItem === i.donation_head_id ? 'acc-active' : ''}`}
                onClick={() => handleClick(i.donation_head_id)}
              >
                <input
                  type="radio"
                  name="donationOption"
                  value={i.donation_head_id}
                  checked={selectedItem === i.donation_head_id}
                  onChange={() => handleClick(i.donation_head_id)}
                />
                <div className="daily-text"> {i.head_name}</div>
                <span className="daily-amt">
                  &nbsp; <strong>₹ {i.head_amount}</strong>
                </span>
              </label>
            </li>
          )
        ))}

        <li>
          <label className={`daily-anadhaanam acc ${selectedItem === 0 ? 'acc-active' : ''}`}>
            <input
              type="radio"
              name="donationOption"
              value="other"
              checked={selectedItem === 0}
              onChange={() => handleClick(0)}
            />
            <div className="daily-text" style={{ width: '15px' }}>
              <strong> <i className="fa fa-inr"></i> </strong>
            </div>
            <input
              type='number'
              style={{ width: "320px" }}
              placeholder='Type Your Own Amount'
              className={`border-0 ${selectedItem === 0 ? 'acc-input-place acc-active' : ''}`}
              onClick={() => handleClick(0)}
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
            />
          </label>
        </li>

        {selectedItem !== null && selectedItem !== 0 && (
          <div className='mt-2'>
            <strong style={{ fontSize: '15px' }}>{selectedItem === 'other' ? 'other' : headsData.find(item => item.donation_head_id === selectedItem)?.head_name} : </strong>
            <input
              type="number"
              value={donationAmount}
              onChange={handleAmountChange}
            /> <font size='2'><em >(Entered amount should be greater than to the selected donation amount)</em></font>
            {errorAmountMessage && <div style={{ color: 'red' }}>{errorAmountMessage}</div>}
          </div>
        )}

        {validationErrors.donationAmount && (
          <p className="error text-danger m-0">{validationErrors.donationAmount}</p>
        )}
        <div className='text-center'>
          <h6 className='py-2 mt-4 main-color p-0 m-0 '>Your contribution amount: <i className="fa fa-inr"></i> {donationAmount || customAmount || 0} </h6>
          <h6 className='text-capitalize text-info'><em>Rupees {amountText} Only</em></h6>
        </div>


      </div>
      <div className='parsnal-info'>
        <hr />
        <h5 className='mb-0 p-0'>
          <strong>Personal information <span className='text-danger'>*</span> </strong>
        </h5>
        <Form className='mt-3'>
          <Row>
            <Form.Group className="mb-3" as={Col} md="6">
              <FormControl
                type='text'
                name='fname'
                placeholder='First Name *'
                className='contact-input'
                value={formData.fname}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, fname: value });
                  setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    fname: value.trim() ? '' : 'First Name is required',
                  }));
                }}
              />
              {validationErrors.fname && <p className="error text-danger m-0">{validationErrors.fname}</p>}
            </Form.Group>
            <Form.Group className="mb-3" as={Col} md="6">
              <FormControl
                type='text'
                name='lname'
                placeholder='Last Name *'
                className='contact-input'
                value={formData.lname}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, lname: value });
                  setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    lname: value.trim() ? '' : 'Last Name is required',
                  }));
                }}
              />
              {validationErrors.lname && <p className="error text-danger m-0">{validationErrors.lname}</p>}
            </Form.Group>
            <Form.Group className="mb-3" as={Col} md="4">
              <FormControl
                type='email'
                name='email'
                placeholder='E-mail Address *'
                className='contact-input'
                value={formData.email}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, email: value });
                  setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    email: value.trim() ? '' : 'email is required',
                  }));
                }}
              />
              {validationErrors.email && <p className="error text-danger m-0">{validationErrors.email}</p>}
            </Form.Group>
            <Form.Group className="mb-3" as={Col} md="4">
              <FormControl
                type='number'
                name='mobile'
                placeholder='Mobile *'
                className='contact-input'
                value={formData.mobile}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, mobile: value });
                  setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    mobile: value.trim() ? '' : 'Mobile  is required',
                  }));
                }}
              />
              {validationErrors.mobile && <p className="error text-danger m-0">{validationErrors.mobile}</p>}
            </Form.Group>

            <Form.Group className="mb-3" as={Col} md="4">
              <FormControl
                type='text'
                name='pan_no'
                placeholder='PAN No.'
                className='contact-input'
                value={formData.pan_no}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, pan_no: value })
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" as={Col} md="12">
              <Form.Control
                as="textarea"
                name='address'
                placeholder='Address *'
                rows={3}
                className='contact-input'
                value={formData.address}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, address: value });
                  setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    address: value.trim() ? '' : 'Address is required',
                  }));
                }}
              />
              {validationErrors.address && <p className="error text-danger m-0">{validationErrors.address}</p>}
            </Form.Group>
            <Form.Group as={Col} md="5">
              <font color="red" size='2' >{errorMessage}</font>
              <Button
                className='btn main-bg text-white py-2 px-2 border-none'
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? 'Please wait...' : 'Send Message'}
              </Button>


            </Form.Group>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default DonateNow;
