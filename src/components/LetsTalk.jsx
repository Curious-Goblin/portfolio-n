// Contact.js

import { FaEnvelope, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <div id='contact' className="hidden md:block w-full text-white text-center px-36 pt-44">
                <div className='border border-gray-700 rounded-2xl bg-workColor py-24'>
                    <h2 className="text-5xl font-bold mb-10">Let's Talk!</h2>
                    <p className="text-xl text-textColor mb-12 w-full max-w-2xl mx-auto">
                        Interested in working together or have a question? Feel free to reach out.
                        I'm here to help you turn your ideas into amazing digital realities.
                        Looking forward to hearing from you soon!
                    </p>
                    <div className="flex justify-center items-center space-x-4">
                        <a href='mailto:naveen1043.me@gmail.com'>
                            <svg width="278" height="48" viewBox="0 0 278 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="0.5" width="276" height="47" rx="7.5" fill="#0A0A0A"/>
                                <rect x="1" y="0.5" width="276" height="47" rx="7.5" stroke="#3B3B3B"/>
                                <path d="M36.5 16H20.5C19.4 16 18.51 16.9 18.51 18L18.5 30C18.5 31.1 19.4 32 20.5 32H36.5C37.6 32 38.5 31.1 38.5 30V18C38.5 16.9 37.6 16 36.5 16ZM36.5 20L28.5 25L20.5 20V18L28.5 23L36.5 18V20Z" fill="white"/>
                                <path d="M51.0682 24.75V30H49.7273V21.2727H51.0227V22.6364H51.1364C51.3409 22.1932 51.6515 21.8371 52.0682 21.5682C52.4848 21.2955 53.0227 21.1591 53.6818 21.1591C54.2727 21.1591 54.7898 21.2803 55.233 21.5227C55.6761 21.7614 56.0208 22.125 56.267 22.6136C56.5133 23.0985 56.6364 23.7121 56.6364 24.4545V30H55.2955V24.5455C55.2955 23.8598 55.1174 23.3258 54.7614 22.9432C54.4053 22.5568 53.9167 22.3636 53.2955 22.3636C52.8674 22.3636 52.4848 22.4564 52.1477 22.642C51.8144 22.8277 51.5511 23.0985 51.358 23.4545C51.1648 23.8106 51.0682 24.2424 51.0682 24.75ZM61.6548 30.2045C61.1018 30.2045 60.5999 30.1004 60.1491 29.892C59.6984 29.6799 59.3404 29.375 59.0753 28.9773C58.8101 28.5758 58.6776 28.0909 58.6776 27.5227C58.6776 27.0227 58.776 26.6174 58.973 26.3068C59.17 25.9924 59.4332 25.7462 59.7628 25.5682C60.0923 25.3902 60.456 25.2576 60.8537 25.1705C61.2552 25.0795 61.6586 25.0076 62.0639 24.9545C62.5942 24.8864 63.0241 24.8352 63.3537 24.8011C63.687 24.7633 63.9295 24.7008 64.081 24.6136C64.2363 24.5265 64.3139 24.375 64.3139 24.1591V24.1136C64.3139 23.553 64.1605 23.1174 63.8537 22.8068C63.5507 22.4962 63.0904 22.3409 62.473 22.3409C61.8329 22.3409 61.331 22.4811 60.9673 22.7614C60.6037 23.0417 60.348 23.3409 60.2003 23.6591L58.9276 23.2045C59.1548 22.6742 59.4579 22.2614 59.8366 21.9659C60.2192 21.6667 60.6359 21.4583 61.0866 21.3409C61.5412 21.2197 61.9882 21.1591 62.4276 21.1591C62.7079 21.1591 63.0298 21.1932 63.3935 21.2614C63.7609 21.3258 64.1151 21.4602 64.456 21.6648C64.8007 21.8693 65.0866 22.178 65.3139 22.5909C65.5412 23.0038 65.6548 23.5568 65.6548 24.25V30H64.3139V28.8182H64.2457C64.1548 29.0076 64.0033 29.2102 63.7912 29.4261C63.5791 29.642 63.2969 29.8258 62.9446 29.9773C62.5923 30.1288 62.1624 30.2045 61.6548 30.2045ZM61.8594 29C62.3897 29 62.8366 28.8958 63.2003 28.6875C63.5677 28.4792 63.8442 28.2102 64.0298 27.8807C64.2192 27.5511 64.3139 27.2045 64.3139 26.8409V25.6136C64.2571 25.6818 64.1321 25.7443 63.9389 25.8011C63.7495 25.8542 63.5298 25.9015 63.2798 25.9432C63.0336 25.9811 62.7931 26.0152 62.5582 26.0455C62.3272 26.072 62.1397 26.0947 61.9957 26.1136C61.6473 26.1591 61.3215 26.233 61.0185 26.3352C60.7192 26.4337 60.4768 26.5833 60.2912 26.7841C60.1094 26.9811 60.0185 27.25 60.0185 27.5909C60.0185 28.0568 60.1908 28.4091 60.5355 28.6477C60.884 28.8826 61.3253 29 61.8594 29ZM74.9261 21.2727L71.6989 30H70.3352L67.108 21.2727H68.5625L70.9716 28.2273H71.0625L73.4716 21.2727H74.9261ZM80.0426 30.1818C79.2017 30.1818 78.4763 29.9962 77.8665 29.625C77.2604 29.25 76.7926 28.7273 76.4631 28.0568C76.1373 27.3826 75.9744 26.5985 75.9744 25.7045C75.9744 24.8106 76.1373 24.0227 76.4631 23.3409C76.7926 22.6553 77.2509 22.1212 77.8381 21.7386C78.429 21.3523 79.1184 21.1591 79.9062 21.1591C80.3608 21.1591 80.8097 21.2348 81.2528 21.3864C81.696 21.5379 82.0994 21.7841 82.4631 22.125C82.8267 22.4621 83.1165 22.9091 83.3324 23.4659C83.5483 24.0227 83.6562 24.7083 83.6562 25.5227V26.0909H76.929V24.9318H82.2926C82.2926 24.4394 82.1941 24 81.9972 23.6136C81.804 23.2273 81.5275 22.9223 81.1676 22.6989C80.8116 22.4754 80.3911 22.3636 79.9062 22.3636C79.3722 22.3636 78.91 22.4962 78.5199 22.7614C78.1335 23.0227 77.8362 23.3636 77.6278 23.7841C77.4195 24.2045 77.3153 24.6553 77.3153 25.1364V25.9091C77.3153 26.5682 77.429 27.1269 77.6562 27.5852C77.8873 28.0398 78.2074 28.3864 78.6165 28.625C79.0256 28.8598 79.5009 28.9773 80.0426 28.9773C80.3949 28.9773 80.7131 28.928 80.9972 28.8295C81.285 28.7273 81.5331 28.5758 81.7415 28.375C81.9498 28.1705 82.1108 27.9167 82.2244 27.6136L83.5199 27.9773C83.3835 28.4167 83.1544 28.803 82.8324 29.1364C82.5104 29.4659 82.1127 29.7235 81.6392 29.9091C81.1657 30.0909 80.6335 30.1818 80.0426 30.1818ZM89.3551 30.1818C88.5142 30.1818 87.7888 29.9962 87.179 29.625C86.5729 29.25 86.1051 28.7273 85.7756 28.0568C85.4498 27.3826 85.2869 26.5985 85.2869 25.7045C85.2869 24.8106 85.4498 24.0227 85.7756 23.3409C86.1051 22.6553 86.5634 22.1212 87.1506 21.7386C87.7415 21.3523 88.4309 21.1591 89.2188 21.1591C89.6733 21.1591 90.1222 21.2348 90.5653 21.3864C91.0085 21.5379 91.4119 21.7841 91.7756 22.125C92.1392 22.4621 92.429 22.9091 92.6449 23.4659C92.8608 24.0227 92.9688 24.7083 92.9688 25.5227V26.0909H86.2415V24.9318H91.6051C91.6051 24.4394 91.5066 24 91.3097 23.6136C91.1165 23.2273 90.84 22.9223 90.4801 22.6989C90.1241 22.4754 89.7036 22.3636 89.2188 22.3636C88.6847 22.3636 88.2225 22.4962 87.8324 22.7614C87.446 23.0227 87.1487 23.3636 86.9403 23.7841C86.732 24.2045 86.6278 24.6553 86.6278 25.1364V25.9091C86.6278 26.5682 86.7415 27.1269 86.9688 27.5852C87.1998 28.0398 87.5199 28.3864 87.929 28.625C88.3381 28.8598 88.8134 28.9773 89.3551 28.9773C89.7074 28.9773 90.0256 28.928 90.3097 28.8295C90.5975 28.7273 90.8456 28.5758 91.054 28.375C91.2623 28.1705 91.4233 27.9167 91.5369 27.6136L92.8324 27.9773C92.696 28.4167 92.4669 28.803 92.1449 29.1364C91.8229 29.4659 91.4252 29.7235 90.9517 29.9091C90.4782 30.0909 89.946 30.1818 89.3551 30.1818ZM96.3494 24.75V30H95.0085V21.2727H96.304V22.6364H96.4176C96.6222 22.1932 96.9328 21.8371 97.3494 21.5682C97.7661 21.2955 98.304 21.1591 98.9631 21.1591C99.554 21.1591 100.071 21.2803 100.514 21.5227C100.957 21.7614 101.302 22.125 101.548 22.6136C101.795 23.0985 101.918 23.7121 101.918 24.4545V30H100.577V24.5455C100.577 23.8598 100.399 23.3258 100.043 22.9432C99.6866 22.5568 99.1979 22.3636 98.5767 22.3636C98.1487 22.3636 97.7661 22.4564 97.429 22.642C97.0956 22.8277 96.8324 23.0985 96.6392 23.4545C96.446 23.8106 96.3494 24.2424 96.3494 24.75ZM107.795 18.3636V30H106.386V19.8409H106.318L103.477 21.7273V20.2955L106.386 18.3636H107.795ZM114.938 30.1591C114.081 30.1591 113.352 29.9261 112.75 29.4602C112.148 28.9905 111.688 28.3106 111.369 27.4205C111.051 26.5265 110.892 25.447 110.892 24.1818C110.892 22.9242 111.051 21.8504 111.369 20.9602C111.691 20.0663 112.153 19.3845 112.756 18.9148C113.362 18.4413 114.089 18.2045 114.938 18.2045C115.786 18.2045 116.511 18.4413 117.114 18.9148C117.72 19.3845 118.182 20.0663 118.5 20.9602C118.822 21.8504 118.983 22.9242 118.983 24.1818C118.983 25.447 118.824 26.5265 118.506 27.4205C118.188 28.3106 117.727 28.9905 117.125 29.4602C116.523 29.9261 115.794 30.1591 114.938 30.1591ZM114.938 28.9091C115.786 28.9091 116.445 28.5 116.915 27.6818C117.384 26.8636 117.619 25.697 117.619 24.1818C117.619 23.1742 117.511 22.3163 117.295 21.608C117.083 20.8996 116.777 20.3598 116.375 19.9886C115.977 19.6174 115.498 19.4318 114.938 19.4318C114.097 19.4318 113.439 19.8466 112.966 20.6761C112.492 21.5019 112.256 22.6705 112.256 24.1818C112.256 25.1894 112.362 26.0455 112.574 26.75C112.786 27.4545 113.091 27.9905 113.489 28.358C113.89 28.7254 114.373 28.9091 114.938 28.9091ZM120.869 27.6136V26.4545L125.983 18.3636H126.824V20.1591H126.256L122.392 26.2727V26.3636H129.278V27.6136H120.869ZM126.347 30V27.2614V26.7216V18.3636H127.688V30H126.347ZM135.339 30.1591C134.589 30.1591 133.921 30.0303 133.334 29.7727C132.75 29.5152 132.286 29.1572 131.942 28.6989C131.601 28.2367 131.415 27.7008 131.385 27.0909H132.817C132.847 27.4659 132.976 27.7898 133.203 28.0625C133.43 28.3314 133.728 28.5398 134.095 28.6875C134.463 28.8352 134.87 28.9091 135.317 28.9091C135.817 28.9091 136.26 28.822 136.646 28.6477C137.033 28.4735 137.336 28.2311 137.555 27.9205C137.775 27.6098 137.885 27.25 137.885 26.8409C137.885 26.4129 137.779 26.036 137.567 25.7102C137.355 25.3807 137.044 25.1231 136.635 24.9375C136.226 24.7519 135.726 24.6591 135.135 24.6591H134.203V23.4091H135.135C135.597 23.4091 136.002 23.3258 136.351 23.1591C136.703 22.9924 136.978 22.7576 137.175 22.4545C137.375 22.1515 137.476 21.7955 137.476 21.3864C137.476 20.9924 137.389 20.6496 137.214 20.358C137.04 20.0663 136.794 19.839 136.476 19.6761C136.161 19.5133 135.79 19.4318 135.362 19.4318C134.961 19.4318 134.582 19.5057 134.226 19.6534C133.874 19.7973 133.586 20.0076 133.362 20.2841C133.139 20.5568 133.018 20.8864 132.999 21.2727H131.635C131.658 20.6629 131.841 20.1288 132.186 19.6705C132.531 19.2083 132.982 18.8485 133.538 18.5909C134.099 18.3333 134.714 18.2045 135.385 18.2045C136.105 18.2045 136.722 18.3504 137.237 18.642C137.752 18.9299 138.148 19.3106 138.425 19.7841C138.701 20.2576 138.839 20.7689 138.839 21.3182C138.839 21.9735 138.667 22.5322 138.322 22.9943C137.982 23.4564 137.518 23.7765 136.93 23.9545V24.0455C137.665 24.1667 138.239 24.4792 138.652 24.983C139.065 25.483 139.271 26.1023 139.271 26.8409C139.271 27.4735 139.099 28.0417 138.754 28.5455C138.413 29.0455 137.947 29.4394 137.357 29.7273C136.766 30.0152 136.093 30.1591 135.339 30.1591ZM142.236 30.0909C141.955 30.0909 141.715 29.9905 141.514 29.7898C141.313 29.589 141.213 29.3485 141.213 29.0682C141.213 28.7879 141.313 28.5473 141.514 28.3466C141.715 28.1458 141.955 28.0455 142.236 28.0455C142.516 28.0455 142.757 28.1458 142.957 28.3466C143.158 28.5473 143.259 28.7879 143.259 29.0682C143.259 29.2538 143.211 29.4242 143.116 29.5795C143.026 29.7348 142.902 29.8598 142.747 29.9545C142.596 30.0455 142.425 30.0909 142.236 30.0909ZM145.665 30V21.2727H146.96V22.6364H147.074C147.256 22.1705 147.549 21.8087 147.955 21.5511C148.36 21.2898 148.847 21.1591 149.415 21.1591C149.991 21.1591 150.47 21.2898 150.852 21.5511C151.239 21.8087 151.54 22.1705 151.756 22.6364H151.847C152.07 22.1856 152.405 21.8277 152.852 21.5625C153.299 21.2936 153.835 21.1591 154.46 21.1591C155.241 21.1591 155.879 21.4034 156.375 21.892C156.871 22.3769 157.119 23.1326 157.119 24.1591V30H155.778V24.1591C155.778 23.5152 155.602 23.0549 155.25 22.7784C154.898 22.5019 154.483 22.3636 154.006 22.3636C153.392 22.3636 152.917 22.5492 152.58 22.9205C152.242 23.2879 152.074 23.7538 152.074 24.3182V30H150.71V24.0227C150.71 23.5265 150.549 23.1269 150.227 22.8239C149.905 22.517 149.491 22.3636 148.983 22.3636C148.634 22.3636 148.309 22.4564 148.006 22.642C147.706 22.8277 147.464 23.0852 147.278 23.4148C147.097 23.7405 147.006 24.1174 147.006 24.5455V30H145.665ZM163.23 30.1818C162.389 30.1818 161.664 29.9962 161.054 29.625C160.448 29.25 159.98 28.7273 159.651 28.0568C159.325 27.3826 159.162 26.5985 159.162 25.7045C159.162 24.8106 159.325 24.0227 159.651 23.3409C159.98 22.6553 160.438 22.1212 161.026 21.7386C161.616 21.3523 162.306 21.1591 163.094 21.1591C163.548 21.1591 163.997 21.2348 164.44 21.3864C164.884 21.5379 165.287 21.7841 165.651 22.125C166.014 22.4621 166.304 22.9091 166.52 23.4659C166.736 24.0227 166.844 24.7083 166.844 25.5227V26.0909H160.116V24.9318H165.48C165.48 24.4394 165.382 24 165.185 23.6136C164.991 23.2273 164.715 22.9223 164.355 22.6989C163.999 22.4754 163.579 22.3636 163.094 22.3636C162.56 22.3636 162.098 22.4962 161.707 22.7614C161.321 23.0227 161.024 23.3636 160.815 23.7841C160.607 24.2045 160.503 24.6553 160.503 25.1364V25.9091C160.503 26.5682 160.616 27.1269 160.844 27.5852C161.075 28.0398 161.395 28.3864 161.804 28.625C162.213 28.8598 162.688 28.9773 163.23 28.9773C163.582 28.9773 163.901 28.928 164.185 28.8295C164.473 28.7273 164.721 28.5758 164.929 28.375C165.137 28.1705 165.298 27.9167 165.412 27.6136L166.707 27.9773C166.571 28.4167 166.342 28.803 166.02 29.1364C165.698 29.4659 165.3 29.7235 164.827 29.9091C164.353 30.0909 163.821 30.1818 163.23 30.1818ZM175.588 33.0682C174.429 33.0682 173.404 32.9091 172.514 32.5909C171.624 32.2765 170.876 31.8125 170.27 31.1989C169.664 30.5852 169.205 29.8333 168.895 28.9432C168.584 28.053 168.429 27.0341 168.429 25.8864C168.429 24.7765 168.586 23.7841 168.901 22.9091C169.219 22.0341 169.679 21.2917 170.281 20.6818C170.887 20.0682 171.622 19.6004 172.486 19.2784C173.353 18.9564 174.334 18.7955 175.429 18.7955C176.493 18.7955 177.425 18.9697 178.224 19.3182C179.027 19.6629 179.698 20.1307 180.236 20.7216C180.777 21.3087 181.183 21.9697 181.452 22.7045C181.724 23.4394 181.861 24.197 181.861 24.9773C181.861 25.5265 181.834 26.0833 181.781 26.6477C181.728 27.2121 181.616 27.7311 181.446 28.2045C181.276 28.6742 181.012 29.053 180.656 29.3409C180.304 29.6288 179.827 29.7727 179.224 29.7727C178.959 29.7727 178.668 29.7311 178.349 29.6477C178.031 29.5644 177.749 29.4261 177.503 29.233C177.257 29.0398 177.111 28.7803 177.065 28.4545H176.997C176.906 28.6742 176.766 28.8826 176.577 29.0795C176.391 29.2765 176.147 29.4337 175.844 29.5511C175.545 29.6686 175.179 29.7197 174.747 29.7045C174.255 29.6856 173.821 29.5758 173.446 29.375C173.071 29.1705 172.757 28.8939 172.503 28.5455C172.253 28.1932 172.063 27.786 171.935 27.3239C171.81 26.858 171.747 26.3561 171.747 25.8182C171.747 25.3068 171.823 24.839 171.974 24.4148C172.126 23.9905 172.336 23.6193 172.605 23.3011C172.878 22.983 173.196 22.7292 173.56 22.5398C173.927 22.3466 174.323 22.2273 174.747 22.1818C175.126 22.1439 175.471 22.161 175.781 22.233C176.092 22.3011 176.348 22.4053 176.548 22.5455C176.749 22.6818 176.876 22.8333 176.929 23H176.997V22.3636H178.202V27.5C178.202 27.8182 178.291 28.0985 178.469 28.3409C178.647 28.5833 178.906 28.7045 179.247 28.7045C179.634 28.7045 179.929 28.572 180.134 28.3068C180.342 28.0417 180.484 27.6326 180.56 27.0795C180.639 26.5265 180.679 25.8182 180.679 24.9545C180.679 24.447 180.609 23.947 180.469 23.4545C180.332 22.9583 180.124 22.4943 179.844 22.0625C179.567 21.6307 179.217 21.25 178.793 20.9205C178.368 20.5909 177.87 20.3333 177.298 20.1477C176.73 19.9583 176.084 19.8636 175.361 19.8636C174.471 19.8636 173.673 20.0019 172.969 20.2784C172.268 20.5511 171.671 20.9508 171.179 21.4773C170.69 22 170.317 22.6364 170.06 23.3864C169.806 24.1326 169.679 24.9811 169.679 25.9318C169.679 26.8977 169.806 27.7557 170.06 28.5057C170.317 29.2557 170.696 29.8883 171.196 30.4034C171.7 30.9186 172.323 31.3087 173.065 31.5739C173.808 31.8428 174.664 31.9773 175.634 31.9773C176.05 31.9773 176.461 31.9375 176.866 31.858C177.272 31.7784 177.63 31.6913 177.94 31.5966C178.251 31.5019 178.474 31.4318 178.611 31.3864L178.929 32.4318C178.694 32.5303 178.387 32.6288 178.009 32.7273C177.634 32.8258 177.232 32.9072 176.804 32.9716C176.38 33.036 175.974 33.0682 175.588 33.0682ZM174.929 28.5455C175.437 28.5455 175.848 28.4432 176.162 28.2386C176.476 28.0341 176.705 27.7254 176.849 27.3125C176.993 26.8996 177.065 26.3788 177.065 25.75C177.065 25.1136 176.986 24.6174 176.827 24.2614C176.668 23.9053 176.433 23.6553 176.122 23.5114C175.812 23.3674 175.429 23.2955 174.974 23.2955C174.543 23.2955 174.173 23.4091 173.866 23.6364C173.563 23.8598 173.33 24.1591 173.168 24.5341C173.009 24.9053 172.929 25.3106 172.929 25.75C172.929 26.2348 172.993 26.6913 173.122 27.1193C173.251 27.5436 173.461 27.8883 173.753 28.1534C174.045 28.4148 174.437 28.5455 174.929 28.5455ZM187.391 33.4545C186.743 33.4545 186.186 33.3712 185.72 33.2045C185.254 33.0417 184.866 32.8258 184.555 32.5568C184.249 32.2917 184.004 32.0076 183.822 31.7045L184.891 30.9545C185.012 31.1136 185.165 31.2955 185.351 31.5C185.536 31.7083 185.79 31.8883 186.112 32.0398C186.438 32.1951 186.864 32.2727 187.391 32.2727C188.095 32.2727 188.677 32.1023 189.135 31.7614C189.593 31.4205 189.822 30.8864 189.822 30.1591V28.3864H189.709C189.61 28.5455 189.47 28.7424 189.288 28.9773C189.11 29.2083 188.853 29.4148 188.516 29.5966C188.182 29.7746 187.732 29.8636 187.163 29.8636C186.459 29.8636 185.826 29.697 185.266 29.3636C184.709 29.0303 184.268 28.5455 183.942 27.9091C183.62 27.2727 183.459 26.5 183.459 25.5909C183.459 24.697 183.616 23.9186 183.93 23.2557C184.245 22.589 184.682 22.0739 185.243 21.7102C185.804 21.3428 186.451 21.1591 187.186 21.1591C187.754 21.1591 188.205 21.2538 188.538 21.4432C188.875 21.6288 189.133 21.8409 189.311 22.0795C189.493 22.3144 189.633 22.5076 189.732 22.6591H189.868V21.2727H191.163V30.25C191.163 31 190.993 31.6098 190.652 32.0795C190.315 32.553 189.86 32.8996 189.288 33.1193C188.72 33.3428 188.088 33.4545 187.391 33.4545ZM187.345 28.6591C187.883 28.6591 188.338 28.536 188.709 28.2898C189.08 28.0436 189.362 27.6894 189.555 27.2273C189.749 26.7652 189.845 26.2121 189.845 25.5682C189.845 24.9394 189.75 24.3845 189.561 23.9034C189.372 23.4223 189.091 23.0455 188.72 22.7727C188.349 22.5 187.891 22.3636 187.345 22.3636C186.777 22.3636 186.304 22.5076 185.925 22.7955C185.55 23.0833 185.268 23.4697 185.078 23.9545C184.893 24.4394 184.8 24.9773 184.8 25.5682C184.8 26.1742 184.894 26.7102 185.084 27.1761C185.277 27.6383 185.561 28.0019 185.936 28.267C186.315 28.5284 186.785 28.6591 187.345 28.6591ZM193.618 30V21.2727H194.913V22.6364H195.027C195.209 22.1705 195.502 21.8087 195.908 21.5511C196.313 21.2898 196.8 21.1591 197.368 21.1591C197.944 21.1591 198.423 21.2898 198.805 21.5511C199.192 21.8087 199.493 22.1705 199.709 22.6364H199.8C200.023 22.1856 200.358 21.8277 200.805 21.5625C201.252 21.2936 201.788 21.1591 202.413 21.1591C203.194 21.1591 203.832 21.4034 204.328 21.892C204.824 22.3769 205.072 23.1326 205.072 24.1591V30H203.732V24.1591C203.732 23.5152 203.555 23.0549 203.203 22.7784C202.851 22.5019 202.436 22.3636 201.959 22.3636C201.345 22.3636 200.87 22.5492 200.533 22.9205C200.196 23.2879 200.027 23.7538 200.027 24.3182V30H198.663V24.0227C198.663 23.5265 198.502 23.1269 198.18 22.8239C197.858 22.517 197.444 22.3636 196.936 22.3636C196.588 22.3636 196.262 22.4564 195.959 22.642C195.66 22.8277 195.417 23.0852 195.232 23.4148C195.05 23.7405 194.959 24.1174 194.959 24.5455V30H193.618ZM210.092 30.2045C209.539 30.2045 209.037 30.1004 208.587 29.892C208.136 29.6799 207.778 29.375 207.513 28.9773C207.248 28.5758 207.115 28.0909 207.115 27.5227C207.115 27.0227 207.214 26.6174 207.411 26.3068C207.607 25.9924 207.871 25.7462 208.2 25.5682C208.53 25.3902 208.893 25.2576 209.291 25.1705C209.693 25.0795 210.096 25.0076 210.501 24.9545C211.032 24.8864 211.462 24.8352 211.791 24.8011C212.125 24.7633 212.367 24.7008 212.518 24.6136C212.674 24.5265 212.751 24.375 212.751 24.1591V24.1136C212.751 23.553 212.598 23.1174 212.291 22.8068C211.988 22.4962 211.528 22.3409 210.911 22.3409C210.27 22.3409 209.768 22.4811 209.405 22.7614C209.041 23.0417 208.786 23.3409 208.638 23.6591L207.365 23.2045C207.592 22.6742 207.895 22.2614 208.274 21.9659C208.657 21.6667 209.073 21.4583 209.524 21.3409C209.979 21.2197 210.426 21.1591 210.865 21.1591C211.145 21.1591 211.467 21.1932 211.831 21.2614C212.198 21.3258 212.553 21.4602 212.893 21.6648C213.238 21.8693 213.524 22.178 213.751 22.5909C213.979 23.0038 214.092 23.5568 214.092 24.25V30H212.751V28.8182H212.683C212.592 29.0076 212.441 29.2102 212.229 29.4261C212.017 29.642 211.734 29.8258 211.382 29.9773C211.03 30.1288 210.6 30.2045 210.092 30.2045ZM210.297 29C210.827 29 211.274 28.8958 211.638 28.6875C212.005 28.4792 212.282 28.2102 212.467 27.8807C212.657 27.5511 212.751 27.2045 212.751 26.8409V25.6136C212.695 25.6818 212.57 25.7443 212.376 25.8011C212.187 25.8542 211.967 25.9015 211.717 25.9432C211.471 25.9811 211.231 26.0152 210.996 26.0455C210.765 26.072 210.577 26.0947 210.433 26.1136C210.085 26.1591 209.759 26.233 209.456 26.3352C209.157 26.4337 208.914 26.5833 208.729 26.7841C208.547 26.9811 208.456 27.25 208.456 27.5909C208.456 28.0568 208.628 28.4091 208.973 28.6477C209.321 28.8826 209.763 29 210.297 29ZM216.54 30V21.2727H217.881V30H216.54ZM217.222 19.8182C216.96 19.8182 216.735 19.7292 216.545 19.5511C216.36 19.3731 216.267 19.1591 216.267 18.9091C216.267 18.6591 216.36 18.4451 216.545 18.267C216.735 18.089 216.96 18 217.222 18C217.483 18 217.706 18.089 217.892 18.267C218.081 18.4451 218.176 18.6591 218.176 18.9091C218.176 19.1591 218.081 19.3731 217.892 19.5511C217.706 19.7292 217.483 19.8182 217.222 19.8182ZM221.678 18.3636V30H220.337V18.3636H221.678ZM225.111 30.0909C224.83 30.0909 224.59 29.9905 224.389 29.7898C224.188 29.589 224.088 29.3485 224.088 29.0682C224.088 28.7879 224.188 28.5473 224.389 28.3466C224.59 28.1458 224.83 28.0455 225.111 28.0455C225.391 28.0455 225.632 28.1458 225.832 28.3466C226.033 28.5473 226.134 28.7879 226.134 29.0682C226.134 29.2538 226.086 29.4242 225.991 29.5795C225.901 29.7348 225.777 29.8598 225.622 29.9545C225.471 30.0455 225.3 30.0909 225.111 30.0909ZM232.085 30.1818C231.267 30.1818 230.563 29.9886 229.972 29.6023C229.381 29.2159 228.926 28.6837 228.608 28.0057C228.29 27.3277 228.131 26.553 228.131 25.6818C228.131 24.7955 228.294 24.0133 228.619 23.3352C228.949 22.6534 229.407 22.1212 229.994 21.7386C230.585 21.3523 231.275 21.1591 232.062 21.1591C232.676 21.1591 233.229 21.2727 233.722 21.5C234.214 21.7273 234.617 22.0455 234.932 22.4545C235.246 22.8636 235.441 23.3409 235.517 23.8864H234.176C234.074 23.4886 233.847 23.1364 233.494 22.8295C233.146 22.5189 232.676 22.3636 232.085 22.3636C231.563 22.3636 231.104 22.5 230.71 22.7727C230.32 23.0417 230.015 23.4223 229.795 23.9148C229.58 24.4034 229.472 24.9773 229.472 25.6364C229.472 26.3106 229.578 26.8977 229.79 27.3977C230.006 27.8977 230.309 28.286 230.699 28.5625C231.093 28.839 231.555 28.9773 232.085 28.9773C232.434 28.9773 232.75 28.9167 233.034 28.7955C233.318 28.6742 233.559 28.5 233.756 28.2727C233.953 28.0455 234.093 27.7727 234.176 27.4545H235.517C235.441 27.9697 235.254 28.4337 234.955 28.8466C234.659 29.2557 234.267 29.5814 233.778 29.8239C233.294 30.0625 232.729 30.1818 232.085 30.1818ZM241.023 30.1818C240.235 30.1818 239.544 29.9943 238.949 29.6193C238.358 29.2443 237.896 28.7197 237.562 28.0455C237.233 27.3712 237.068 26.5833 237.068 25.6818C237.068 24.7727 237.233 23.9792 237.562 23.3011C237.896 22.6231 238.358 22.0966 238.949 21.7216C239.544 21.3466 240.235 21.1591 241.023 21.1591C241.811 21.1591 242.5 21.3466 243.091 21.7216C243.686 22.0966 244.148 22.6231 244.477 23.3011C244.811 23.9792 244.977 24.7727 244.977 25.6818C244.977 26.5833 244.811 27.3712 244.477 28.0455C244.148 28.7197 243.686 29.2443 243.091 29.6193C242.5 29.9943 241.811 30.1818 241.023 30.1818ZM241.023 28.9773C241.621 28.9773 242.114 28.8239 242.5 28.517C242.886 28.2102 243.172 27.8068 243.358 27.3068C243.544 26.8068 243.636 26.2652 243.636 25.6818C243.636 25.0985 243.544 24.5549 243.358 24.0511C243.172 23.5473 242.886 23.1402 242.5 22.8295C242.114 22.5189 241.621 22.3636 241.023 22.3636C240.424 22.3636 239.932 22.5189 239.545 22.8295C239.159 23.1402 238.873 23.5473 238.688 24.0511C238.502 24.5549 238.409 25.0985 238.409 25.6818C238.409 26.2652 238.502 26.8068 238.688 27.3068C238.873 27.8068 239.159 28.2102 239.545 28.517C239.932 28.8239 240.424 28.9773 241.023 28.9773ZM247.024 30V21.2727H248.32V22.6364H248.433C248.615 22.1705 248.909 21.8087 249.314 21.5511C249.719 21.2898 250.206 21.1591 250.774 21.1591C251.35 21.1591 251.829 21.2898 252.212 21.5511C252.598 21.8087 252.899 22.1705 253.115 22.6364H253.206C253.429 22.1856 253.765 21.8277 254.212 21.5625C254.659 21.2936 255.195 21.1591 255.82 21.1591C256.6 21.1591 257.238 21.4034 257.734 21.892C258.231 22.3769 258.479 23.1326 258.479 24.1591V30H257.138V24.1591C257.138 23.5152 256.962 23.0549 256.609 22.7784C256.257 22.5019 255.842 22.3636 255.365 22.3636C254.751 22.3636 254.276 22.5492 253.939 22.9205C253.602 23.2879 253.433 23.7538 253.433 24.3182V30H252.07V24.0227C252.07 23.5265 251.909 23.1269 251.587 22.8239C251.265 22.517 250.85 22.3636 250.342 22.3636C249.994 22.3636 249.668 22.4564 249.365 22.642C249.066 22.8277 248.823 23.0852 248.638 23.4148C248.456 23.7405 248.365 24.1174 248.365 24.5455V30H247.024Z" fill="white"/>
                            </svg>
                        </a>
                        <a href='https://www.linkedin.com/in/naveen-prajapati-bb538425b/' target="_blank" rel="noopener noreferrer">
                            <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.03992" y="0.539916" width="50.7521" height="50.7521" rx="8.09874" fill="#0A0A0A" />
                                <rect x="1.03992" y="0.539916" width="50.7521" height="50.7521" rx="8.09874" stroke="#3B3B3B" stroke-width="1.07983" />
                                <path d="M21.4141 18.3572C22.1042 18.3572 22.7423 18.4112 23.3254 18.571C23.9096 18.6779 24.388 18.8917 24.8124 19.1584C25.2378 19.4255 25.5564 19.7995 25.768 20.2804C25.9808 20.7609 26.0877 21.3494 26.0877 21.9897C26.0877 22.7381 25.9278 23.3784 25.5564 23.8589C25.2378 24.3405 24.7066 24.7671 24.0695 25.0878C24.9722 25.3556 25.6622 25.8361 26.0877 26.4764C26.5131 27.1168 26.7777 27.9191 26.7777 28.8272C26.7777 29.5756 26.6179 30.2159 26.3522 30.7504C26.0877 31.2849 25.6622 31.7654 25.1838 32.0862C24.664 32.4295 24.0896 32.6822 23.4853 32.8334C22.8482 32.9943 22.2111 33.1012 21.574 33.1012H14.4568V18.3572H21.4141ZM20.9887 24.3394C21.5729 24.3394 22.0512 24.1796 22.4227 23.9129C22.7942 23.6462 22.954 23.1646 22.954 22.5772C22.954 22.2565 22.9 21.9357 22.7942 21.723C22.6883 21.5103 22.5285 21.3483 22.3169 21.1885C22.1005 21.067 21.8677 20.9771 21.6258 20.9218C21.3602 20.8678 21.0956 20.8678 20.776 20.8678H17.6963V24.3405L20.9887 24.3394ZM21.1485 30.6435C21.4671 30.6435 21.7856 30.5895 22.0512 30.5366C22.3169 30.4826 22.5825 30.3768 22.7942 30.2159C23.0097 30.0586 23.1905 29.8587 23.3254 29.6285C23.4313 29.3617 23.5382 29.041 23.5382 28.6674C23.5382 27.9191 23.3254 27.3846 22.9011 27.011C22.4756 26.6902 21.8914 26.5304 21.2014 26.5304H17.6963V30.6446L21.1485 30.6435ZM31.3983 30.5895C31.823 31.0171 32.4601 31.2309 33.3096 31.2309C33.8938 31.2309 34.425 31.0711 34.8494 30.8044C35.2749 30.4833 35.5405 30.1626 35.6463 29.8423H38.2487C37.8233 31.124 37.1862 32.0322 36.3374 32.6196C35.4865 33.1541 34.478 33.4748 33.2567 33.4748C32.4754 33.476 31.7008 33.331 30.9728 33.0472C30.3175 32.8028 29.7334 32.399 29.2732 31.8724C28.7789 31.3814 28.4142 30.7755 28.2117 30.109C27.946 29.4147 27.8391 28.6674 27.8391 27.8122C27.8391 27.011 27.946 26.2637 28.2117 25.5683C28.4665 24.8984 28.8449 24.2823 29.3272 23.752C29.8044 23.2715 30.3886 22.845 31.0257 22.5772C31.7349 22.2924 32.4924 22.1472 33.2567 22.1495C34.1594 22.1495 34.9563 22.3104 35.6463 22.6841C36.3374 23.0577 36.8676 23.4853 37.292 24.1267C37.7174 24.7141 38.0371 25.4085 38.2487 26.1568C38.3545 26.904 38.4075 27.6524 38.3545 28.5065H30.6543C30.6543 29.3617 30.9728 30.163 31.3983 30.5906M34.7436 24.9819C34.3721 24.6083 33.7879 24.3945 33.0968 24.3945C32.6916 24.3884 32.2909 24.4799 31.9285 24.6612C31.6099 24.8221 31.3983 25.0359 31.1855 25.2497C30.9888 25.4554 30.8593 25.716 30.8141 25.997C30.7601 26.2648 30.7072 26.4775 30.7072 26.6913H35.4865C35.3807 25.8901 35.1151 25.3566 34.7436 24.9819ZM30.0701 19.3722H36.0178V20.8149H30.0712L30.0701 19.3722Z" fill="white" />
                            </svg>
                        </a>
                        <a href=''>
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.6239" y="0.539916" width="50.7521" height="50.7521" rx="8.09874" fill="#0A0A0A" />
                                <rect x="0.6239" y="0.539916" width="50.7521" height="50.7521" rx="8.09874" stroke="#3B3B3B" stroke-width="1.07983" />
                                <path d="M20.536 18.3573C20.5357 18.9301 20.3079 19.4793 19.9027 19.8841C19.4975 20.2889 18.948 20.5161 18.3753 20.5159C17.8025 20.5156 17.2533 20.2878 16.8485 19.8825C16.4436 19.4773 16.2164 18.9279 16.2167 18.3551C16.217 17.7823 16.4448 17.2331 16.85 16.8283C17.2552 16.4235 17.8046 16.1962 18.3774 16.1965C18.9502 16.1968 19.4994 16.4246 19.9042 16.8298C20.309 17.2351 20.5363 17.7845 20.536 18.3573ZM20.6008 22.1151H16.2815V35.6346H20.6008V22.1151ZM27.4253 22.1151H23.1276V35.6346H27.3821V28.5401C27.3821 24.5879 32.5329 24.2208 32.5329 28.5401V35.6346H36.7983V27.0715C36.7983 20.409 29.1747 20.6573 27.3821 23.9292L27.4253 22.1151Z" fill="white" />
                            </svg>
                        </a>
                        <a href=''>
                            <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.20801" y="0.539916" width="50.7521" height="50.7521" rx="8.09874" fill="#0A0A0A" />
                                <rect x="1.20801" y="0.539916" width="50.7521" height="50.7521" rx="8.09874" stroke="#3B3B3B" stroke-width="1.07983" />
                                <path d="M27.694 15.1188C28.482 15.1157 29.27 15.1237 30.0578 15.1425L30.2673 15.1501C30.5092 15.1587 30.7478 15.1695 31.0361 15.1825C32.1851 15.2365 32.969 15.4179 33.6569 15.6846C34.3696 15.9589 34.97 16.3303 35.5703 16.9307C36.1193 17.4702 36.5442 18.1228 36.8154 18.8431C37.0821 19.531 37.2635 20.316 37.3175 21.4649C37.3305 21.7522 37.3413 21.9919 37.3499 22.2338L37.3564 22.4433C37.3756 23.2307 37.3838 24.0183 37.3812 24.8059L37.3823 25.6115V27.0261C37.385 27.8141 37.3767 28.6021 37.3575 29.3898L37.351 29.5993C37.3423 29.8412 37.3315 30.0798 37.3186 30.3681C37.2646 31.5171 37.081 32.301 36.8154 32.9889C36.545 33.71 36.1201 34.3631 35.5703 34.9024C35.0304 35.4513 34.3775 35.8761 33.6569 36.1474C32.969 36.4141 32.1851 36.5955 31.0361 36.6495C30.7478 36.6625 30.5092 36.6733 30.2673 36.6819L30.0578 36.6884C29.27 36.7076 28.482 36.7159 27.694 36.7132L26.8885 36.7143H25.475C24.687 36.717 23.899 36.7087 23.1112 36.6895L22.9017 36.683C22.6454 36.6737 22.3891 36.6629 22.1329 36.6506C20.984 36.5966 20.2 36.413 19.5111 36.1474C18.7905 35.8767 18.1378 35.4518 17.5987 34.9024C17.0491 34.3628 16.6238 33.7098 16.3526 32.9889C16.0859 32.301 15.9044 31.5171 15.8504 30.3681C15.8384 30.1119 15.8276 29.8556 15.8181 29.5993L15.8127 29.3898C15.7927 28.6021 15.7837 27.8141 15.7857 27.0261V24.8059C15.7826 24.0183 15.7906 23.2307 15.8094 22.4433L15.817 22.2338C15.8256 21.9919 15.8364 21.7522 15.8494 21.4649C15.9034 20.3149 16.0848 19.532 16.3515 18.8431C16.6229 18.1224 17.049 17.47 17.5998 16.9318C18.1385 16.3819 18.7908 15.9562 19.5111 15.6846C20.2 15.4179 20.9829 15.2365 22.1329 15.1825L22.9017 15.1501L23.1112 15.1447C23.8986 15.1248 24.6863 15.1158 25.4739 15.1177L27.694 15.1188ZM26.584 20.5179C25.8686 20.5078 25.1583 20.64 24.4945 20.9067C23.8306 21.1735 23.2264 21.5695 22.7169 22.0719C22.2075 22.5742 21.8029 23.1727 21.5268 23.8327C21.2507 24.4928 21.1085 25.2011 21.1085 25.9165C21.1085 26.632 21.2507 27.3403 21.5268 28.0003C21.8029 28.6604 22.2075 29.2589 22.7169 29.7612C23.2264 30.2635 23.8306 30.6596 24.4945 30.9263C25.1583 31.1931 25.8686 31.3253 26.584 31.3152C28.0159 31.3152 29.3892 30.7463 30.4018 29.7338C31.4143 28.7212 31.9831 27.3479 31.9831 25.916C31.9831 24.4841 31.4143 23.1108 30.4018 22.0982C29.3892 21.0857 28.0159 20.5179 26.584 20.5179ZM26.584 22.6776C27.0143 22.6697 27.4419 22.7476 27.8418 22.9067C28.2416 23.0659 28.6058 23.3032 28.9129 23.6047C29.2201 23.9062 29.4641 24.2658 29.6307 24.6627C29.7972 25.0595 29.8831 25.4856 29.8832 25.916C29.8832 26.3464 29.7975 26.7725 29.6311 27.1694C29.4646 27.5663 29.2208 27.926 28.9137 28.2276C28.6067 28.5292 28.2426 28.7666 27.8428 28.9259C27.4429 29.0852 27.0154 29.1633 26.5851 29.1555C25.7259 29.1555 24.9019 28.8142 24.2944 28.2067C23.6869 27.5991 23.3456 26.7752 23.3456 25.916C23.3456 25.0568 23.6869 24.2329 24.2944 23.6253C24.9019 23.0178 25.7259 22.6765 26.5851 22.6765L26.584 22.6776ZM32.2531 18.8982C31.9047 18.9121 31.5753 19.0603 31.3337 19.3117C31.0922 19.5631 30.9573 19.8982 30.9573 20.2469C30.9573 20.5955 31.0922 20.9306 31.3337 21.182C31.5753 21.4335 31.9047 21.5816 32.2531 21.5956C32.6111 21.5956 32.9544 21.4534 33.2075 21.2002C33.4607 20.9471 33.6029 20.6038 33.6029 20.2458C33.6029 19.8878 33.4607 19.5445 33.2075 19.2914C32.9544 19.0382 32.6111 18.896 32.2531 18.896V18.8982Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='text-gray-400 pt-36 pb-6'>
                    © 2024 Copy Right
                </div>
            </div>
            <div id='contact' className="md:hidden w-full text-white text-center p-16 pt-44">
                <div className='rounded-2xl px-8 py-16'>
                    <h2 className="text-3xl font-bold mb-8">Let's Talk!</h2>
                    <p className="text-xl text-gray-400 mb-12 w-full max-w-2xl mx-auto">
                        Interested in working together or have a question? Feel free to reach out.
                        I'm here to help you turn your ideas into amazing digital realities.
                        Looking forward to hearing from you soon!
                    </p>
                    <div className="flex flex-col gap-8 justify-center items-center space-x-4">
                        <div className='flex items-center justify-center space-x-4'>
                            <div className="bg-black p-3 border border-card rounded-lg flex items-center space-x-2">
                                <a href='https://www.linkedin.com/in/naveen-prajapati-bb538425b/' target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-2xl text-white cursor-pointer" /></a>
                            </div>
                            <div className="bg-black p-3 border border-card rounded-lg flex items-center space-x-2">
                                <FaTwitter className="text-2xl text-white cursor-pointer" />
                            </div>
                            <div className="bg-black p-3 border border-card rounded-lg flex items-center space-x-2">
                                <FaInstagram className="text-2xl text-white cursor-pointer" />
                            </div>
                        </div>
                        <a href='mailto:naveen1043.me@gmail.com'>
                            <div className="bg-black p-3 border border-card rounded-lg flex items-center space-x-2">
                                <FaEnvelope className="text-white" />
                                <span>naveen1043.me@gmail.com</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='text-gray-400 pt-36'>
                    © 2024 Copy Right
                </div>
            </div>
        </div>
    );
}

export default Contact;
