"use client";

import React from "react";
import { motion } from "framer-motion";

// --- SHARED STYLES ---
// This ensures all logos have the exact same behavior and UI styles
// Note: stroke width and fill none are applied directly to the paths below for the outline effect.
const LOGO_CLASS = "w-full h-full text-[var(--foreground-muted)] transition-all duration-500 group-hover:text-[var(--primary)] group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(138,43,226,0.5)]";
const STROKE_WIDTH = "4"; // Adjust this value to make the outlinethicker or thinner

// 1. LOGO ONE (Outlined)
const CustomLogo = () => (
  <svg viewBox="0 0 300 300" className={LOGO_CLASS} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M151.36,151.2c-1.05,21.34-17.23,36.17-38.4,35.19c-20.71-0.96-35.95-17.63-34.77-38.02 c1.2-20.84,17.42-35.71,38.02-34.88C136.84,114.32,152.36,130.96,151.36,151.2z M130.13,164.05c-1.88-13.59-5.47-24.39-13.39-32.92 c-2.22-2.39-7.99-3.84-10.84-2.64c-2.87,1.21-5.91,6.32-5.78,9.59c0.47,11.58,4.72,22.28,12.74,30.73 c2.25,2.37,7.72,3.66,10.83,2.66C126.7,170.51,128.58,165.98,130.13,164.05z"/>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M246.5,144.86c0.48,9.61,4.07,15.96,11.68,19.08c7.67,3.14,15.14,2.5,21.66-3.62 c1.63-1.53,4.31-1.93,6.51-2.84c0.25,2.61,1.32,5.47,0.62,7.79c-3.8,12.51-13.8,20.41-26,21.13c-12.51,0.74-24.97-6.69-30.22-18.01 c-10.85-23.4,1.63-50.34,25.15-54.26c16.97-2.83,30.27,6.89,33.02,23.79c0.83,5.11-0.5,7.14-5.88,7.03 C271.15,144.69,259.27,144.86,246.5,144.86z M247.09,135.92c8.09,0,15.37,0,23.24,0c-0.67-6.84-3.93-10.84-10.03-11.29 C253.15,124.1,249.04,128.3,247.09,135.92z"/>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M148.85,115.86c15.31,0,28.44,0,41.93,0c0,2.94,0,5.46,0,8.48c-8.13,0.9-8.26,5.65-5.53,12 c3.25,7.58,6.14,15.3,9.95,24.87c4.05-10.9,7.93-19.89,10.5-29.25c0.63-2.31-3-5.78-4.67-8.72c-0.63,0.31-1.27,0.62-1.9,0.92 c0-2.54,0-5.08,0-8.17c9.74,0,19.18,0,28.87,0c0.55,4.53,2.13,8.54-4.14,10.76c-2.57,0.91-4.56,4.82-5.84,7.78 c-6.14,14.26-12.04,28.63-17.83,43.03c-1.88,4.68-3.95,7.58-9.99,7.42c-5.94-0.15-9.3-1.45-11.61-7.36 c-5.37-13.73-11.29-27.27-17.55-40.63c-1.97-4.2-6.04-7.37-8.6-11.36C150.86,123.16,150.33,120.03,148.85,115.86z"/>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M10.86,150.66c1.59-25.87,24.31-42.86,47.98-35.37c8.47,2.68,14.34,9.25,14.41,16.38 c0.05,5.42-1.89,9.7-7.68,11.04c-5.53,1.28-9.76-0.6-11.97-5.95c-2.1-5.07-3.55-10.78-11.02-9.36 c-7.78,1.48-10.03,7.39-10.93,14.18c-1.16,8.77,3.42,18.08,10.56,21.71c7.51,3.83,15.4,2.14,22.56-4.32c1.6-1.44,4.25-1.7,6.42-2.5 c0.37,2.39,1.47,4.94,0.99,7.14c-2.69,12.5-12.2,21.11-24.52,22.69c-11.96,1.54-24.64-4.63-30.35-16 C14.25,164.23,12.95,157.24,10.86,150.66z"/>
    </g>
  </svg>
);

// 2. LOGO TWO (Outlined)
const LogoOne = () => (
  <svg viewBox="0 0 300 300" className={LOGO_CLASS} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M31.27,132.72c13.53,0,22.84,7.47,25.85,19.92H42.09c-1.5-4.67-5.41-7.78-11.12-7.78 c-7.82,0-12.93,6.23-12.93,17.12c0,10.9,5.11,16.81,12.93,16.81c5.71,0,9.32-2.8,11.12-7.78h15.03 c-3.01,12.14-12.02,19.92-25.85,19.92c-15.93-0.31-27.05-11.52-27.05-29.26C4.21,143.93,15.33,132.72,31.27,132.72z"/>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M118.74,190h-13.83v-7.16c-3.31,4.67-9.32,7.78-16.23,7.78c-12.62,0-21.94-8.41-21.94-23.97v-33h13.83 v31.13c0,9.03,4.81,14.01,12.02,14.01c7.51,0,12.32-4.98,12.32-14.01v-31.13h13.83V190z"/>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M164.13,132.72c13.83,0,24.95,11.52,24.95,28.95s-11.12,29.26-24.95,29.26c-8.42,0-14.73-4.05-18.04-9.03 V190h-13.83v-75.65h13.83v27.4C149.4,136.77,156.01,132.72,164.13,132.72z M160.52,145.17c-7.51,0-14.43,5.92-14.43,16.81 s6.91,16.81,14.43,16.81c7.51,0,14.73-6.23,14.73-16.81C175.25,150.78,168.04,145.17,160.52,145.17z"/>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M213.12,133.65H199.3v56.66h13.83V133.65z"/>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M245.59,172.57L235.67,190h-14.73l17.73-28.33l-18.04-28.33h15.63l11.42,17.43l10.22-17.43h14.73 l-18.04,28.33L272.65,190h-15.93L245.59,172.57z"/>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M205.9,128.36c5.15,0,9.32-4.32,9.32-9.65c0-5.33-4.17-9.65-9.32-9.65c-5.15,0-9.32,4.32-9.32,9.65 C196.58,124.04,200.75,128.36,205.9,128.36z"/>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M286.47,189.38c5.15,0,9.32-4.32,9.32-9.65c0-5.33-4.17-9.65-9.32-9.65c-5.15,0-9.32,4.32-9.32,9.65 C277.15,185.06,281.32,189.38,286.47,189.38z"/>
    </g>
  </svg>
);

// 3. LOGO THREE (Outlined)
const LogoTwo = () => (
  <svg viewBox="0 0 300 300" className={LOGO_CLASS} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <rect id="SVGID_1_" y="126.99" width="300" height="46.02"/>
      <rect id="SVGID_3_" x="88.12" y="134.36" width="211.88" height="31.27"/>
    </defs>
    <clipPath id="SVGID_2_">
      <use href="#SVGID_1_" overflow="visible"/>
    </clipPath>
    <clipPath id="SVGID_4_">
      <use href="#SVGID_3_" overflow="visible"/>
    </clipPath>
    <g clipPath="url(#SVGID_2_)">
      <path fillRule="evenodd" clipRule="evenodd" fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M52.6,145.52c0.04,0.18,0.06,0.36,0.06,0.55 c0,1.48-1.19,2.69-2.65,2.69c-1.32,0-2.4-0.98-2.61-2.26l-8.63-2.03c-0.41,0.94-1.34,1.61-2.42,1.61c-0.83,0-1.56-0.39-2.04-1 L26,149.61c0.06,0.23,0.11,0.46,0.11,0.71c0,1.48-1.19,2.69-2.65,2.69c-1.39,0-2.52-1.1-2.63-2.48l-7.87-1.57 c-0.43,0.91-1.33,1.54-2.39,1.54c-0.75,0-1.42-0.32-1.9-0.82l-6.48,3.76l3.24,6.01l8.16,7.1l-0.52,6.47l8.05-5.73l8.36-2.65 l8.26-0.21l8.05-5.73l7.84,1.48l6.69-5.41l2.3-8.27l-3.65-5.28L52.6,145.52z"/>
      <path fillRule="evenodd" clipRule="evenodd" fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M7.97,148.32c-0.03-0.17-0.05-0.34-0.05-0.52 c0-1.48,1.19-2.69,2.65-2.69c1.34,0,2.44,1.02,2.62,2.34l7.95,1.59c0.45-0.83,1.31-1.41,2.32-1.41c0.67,0,1.28,0.27,1.75,0.69 l8.51-4.65c-0.01-0.09-0.03-0.18-0.03-0.28c0-1.48,1.19-2.69,2.65-2.69c1.31,0,2.4,0.98,2.61,2.25l8.63,2.03 c0.41-0.94,1.34-1.6,2.42-1.6c0.74,0,1.4,0.31,1.88,0.8l6.24-4.2l-1.14-1.64l-10.77-8.59l-12.76-2.76l-11.61,1.06l-13.07,5.2 l-5.54,6.15L0,149.36l1.48,2.73L7.97,148.32z"/>
      <g clipPath="url(#SVGID_4_)">
        <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M126.45,165.36h-8.54l-6.66-8.94c-0.85-1.16-3.09-3.8-5.9-3.8H94.57v12.75h-6.4v-30.59h6.4v12.16h10.02 c2.82,0,5.14-2.64,6.04-3.76l6.53-8.41h8.54l-9.57,11.09c-1.16,1.39-2.64,2.82-4.7,3.76c2.55,0.85,4.2,2.41,5.46,3.98 L126.45,165.36z M207.76,165.36v-30.59h26.56c7.51,0,12.16,3.4,12.16,9.53c0,4.29-2.28,6.93-6.26,8.09 c3.89,1.25,5.59,3.76,5.59,6.93v6.04h-6.62v-6.17c0-1.7-0.94-3.89-5.01-3.89h-20.03v10.06H207.76z M214.16,149.62h20.66 c3.94,0,5.14-2.59,5.14-4.61c0-2.01-1.21-4.61-5.14-4.61h-20.66V149.62z M287.27,140.81l12.57,24.55h-6.89l-3.89-7.56h-22.54 l-3.89,7.56h-6.84l12.52-24.55c1.92-3.8,4.25-6.48,9.48-6.48C283.02,134.32,285.3,137,287.27,140.81z M286.1,152.12 l-5.14-10.02c-0.67-1.3-1.52-2.1-3.17-2.1c-1.65,0-2.51,0.8-3.18,2.1l-5.19,10.02H286.1z"/>
        <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M164.84,140.81l12.57,24.55h-6.89l-3.89-7.56h-22.54l-3.89,7.56h-6.84l12.52-24.55 c1.92-3.8,4.25-6.48,9.48-6.48C160.59,134.32,162.87,137,164.84,140.81z M163.67,152.12l-5.14-10.02 c-0.67-1.3-1.52-2.1-3.18-2.1c-1.65,0-2.5,0.8-3.18,2.1l-5.19,10.02H163.67z M187.93,134.77h6.39v30.59h-6.39V134.77z"/>
      </g>
    </g>
  </svg>
);

// 4. LOGO FOUR (Outlined)
const LogoThree = () => (
  <svg viewBox="0 0 300 300" className={LOGO_CLASS} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M49.76,124.27c0,8.88-7.19,15.22-20.26,15.22c-9,0-16.96-3.22-22.94-9.48l4.11-5.65 c5.22,5.68,11.36,8.21,19.11,8.21c8.56,0,13.28-2.73,13.28-7.61c0-4.88-4.82-6.08-14.48-7.07c-10.6-1.07-20.59-3.97-20.59-13.49 c0-9.32,8.84-14.45,19.87-14.45c8.35,0,15.43,3,20.06,7.74l-4.19,5.49c-3.95-4.22-9.39-6.22-15.76-6.29 c-6.09,0-13.34,1.73-13.34,6.94c0,4.94,6.43,5.81,14.82,6.62C41.38,111.58,49.76,114.52,49.76,124.27z"/>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M111.09,91.36v46.73h-6.58V118H75.46v20.09h-6.58V91.36h6.58v19.43h29.05V91.36H111.09z"/>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M165,126.81h-24.65l-4.89,11.28h-7.14l20.8-46.73h7.25l20.75,46.73h-7.19L165,126.81z M162.08,120 l-9.38-21.63L143.31,120H162.08z"/>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M237.27,114.72c0,14.43-9.12,23.37-23.39,23.37h-19.46V91.36h19.49 C228.18,91.36,237.27,100.3,237.27,114.72z M230.51,114.72c0-10.81-7.03-16.35-17.13-16.35h-12.41v32.7h12.41 c10.13,0,17.16-5.53,17.16-16.36H230.51z"/>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M256.63,91.36l14.65,23.74l14.55-23.74h7.62l-18.88,30.57v16.16h-6.53v-16.16l-19.05-30.57H256.63z"/>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M255.84,204.39v-8.54h3.09c0.48-0.03,0.96,0.06,1.41,0.24c0.33,0.15,0.61,0.43,0.77,0.81 c0.2,0.4,0.31,0.86,0.29,1.32c0.01,0.56-0.16,1.11-0.48,1.52c-0.41,0.46-0.93,0.74-1.49,0.79c0.21,0.1,0.4,0.25,0.57,0.42 c0.29,0.33,0.55,0.71,0.76,1.12l1.23,2.3h-1.15l-0.92-1.76c-0.27-0.52-0.49-0.9-0.66-1.16c-0.13-0.22-0.29-0.41-0.47-0.57 c-0.13-0.1-0.27-0.18-0.42-0.22c-0.17-0.02-0.34-0.02-0.51,0h-1.09v3.72H255.84z M256.76,199.65h1.98 c0.34,0.01,0.67-0.04,0.99-0.16c0.22-0.09,0.41-0.27,0.54-0.5c0.12-0.23,0.18-0.5,0.18-0.77c0-0.19-0.03-0.37-0.09-0.54 c-0.06-0.17-0.15-0.32-0.26-0.45c-0.33-0.29-0.74-0.42-1.15-0.38h-2.18v2.81H256.76z"/>
      <g>
        <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M70.74,208.65l-13.45-18.75H36.71v18.75h-2.92v-46.73h25.21c8.56,0,14.27,5.2,14.27,13.95 c0,8.22-4.94,13.24-12.46,13.95l13.67,18.83H70.74z M58.83,186.67c7.07,0,11.53-3.8,11.53-10.81c0-7.01-4.5-10.75-11.53-10.75 H36.65v21.56H58.83z"/>
        <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M147.6,161.91l17.62,26.97l17.57-26.97h3.45l-19.65,30.18v16.56h-2.85v-16.56l-19.65-30.18H147.6z"/>
        <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M241.75,195.62c0,8.15-6.91,14.43-19.48,14.43c-8.89,0-16.86-3.4-21.85-10.02l2.09-2.46 c4.72,6.34,11.69,9.26,19.87,9.26c10.59,0,16.47-4.61,16.47-10.96c0-6.35-6.42-8.27-17.41-9.54 c-9.94-1.14-19.59-3.67-19.59-12.48c0-8.55,9.23-13.24,19.11-13.24c8.34,0,14.82,3.27,18.83,8.21l-2.25,2.28 c-3.84-5-9.67-7.15-16.47-7.21c-7.41-0.07-16.25,3.07-16.25,9.95c0,6.47,8.01,8.21,17.62,9.26 C233.85,184.21,241.75,186.89,241.75,195.62z"/>
        <path fillRule="evenodd" clipRule="evenodd" fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M259.02,192.18c1.25,0,2.48,0.45,3.52,1.3 c1.04,0.85,1.86,2.05,2.34,3.46c0.48,1.41,0.6,2.96,0.36,4.46c-0.25,1.5-0.85,2.87-1.74,3.95c-0.89,1.08-2.02,1.81-3.25,2.11 c-1.23,0.3-2.5,0.14-3.67-0.44c-1.16-0.58-2.15-1.57-2.85-2.84c-0.7-1.27-1.07-2.76-1.07-4.29c0-2.05,0.67-4.01,1.86-5.46 C255.72,192.99,257.34,192.18,259.02,192.18z M251.82,199.9c0,1.73,0.43,3.42,1.22,4.86c0.79,1.44,1.92,2.56,3.23,3.22 c1.31,0.66,2.76,0.83,4.15,0.49c1.4-0.34,2.67-1.17,3.68-2.4c1.01-1.22,1.69-2.78,1.96-4.48c0.28-1.7,0.13-3.45-0.41-5.05 c-0.55-1.6-1.47-2.96-2.65-3.92c-1.18-0.96-2.57-1.47-4-1.47c-0.95,0-1.88,0.23-2.76,0.67c-0.87,0.44-1.67,1.09-2.33,1.9 c-0.67,0.81-1.2,1.78-1.56,2.84C252.01,197.61,251.82,198.75,251.82,199.9z"/>
        <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M124.81,191.62l-12.19-26.51l12.17,26.51H124.81z"/>
        <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M100.5,191.62h0.14l11.98-26.51L100.5,191.62z"/>
        <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M114.27,161.91h-3.19l-21.51,46.73h3.18l19.87-43.53l12.19,26.51h-0.02l7.81,17.02h3.19L114.27,161.91z"/>
      </g>
    </g>
  </svg>
);

// 5. LOGO FIVE (Outlined)
const LogoFour = () => (
  <svg viewBox="0 0 300 300" className={LOGO_CLASS} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="none" stroke="currentColor" strokeWidth={STROKE_WIDTH} d="M155.47,43.77h-29.05V26.19l29.05,0L155.47,43.77L155.47,43.77z M155.48,56.81h-29.06v16.78h29.06V56.81 L155.48,56.81z M95.85,193.37v79.8h26.89v-79.8H95.85z M225.86,109.77h-19.61v79.96h19.61V109.77z M247.57,149.98l7.08-40.21 h-20.02l-6.18,41.03l8.25,38.93h21.4L247.57,149.98z M192.65,148c7.26-1.37,10.99-7.32,10.99-19.41s-8.18-18.82-16.52-18.82h-26.65 v79.96h18.77V127.2l3.65,0v62.53h19.71v-26.86C202.6,156.43,201.04,151.17,192.65,148z M44.27,162.91l10.9-32.54l-4.89-20.61H30.33 L44.27,162.91z M65.54,109.76l-26.72,79.95h19.74l27.67-79.95H65.54z M182.89,193.33v25.9h19.7v-25.9H182.89z M179.24,273.18 v-79.85h-52.82v25.91h24.46v53.94H179.24L179.24,273.18z M220.62,243.99l9.08-37.52l-3.61-13.14h-19.89L220.62,243.99z M236.37,193.33l-19.36,79.85h20.73l20.31-79.85H236.37z M126.42,88.54v17.62h33.04V88.54L126.42,88.54L126.42,88.54z M64.19,225.41h28.35v-5.39c0-14.44-12.05-26.91-28.35-26.91L64.19,225.41L64.19,225.41z M64.19,238.5v20.17h-3.65v-65.54 c-18.13,0-29.92,12.59-29.92,26.88v26.33c0,14.88,11.65,27.46,31.64,27.46c17.12,0,30.28-12.58,30.28-27.46v-7.84H64.19z M122.74,106.16V26.19l-32.17,0v79.96L122.74,106.16z M122.73,167.02c-1.65,0.5-3.43,0.76-5.31,0.76 c-10.12,0-17.32-7.68-17.32-17.8c0-10.12,7.2-17.8,17.32-17.8c1.88,0,3.66,0.26,5.31,0.76v-22.83c-1.74-0.22-3.5-0.35-5.31-0.35 c-22.5,0-40.21,17.72-40.21,40.21c0,22.5,17.72,40,40.21,40c1.8,0,3.57-0.12,5.31-0.34V167.02z M126.41,110.73v23.77 c5.19,3.01,8.43,8.7,8.43,15.48c0,6.79-3.24,12.47-8.43,15.48v23.57c18.1-3.92,31.33-19.62,31.33-39.05 S144.51,114.69,126.41,110.73z M66.53,26.2l0.03,38.35l-12.5-28.87v43.44l11.46,27.04H86.9V26.2H66.53z M30.64,26.2v79.96h19.77 V26.2H30.64z M238.72,60.48L228.18,26.2h-27.06l-13.18,56.41L181.1,26.2h-22.22l11.31,79.99l31.05-0.01l14.08-54.6l16.01,54.58 h0.26L238.72,60.48z M247.87,26.2l-12.65,79.96h20.03l14.42-79.96H247.87z M248.53,271.53h0.96c0.07,0.54,0.28,0.99,1.19,0.99 c0.59,0,1.02-0.33,1.02-0.83c0-0.5-0.25-0.68-1.12-0.83c-1.29-0.17-1.89-0.56-1.89-1.57c0-0.88,0.75-1.54,1.87-1.54 c1.16,0,1.85,0.52,1.95,1.56h-0.92c-0.1-0.56-0.42-0.8-1.04-0.8c-0.61,0-0.92,0.29-0.92,0.71c0,0.44,0.18,0.65,1.11,0.79 c1.26,0.17,1.92,0.53,1.92,1.61c0,0.93-0.79,1.66-1.98,1.66C249.22,273.27,248.61,272.54,248.53,271.53z M253.63,267.82h1.34 l1.41,3.66l1.38-3.66h1.32v5.37h-1v-4.06l-1.6,4.06h-0.32l-1.63-4.06v4.06h-0.9L253.63,267.82L253.63,267.82z"/>
    </g>
  </svg>
);

// --- DATA STRUCTURE ---
const CLIENTS = [
  { name: "Innovate", component: <CustomLogo /> },
  { name: "MongoDB", component: <LogoOne /> },
  { name: "Upwork", component: <LogoTwo /> },
  { name: "Standard", component: <LogoThree /> },
  { name: "Sponsor", component: <LogoFour /> },
];

const ClientLoo = () => {
  const marqueeList = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="w-full bg-[var(--background)] py-10 relative z-20 overflow-hidden">
      
      {/* 1. Subtle Top/Bottom Borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--border-color)] opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--border-color)] opacity-30" />

      {/* 2. Container */}
      <div className="max-w-[100vw] mx-auto">
        
        {/* Optional Header Text */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.3em] text-[var(--foreground-muted)] uppercase opacity-70">
            Trusted by Industry Leaders
          </p>
        </div>

        {/* 3. Marquee Area */}
        <div 
          className="relative flex overflow-hidden"
          // CSS Mask for edge fading
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          <motion.div
            className="flex items-center"
            animate={{ x: ["0%", "-33.33%"] }} 
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40, 
            }}
          >
            {marqueeList.map((client, index) => (
              <LogoItem key={index} client={client} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: Individual Logo Item ---
const LogoItem = ({ client }) => {
  return (
    <div className="group relative flex items-center justify-center px-12 sm:px-20 py-4">
      
      {/* The Logo Container */}
      <div className="flex flex-col items-center gap-3 transition-all duration-300">
        
        {/* LOGO SIZE INCREASED HERE (h-16 w-16 sm:h-24 sm:w-24) */}
        <div className="relative h-16 w-16 sm:h-24 sm:w-24">
          {client.component ? (
            // Render Custom Embedded SVG
            client.component
          ) : (
            // Render Default SVG Path (Fallback used if no component provided)
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={LOGO_CLASS}
            >
              <path d={client.path} />
            </svg>
          )}
        </div>

        {/* Company Name (Reveals on hover) */}
        <div className="absolute -bottom-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-[10px] uppercase tracking-widest text-[var(--foreground)] font-semibold">
            {client.name}
          </span>
        </div>
      </div>

      {/* Hover Effect: Subtle background glow behind the item */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
      
    </div>
  );
};

export default ClientLoo;