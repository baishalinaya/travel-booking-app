import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import image from "../assests/img1.avif";
import img2 from "../assests/img2.jpg";
import img3 from "../assests/img3.webp";
import img4 from "../assests/img4.webp";
import banner from "../assests/banner1.webp";
import NavBar from "./NavBar";
import Footer from "./Footer";

function HomePage() {
  const navigate = useNavigate();
  const contactSectionRef = useRef(null);
  const handleStartBooking = () => navigate("/booking");
  const handleTravelPackageBrowsing = () => navigate("/booking");
  const handleSecurity = () => navigate("/secure");
  const handleUpdates = () => navigate("/update");
  const handleScrollToContact = () =>
    contactSectionRef.current.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    if (window.location.hash === "#contact") {
      contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="homepage"
        style={{
          height: '100vh',
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${herobg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <h1 className="heading">Welcome to <span>Tripify</span> ✈️
        </h1>
        <div className="card-container">
          <div
            className="card c1"
            style={{
              backgroundImage: `url(${packagesImage})`,
            }}
            onClick={handleAllPackages}
          >
            <h2>Explore Packages</h2>
            <p>Browse through our wide range of travel packages and make your trip memorable!</p>
          </div>
          <div
            className="card c2"
            style={{
              backgroundImage: `url(${cartImage})`,
            }}
            onClick={handleViewBookingHistory}
          >
            <h2>Your Bookings</h2>
            <p>View the travel packages you have booked.</p>
          </div>
        </div>
      </div>
=======
      <Container>
          <AnimationOverlay>
        <IntroContainer>
      <span className="title">Tripify</span>
      <span className="airplane">&#9992;</span>
    </IntroContainer>
    </AnimationOverlay>   
      <NavBar />
            <Content>
              <MainHeading>Say Hi to <span>Tripify</span>! </MainHeading>
              <Description>Book and manage your travel effortlessly✈️</Description>
              <StartButton onClick={handleStartBooking}>Start Booking</StartButton>
            </Content>
            <MainContent>
              <TextSection>
                <SmallHeading>Explore With Ease</SmallHeading>
                <ContentHeading>Your journey starts here</ContentHeading>
                <ExtendedDescription>
                Discover a world of convenience and endless possibilities with
                our travel booking platform, your ultimate partner in crafting
                memorable journeys. Whether you're planning a quick weekend
                getaway to recharge, a much-anticipated family vacation filled
                with fun and bonding, or a seamless business trip to keep you
                ahead of your schedule, we've got you covered. Our platform is
                designed to take the stress out of planning, offering you a
                hassle-free experience that allows you to focus on what truly
                matters – enjoying the journey and the destination. Let us take
                care of the details while you embrace the joy of exploring the
                world.
                </ExtendedDescription>
                <ContactLink onClick={handleScrollToContact}>Get in touch</ContactLink>
              </TextSection>
              <ImageSection>
                <StyledImage src={image} alt="Travel" />
              </ImageSection>
            </MainContent>
            <PackagesSection>
              <Heading>Explore Travel Packages</Heading>
              <SubHeading>Browse and book your perfect getaway.</SubHeading>
              <CardContainer>
                <Card onClick={handleTravelPackageBrowsing}>
                  <CardImage src={img2} alt="Travel package browsing" />
                  <CardContent>
                    <CardTitle>
                      Travel package browsing <Arrow>&gt;</Arrow>
                    </CardTitle>
                    <CardDescription>
                      Explore a variety of travel packages tailored to your needs.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card onClick={handleSecurity}>
                  <CardImage src={img3} alt="Secure travel management" />
                  <CardContent>
                    <CardTitle>
                      Secure travel management <Arrow>&gt;</Arrow>
                    </CardTitle>
                    <CardDescription>
                      Easily manage your travel bookings with top-notch security.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card onClick={handleUpdates}>
                  <CardImage src={img4} alt="Real-Time updates" />
                  <CardContent>
                    <CardTitle>
                      Real-Time updates <Arrow>&gt;</Arrow>
                    </CardTitle>
                    <CardDescription>
                      Receive instant updates on your travel plans and
                      itineraries.
                    </CardDescription>
                  </CardContent>
                </Card>
              </CardContainer>
            </PackagesSection>

            {/* Contact Section */}
            <ContactSection ref={contactSectionRef}>
            <FormWrapper>
              <ContactHeading>Get in touch</ContactHeading>
              <FormSubHeading>We’re here to assist you with your travels!</FormSubHeading>
              <Form>
                <InputLabel>
                  Name <Required>*</Required>
                  <Input type="text" placeholder="Jane Smith" required />
                </InputLabel>
                <InputLabel>
                  Email address <Required>*</Required>
                  <Input type="email" placeholder="email@website.com" required />
                </InputLabel>
                <InputLabel>
                  Phone number <Required>*</Required>
                  <Input type="tel" placeholder="555-555-5555" required />
                </InputLabel>
                <InputLabel>
                  Message
                  <Textarea rows="4" placeholder="Your message here" />
                </InputLabel>
                <CheckboxWrapper>
                  <Checkbox type="checkbox" />
                  <CheckboxLabel>
                    I allow this website to store my submission so they can respond to my inquiry.{" "}
                    <Required>*</Required>
                  </CheckboxLabel>
                </CheckboxWrapper>
                <SubmitButton type="submit">Submit</SubmitButton>
              </Form>
            </FormWrapper>
            <ContactInfo>
              <InfoHeading>Get in touch</InfoHeading>
              <InfoItem>📧 support@tripify.com</InfoItem>
              <InfoItem>📍 123 Travel Lane, Wanderlust City</InfoItem>
              <InfoHours>
                <strong>Hours</strong>
                <p>Monday: 9:00am – 10:00pm</p>
                <p>Tuesday: 9:00am – 10:00pm</p>
                <p>Wednesday: 9:00am – 10:00pm</p>
                <p>Thursday: 9:00am – 10:00pm</p>
                <p>Friday: 9:00am – 10:00pm</p>
                <p>Saturday: 9:00am – 6:00pm</p>
                <p>Sunday: 9:00am – 12:00pm</p>
              </InfoHours>
            </ContactInfo>
            </ContactSection>
      </Container>
      
      <Footer/>
    </div>
  );
}

export default HomePage;
// Styled Components (unchanged except for `AnimationContainer`)

const AnimationOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11; /* Ensures it stays above other components */
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, teal, rgb(50, 169, 199));
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeOut 3s ease-out forwards; /* Smooth fade-out animation */
@keyframes fadeOut{
 0%{
    opacity: 1;
  }
    80%{
    opacity:1;}
  100% {
    opacity: 0;
    display:none;
  }
}
  `;

const IntroContainer = styled.div`
  text-align: center;
  font-family: "Arial", sans-serif;

  .title {
    font-size: 4rem;
    font-weight: bold;
    color: white;
    font-family: "Lemon";
    display: inline-block;
        animation: titleAirplaneSync 2s ease-in-out forwards;
  }

  .airplane {
    position: absolute;
    font-size: 7rem;
    color: white;
    animation: airplaneMotion 3s ease-in-out forwards;
  }

  @keyframes airplaneMotion {
    0% {
      top: 210%;
      left: 0%;
      transform: rotate(-45deg);
    }
    100% {
      top: -40%;
      left: 85%;
      transform: rotate(-45deg);
    }
  }
     @keyframes titleAirplaneSync {
    0% {
      font-size: 4rem;
    }
    25% {
      font-size: 3.8rem;
    }
    75% {
      font-size: 3.8rem;
    }
    100% {
      font-size: 4rem;
    }
  }
`;

// Other existing styled components remain unchanged
const FormWrapper = styled.div`
  flex: 1;
  max-width: 700px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ContactHeading = styled.h3`
  color: teal;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FormSubHeading = styled.h2`
  font-size: 2rem;
  color: #212529;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #212529;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 90%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const Checkbox = styled.input`
  margin-top: 4px;
`;

const CheckboxLabel = styled.span`
  font-size: 0.9rem;
  color: #212529;
`;

const SubmitButton = styled.button`
  background:teal;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background:rgb(25, 99, 109);
  }
`;

const Required = styled.span`
  color: red;
`;

const ContactInfo = styled.div`
  flex: 1;
  max-width: 400px;
  padding: 20px;
  background-color:teal;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const InfoHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color:yellow;
`;

const InfoItem = styled.p`
  font-size: 1rem;
  color:rgb(154, 227, 227);
  margin-bottom: 10px;
  line-height: 1.5;
`;
const InfoHours = styled.div`
  font-size: 1rem;
  color:rgb(255, 255, 255);
  margin-top: 20px;

  p {
    margin: 5px 0; /* Adds spacing between each line */
  }

  strong {
    font-weight: bold; /* Highlights the "Hours" label */
    display: block;
    margin-bottom: 10px;
  }
`;


const ContactSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 60px;
  gap: 200px;
  flex-wrap: wrap;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top:70px;
  background:#f0f8ff;
`;

const Content = styled.div`
  text-align: center;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.78), /* Start with semi-transparent black */
      rgba(0, 0, 0, 0.41) /* End with more opaque black */
    ),
    url(${banner});
  height: 600px;
  padding-bottom: 70px;
  background-size: cover;
  background-position: center; /* Adjust the vertical position upward */
  width: 100%;
  color: white; /* Adjust text color for readability */
`;



const MainHeading = styled.h1`
  font-size: 50px;
  color:rgb(255, 255, 255);
  font-weight: 600;
  margin-top:60px;
  margin-bottom: 35px;
  span{
  font-family:"lemon";
  color:white;}
`;

const Description = styled.p`
  font-size: 25px;
  font-weight: 600;
  color:rgba(255, 255, 255, 0.67);
  margin-bottom: 38px;
  padding-bottom:60px;
  transition: all 0.1s ease-in;
  &:hover{
  color:rgb(255, 255, 255);}
`;

const StartButton = styled.button`
  background:teal;
  color: white;
  padding: 15px 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background:rgb(4, 68, 72);
    color:rgb(214, 225, 0);
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextSection = styled.div`
  flex: 1;
  margin-right: 50px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const SmallHeading = styled.h3`
  color: teal;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ContentHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color:rgb(26, 79, 92);
  margin-bottom: 20px;
`;

const ExtendedDescription = styled.p`
  font-size: 20px;
  color: #495057;
  line-height: 1.8;
  margin-bottom: 30px;
`;

const ContactLink = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color:teal;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const StyledImage = styled.img`
  width: 508px;
  height: 338px;
  border-radius: 8px;
`;

const PackagesSection = styled.div`
  padding: 60px 20px;
  text-align: center;
`;

const Heading = styled.h3`
  font-size: 1.2rem;
  color:teal;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  color: rgb(26, 79, 92);
  font-weight: 600;
  margin-bottom: 40px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);

    h3 {
      color:rgb(25, 87, 99);
    }
  }
`;

const CardImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  color: #212529;
  font-weight: bold;
  margin-bottom: 10px;
  transition: color 0.3s ease;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #495057;
  line-height: 1.5;
`;

const Arrow = styled.span`
  font-size: 1.2;
`;
