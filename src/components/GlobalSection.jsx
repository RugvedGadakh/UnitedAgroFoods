"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"
import { useState } from "react"
import { hasFlag } from "country-flag-icons"
import "country-flag-icons/react/3x2"

const GlobalPresenceSection = () => {
  const [selectedCountry, setSelectedCountry] = useState(null)

  const exportCountries = [
    { name: "Russia", countryCode: "RU", region: "Europe/Asia" },
    { name: "Germany", countryCode: "DE", region: "Europe" },
    { name: "France", countryCode: "FR", region: "Europe" },
    { name: "Dubai", countryCode: "AE", region: "Middle East" },
    { name: "Saudi Arabia", countryCode: "SA", region: "Middle East" },
    { name: "UAE", countryCode: "AE", region: "Middle East" },
    { name: "Oman", countryCode: "OM", region: "Middle East" },
    { name: "Iran", countryCode: "IR", region: "Middle East" },
    { name: "Iraq", countryCode: "IQ", region: "Middle East" },
    { name: "Nepal", countryCode: "NP", region: "Asia" },
    { name: "Sri Lanka", countryCode: "LK", region: "Asia" },
  ]

  const doubledExportCountries = [...exportCountries, ...exportCountries]

  return (
    <section className="py-20 bg-[#F9F9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title & Image/Text Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/Images/card3.jpg"
              alt="Global Export"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-4 flex items-center gap-2">
              <TrendingUp className="text-[#8DBE4E]" size={30} />
              Global Export Network
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At United Agro Foods, we’ve built a reliable and efficient global export infrastructure that spans continents.
              Our premium frozen vegetables and corn are transported through a meticulously managed{" "}
              <span className="text-[#8DBE4E] font-semibold">cold chain</span> to ensure they reach every destination in peak condition.
              From regional distributors to major retailers, we deliver consistent{" "}
              <span className="text-[#8DBE4E] font-semibold">freshness</span>,{" "}
              <span className="text-[#8DBE4E] font-semibold">quality</span>, and{" "}
              <span className="text-[#8DBE4E] font-semibold">trust</span> across international borders.
            </p>
          </motion.div>
        </div>

        {/* Country List with Flag Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#1C4532] text-center mb-6">Export Destinations</h3>

          <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-md">
            <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
              {doubledExportCountries.map((country, index) => (
                <div
                  key={`${country.name}-${index}`}
                  onClick={() => setSelectedCountry(country)}
                  className={`flex-shrink-0 min-w-[150px] p-4 text-center cursor-pointer transition-all duration-300
                    ${selectedCountry?.countryCode === country.countryCode
                      ? "bg-[#E6F4E6] border-2 border-[#8DBE4E]"
                      : "hover:bg-[#F3FDF3]"}
                  `}
                >
                  <div className="w-12 h-8 mx-auto mb-2 rounded overflow-hidden">
                    {hasFlag(country.countryCode) && (
                      <img
                        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.countryCode}.svg`}
                        alt={`${country.name} flag`}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <h4 className="text-sm font-medium text-gray-800">{country.name}</h4>
                  <p className="text-xs text-gray-500">{country.region}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GlobalPresenceSection
