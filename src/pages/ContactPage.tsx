import Header from "../components/Header";
import Title from "../components/Title";
import '../assets/styles/contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function ContactPage() {
  const [state, handleSubmit] = useForm("xdkarngn");

  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }

  return (
    <>
      <Header />
      <div className="contactpage">
        <h1 className="terms-title">
          <Title title="LET'S WORK TOGETHER!" />
          <div className="breadcrumbs">
            <Link to="/" className="breadcrumb-link">Home</Link> / Contact
          </div>
        </h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="hidden" name="_subject" value="Lead: New Submission" />
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input id="name" type="text" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input id="email" type="email" name="email" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="business">Business Name (Optional)</label>
            <input id="business" type="text" name="business" />
          </div>

          <div className="form-group">
            <label htmlFor="interest">Service Interest *</label>
            <select id="interest" name="interest" className="styled-dropdown" required>
              <option value=""></option>
              <option value="Logo Design">Logo Design</option>
              <option value="Full Branding">Full Branding</option>
              <option value="Website Creation">Website Creation</option>
              <option value="All of The Above">All of The Above</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">When are You Looking to Start? *</label>
            <select id="message" name="message" className="styled-dropdown" required>
              <option value=""></option>
              <option value="Immediately">Immediately</option>
              <option value="Within a Month">Within a Month</option>
              <option value="Just Exploring">Just Exploring</option>
            </select>
          </div>

          <div className="form-terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms"> I agree to the terms of service</label>
          </div>

          <button type="submit" className="submit-btn" disabled={state.submitting}>
            REQUEST COMPLIMENTARY CONSULTATION
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
