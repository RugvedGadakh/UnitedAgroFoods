"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will get back to you soon.")
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Head Office",
      details: [
        "United Agro Frozen Food Products Pvt. Ltd.",
        "Yashganga complex, Flat number 404,Near navale bridge, Ambegaon BK",
        "Pin - 41104, Tal - Ambegaon,Dis - Pune.",
      ],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: ["+91 9529350434", "+91 9921220385"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Addresses",
      details: ["General: unitedagrofoodpl@gmail.com", "Marketing: harshunitedagrofoods@gmail.com"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 9:00 AM - 3:00 PM", "Sunday: Closed"],
    },
  ]

  const offices = [
    {
      city: "Pune",
      type: "Head Ofice",
      address: "Yashganga complex, Flat number 404, Near navale bridge, Ambegaon BK, Pin - 41104, Tal - Ambegaon",
      phone: "+91 9529350434 / +91 9921220385",
    },
    {
      city: "Ahilyanagar",
      type: "Production Plant",
      address: "267/05, Komathan, Near Samata International School, Kokamtham, Tal – Kopergaon, District – Ahilyanagar, Maharashtra - 423601",
      phone: "+91 9529350434 / +91 9921220385",
    },

  ]

  return (
    <div className="min-h-screen bg-[#F9F9F6]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1C4532] to-[#8DBE4E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for inquiries, partnerships, or any questions about our frozen food products.
            We're here to help you find the perfect solutions for your business needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#8DBE4E] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1C4532] mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-[#F9F9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <MessageSquare className="h-6 w-6 text-[#8DBE4E] mr-3" />
                <h2 className="text-2xl font-bold text-[#1C4532]">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8DBE4E] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8DBE4E] focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8DBE4E] focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8DBE4E] focus:border-transparent"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8DBE4E] focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Products</option>
                    <option value="export">Export & International</option>
                    <option value="partnership">Partnership</option>
                    <option value="careers">Careers</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8DBE4E] focus:border-transparent"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8DBE4E] focus:border-transparent"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8DBE4E] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#7AB042] transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-[#1C4532] mb-4">Find Us</h3>
                <div className="rounded-2xl overflow-hidden h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.729395555772!2d74.49819637468408!3d19.85139962717412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc436beaaaaaab%3A0x1ed39ed0a1461f77!2sUnited%20Agro%20Frozen%20Food%20Products%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1751974656855!5m2!1sen!2sin"
                    width="100%"
                    height="320"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="United Agro Location"
                    className="w-full h-full border-0"
                  />
                </div>

              </div>

              {/* Quick Contact */}
              <div className="bg-[#1C4532] text-white p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-[#8DBE4E]" />
                    <div>
                      <p className="font-medium">Sales Hotline</p>
                      <p className="text-gray-300">+91 9529350434 / +91 9921220385</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-[#8DBE4E]" />
                    <div>
                      <p className="font-medium">Quick Email</p>
                      <p className="text-gray-300">unitedagrofoodpl@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-[#8DBE4E]" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-gray-300">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-4">Our Office Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our strategically located offices across India for personalized service and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-[#F9F9F6] p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-[#8DBE4E] mr-2" />
                  <h3 className="text-xl font-semibold text-[#1C4532]">{office.city}</h3>
                </div>

                <p className="text-[#8DBE4E] font-medium mb-3">{office.type}</p>

                <div className="space-y-2 text-gray-600">
                  <p className="text-sm">{office.address}</p>
                  <p className="text-sm font-medium">{office.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
