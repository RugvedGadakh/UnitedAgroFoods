import { Star, Globe, Award, TrendingUp, Users, CheckCircle } from "lucide-react"

const OurClients = () => {
    const clientLogos = [
        { name: "Gujrat" },
        { name: "Delhi" },
        { name: "Haryana" },
        { name: "Punjab" },
        { name: "Uttar Pradesh" },
        { name: "Madhya Pradesh" },
        { name: "Karnataka" },
        { name: "Andra Pradesh" },
        { name: "West Bengal" },
        { name: "Uttarahkhand" },
        { name: "Kerala" },
        { name: "Odisa" },
        { name: "Tamil Nadu" },
        { name: "Maharashtra" },
        { name: "Assam" },
        { name: "Himachal Pradesh" },
        { name: "Chhattisgarh" },
        { name: "Jarkhand" },

    ]


    const clientStats = [
        {
            icon: <Users className="h-8 w-8" />,
            number: "1000+",
            label: "Happy Clients",
            description: "Satisfied customers worldwide",
        },
        {
            icon: <Globe className="h-8 w-8" />,
            number: "10+",
            label: "Countries Served",
            description: "Global market presence",
        },
        {
            icon: <TrendingUp className="h-8 w-8" />,
            number: "100%",
            label: "Client Retention",
            description: "Long-term partnerships",
        },
        {
            icon: <Award className="h-8 w-8" />,
            number: "12+",
            label: "Years Experience",
            description: "Industry expertise",
        },
    ]

    const clientCategories = [
        {
            title: "Leading Clientele",
            description: "We are proud partners with some of India's most respected names in food markets.",
            clients: [
                "Bharat Store – Haryana",
                "SMC Foods Ltd. – New Delhi",
                "Keventer Agro Ltd. – West Bengal",
                "Pal Fresh – Uttarakhand",
                "Solitaire Pharma – Uttarakhand",
            ],
            icon: <Users className="h-8 w-8" />,

        },
        {
            title: "Nationwide Reach",
            description: "Our growing cold chain network spans across major regions of India, ensuring timely supply and accessibility.",
            clients: ["Present in 14+ Indian states", "Strong distributor relationships", "Reliable cold chain logistics", "Consistent temperature control", "Rapid delivery to diverse sectors"],
            icon: <Globe className="h-8 w-8" />,
        },
        {
            title: "B2B Focused Service",
            description: "Whether you're in retail, hospitality, or pharma, we tailor solutions to fit your operational needs.",
            clients: ["Custom pack sizes available", "Dedicated account support", "Reliable bulk fulfillment", "Fast issue resolution", "Commitment to long-term partnership"],
            icon: <TrendingUp className="h-8 w-8" />,
        },
        {
            title: "Why Clients Trust Us",
            description: "We’ve earned client trust by delivering value through quality, service, and support.",
            clients: ["Safe & hygienic production", "Farm-fresh, preservative-free foods", "On-time and tracked deliveries", "Excellent customer service", "Scalable for bulk or retail orders"],
            icon: <Award className="h-8 w-8" />,
        },
    ]

    return (
        <div className="min-h-screen bg-[#F9F9F6]">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#1C4532] to-[#8DBE4E] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Valued Clients</h1>
                    <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                        We're proud to serve a diverse range of clients worldwide, from small local businesses to multinational
                        corporations, all united by their trust in our quality and service excellence.
                    </p>
                </div>
            </section>

            {/* Client Stats */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {clientStats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-[#8DBE4E] mb-4 flex justify-center">{stat.icon}</div>
                                <div className="text-4xl font-bold text-[#1C4532] mb-2">{stat.number}</div>
                                <div className="text-lg font-semibold text-[#1C4532] mb-1">{stat.label}</div>
                                <div className="text-gray-600 text-sm">{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Logos */}
            <section className="py-20 bg-[#F9F9F6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-4">Distribution Network</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            With a presence in 14+ states, our cold chain network ensures fresh, on-time delivery of frozen products across India.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                        {clientLogos.map((client, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center border"
                            >
                                <span className="text-center text-[#1C4532] font-semibold text-sm">
                                    {client.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Client Categories */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-4">Built on Trust, Delivered with Care</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We serve diverse market segments, each with unique requirements and expectations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {clientCategories.map((category, index) => (
                            <div key={index} className="bg-[#F9F9F6] p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="text-[#8DBE4E] mr-4">{category.icon}</div>
                                    <h3 className="text-2xl font-semibold text-[#1C4532]">{category.title}</h3>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>

                                <div className="space-y-2">
                                    {category.clients.map((client, clientIndex) => (
                                        <div key={clientIndex} className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-[#8DBE4E] mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">{client}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Partnership Benefits */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-6">Why Choose Us as Your Partner?</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="h-6 w-6 text-[#8DBE4E] mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#1C4532] mb-2">Consistent Quality</h3>
                                        <p className="text-gray-600">
                                            Rigorous quality control ensures every batch meets your exact specifications.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="h-6 w-6 text-[#8DBE4E] mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#1C4532] mb-2">Reliable Supply Chain</h3>
                                        <p className="text-gray-600">
                                            Uninterrupted supply with flexible delivery schedules to meet your demands.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="h-6 w-6 text-[#8DBE4E] mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#1C4532] mb-2">Custom Solutions</h3>
                                        <p className="text-gray-600">
                                            Tailored products and packaging solutions to match your specific requirements.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="h-6 w-6 text-[#8DBE4E] mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#1C4532] mb-2">Dedicated Support</h3>
                                        <p className="text-gray-600">
                                            Personal account managers and 24/7 customer support for seamless operations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src="https://res.cloudinary.com/dcxxiwmdo/image/upload/v1752995078/Screenshot_2025-07-20_123336_akzxah.png"
                                alt="Partnership Benefits - Happy Farmer"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#1C4532] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Join Our Client Family?</h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                        Experience the United Agro difference. Let's discuss how we can support your business with our premium
                        frozen food products and exceptional service.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919529350434"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-8 py-4 bg-[#FFD046] text-[#1C4532] font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200">
                                Request a Quote
                            </button>
                        </a>
                        <a
                            href="https://wa.me/919529350434"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1C4532] transition-colors duration-200">
                                Schedule a Meeting
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurClients
