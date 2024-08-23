import React, { useState, useRef, useEffect } from 'react';
import './FAQ.css'; // Make sure to create this CSS file

const FAQItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  return (
    <div className="faq-item ">
      <div 
        className="faq-question" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {question}
        <span>{isExpanded ? '-' : '+'}</span>
      </div>
      <div 
        className="faq-answer-wrapper" 
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="faq-answer">{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "What types of videos can I process with ClipperGoat?",
      answer: "ClipperGoat supports a wide range of video formats from all major social media platforms, including TikTok, Instagram, YouTube, Facebook, and more. Whether it's short-form clips or longer videos, our platform can handle it all."
    },
    {
      question: "Will this make me go viral?",
      answer: "While we can't guarantee virality, ClipperGoat significantly enhances your chances by repurposing your most successful content. Our AI tools help optimize and refresh your videos, making them more likely to be picked up by algorithms and reach a broader audience."
    },
    {
      question: "Does this repost for you?",
      answer: "Yes, ClipperGoat's auto-poster feature allows you to schedule and automate the reposting of your videos across multiple platforms, saving you time and ensuring consistent engagement."
    },
    {
      question: "Can I do more than 1000 videos a month?",
      answer: "Absolutely! Our Enterprise plan allows for up to 4000 video cleans and downloads per month. For custom needs, contact our support team for tailored solutions."
    },
    {
      question: "Does it work on TikTok?",
      answer: "Yes, ClipperGoat is optimized for TikTok, ensuring your videos are formatted and enhanced to perform well on the platform."
    },
    {
      question: "Does this get you shadowbanned?",
      answer: "No, ClipperGoat is designed to comply with all platform guidelines, including TikTok's. Our metadata cleaning ensures your content remains within the rules, reducing the risk of shadowbanning."
    },
    {
      question: "Can I use ClipperGoat if I live outside the US?",
      answer: "Yes, ClipperGoat is available globally. No matter where you are, you can take advantage of our powerful video editing and reposting tools."
    },
    {
      question: "Do I need startup capital to make money with ClipperGoat?",
      answer: "While having some startup capital can help you scale faster, it is not required. Our platform is designed to maximize your existing content, allowing you to grow organically and reinvest your earnings."
    },
    {
      question: "What if I'm interested in passive income?",
      answer: "ClipperGoat can help you generate passive income by automating the reposting of your viral content, keeping your social media channels active and engaging without constant effort."
    },
    {
      question: "What is the price of ClipperGoat?",
      answer: "ClipperGoat offers three pricing plans: Clippreneur: $120/month for 300 credits Agency: $300/month for 1000 credits Enterprise: $997/month for 4000 credits"
    },
    {
      question: "I don't have any money, can I get access for free?",
      answer: "            Yes, we offer a 1$ trial that includes 30 credits. This allows you to start using Clippergoat's features at Virtually no cost and upgrade as you grow."
    },
    {
      question: "Is ClipperGoat really guaranteed to work?",
      answer: "ClipperGoat is designed to maximize the effectiveness of your content. While we can't guarantee specific results, our tools are built to enhance your content strategy and improve your chances of success."
    }
  ];

  return (
    <div className="faq-container Container-Spacing">
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;