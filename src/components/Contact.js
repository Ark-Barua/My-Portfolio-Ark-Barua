import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../emailjs-config';
import { 
  HiEnvelope, 
  HiPhone, 
  HiBriefcase, 
  HiCodeBracket, 
  HiMapPin, 
  HiPaperAirplane,
  HiCheckCircle,
  HiExclamationCircle
} from 'react-icons/hi2';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Check if credentials are properly configured
      if (!EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
        console.error('EmailJS credentials not configured!');
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      console.log('Sending email with EmailJS...');
      console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID);
      console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
      console.log('Public Key:', EMAILJS_CONFIG.PUBLIC_KEY);

      // EmailJS configuration
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID, // Your Gmail service ID
        EMAILJS_CONFIG.TEMPLATE_ID, // Replace with your EmailJS template ID
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY // Replace with your EmailJS public key
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send error:', error);
      console.error('Error details:', {
        message: error.message,
        code: error.code,
        status: error.status
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => {
    setSubmitStatus(null);
  };

  return (
    <section id="contact">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's discuss your next project or opportunity
        </p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3 className="contact-info-title">
            Contact Information
          </h3>
          
          <div className="contact-item">
            <div className="contact-icon">
              <HiEnvelope size={24} />
            </div>
            <div className="contact-details">
              <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Email</div>
              <a href="mailto:arkbarua16@gmail.com">arkbarua16@gmail.com</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <HiPhone size={24} />
            </div>
            <div className="contact-details">
              <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Phone</div>
              <a href="tel:+919064933940">+91 9064933940</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <HiBriefcase size={24} />
            </div>
            <div className="contact-details">
              <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>LinkedIn</div>
              <a href="https://www.linkedin.com/in/arkbarua" target="_blank" rel="noreferrer">
                linkedin.com/in/arkbarua
              </a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <HiCodeBracket size={24} />
            </div>
            <div className="contact-details">
              <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>GitHub</div>
              <a href="https://github.com/Ark-Barua" target="_blank" rel="noreferrer">
                github.com/Ark-Barua
              </a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <HiMapPin size={24} />
            </div>
            <div className="contact-details">
              <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Location</div>
              <span style={{ color: 'var(--text-secondary)' }}>Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h3 className="contact-form-title">
            Send Message
          </h3>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="form-status success" onClick={resetStatus}>
              <HiCheckCircle size={20} />
              <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="form-status error" onClick={resetStatus}>
              <HiExclamationCircle size={20} />
              <span>Failed to send message. Please try again or contact me directly.</span>
            </div>
          )}
          
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name *</label>
              <input 
                type="text" 
                name="name"
                className="form-input" 
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email *</label>
              <input 
                type="email" 
                name="email"
                className="form-input" 
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Subject *</label>
              <input 
                type="text" 
                name="subject"
                className="form-input" 
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Message *</label>
              <textarea 
                name="message"
                className="form-textarea" 
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}

              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner"></div>
                  Sending...
                </>
              ) : (
                <>
                  <HiPaperAirplane size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}