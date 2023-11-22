import Layout from "../../Layout/Layout"

import { FaFacebook, FaXTwitter, FaLinkedinIn , FaInstagram   } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer> 
<footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
  <aside className="items-center grid-flow-col">
  <FaInstagram className="text-2xl" />

    <p>ACME Industries Ltd. <br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a><FaFacebook className="text-2xl" /></a>
      <a><FaXTwitter className="text-2xl" /></a>
      <a><FaLinkedinIn className="text-2xl" /></a>
    </div>
  </nav>
</footer>
    </>
  )
}

export default Footer
