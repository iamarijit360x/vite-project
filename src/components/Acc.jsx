import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Acc.css'; // Assuming you have a CSS file for styling

const Coupon = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    { label: "What type of vehicles are eligible?", content: "Payment information..." },
    { label: "How do I get paid?", content: "Payment information..." },
    { label: "What areas does MyFastX operate in?", content: "Operational areas information..." },
    { label: "What type of vehicles are eligible?", content: "Eligible vehicle information..." },
    { label: "How do I get paid?", content: "537 x 41" },
    { label: "What areas does MyFastX operate", content: "537 x 41" },
  ];

  return (
    <div className="coupon">
      <div className="coupon-content">
        {sections.map((section, index) => (
          <div key={index} className="coupon-item">
            <div
              className="coupon-label"
              onClick={() => handleToggle(index)}
            >
              {section.label}
              <FontAwesomeIcon
                icon={activeIndex === index ? faChevronDown : faChevronRight}
                className="accordion-icon"
              />
            </div>
            {activeIndex === index && (
              <div className="coupon-code">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupon;
