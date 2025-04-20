"use client"
import React from "react";

const Footer = () => {
  const email="ajinkyadeshmukh8686@getMaxListeners.com";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert('Email Copied ✅')
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
            <div  className="icon">
              <a target="_blank" href="https://github.com/Ajinkya-909">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.297 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.776.42-1.305.763-1.605-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.403c1.02.004 2.045.137 3.003.403 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.624-5.475 5.92.42.363.81 1.096.81 2.22v3.293c0 .317.21.693.825.576C20.565 22.09 24 17.59 24 12.297 24 5.67 18.627.297 12 .297Z"/>
          </svg>
              </a>
            </div>
            <div  className="icon">
              <a target="_blank" href="https://www.linkedin.com/in/ajinkya8686/">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M19 0H5C2.23858 0 0 2.23858 0 5V19C0 21.7614 2.23858 24 5 24H19C21.7614 24 24 21.7614 24 19V5C24 2.23858 21.7614 0 19 0ZM7.12 20H3.56V9H7.12V20ZM5.34 7.43C4.21 7.43 3.29 6.5 3.29 5.38C3.29 4.26 4.21 3.33 5.34 3.33C6.46 3.33 7.39 4.26 7.39 5.38C7.39 6.5 6.46 7.43 5.34 7.43ZM20.71 20H17.15V14.5C17.15 13.17 17.12 11.48 15.29 11.48C13.44 11.48 13.17 12.9 13.17 14.41V20H9.61V9H13V10.5H13.05C13.56 9.59 14.71 8.63 16.4 8.63C20.06 8.63 20.71 11.14 20.71 13.92V20Z"/>
          </svg>
              </a>
            </div>
            <div onClick={handleCopy} className="icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
          </svg>
            </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Ajinkya Deshmukh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;