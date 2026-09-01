import Link from "next/link";
import {useState} from "react";

const PHONE="918850050126";
export const wa=(text="Hello, I would like to enquire about your services.")=>`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

export default function Layout({children,active=""}){
 const [open,setOpen]=useState(false);
 const nav=[["/","Home"],["/about","About"],["/services","Services"],["/contact","Contact"]];
 return <>
  <header className="header">
   <Link href="/" className="brand"><span className="brand-sun">☀</span><span>Sun</span>Grid</Link>
   <button className="menu" onClick={()=>setOpen(!open)} aria-label="menu">☰</button>
   <nav className={open?"nav open":"nav"}>{nav.map(([href,label])=><Link className={active===label.toLowerCase()?"active":""} onClick={()=>setOpen(false)} href={href} key={label}>{label}</Link>)}</nav>
   <a className="small-wa" href={wa()}>WhatsApp</a>
  </header>
  {children}
  <a className="floating-wa" href={wa("Hello, I want a solar/CCTV/electrical quotation.")}>💬</a>
  <footer className="footer">
   <div><div className="brand"><span className="brand-sun">☀</span><span>Sun</span>Grid</div><p>Solar • CCTV • Electrical solutions</p></div>
   <div className="footer-links"><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
   <div><p>© 2026 SunGrid. All rights reserved.</p><p>Professional solutions for homes, shops & businesses.</p></div>
  </footer>
 </>;
}