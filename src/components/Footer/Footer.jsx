import React from 'react';

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto py-10'>
            <div className='text-center border-b'>
                <h2 className='text-[#09080F] mb-2 font-bold text-2xl'>Gadget Heaven</h2>
                <p className='text-[#09080F99] mb-6'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <footer className="footer footer-center mx-auto p-10">
                <nav>
                    <h6 className="font-bold text-[#09080F]">Services</h6>
                    <a className="link link-hover text-[#09080F99]">Branding</a>
                    <a className="link link-hover text-[#09080F99]">Design</a>
                    <a className="link link-hover text-[#09080F99]">Marketing</a>
                    <a className="link link-hover text-[#09080F99]">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-[#09080F]">Company</h6>
                    <a className="link link-hover text-[#09080F99]">About us</a>
                    <a className="link link-hover text-[#09080F99]">Contact</a>
                    <a className="link link-hover text-[#09080F99]">Jobs</a>
                    <a className="link link-hover text-[#09080F99]">Press kit</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-[#09080F]">Legal</h6>
                    <a className="link link-hover text-[#09080F99]">Terms of use</a>
                    <a className="link link-hover text-[#09080F99]">Privacy policy</a>
                    <a className="link link-hover text-[#09080F99]">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;