import React from 'react';
import Container from './style';

interface BannerProps {
  src: string;
  alt: string;
}

const Banner = ({ src, alt }: BannerProps) => (
  <Container className="banner">
    <img src={src} alt={`${alt} banner`} />
  </Container>
);

export default Banner;
