"use client";

import React from "react";
import { motion } from "framer-motion";

// Defined explicitly to handle the sizing of the new logos
const LOGO_WRAPPER_CLASS = "relative h-12 w-32 sm:h-16 sm:w-48 flex items-center justify-center";

// 1. THE VERGE (Original: Black -> Var: Base)
const LogoVerge = () => (
  <svg viewBox="0 0 152 40" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path d="M151.922 15.3376C151.922 15.9542 151.922 16.5708 151.845 17.1873H128.32C128.397 23.5071 132.625 28.7479 139.544 28.7479C143.28 28.7479 145.842 27.2358 147.327 24.9754C147.798 24.2583 148.554 23.7383 149.412 23.7383C150.681 23.7383 151.685 24.8258 151.42 26.0675C150.172 31.9098 145.766 40.0003 135.47 40.0003C125.398 40.0003 117.787 32.062 117.787 20.5784C117.787 7.5535 126.936 0.0776367 136.392 0.0776367C145.695 0.0776367 151.615 6.24329 151.922 15.3376ZM141.697 12.486C141.62 9.09491 139.544 5.93501 135.547 5.93501C132.01 5.93501 129.165 8.55541 128.627 12.486H141.697Z" className="fill-[var(--logo-base)] transition-colors duration-300"/>
    <path d="M118.655 1.15625V6.31999C115.195 6.39706 114.042 8.47797 112.658 11.7149L101.357 38.9209H93.1304L81.3676 11.8691C79.9069 8.47797 78.8306 6.39706 75.6016 6.31999V1.15625H98.2046V6.31999H96.8207C94.8218 6.31999 93.9761 7.16776 93.9761 8.63211C93.9761 9.55696 94.2836 10.7901 94.8218 12.1774L100.28 26.2042L105.816 11.8691C106.277 10.6359 106.585 9.47988 106.585 8.63211C106.585 7.09069 105.739 6.31999 103.894 6.31999H102.356V1.15625H118.655Z" className="fill-[var(--logo-base)] transition-colors duration-300"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M36.1353 20.0384C36.1353 32.3697 45.7454 39.9997 56.355 39.9997C66.8876 39.9997 76.4978 32.3697 76.4978 20.0384C76.4978 7.63 66.8876 0 56.355 0C45.7454 0 36.1353 7.63 36.1353 20.0384ZM61.2685 32.2608C65.4759 30.5609 65.3201 25.2231 62.2748 17.6459C59.1722 9.92582 55.5795 6.14273 51.4434 7.81382C47.1647 9.54253 47.3918 14.8516 50.4371 22.4287C53.5397 30.1488 57.0611 33.9607 61.2685 32.2608Z" className="fill-[var(--logo-base)] transition-colors duration-300"/>
    <path d="M17.6057 40.0003C7.22681 40.0003 0 31.2142 0 20.5014C0 7.93885 8.91819 0.0776367 19.5278 0.0776367C28.8304 0.0776367 33.6739 5.31844 33.6739 10.4051C33.6739 13.7192 31.4443 16.3396 27.754 16.3396C25.0632 16.3396 23.4487 14.5669 22.6799 12.7172C22.2955 11.7924 22.1417 11.0987 21.7573 10.0198C21.1423 8.40127 19.7584 7.32228 17.7595 7.32228C13.9155 7.32228 10.6865 10.5593 10.6865 16.4166C10.6865 23.1218 14.7611 28.5938 21.5267 28.5938C25.3314 28.5938 27.8809 26.7587 29.1751 24.5588C29.6541 23.7445 30.4673 23.1218 31.4121 23.1218C32.6788 23.1218 33.6921 24.1947 33.4866 25.4446C32.2416 33.0161 27.2355 40.0003 17.6057 40.0003Z" className="fill-[var(--logo-base)] transition-colors duration-300"/>
  </svg>
);

// 2. MONGODB (Original: Black + Green -> Var: Base + MongoGreen)
const LogoMongoDB = () => (
  <svg viewBox="0 0 106 31" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Text parts use Base (Black/White) */}
    <path d="M10.5573 9.47266C15.4234 9.47266 18.7755 12.1605 19.8569 16.6402H14.4502C13.9095 14.9603 12.5037 13.8404 10.4492 13.8404C7.63767 13.8404 5.79939 16.0802 5.79939 20C5.79939 23.9197 7.63767 26.0475 10.4492 26.0475C12.5037 26.0475 13.8013 25.0396 14.4502 23.2477H19.8569C18.7755 27.6154 15.5315 30.4153 10.5573 30.4153C4.82618 30.3033 0.825195 26.2715 0.825195 19.888C0.825195 13.5044 4.82618 9.47266 10.5573 9.47266Z" className="fill-[var(--logo-base)] transition-colors duration-300"/>
    <path d="M42.0247 30.0792H37.0505V27.5034C35.861 29.1833 33.6983 30.3032 31.2112 30.3032C26.6696 30.3032 23.3174 27.2794 23.3174 21.6798V9.80859H28.2916V21.0078C28.2916 24.2556 30.0217 26.0475 32.617 26.0475C35.3203 26.0475 37.0505 24.2556 37.0505 21.0078V9.80859H42.0247V30.0792Z" className="fill-[var(--logo-base)] transition-colors duration-300"/>
    <path d="M58.3539 9.47279C63.3281 9.47279 67.329 13.6165 67.329 19.8881C67.329 26.1597 63.3281 30.4154 58.3539 30.4154C55.3261 30.4154 53.0553 28.9595 51.8658 27.1676V30.0794H46.8916V2.86523H51.8658V12.7206C53.0553 10.9287 55.4342 9.47279 58.3539 9.47279ZM57.0563 13.9525C54.3529 13.9525 51.8658 16.0804 51.8658 20.0001C51.8658 23.9198 54.3529 26.0477 57.0563 26.0477C59.7596 26.0477 62.3549 23.8078 62.3549 20.0001C62.3549 15.9684 59.7596 13.9525 57.0563 13.9525Z" className="fill-[var(--logo-base)] transition-colors duration-300"/>
    <path d="M75.9791 9.80859H71.0049V30.1912H75.9791V9.80859Z" className="fill-[var(--logo-base)] transition-colors duration-300"/>
    <path d="M87.6597 23.8073L84.0913 30.0789H78.7927L85.1726 19.8876L78.6846 9.69629H84.3076L88.4167 15.9679L92.0933 9.69629H97.3919L90.9038 19.8876L97.3919 30.0789H91.6607L87.6597 23.8073Z" className="fill-[var(--logo-base)] transition-colors duration-300"/>
    <path d="M73.3805 7.90545C75.2318 7.90545 76.7327 6.35109 76.7327 4.43368C76.7327 2.51628 75.2318 0.961914 73.3805 0.961914C71.5291 0.961914 70.0283 2.51628 70.0283 4.43368C70.0283 6.35109 71.5291 7.90545 73.3805 7.90545Z" className="fill-[var(--logo-base)] transition-colors duration-300"/>
    {/* Leaf part uses MongoGreen (Green/White) */}
    <path d="M102.365 29.8556C104.216 29.8556 105.717 28.3013 105.717 26.3839C105.717 24.4665 104.216 22.9121 102.365 22.9121C100.514 22.9121 99.0127 24.4665 99.0127 26.3839C99.0127 28.3013 100.514 29.8556 102.365 29.8556Z" className="fill-[var(--logo-mongo-green)] transition-colors duration-300"/>
  </svg>
);

// 3. UPWORK (Original: Dark Grey + Green -> Var: Base + UpworkGreen)
const LogoUpwork = () => (
  <svg viewBox="0 0 178 28" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="clip0_2447_6_upwork">
        <rect width="177.097" height="27.1657" fill="white" transform="translate(0 0.634521)"/>
      </clipPath>
      <clipPath id="clip1_2447_6_upwork">
        <rect width="125.075" height="18.4613" fill="white" transform="translate(52.0215 4.98682)"/>
      </clipPath>
    </defs>
    <g clipPath="url(#clip0_2447_6_upwork)">
      <path fillRule="evenodd" clipRule="evenodd" d="M31.0488 11.5722C31.0699 11.6762 31.0816 11.7842 31.0816 11.8948C31.0816 12.7695 30.3796 13.481 29.517 13.481C28.7405 13.481 28.0993 12.9029 27.9779 12.1494L22.8836 10.9525C22.6406 11.5101 22.092 11.9018 21.453 11.9018C20.9647 11.9018 20.5332 11.6687 20.246 11.312L15.3497 13.9852C15.3861 14.1196 15.4118 14.2579 15.4118 14.4036C15.4118 15.2782 14.7101 15.9901 13.8472 15.9901C13.0254 15.9901 12.3572 15.3423 12.2947 14.5248L7.64976 13.5952C7.39802 14.1302 6.86367 14.5033 6.24142 14.5033C5.8015 14.5033 5.4049 14.317 5.12031 14.0196L1.2959 16.2417L3.21022 19.7882L8.02518 23.9819L7.71647 27.8002L12.4696 24.4201L17.4075 22.8553L22.2841 22.7302L27.0371 19.3501L31.6668 20.2264L35.6173 17.0341L36.9754 12.1521L34.8198 9.0354L31.0488 11.5722Z" className="fill-[var(--logo-base)] transition-colors duration-300"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.70749 13.2261C4.68795 13.1258 4.67688 13.0228 4.67688 12.9168C4.67688 12.0418 5.37859 11.3299 6.24116 11.3299C7.03371 11.3299 7.6833 11.9328 7.78494 12.7087L12.4794 13.6484C12.7454 13.1558 13.255 12.8167 13.847 12.8167C14.2453 12.8167 14.6054 12.9732 14.8818 13.2225L19.9045 10.48C19.899 10.4248 19.8882 10.3714 19.8882 10.3149C19.8882 9.43992 20.5899 8.72802 21.4529 8.72802C22.2287 8.72802 22.8696 9.30522 22.9917 10.0577L28.0873 11.2553C28.3305 10.6986 28.8789 10.3079 29.5168 10.3079C29.9508 10.3079 30.3439 10.4889 30.6275 10.7795L34.3119 8.30107L33.6417 7.33201L27.2837 2.26201L19.7531 0.634521L12.9014 1.26055L5.18517 4.32732L1.91367 7.95803L0 13.8416L0.871032 15.4552L4.70749 13.2261Z" className="fill-[var(--logo-upwork-green)] transition-colors duration-300"/>
      <g clipPath="url(#clip1_2447_6_upwork)">
        <path d="M74.6477 23.2832H69.6054L65.6718 18.0033C65.1702 17.3169 63.8502 15.7593 62.1871 15.7593H55.8248V23.2832H52.0496V5.22588H55.8248V12.4066H61.7383C63.4015 12.4066 64.7742 10.849 65.3022 10.189L69.1566 5.22588H74.1989L68.5494 11.773C67.863 12.5914 66.9918 13.4362 65.7774 13.9905C67.2822 14.4921 68.259 15.4161 68.9982 16.3401L74.6477 23.2832ZM122.647 23.2832V5.22588H138.328C142.763 5.22588 145.509 7.23225 145.509 10.849C145.509 13.3834 144.163 14.9409 141.813 15.6273C144.11 16.3665 145.113 17.8449 145.113 19.7193V23.2832H141.206V19.6401C141.206 18.6369 140.651 17.3433 138.249 17.3433H126.422V23.2832H122.647ZM126.422 13.9905H138.619C140.942 13.9905 141.655 12.4594 141.655 11.2714C141.655 10.0834 140.942 8.55223 138.619 8.55223H126.422V13.9905ZM169.58 8.78982L176.999 23.2832H172.933L170.636 18.8217H157.331L155.034 23.2832H150.995L158.387 8.78982C159.522 6.54586 160.895 4.96188 163.984 4.96188C167.072 4.96188 168.419 6.54586 169.58 8.78982ZM168.894 15.4689L165.858 9.55541C165.462 8.78982 164.961 8.31463 163.984 8.31463C163.007 8.31463 162.505 8.78982 162.109 9.55541L159.047 15.4689H168.894Z" className="fill-[var(--logo-base)] transition-colors duration-300"/>
        <path d="M97.3074 8.78982L104.726 23.2832H100.66L98.3634 18.8217H85.058L82.7612 23.2832H78.7221L86.114 8.78982C87.2492 6.54586 88.6219 4.96188 91.7107 4.96188C94.7994 4.96188 96.1458 6.54586 97.3074 8.78982ZM96.621 15.4689L93.5851 9.55541C93.1891 8.78982 92.6875 8.31463 91.7107 8.31463C90.7339 8.31463 90.2323 8.78982 89.8363 9.55541L86.774 15.4689H96.621ZM110.939 5.22588H114.714V23.2832H110.939V5.22588Z" className="fill-[#25841F] transition-colors duration-300"/>
      </g>
    </g>
  </svg>
);

// 4. THE STANDARD (Original: Black -> Var: Base)
const LogoStandard = () => (
  <svg viewBox="0 0 193 16" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path className="fill-[var(--logo-base)] transition-colors duration-300" d="M15.5072 10.8182C15.5072 13.4392 12.9252 15.3102 8.23403 15.3102C5.0037 15.3102 2.14835 14.3611 0 12.5135L1.4765 10.8456C3.35142 12.5213 5.55446 13.2674 8.33559 13.2674C11.4097 13.2674 13.101 12.4627 13.101 11.0214C13.101 9.58002 11.3706 9.22847 7.90202 8.93551C4.09749 8.61912 0.511697 7.76368 0.511697 4.95521C0.511697 2.20532 3.68344 0.689758 7.64421 0.689758C10.6402 0.689758 13.183 1.57644 14.8431 2.97482L13.3393 4.59585C11.9214 3.3498 9.96834 2.75999 7.68327 2.74045C5.49587 2.74045 2.89441 3.25215 2.89441 4.78724C2.89441 6.24422 5.20291 6.50202 8.2145 6.74029C12.4995 7.07231 15.5072 7.93946 15.5072 10.8182Z"></path>
    <path className="fill-[var(--logo-base)] transition-colors duration-300" d="M37.5189 1.10382V14.8962H35.1557V8.96678H24.7304V14.8962H22.3672V1.10382H24.7304V6.83796H35.1557V1.10382H37.5189Z"></path>
    <path className="fill-[var(--logo-base)] transition-colors duration-300" d="M56.8686 11.5682H48.0213L46.2675 14.8962H43.7051L51.1696 1.10382H53.7711L61.22 14.8962H58.6381L56.8686 11.5682ZM55.8218 9.5566L52.4547 3.17405L49.0838 9.5566H55.8218Z"></path>
    <path className="fill-[var(--logo-base)] transition-colors duration-300" d="M82.8099 7.99807C82.8099 12.2557 79.5366 14.8962 74.4157 14.8962H67.4316V1.10382H74.4274C79.5483 1.10382 82.8099 3.74434 82.8099 7.99807ZM80.3842 7.99807C80.3842 4.80679 77.8609 3.17405 74.236 3.17405H69.7831V12.826H74.236C77.8726 12.826 80.3959 11.1932 80.3959 7.99807H80.3842Z"></path>
    <path className="fill-[var(--logo-base)] transition-colors duration-300" d="M89.7577 1.10382L95.0153 8.11134L100.238 1.10382H102.972L96.1949 10.1269V14.8962H93.8513V10.1269L87.0156 1.10382H89.7577Z"></path>
    <path className="fill-[var(--logo-base)] transition-colors duration-300" d="M122.839 14.8962L118.011 9.36129H110.625V14.8962H109.578V1.10382H118.625C121.699 1.10382 123.746 2.63891 123.746 5.22084C123.746 7.64652 121.972 9.12693 119.273 9.33785L124.179 14.8962H122.839ZM118.566 8.41211C121.105 8.41211 122.703 7.29106 122.703 5.22084C122.703 3.15061 121.089 2.04909 118.566 2.04909H110.605V8.41211H118.566Z"></path>
    <path className="fill-[var(--logo-base)] transition-colors duration-300" d="M150.428 1.10382L156.752 9.06443L163.06 1.10382H164.298L157.244 10.0097V14.8962H156.22V10.0097L149.166 1.10382H150.428Z"></path>
    <path className="fill-[var(--logo-base)] transition-colors duration-300" d="M184.22 11.0526C184.22 13.4588 181.74 15.3102 177.228 15.3102C174.037 15.3102 171.178 14.3064 169.385 12.3533L170.135 11.6268C171.83 13.4978 174.33 14.3611 177.267 14.3611C181.068 14.3611 183.177 13.0017 183.177 11.1268C183.177 9.2519 180.873 8.68552 176.927 8.31054C173.361 7.97461 169.896 7.22855 169.896 4.6271C169.896 2.10376 173.209 0.721008 176.756 0.721008C179.748 0.721008 182.076 1.68581 183.513 3.14278L182.705 3.81463C181.326 2.33813 179.236 1.70534 176.795 1.68581C174.135 1.66628 170.963 2.59202 170.963 4.62319C170.963 6.53327 173.838 7.04496 177.287 7.35745C181.384 7.68556 184.22 8.47459 184.22 11.0526Z"></path>
    <path className="fill-[var(--logo-base)] transition-colors duration-300" d="M190.418 10.0369C190.868 10.0369 191.309 10.1705 191.683 10.4207C192.058 10.6709 192.349 11.0266 192.522 11.4427C192.694 11.8588 192.739 12.3167 192.651 12.7584C192.563 13.2002 192.347 13.6059 192.028 13.9244C191.71 14.2429 191.304 14.4598 190.862 14.5477C190.42 14.6355 189.963 14.5904 189.546 14.4181C189.13 14.2457 188.775 13.9538 188.524 13.5793C188.274 13.2048 188.141 12.7646 188.141 12.3142C188.141 11.7102 188.381 11.131 188.808 10.7039C189.235 10.2768 189.814 10.0369 190.418 10.0369ZM187.836 12.3142C187.837 12.8247 187.989 13.3235 188.273 13.7475C188.557 14.1716 188.961 14.5019 189.433 14.6968C189.904 14.8916 190.423 14.9422 190.924 14.8421C191.425 14.742 191.884 14.4958 192.245 14.1346C192.606 13.7733 192.851 13.3133 192.95 12.8125C193.05 12.3118 192.998 11.7929 192.803 11.3213C192.607 10.8497 192.276 10.4467 191.852 10.1632C191.427 9.87966 190.928 9.72833 190.418 9.72833C190.078 9.72833 189.742 9.79525 189.429 9.92524C189.115 10.0552 188.831 10.2458 188.591 10.4859C188.351 10.7261 188.161 11.0112 188.031 11.3249C187.902 11.6386 187.835 11.9748 187.836 12.3142Z" clipRule="evenodd" fillRule="evenodd"></path>
    <path className="fill-[var(--logo-base)] transition-colors duration-300" d="M189.444 13.5797V11.0603H190.554C190.726 11.0528 190.898 11.0766 191.061 11.1306C191.18 11.1735 191.279 11.2583 191.339 11.3689C191.412 11.4858 191.449 11.6217 191.444 11.7595C191.448 11.926 191.387 12.0874 191.272 12.2087C191.125 12.3443 190.937 12.4267 190.737 12.4431C190.811 12.4733 190.88 12.5156 190.94 12.5681C191.045 12.6669 191.137 12.7784 191.214 12.9001L191.655 13.5797H191.241L190.909 13.0602C190.811 12.9079 190.733 12.7946 190.671 12.7165C190.624 12.6519 190.567 12.5952 190.503 12.5485C190.456 12.5183 190.405 12.4959 190.351 12.4821C190.289 12.4766 190.228 12.4766 190.167 12.4821H189.776V13.5797H189.444ZM189.776 12.1814H190.487C190.608 12.1858 190.728 12.17 190.843 12.1345C190.922 12.1073 190.991 12.0552 191.038 11.9861C191.081 11.9183 191.104 11.8398 191.104 11.7595C191.105 11.7043 191.094 11.6497 191.071 11.5992C191.049 11.5487 191.016 11.5035 190.976 11.4665C190.856 11.3817 190.711 11.3416 190.565 11.3533H189.784V12.1814H189.776Z"></path>
    <path className="fill-[var(--logo-base)] transition-colors duration-300" d="M142.249 9.87303L137.874 2.04913L142.241 9.87303H142.249Z"></path>
    <path className="fill-[var(--logo-base)] transition-colors duration-300" d="M133.523 9.87303H133.574L137.875 2.04913L133.523 9.87303Z"></path>
    <path className="fill-[var(--logo-base)] transition-colors duration-300" d="M138.466 1.10382H137.322L129.6 14.8962H130.74L137.873 2.04909L142.248 9.87299H142.24L145.044 14.8962H146.189L138.466 1.10382Z"></path>
  </svg>
);

// 5. POLITICO (Original: Red -> Var: Accent)
const LogoPolitico = () => (
  <svg viewBox="0 0 3285.73 489.92" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <text transform="translate(0 376.82)" className="text-[438.73px] fill-[var(--logo-politico-red)] transition-colors duration-300 font-semibold" style={{ fontFamily: 'Optika-SemiBold, Optika, sans-serif' }}>
      <tspan x="0" y="0" style={{ letterSpacing: '-.02em' }}>PO</tspan>
      <tspan x="707.57" y="0" style={{ letterSpacing: '0em' }}>L</tspan>
      <tspan x="1021.19" y="0" style={{ letterSpacing: '-.1em' }}>I</tspan>
      <tspan x="1098.1" y="0" style={{ letterSpacing: '-.05em' }}>T</tspan>
      <tspan x="1403.36" y="0" style={{ letterSpacing: '0em' }}>I</tspan>
      <tspan x="1523.11" y="0" style={{ letterSpacing: '-.05em' }}>C</tspan>
      <tspan x="1855.8" y="0" style={{ letterSpacing: '0em' }}>O</tspan>
      <tspan x="2254.04" y="0" style={{ letterSpacing: '-.02em', fontFamily: 'Optika-Regular, Optika, sans-serif', fontWeight: 'normal' }}>P</tspan>
      <tspan x="2567.23" y="0" style={{ fontFamily: 'Optika-Regular, Optika, sans-serif', fontWeight: 'normal' }}>RO</tspan>
    </text>
  </svg>
);

// --- DATA STRUCTURE ---
const CLIENTS = [
  { name: "The Verge", component: <LogoVerge /> },
  { name: "MongoDB", component: <LogoMongoDB /> },
  { name: "Upwork", component: <LogoUpwork /> },
  { name: "The Standard", component: <LogoStandard /> },
  { name: "Politico", component: <LogoPolitico /> },
];

const ClientLoo = () => {
  // Duplicating the list to ensure seamless infinite scrolling
  const marqueeList = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    // UPDATED: Background uses variable
    <section className="w-full bg-[var(--background)] py-10 relative z-20 overflow-hidden transition-colors duration-300">
      
      {/* 1. Subtle Top/Bottom Borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--border-color)] opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--border-color)] opacity-30" />

      {/* 2. Container */}
      <div className="max-w-[100vw] mx-auto">
        
        {/* Optional Header Text */}
        <div className="text-center mb-10">
          {/* UPDATED: Text color */}
          <p className="text-xs font-bold tracking-[0.3em] text-[var(--foreground-muted)] uppercase opacity-70">
            Trusted by Industry Leaders
          </p>
          
          {/* DIAGRAM TRIGGER: Visualizing partner ecosystem */}
          
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
    <div className="group relative flex items-center justify-center px-8 sm:px-12 py-4">
      
      {/* The Logo Container */}
      <div className="flex flex-col items-center gap-3 transition-all duration-300">
        
        {/* Logo render */}
        <div className={LOGO_WRAPPER_CLASS}>
          {client.component}
        </div>

        {/* Company Name (Reveals on hover) */}
        <div className="absolute -bottom-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {/* UPDATED: Text Color */}
          <span className="text-[10px] uppercase tracking-widest text-[var(--foreground)] font-semibold">
            {client.name}
          </span>
        </div>
      </div>

      {/* Hover Effect: Subtle background glow behind the item */}
      {/* UPDATED: Glow color uses primary variable */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
      
    </div>
  );
};

export default ClientLoo;