import React from 'react';
import styled, { css } from 'styled-components';
import wave from './wave.svg';
import computer from './computer.png';

const OuterFlexContainer = styled.div`
  max-width: 930px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const Logo = styled.svg`
  fill: #fff;
  width: 121px;
  padding-top: 22px;
  padding-bottom: 7px;
`;

const Wave = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const ContactForm = styled.div`
  display: flex;
  max-width: 564px;
  width: 100%;
`;

const Input = styled.input`
  margin: 5px;
  width: 100%;
  border-radius: 5px;
  font-size: 1em;
  padding: 1em;
  border: 0;
`;

const Button = styled.button`
  margin: 5px;
  display: inline-block;
  padding: 1.0625em 1.875em;
  border-radius: 5px;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.133;
  text-align: center;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  background-color: #212b35;
  color: #fff;
  border: 0;
  appearance: none;
  outline: 0;
  cursor: pointer;
  flex-shrink: 0;

  ${props =>
    props.footer &&
    css`
      background-color: #5c6ac4;
    `}
`;

const MarketingEmail = styled.p`
  font-size: 0.72em;
  max-width: 564px;
  padding: 0 10px;
  text-align: center;
  font-weight: 100;
  line-height: 1.7;
  margin-bottom: 29px;
`;

const BenefitGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: 37px;
  margin-top: 90px;

  & svg {
    grid-row: 1;
  }

  & h3 {
    color: #212b35;
    font-weight: 600;
    font-size: 1.12em;
    letter-spacing: -0.1px;
  }

  & p {
    color: #637381;
    line-height: 1.5;
    font-weight: 200;
  }
`;

const BenefitIcon = styled.svg`
  fill: #5c6ac4;
  width: 46px;
`;

const Testimonials = styled.h3`
  color: #212b35;
  font-size: 1.5em;
  font-weight: 500;
  text-align: center;
  padding: 0 125px;
  margin-top: 100px;
`;

const Johnny = styled.p`
  color: #454f5b;
  font-size: 0.875em;
  font-weight: bolder;
  margin-bottom: 55px;
`;

const Footer = styled.footer`
  margin-top: 120px;
  color: #5c6ac4;
  text-align: right;
  width: 100%;

  & a {
    text-decoration: none;
    color: #5c6ac4;
    padding: 0.75em;
    font-weight: 300;
    cursor: pointer;
  }
`;

function App() {
  return (
    <OuterFlexContainer>
      <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311.2 88.9">
        <path d="M107.6 49.3c-2.7-1.5-4.1-2.7-4.1-4.4 0-2.1 1.9-3.5 4.9-3.5 3.5 0 6.6 1.5 6.6 1.5l2.4-7.5s-2.2-1.8-8.9-1.8c-9.2 0-15.6 5.3-15.6 12.7 0 4.2 3 7.4 7 9.7 3.2 1.8 4.4 3.1 4.4 5 0 2-1.6 3.6-4.6 3.6-4.4 0-8.6-2.3-8.6-2.3l-2.6 7.5s3.9 2.6 10.4 2.6c9.5 0 16.3-4.7 16.3-13.1 0-4.4-3.5-7.6-7.6-10zM145.3 33.6c-4.7 0-8.3 2.2-11.2 5.6l-.2-.1 4.1-21.2h-10.5l-10.2 53.9h10.5l3.5-18.4c1.4-7 5-11.2 8.3-11.2 2.4 0 3.3 1.6 3.3 3.9 0 1.5-.2 3.2-.5 4.7l-4 21.1h10.5l4.1-21.8c.5-2.3.8-5 .8-6.9.2-6-2.9-9.6-8.5-9.6zM177.8 33.6c-12.7 0-21.1 11.5-21.1 24.2 0 8.2 5 14.8 14.5 14.8 12.5 0 20.9-11.2 20.9-24.2 0-7.6-4.4-14.8-14.3-14.8zm-5.2 30.9c-3.6 0-5.1-3.1-5.1-6.9 0-6 3.1-15.9 8.9-15.9 3.7 0 5 3.2 5 6.3-.1 6.5-3.2 16.5-8.8 16.5zM219.1 33.6c-7.1 0-11.2 6.3-11.2 6.3h-.2l.6-5.7H199c-.5 3.8-1.3 9.6-2.1 14l-7.3 38.6h10.5l2.9-15.6h.2s2.2 1.4 6.2 1.4c12.4 0 20.5-12.7 20.5-25.5.1-7.2-3.1-13.5-10.8-13.5zm-10.1 31c-2.7 0-4.4-1.5-4.4-1.5l1.8-9.9c1.2-6.6 4.7-10.9 8.3-10.9 3.2 0 4.2 3 4.2 5.8.1 6.8-4 16.5-9.9 16.5zM245 18.5c-3.4 0-6 2.7-6 6.1 0 3.1 2 5.3 5 5.3h.2c3.3 0 6.1-2.2 6.2-6.1-.1-3.1-2.2-5.3-5.4-5.3zM230.3 71.8h10.5l7.2-37.4h-10.6zM274.8 34.4h-7.3l.4-1.8c.6-3.6 2.8-6.8 6.3-6.8 1.9 0 3.4.5 3.4.5l2.1-8.3s-1.8-.9-5.7-.9c-3.7 0-7.5 1.1-10.3 3.5-3.6 3.1-5.3 7.5-6.1 11.9l-.3 1.8h-4.9l-1.5 7.9h4.9L250 71.8h10.5l5.6-29.5h7.3l1.4-7.9zM300.2 34.4s-6.6 16.6-9.6 25.7h-.2c-.2-2.9-2.6-25.7-2.6-25.7h-11.1l6.3 34.3c.2.8.1 1.2-.2 1.8-1.2 2.4-3.3 4.7-5.7 6.3-2 1.5-4.2 2.4-6 3l2.9 8.9c2.1-.5 6.6-2.2 10.3-5.7 4.8-4.5 9.2-11.5 13.8-20.9L311 34.4h-10.8z"></path>
        <g>
          <path d="M52.1 10.2s-1 .3-2.6.8c-.3-.9-.7-2-1.2-3-1.8-3.5-4.5-5.3-7.8-5.4h-.7l-.3-.3C38.1.8 36.3.1 34.1.1c-4.2.1-8.4 3.1-11.7 8.5-2.4 3.8-4.2 8.5-4.7 12.2-4.8 1.5-8.2 2.5-8.2 2.6-2.4.8-2.5.8-2.8 3.1C6.4 28.3 0 77.4 0 77.4l52.7 9.1V10.1c-.2 0-.5.1-.6.1zM39.9 14c-2.8.9-5.8 1.8-8.9 2.8.9-3.3 2.5-6.6 4.5-8.7.7-.8 1.8-1.7 3-2.2 1.2 2.3 1.4 5.8 1.4 8.1zM34.2 2.9c1 0 1.8.2 2.5.7-1.1.6-2.2 1.4-3.3 2.5-2.7 2.9-4.7 7.3-5.5 11.6-2.5.8-5 1.6-7.3 2.3 1.5-6.8 7.1-16.9 13.6-17.1zM26 41.3c.3 4.5 12.1 5.5 12.7 16 .5 8.3-4.4 13.9-11.5 14.4-8.5.5-13.2-4.5-13.2-4.5l1.8-7.6s4.7 3.5 8.5 3.3c2.5-.2 3.3-2.2 3.2-3.6-.4-5.8-10-5.5-10.6-15.1-.5-8.1 4.8-16.3 16.5-17 4.5-.3 6.8.9 6.8.9l-2.7 10s-3-1.4-6.5-1.1c-5 .2-5 3.4-5 4.3zm16.7-28.2c0-2.1-.3-5.1-1.3-7.6 3.2.6 4.7 4.2 5.4 6.3-1.2.4-2.6.8-4.1 1.3zM54.5 86.3l21.9-5.4S67 17.2 66.9 16.8c-.1-.4-.4-.7-.8-.7-.3 0-6.5-.1-6.5-.1s-3.8-3.6-5.2-5v75.3z"></path>
        </g>
      </Logo>
      <Wave src={wave} />
      <h1>Sell online with Shopify</h1>
      <h2>Trusted by over 800,000 businesses worldwide</h2>
      <ContactForm>
        <Input placeholder="Enter your email address" />
        <Button>Start free trial</Button>
      </ContactForm>
      <MarketingEmail>
        Try Shopify free for 14 days, no credit card required. By entering your
        email, you agree to receive marketing emails from Shopify.
      </MarketingEmail>
      <img src={computer} alt="" />
      <BenefitGrid>
        <BenefitIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
          <path
            d="M34.5,36 L33.5,36 C32.671,36 32,35.329 32,34.5 C32,33.671 32.671,33 33.5,33 L34.5,33 C35.329,33 36,33.671 36,34.5 C36,35.329 35.329,36 34.5,36 Z M38,9 L38,7 L7,7 L7,30 L15.829,30 C16.381,30 16.829,30.448 16.829,31 L16.829,32 L21,32 C21.552,32 22,32.448 22,33 L22,34 C22,34.552 21.552,35 21,35 L16.829,35 C15.523,35 14.412,34.165 14,33 L5,33 L5,37.5 C5,38.329 5.671,39 6.5,39 L21,39 C21.552,39 22,39.448 22,40 L22,41 C22,41.552 21.552,42 21,42 L6.5,42 C4.02,42 2,39.99 2,38 L2,32 C2,30.68 2.67,30 3.5,30 L4,30 L4,5.5 C4,4.671 4.671,4 5.5,4 L39.5,4 C40.329,4 41,4.671 41,5.5 L41,9 C41,9.552 40.552,10 40,10 L39,10 C38.448,10 38,9.552 38,9 Z M28,39 L40,39 L40,16 L28,16 L28,39 Z M40.5,42 L27.5,42 C26.122,42 25,40.878 25,39.5 L25,15.5 C25,14.122 26.122,13 27.5,13 L40.5,13 C41.878,13 43,14.122 43,15.5 L43,39.5 C43,40.878 41.878,42 40.5,42 Z"
            id="path-1"
          ></path>
        </BenefitIcon>
        <div>
          <h3>Beautiful themes that are responsive and customizable</h3>
          <p>
            No design skills needed. You have complete control over the look and
            feel of your website, from its layout, to content and colors.
          </p>
        </div>
        <BenefitIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
          <path d="M41,8H4a2,2,0,0,0-2,2V35a2,2,0,0,0,2,2H41a2,2,0,0,0,2-2V10A2,2,0,0,0,41,8ZM40,34H5V11H40ZM23,29c2.76,0,5-2.91,5-6.5S25.76,16,23,16s-5,2.91-5,6.5S20.24,29,23,29Zm0-10c.92,0,2,1.53,2,3.5S23.92,26,23,26s-2-1.53-2-3.5S22.08,19,23,19ZM7,15V14a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H8A1,1,0,0,1,7,15ZM33,31V30a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H34A1,1,0,0,1,33,31Z"></path>
        </BenefitIcon>
        <div>
          <h3>Pricing as low as $9/month</h3>
          <p>
            Whether you sell online, on social media, in store, or out of the
            trunk of your car, Shopify has you covered. Start selling anywhere
            for just $9/month.
          </p>
        </div>
        <BenefitIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
          <path d="M12.5 21A6.5 6.5 0 1 0 6 14.5a6.5 6.5 0 0 0 6.5 6.5zm0-10A3.5 3.5 0 1 1 9 14.5a3.5 3.5 0 0 1 3.5-3.5zM30 21a8 8 0 1 0-8-8 8 8 0 0 0 8 8zm0-13a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm13 25.5v4a1.5 1.5 0 0 1-3 0v-4c0-3.77-2.52-6.5-6-6.5h-7.5a6.51 6.51 0 0 0-6.5 6.5v4a1.5 1.5 0 0 1-3 0v-4a9.51 9.51 0 0 1 9.5-9.5H34c5.13 0 9 4.08 9 9.5zm-27-8a1.5 1.5 0 0 1-1.5 1.5h-4A5.51 5.51 0 0 0 5 32.5V36a1.5 1.5 0 0 1-3 0v-3.5a8.51 8.51 0 0 1 8.5-8.5h4a1.5 1.5 0 0 1 1.5 1.5z"></path>
        </BenefitIcon>
        <div>
          <h3>Trusted by over 800,000 businesses worldwide</h3>
          <p>
            Shopify handles everything from marketing and payments, to secure
            checkout and shipping
          </p>
        </div>
      </BenefitGrid>
      <Testimonials>
        “Shopify is better than any other platform we’ve played with, and we’ve
        played with them all.”
      </Testimonials>
      <Johnny>JONATHON BAYME, CEO OF THEORY11</Johnny>
      <Button footer>Start free trial</Button>
      <Footer>
        <a href="/legal/terms">Terms of Service</a>
        <a href="/legal/privacy">Privacy Policy</a>
      </Footer>
    </OuterFlexContainer>
  );
}

export default App;
