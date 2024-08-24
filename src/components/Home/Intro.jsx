import truck from '../../assets/truck.gif'
import Increase from '../../assets/Increase.png'
import Schedule from '../../assets/Schedule.png'
import support from '../../assets/support.png'
import Transaction from '../../assets/Transaction.png'
const Intro = () => {
    return (
        <div className="partner-container">
            <div className="left-section">
                <div className="image-container">
                    <img src={truck} alt="Truck" />
                </div>
                <h2>Welcome to MyFastX Partner</h2>
                <h3>Quick & Reliable Delivery and Logistics Solution</h3>
                <p>
                    At MyFastX, we are revolutionizing the delivery and logistics industry by providing swift,
                    dependable services to our clients. Our mission is to ensure every package reaches its destination on time, every time.
                </p>
            </div>
            <div className="right-section">
                <div className="right-section-container-1">
                    <div className="pattern-div"></div>

                    <h2>Drive Your Success with MyFastX</h2>
                    <h3>Join Us as a Partner Driver</h3>
                    <p>
                        Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part of a dynamic
                        network of drivers. With us, you’ll enjoy flexible work hours, competitive earnings, and the satisfaction
                        of delivering smiles across the city.
                    </p>
                    <button className="register-button">Register now for just Rs. 999!</button>
                </div>
                <div className="features">
                    <div className="feature">
                        <img src={Transaction}/>
                        <h4>Reliable Income</h4>
                        <p>Earn a steady income with consistent delivery requests.</p>
                    </div>
                    <div className="feature">
                    <img src={Schedule}/>
                        <h4>Flexible Schedule</h4>
                        <p>Choose your working hours and balance your personal life.</p>
                    </div>
                    <div className="feature">
                    <img src={support}/>
                        <h4>Support</h4>
                        <p>Access our dedicated support team whenever you need assistance.</p>
                    </div>
                    <div className="feature">
                    <img src={Increase}/>
                        <h4>Growth Opportunities</h4>
                        <p>Advance your career with regular training and development programs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
