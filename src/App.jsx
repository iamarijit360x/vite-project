import Navbar from './components/Navbar';
import './App.css'
import Intro from './components/Home/Intro';
import StepsToGetStarted from './components/Home/StepsToGetStarted';
import Jeep from './assets/Jeep.png'
import Account from './assets/Account.png'
import User from './assets/User.png'
import Testimonials from './components/Home/Testimonials';
import JoinUsPage from './components/Home/JoinUsPage';
import Contacts from './components/Home/Contacts';
import Footer from './components/Footer';

export default function App() {
  const stepsData = [
    {
        title: 'Register Online',
        description: 'Fill out our easy online application form and pay the registration fee of Rs. 999',
        icon: User, // Replace with the correct path
    },
    {
        title: 'Get Verified',
        description: 'Complete the verification process to ensure you meet our standards.',
        icon: Account, // Replace with the correct path
    },
    {
        title: 'Start Driving',
        description: 'Once approved, start accepting delivery requests and earn money.',
        icon: Jeep, // Replace with the correct path
    },
];

    return(
      <>
       <Navbar/>
        <Intro/>
        <StepsToGetStarted steps={stepsData} />
        <Testimonials/>
        <Contacts/>
        <JoinUsPage/>
        <Footer/>
      </>
       
    )
}