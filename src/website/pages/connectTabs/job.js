import React, { useState } from 'react';
import { Container, Row, Col, Form, FormControl, Button, Image } from 'react-bootstrap';
import CaptchaComponent from '../../component/CaptchaComponent';
import { fetch } from '../../../utils';

const Career = () => {
    const [captchaValue, setCaptchaValue] = useState(null);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNo: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        file: '',
    });

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFormData({
                ...formData,
                [e.target.name]: e.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full Name is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = 'Valid Email is required';
        }
        const phoneRegex = /^\d{10}$/;
        if (!formData.phoneNo.trim() || !phoneRegex.test(formData.phoneNo.trim())) {
            newErrors.phoneNo = 'Please enter a valid 10-digit phone number';
        }
        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }
        if (!formData.city.trim()) {
            newErrors.city = 'City is required';
        }
        if (!formData.pincode.trim()) {
            newErrors.pincode = 'Pin Code is required';
        }
        if (!formData.state.trim()) {
            newErrors.state = 'State is required';
        }
        // if (!formData.file.trim()) {
        //     newErrors.file = 'File is required';
        // }
        // if (!captchaValue) {
        //     newErrors.captcha = 'Please complete the reCAPTCHA';
        // }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const submitContact = async () => {
        try {
            setIsSubmitting(true); // Set loading state to true

            if (validateForm()) {
                const body = {
                    full_name: formData.fullName,
                    email: formData.email,
                    phoneNo: formData.phoneNo,
                    city: formData.city,
                    address: formData.address,
                    state: formData.state,
                    pincode: formData.pincode,
                    file: formData.file,
                };
                // console.log([...body.entries()]);

                const response = await fetch('/form/save-career', 'POST', body, null);
                if (response.data) {
                    setFormData({
                        fullName: '',
                        email: '',
                        phoneNo: '',
                        address: '',
                        city: '',
                        state: '',
                        pincode: '',
                        file: '',
                    });
                    setCaptchaValue(null);
                    setErrors({});
                    setSubmitSuccess(true);
                } else {
                    console.log('')
                }
            }
        } catch (error) {
            setIsSubmitting(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Container>

                <Row>
                    <Col sm={5}>
                        <Image src='https://www.nityango.org/wp-content/uploads/2023/06/Top-sites-to-give-an-edge-to-your-career.png' alt="muskaan" className='w-100' />
                    </Col>
                    <Col sm={7}>
                        <Row>
                            <Form.Group className="mb-3">
                                <FormControl
                                    type='text'
                                    placeholder='Full Name'
                                    className='contact-input'
                                    name='fullName'
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                                {errors.fullName && <p className="error text-danger m-0">{errors.fullName}</p>}
                            </Form.Group>
                            <Form.Group className="mb-3" as={Col} md="6">
                                <FormControl
                                    type='mail'
                                    placeholder='Email Address'
                                    className='contact-input'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="error text-danger m-0">{errors.email}</p>}
                            </Form.Group>
                            <Form.Group className="mb-3" as={Col} md="6">
                                <FormControl
                                    type='number'
                                    placeholder='Phone No.'
                                    className='contact-input'
                                    name='phoneNo'
                                    value={formData.phoneNo}
                                    onChange={handleChange}
                                />
                                {errors.phoneNo && <p className="error text-danger m-0">{errors.phoneNo}</p>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <FormControl
                                    type='text'
                                    placeholder='Address'
                                    className='contact-input'
                                    name='address'
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                                {errors.address && <p className="error text-danger m-0">{errors.address}</p>}
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} md="6">
                                <FormControl
                                    type='text'
                                    placeholder='City'
                                    className='contact-input'
                                    name='city'
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                                {errors.city && <p className="error text-danger m-0">{errors.city}</p>}
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} md="6">
                                <FormControl
                                    type='text'
                                    placeholder='State'
                                    className='contact-input'
                                    name='state'
                                    value={formData.state}
                                    onChange={handleChange}
                                />
                                {errors.state && <p className="error text-danger m-0">{errors.state}</p>}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <FormControl
                                    type='number'
                                    placeholder='Pin Code'
                                    className='contact-input'
                                    name='pincode'
                                    value={formData.pincode}
                                    onChange={handleChange}
                                />
                                {errors.pincode && <p className="error text-danger m-0">{errors.pincode}</p>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <FormControl
                                    type='file'
                                    className='contact-input'
                                    name='file'
                                    accept='.pdf'
                                    onChange={handleChange}
                                />
                                {errors.file && <p className="error text-danger m-0">{errors.file}</p>}
                            </Form.Group>


                            {/* 
                            <Form.Group className="mb-3">
                                <CaptchaComponent onChange={handleCaptchaChange} />
                                {errors.captcha && <p className="error text-danger">{errors.captcha}</p>}
                            </Form.Group> */}

                            <Form.Group as={Col} md="5">
                                <Button
                                    onClick={submitContact}
                                    className='rounded-1 px-5 py-2'
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                                </Button>

                            </Form.Group>

                            <Form.Group as={Col} md='6'>
                                {submitSuccess && (
                                    <h6 className="text-success">Form submitted successfully!</h6>
                                )}
                            </Form.Group>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Career;





















import React, { useState } from 'react';

const Career = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_no: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    file: null,  // Assuming you're uploading a file; if not, you can remove this line
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle file input changes
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://srv22.synques.in:1721/api/form/save-career';

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        // Handle success
        console.log('Form submitted successfully');
      } else {
        // Handle error
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Your Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for form data */}
        <div>
          <label htmlFor="full_name">Full Name:</label>
          <input type="text" id="full_name" name="full_name" value={formData.full_name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="phone_no">Phone Number:</label>
          <input type="tel" id="phone_no" name="phone_no" value={formData.phone_no} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" value={formData.state} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="pincode">Pincode:</label>
          <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleInputChange} />
        </div>

        {/* File input */}
        <div>
          <label htmlFor="file">File:</label>
          <input type="file" id="file" name="file" onChange={handleFileChange} />
        </div>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Career;
