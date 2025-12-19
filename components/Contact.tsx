"use client";
import Link from "next/link";
// Added ExternalLink to the imports
import { Facebook, Instagram, Linkedin, Youtube, Copyright, ExternalLink } from "lucide-react";

export default function Contact() {
  const socials = [
    { icon: <Facebook size={20} />, url: "https://www.facebook.com/smeiiests/" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/sme-iiest-shibpur-835323228/" },
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/sme.iiests/?hl=en" },
    { icon: <Youtube size={20} />, url: "https://www.youtube.com/@smeiiests7235" },
  ];

  return (
    <footer className="w-full bg-black pt-20 pb-10 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Indian Institute of Engineering Science and Technology, Shibpur
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 leading-relaxed">
            Impetus, the annual technical fest of Mechanical Engineering of
            IIEST Shibpur, is a boisterous festival brimming with sensational
            events and perpetual fun.
          </p>
        </div>

        {/* Social Bar */}
        <div className="flex gap-6 mb-12">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8" />

        {/* Bottom Metadata */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono text-slate-600">
          <Link href="/team" className="group flex items-center gap-2 hover:text-cyan-500 transition-colors">
            MEET THE 9.0 TEAM 
            {/* This will now work correctly */}
            <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
          
          <div className="flex items-center gap-1">
            <Copyright size={14} />
            <span>2025 IMPETUS - ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}