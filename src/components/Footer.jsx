import { Link } from "react-router-dom"
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Clock,
  Award,
  Truck,
  Shield,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-[#8DBE4E] p-3 rounded-lg">
                <Leaf className="h-8 w-8 text-[#1C4532]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl leading-tight">United Agro</span>
                <span className="text-gray-300 text-sm leading-tight">Frozen Food Products Pvt. Ltd.</span>
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Leading provider of premium frozen food products, committed to quality, freshness, and sustainable farming
              practices. From farm to freezer, we deliver exceptional quality that preserves nature's goodness.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-[#8DBE4E]" />
                <span className="text-xs text-gray-300">HACCP Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-[#8DBE4E]" />
                <span className="text-xs text-gray-300">ISO 22000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-4 w-4 text-[#8DBE4E]" />
                <span className="text-xs text-gray-300">Cold Chain</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-4 w-4 text-[#8DBE4E]" />
                <span className="text-xs text-gray-300">Organic Options</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-[#8DBE4E] font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-300 hover:text-[#8DBE4E] cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-300 hover:text-[#8DBE4E] cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-300 hover:text-[#8DBE4E] cursor-pointer transition-colors" />
                <Youtube className="h-6 w-6 text-gray-300 hover:text-[#8DBE4E] cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#8DBE4E] border-b border-[#8DBE4E] pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#8DBE4E] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#8DBE4E] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-[#8DBE4E] transition-colors text-sm">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-300 hover:text-[#8DBE4E] transition-colors text-sm">
                  Our Brands
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-gray-300 hover:text-[#8DBE4E] transition-colors text-sm">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#8DBE4E] transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#8DBE4E] border-b border-[#8DBE4E] pb-2">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#8DBE4E] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Head Office</p>
                  <p className="text-gray-400 text-sm">
                    Yashganga complex, Flat number 404, Near navale bridge, Ambegaon BK, Pin - 41104, Tal - Ambegaon. Dis- Pune.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#8DBE4E] flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">+91 9529350434</p>
                  <p className="text-gray-300 text-sm font-medium">+91 9921220385</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#8DBE4E] flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">unitedagrofoodpl@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-[#8DBE4E] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Business Hours</p>
                  <p className="text-gray-400 text-sm">
                    Mon-Fri: 9:00 AM - 5:00 PM
                    <br />
                    Sat: 9:00 AM - 3:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Location Map */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#8DBE4E] border-b border-[#8DBE4E] pb-2">Our Location</h3>
            <div className="bg-gray-700 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.729395555772!2d74.49819637468408!3d19.85139962717412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc436beaaaaaab%3A0x1ed39ed0a1461f77!2sUnited%20Agro%20Frozen%20Food%20Products%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1751974656855!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
                title="United Agro Location"
              ></iframe>
            </div>
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center text-[#8DBE4E] hover:text-[#FFD046] transition-colors text-sm"
              >
                <MapPin className="h-4 w-4 mr-1" />
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 United Agro Frozen Food Products Pvt. Ltd. All rights reserved.
              </p>
              
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-xs">Powered by</span>
              <span className="text-[#8DBE4E] text-xs font-semibold">United Agro Technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
