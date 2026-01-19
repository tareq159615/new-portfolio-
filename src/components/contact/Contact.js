import React, { useState, useRef } from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useRef();

  // Email Validation
  const emailValidation = () => {
    const regex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email.toLowerCase());
  };

  // Phone Validation
  const phoneValidation = () => {
    const regex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    return regex.test(phoneNumber);
  };

  // Backup function using FormSubmit.co (FREE service)
  const sendViaFormSubmit = async (formData) => {
    const response = await fetch("https://formsubmit.co/ajax/tareqaziz01829711741@gmail.com", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    return response.ok;
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setErrMsg("");
    setSuccessMsg("");
    setIsSubmitting(true);

    // Validation
    const validations = [
      { condition: !username.trim(), message: "Name is required!" },
      { condition: !phoneNumber.trim(), message: "Phone number is required!" },
      { condition: !phoneValidation(), message: "Please enter a valid Bangladeshi phone number (e.g., 0182911741)!" },
      { condition: !email.trim(), message: "Email is required!" },
      { condition: !emailValidation(), message: "Please enter a valid email address!" },
      { condition: !subject.trim(), message: "Subject is required!" },
      { condition: !message.trim(), message: "Message is required!" },
    ];

    for (const validation of validations) {
      if (validation.condition) {
        setErrMsg(validation.message);
        setIsSubmitting(false);
        return;
      }
    }

    try {
      const formData = {
        name: username,
        email: email,
        phone: phoneNumber,
        subject: subject,
        message: message,
        _subject: `New Contact: ${subject}`,
        _template: "table",
        _captcha: "false"
      };

      let emailSent = false;
      
      // Try EmailJS First
      try {
        // PUT YOUR ACTUAL EMAILJS CREDENTIALS HERE
        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_3fgsomg';
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_h8c0nv8';
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'DvqtOa1kC22Wz4u2T';
        
        await emailjs.send(
          serviceID,
          templateID,
          {
            from_name: username,
            from_email: email,
            phone_number: phoneNumber,
            subject: subject,
            message: message,
            to_email: "tareqaziz01829711741@gmail.com",
            date: new Date().toLocaleDateString('en-BD')
          },
          publicKey
        );
        
        emailSent = true;
        console.log("Email sent via EmailJS");
        
      } catch (emailjsError) {
        console.warn("EmailJS failed, trying FormSubmit...", emailjsError);
        
        // Try FormSubmit as backup
        try {
          emailSent = await sendViaFormSubmit(formData);
          if (emailSent) {
            console.log("Email sent via FormSubmit");
          }
        } catch (formsubmitError) {
          console.error("FormSubmit also failed:", formsubmitError);
        }
      }

      if (emailSent) {
        // Success message
        setSuccessMsg(
          `Thank you ${username}! ✅ Your message has been sent successfully. I'll respond to ${email} within 24 hours.`
        );
        
        // Reset form
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
        
        // Auto-clear success message after 10 seconds
        setTimeout(() => {
          setSuccessMsg("");
        }, 10000);
        
      } else {
        // Fallback: Show email link
        const mailtoLink = `mailto:tareqaziz01829711741@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          `Name: ${username}\nEmail: ${email}\nPhone: ${phoneNumber}\n\nMessage:\n${message}`
        )}`;
        
        setSuccessMsg(
          <span>
            Form submission failed. Please{' '}
            <a href={mailtoLink} className="text-designColor underline font-bold">
              click here to send email directly
            </a>{' '}
            or copy this email: tareqaziz01829711741@gmail.com
          </span>
        );
      }

    } catch (error) {
      console.error("Final error:", error);
      setErrMsg(
        "Unable to send message automatically. Please email me directly at tareqaziz01829711741@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-20 border-b-[1px] border-b-black px-4 sm:px-6 lg:px-8"
    >
      <div className="flex justify-center items-center text-center">
        <Title 
          title="LET'S CONNECT" 
          des="Get In Touch" 
        />
      </div>
      
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-8">
          <ContactLeft />
          
          <div className="w-full lgl:w-[60%] h-full py-8 md:py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-6 md:gap-8 p-4 md:p-6 lgl:p-8 rounded-lg shadow-shadowOne border border-gray-800">
            <div className="text-center mb-2 md:mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Send me a message</h3>
              <p className="text-gray-400 text-xs md:text-sm">
                I'm currently open to new opportunities and would love to hear from you!
              </p>
            </div>

            <form ref={form} className="w-full flex flex-col gap-4 md:gap-5 py-2" onSubmit={handleSend}>
              {/* Error Message */}
              {errMsg && (
                <div className="p-3 bg-red-900/20 border border-red-700 rounded text-red-400 text-sm animate-fadeIn">
                  <span className="font-medium">⚠️ Error: </span>{errMsg}
                </div>
              )}
              
              {/* Success Message */}
              {successMsg && (
                <div className="p-3 bg-green-900/20 border border-green-700 rounded text-green-400 text-sm animate-fadeIn">
                  <span className="font-medium">✅ Success: </span>
                  {typeof successMsg === 'string' ? successMsg : successMsg}
                </div>
              )}

              {/* Form Fields */}
              <div className="w-full flex flex-col lgl:flex-row gap-4 md:gap-6">
                <div className="w-full lgl:w-1/2 flex flex-col gap-3">
                  <label className="text-xs md:text-sm text-gray-400 uppercase tracking-wide font-medium">
                    Your Name *
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className="contactInput"
                    type="text"
                    placeholder="Enter your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="w-full lgl:w-1/2 flex flex-col gap-3">
                  <label className="text-xs md:text-sm text-gray-400 uppercase tracking-wide font-medium">
                    Phone Number *
                  </label>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className="contactInput"
                    type="tel"
                    placeholder="0182911741"
                    required
                    disabled={isSubmitting}
                  />
                  <p className="text-xs text-gray-500">Format: 018XXXXXXXX</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs md:text-sm text-gray-400 uppercase tracking-wide font-medium">
                  Email Address *
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="contactInput"
                  type="email"
                  placeholder="you@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs md:text-sm text-gray-400 uppercase tracking-wide font-medium">
                  Subject *
                </label>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className="contactInput"
                  type="text"
                  placeholder="Project inquiry, Job opportunity, etc."
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs md:text-sm text-gray-400 uppercase tracking-wide font-medium">
                  Message *
                </label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="contactTextArea"
                  cols="30"
                  rows="5"
                  placeholder="Tell me about your project, timeline, budget, or any specific requirements..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <div className="w-full pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-10 md:h-12 bg-gradient-to-r from-designColor to-blue-600 rounded-lg text-sm md:text-base text-white font-medium tracking-wider uppercase hover:opacity-90 duration-300 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-4 w-4 md:h-5 md:w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>

              <div className="text-center pt-2 md:pt-4">
                <p className="text-gray-500 text-xs md:text-sm">
                  Or email me directly at{" "}
                  <a 
                    href="mailto:tareqaziz01829711741@gmail.com" 
                    className="text-designColor hover:underline font-medium"
                  >
                    tareqaziz01829711741@gmail.com
                  </a>
                </p>
                <p className="text-gray-500 text-xs md:text-sm mt-1">
                  I typically respond within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;