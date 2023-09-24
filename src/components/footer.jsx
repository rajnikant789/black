import React from 'react';
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si';

export default function Footer() {
  return (
    <div className="my-4 px-3 footer w-full justify-center md:justify-between flex-col md:flex-row">
      <div className="h-full flex flex-row items-center w-full justify-center">
        Made by
        <a
          target="_blank"
          href="#"
          className="link link-primary">
          Rajnikant 
        </a>
      </div>
    </div>
  );
}
