import React, { useEffect } from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'

const PrivacyPolicy = () => {
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='extrapage'>
        <Navbar/>
        <SingleBanner heading="Privacy Policy"
        bannerimage="https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467_1280.jpg"
        
        />

    <div className="pgcont1">
        <h3>Information We Collect:</h3>
        <p>a. Personal Information: We may collect personally identifiable information, such as your name, email address, phone number, and postal address, when you voluntarily provide it to us while using our website or services. You may choose not to provide certain information, but this may limit your ability to access certain features of our website.<br />
            b. Payment Information: When you make purchases through our website, we collect payment information, including credit card details, billing address, and transaction details. Please note that we do not store your payment information on our servers; all payment processing is securely handled by our trusted third-party payment processors.<br />
            c. Usage Information: We automatically collect non-personal information about your interactions with our website, such as your IP address, browser type, device information, and pages visited. This information helps us understand how our website is used and how we can improve user experience.<br />
            d. Cookies and Similar Technologies: We use cookies and similar technologies to enhance your browsing experience and collect usage information. Cookies are small text files stored on your device, and they enable us to remember your preferences and tailor our services to your needs. You can manage cookie preferences through your browser settings.</p>
      </div>
      <div className="pgcont1">
        <h3>How We Use Your Information:</h3>
          <p>a. Providing Services: We use the information collected to process your orders, deliver products, and provide customer support. This includes communicating order updates, responding to inquiries, and addressing any concerns. <br />
            b. Personalization: We may use your information to personalize your experience on our website, recommend products, and offer promotions that we believe may interest you.<br />
            c. Marketing Communication: With your consent, we may send you marketing emails or other communications about our products, promotions, and events. You can opt-out of these communications at any time.<br />
            d. Legal Compliance: We may use your information to comply with legal obligations, such as tax regulations, fraud prevention, and responding to lawful requests from government authorities.</p>      
        </div>
        <Footer1/>
        <Footer2/>

    </div>
  )
}

export default PrivacyPolicy