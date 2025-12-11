import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-blue-600 transform rotate-45"></div>
              </div>
              <span className="text-xl font-semibold">
                ruang
                <br />
                ekspresi
              </span>
            </div>
            <p className="text-blue-100 text-sm">
              Wadah kreatif dan kompetitif untuk mahasiswa yang ingin
              mengembangkan potensi melalui ideation, creation, collaboration,
              dan guidance.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-white transition">
                  Program
                </a>
              </li>
              <li>
                <a href="#project" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-blue-100">
              <li>Career Talks</li>
              <li>Extra Classes</li>
              <li>Project Work</li>
              <li>Mentoring</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>
                Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan,
                Bantul, DIY
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>ruang_ekspresi@webmail.uad.ac.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(0274) 511830</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-blue-100 text-sm">
          © 2025 Ruang Ekspresi | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
