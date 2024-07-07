// Contact.js

import { FaEnvelope, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id='contact' className="w-full text-white text-center p-16 pt-44">
            <div className='border border-gray-700 rounded-2xl bg-zinc-900 px-20 py-16 mx-36'>
                <h2 className="text-5xl font-bold mb-8">Let's Talk!</h2>
                <p className="text-xl text-gray-400 mb-12 w-full max-w-2xl mx-auto">
                    Interested in working together or have a question? Feel free to reach out.
                    I'm here to help you turn your ideas into amazing digital realities.
                    Looking forward to hearing from you soon!
                </p>
                <div className="flex justify-center items-center space-x-4">
                    <div className="bg-black p-3 border border-card rounded-lg flex items-center space-x-2">
                        <FaEnvelope className="text-white" />
                        <span>naveen1043.me@gmail.com</span>
                    </div>
                    <div className="bg-black p-3 border border-card rounded-lg flex items-center space-x-2">
                        <FaLinkedin className="text-2xl text-white cursor-pointer" />
                    </div>
                    <div className="bg-black p-3 border border-card rounded-lg flex items-center space-x-2">
                        <FaTwitter className="text-2xl text-white cursor-pointer" />
                    </div>
                    <div className="bg-black p-3 border border-card rounded-lg flex items-center space-x-2">
                        <FaInstagram className="text-2xl text-white cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className='text-gray-400 pt-36'>
                © 2024 Copy Right
            </div>
        </div>
    );
}

export default Contact;
