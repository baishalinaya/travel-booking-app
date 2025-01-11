import React from 'react';
import styled from 'styled-components';
import Navbar from './NavBar';
import Footer from './Footer';

const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  background: #1e3c72;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  /* Background GIF styling */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://media.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif') no-repeat center center;
    background-size: cover;
    z-index: -1;
    filter: blur(8px) brightness(0.7);
  }
`;

const AboutUs = () => {
  return (
    <PageContainer>
      <Navbar />
      <Container>
        <AbouUsContainer>
          <h1>About Us</h1>
          <p>
            Welcome to <strong>Tripify</strong>, your trusted partner in exploring the world!
          </p>

          <p>
            We believe that every journey tells a story, and our mission is to make your travel dreams come true with
            ease, affordability, and convenience. Whether you’re planning a weekend getaway, a family vacation, or an
            adventure of a lifetime, we’re here to help you every step of the way.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Comprehensive Options</strong>: Browse thousands of destinations, flights, hotels, and travel
              packages tailored to your preferences.
            </li>
            <li>
              <strong>Best Deals Guaranteed</strong>: We partner with top providers to ensure you get unbeatable prices
              and exclusive offers.
            </li>
            <li>
              <strong>User-Friendly Experience</strong>: With our seamless booking process and intuitive platform,
              planning your trip has never been easier.
            </li>
            <li>
              <strong>24/7 Support</strong>: Our dedicated customer service team is always ready to assist you, ensuring
              your travel experience is stress-free from start to finish.
            </li>
          </ul>

          <p>
            At <strong>Tripify</strong>, we’re passionate about helping you discover new places, create unforgettable
            memories, and explore the beauty of the world.
          </p>

          <p>Start planning your next adventure with us today and let’s turn your travel aspirations into reality!</p>
        </AbouUsContainer>
      </Container>
      <Footer />
    </PageContainer>
  );
};

export default AboutUs;

const Container = styled.div`
  margin: 20px 0;
  margin-top: 80px;
  background: rgba(0, 128, 128, 0.8);
  border-radius: 30px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.21);
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;

const AbouUsContainer = styled.div`
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 2.5rem;
    color: white;
    margin: 20px 0;
  }

  p {
    color: rgb(218, 243, 245);
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  p strong {
    font-family: 'Lemon', cursive;
    color: yellow;
  }

  ul {
    text-align: left;
    padding-left: 20px;
    margin: 20px auto;
    color: rgb(218, 243, 245);
    font-size: 1.1rem;
    line-height: 1.8;
    max-width: 600px;
  }

  ul li {
    margin-bottom: 10px;
  }

  ul strong {
    color: yellow;
  }
`;
