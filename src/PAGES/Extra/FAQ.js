import React, { useEffect, useState } from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'

const FAQ = () => {
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const [ activesection, setActivesection] = useState(0)

  const faq = [
    {
      id:1,
      question:'Do you offer online shopping and home delivery services?',
      answer:'Yes, we provide online shopping services through our website. You can browse our products, add items to your cart, and place an order for home delivery. We offer convenient and timely delivery options for your shopping convenience. Delivery fees and minimum order requirements may apply based on your location'
    },
  
    {
      id:2,
      question:'How can I pay for my purchases online?',
      answer:'We accept various payment methods for online orders, including credit/debit cards and digital payment platforms. At the checkout, you can choose your preferred payment option, and our secure payment gateway will process the transaction. Rest assured that your payment details are encrypted and protected.'

    },
  
    {
      id:3,
      question:"Can I return or exchange products if I'm not satisfied?",
      answer:'Yes, we want you to be satisfied with your purchases. If you are not happy with a product, you can return it within [number of days] days of the purchase date. Please ensure the item is in its original condition and packaging. For perishable items, returns are subject to certain conditions. For more details on our return policy, please refer to our Return and Refund Policy section on the website.'

    },
  
    {
      id:4,
      question:' Are your products fresh and of good quality?',
      answer:'Absolutely! We take great pride in offering fresh and high-quality products to our customers. Our team carefully selects and inspects each item to ensure it meets our strict quality standards. We work with trusted suppliers and farmers to source the best products for you.'

    },
    {
      id:5,
      question:' Do you offer loyalty programs or discounts for regular customers?',
      answer:'Yes, we value our loyal customers, and we have a rewards program that offers discounts and exclusive benefits. You can sign up for our loyalty program either in-store or online to start earning points and enjoying special offers. Additionally, we often have promotional discounts and seasonal sales that you can take advantage of.'

    },
    {
      id:6,
      question:'How do I contact customer support for assistance?',
      answer:'If you have any questions, concerns, or need assistance, our customer support team is here to help. You can contact us through [phone number] or send us an email at [email address]. We aim to respond to your inquiries promptly and provide you with the best possible support.'

    },
    {
      id:7,
      question:' Can I suggest a product or give feedback about my shopping experience?',
      answer:'Absolutely! We value your feedback and appreciate product suggestions. You can share your thoughts and suggestions with us through the Contact Us page on our website. Your feedback helps us improve our offerings and provide you with a better shopping experience'
    },
  ]

  return (
    <div className='extrapage'>
        <Navbar/>
        <SingleBanner heading="FAQ's"
        bannerimage="https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467_1280.jpg"
        
        />

        <div className="faqcontainer">
        {/* {
          activesection == 1 ? 
          <div className="faq">
          <div className="faqhead">
              <h1>Do you offer online shopping and home delivery services?</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={()=>setActivesection(0)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </div>
          <div className="faqbody">
            <p>
            Yes, we provide online shopping services through our website. You can browse our products, add items to your cart, and place an order for home delivery. We offer convenient and timely delivery options for your shopping convenience. Delivery fees and minimum order requirements may apply based on your location.
            </p>
          </div>
        </div>

        :
        <div className="faq">
        <div className="faqhead">
            <h1>Do you offer online shopping and home delivery services?</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={()=>setActivesection(1)}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

        </div>
      </div>
        } */}

        {
          faq.map((item,index)=>{
            return(
              activesection == item.id ?
              <div className="faq">
              <div className="faqhead">
                  <h1>{item.question}</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={()=>setActivesection(0)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </div>
              <div className="faqbody">
                <p>{item.answer} </p>
              </div>
            </div>
            :

            <div className="faq">
            <div className="faqhead">
                <h1>{item.question}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={()=>setActivesection(item.id)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
    
            </div>
          </div>

            )
          })
        }
  

        
        </div>


        <Footer1/>
        <Footer2/>
    </div>
  )
}

export default FAQ