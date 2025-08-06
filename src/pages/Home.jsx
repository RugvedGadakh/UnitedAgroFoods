"use client"

import { Link } from "react-router-dom"
import { ArrowRight, Shield, Truck, Leaf, Snowflake, Users, Award, Clock, Factory } from "lucide-react"
import { Typewriter } from "react-simple-typewriter"

import { motion } from "framer-motion"
import { useInView, useCountUp } from "../lib/utils"
import WhyChooseUs from "../components/WhyChooseUs"
import GlobalPresenceSection from "../components/GlobalSection"

const funFacts = [
    { number: "3000MT+", label: "Cold Storage Facilities", icon: <Factory size={32} /> },
    { number: "12hrs", label: "Farm to Freezer Time", icon: <Clock size={32} /> },
    { number: "2000+", label: "Partner Farms", icon: <Leaf size={32} /> },
    { number: "12+", label: "Years of Excellence", icon: <Award size={32} /> },
];

function parseNumber(str) {
    const match = str.match(/^(\d+)(.*)$/);
    if (!match) return { num: 0, suffix: str };
    return { num: parseInt(match[1], 10), suffix: match[2] };
}

const parsedFacts = funFacts.map(fact => ({
    ...fact,
    ...parseNumber(fact.number)
}));

const Home = () => {
    const [ref, inView] = useInView({ threshold: 0.3 });

    // Call useCountUp individually for each fact
    const count0 = useCountUp({ end: parsedFacts[0].num, duration: parsedFacts[0].num > 1000 ? 2 : 1, shouldStart: inView });
    const count1 = useCountUp({ end: parsedFacts[1].num, duration: parsedFacts[1].num > 1000 ? 2 : 1, shouldStart: inView });
    const count2 = useCountUp({ end: parsedFacts[2].num, duration: parsedFacts[2].num > 1000 ? 2 : 1, shouldStart: inView });
    const count3 = useCountUp({ end: parsedFacts[3].num, duration: parsedFacts[3].num > 1000 ? 2 : 1, shouldStart: inView });


    return (
        <div className="min-h-screen">
            {/* Hero Section with Video */}
            <section className="relative bg-gradient-to-br from-[#1C4532] to-[#8DBE4E] text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* Background Video */}
                <div className="absolute inset-0">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                        <source
                            src="https://res.cloudinary.com/dcxxiwmdo/video/upload/v1751975250/VIDEO1_2_-_Trim_klcpz6.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="text-center max-w-4xl mx-auto space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight drop-shadow-black border-black">
                            Premium Frozen Food Products for Global Markets
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed drop-shadow-black border-black">
                            We commit, We care, We Comfort our client
                        </p>
                        <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed drop-shadow-black border-black">
                            <Typewriter
                                words={[
                                    "We reach 6000+ farmers",
                                    "Our production capacity 20 tons/day",
                                    "Delivering quality and trust across India"
                                ]}
                                loop
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/products"
                                className="inline-flex items-center px-8 py-4 bg-[#FFD046] text-[#1C4532] font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200 drop-shadow-md"
                            >
                                Explore Products
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1C4532] transition-colors duration-200 drop-shadow-md"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>



            {/* Features Section */}
            <section className="py-20 bg-[#F9F9F6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-4">Why Choose United Agro?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We combine traditional farming wisdom with modern technology to deliver frozen food products that meet
                            international quality standards.
                        </p>
                    </div>
                    <div>
                        <WhyChooseUs />
                    </div>
                </div>
            </section>

            {/* Products Preview */}
            <section className="py-20 bg-[#d8f0d1]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-4">Our Product Range</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From fresh vegetables to ready-to-cook meals, discover our comprehensive range of frozen food products.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="https://res.cloudinary.com/dcxxiwmdo/image/upload/v1754464398/heap-grains-maiz-background-pile_oudc7n.jpg"
                                    alt="Frozen Corn"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-xl font-semibold mb-1">Frozen Sweet Corn</h3>
                                    <p className="text-sm opacity-90">Golden, juicy corn kernels flash-frozen.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="https://res.cloudinary.com/dcxxiwmdo/image/upload/v1754464362/ChatGPT_Image_Jul_20_2025_01_03_04_PM_jdmasz.png"
                                    alt="Premium Frozen Food Mix"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-xl font-semibold mb-1">Frozen Vegetables</h3>
                                    <p className="text-sm opacity-90">Farm-fresh vegetables flash-frozen</p>
                                </div>
                            </div>
                        </div>

                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src="https://res.cloudinary.com/dcxxiwmdo/image/upload/v1754464356/WhatsApp_Image_2025-07-13_at_13.18.03_329c2d64_woisxl.jpg"
                                    alt="Variety of Frozen Products"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-xl font-semibold mb-1">Frozen Green Peas</h3>
                                    <p className="text-sm opacity-90">Sweet, tender peas frozen fresh.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link
                            to="/products"
                            className="inline-flex items-center px-8 py-4 bg-[#8DBE4E] text-white font-semibold rounded-lg hover:bg-[#7AB042] transition-colors duration-200"
                        >
                            View All Products
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white py-16 px-4 md:px-8" ref={ref}>
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-4">Impressive Numbers</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our commitment to excellence is reflected in these remarkable achievements
                    </p>
                    <div className="grid gap-10 mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {parsedFacts.map((fact, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative overflow-hidden bg-white p-10 rounded-2xl text-center border border-green-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-green-200"
                            >

                                {/* Icon */}
                                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-[#1C4532] text-white shadow-md">
                                    {fact.icon}
                                </div>

                                {/* Animated Number */}
                                <div className="text-3xl font-extrabold bg-[#1C4532] bg-clip-text text-transparent font-roboto mb-3">
                                    {index === 0 && count0}
                                    {index === 1 && count1}
                                    {index === 2 && count2}
                                    {index === 3 && count3}
                                    {fact.suffix}
                                </div>

                                {/* Label */}
                                <div className="text-[1.05rem] font-semibold text-gray-600">
                                    {fact.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Reach*/}
            <section className="py-20 bg-[#F9F9F6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-4">Global Reach, Local Quality</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Serving premium frozen products to customers across four continents with the same commitment to quality
                        </p>
                    </div>
                    <GlobalPresenceSection />
                    <div>

                    </div>
                </div>
            </section>

            {/* Quality & Sourcing Section */}
            <section className="py-20 bg-[#F9F9F6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-6">From Farm to Freezer</h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Our commitment to quality begins at the source. We work directly with farmers to ensure the freshest
                                produce reaches our state-of-the-art processing facilities within hours of harvest.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-[#8DBE4E] rounded-full p-2">
                                        <Leaf className="h-5 w-5 text-white" />
                                    </div>
                                    <span className="text-gray-700">Direct Farm Partnerships</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="bg-[#8DBE4E] rounded-full p-2">
                                        <Shield className="h-5 w-5 text-white" />
                                    </div>
                                    <span className="text-gray-700">Quality Testing</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="bg-[#8DBE4E] rounded-full p-2">
                                        <Snowflake className="h-5 w-5 text-white" />
                                    </div>
                                    <span className="text-gray-700">Flash Freezing</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="bg-[#8DBE4E] rounded-full p-2">
                                        <Truck className="h-5 w-5 text-white" />
                                    </div>
                                    <span className="text-gray-700">Cold Chain Delivery</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-06%20at%2017.54.14_0f76bcba.jpg-7D6AjC3RI7und2UTZcQ4RloTH8FNR3.jpeg"
                                alt="Happy Farmer with Fresh Corn"
                                className="rounded-lg shadow-lg w-full h-64 object-cover"
                            />
                            <img
                                src="Images/test.jpg"
                                alt="Quality Testing Laboratory"
                                className="rounded-lg shadow-lg w-full h-64 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#1C4532] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
                        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                            Join hundreds of satisfied clients worldwide who trust United Agro for their frozen food needs. Let's
                            discuss how we can serve your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-4 bg-[#FFD046] text-[#1C4532] font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200"
                            >
                                Contact Us Today
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                to="/clients"
                                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1C4532] transition-colors duration-200"
                            >
                                <Users className="mr-2 h-5 w-5" />
                                Our Clients
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
