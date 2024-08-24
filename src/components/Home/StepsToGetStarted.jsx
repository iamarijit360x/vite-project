import React from 'react';
import './StepsToGetStarted.css';
import vehicle from '../../assets/vehicle.png'
const StepsToGetStarted = ({ steps }) => {
    return (
        <div className="steps-main-container">
            <div className="steps-container">
                <div className="steps-header">
                    <div className='steps-custom-subcontainer'>
                        <h4>How It Works</h4>
                    </div>
                    <h2>Simple Steps to Get Started</h2>
                </div>
                <div className="steps-list">
                    {steps.map((step, index) => (
                        <div className="step-item" key={index}>
                            
                            <div className="step-icon-container">
                                {index === 0 && <div className="step-line"/> }
                                <div className="step-icon">
                                    <img src={step.icon} alt={`${step.title} icon`} />
                                </div>
                                {index < steps.length - 1 && <div className="step-line"/> }
                                {index < steps.length && <div className="step-line2"/>}
                            </div>
                            <div className="step-text">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
           
            </div>
            <div className="steps-image">
                    <img src={vehicle}/>
                </div>
        </div>
    );
}

export default StepsToGetStarted;
