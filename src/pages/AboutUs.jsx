import { Users, Target, Award, Globe, Leaf, Shield, Factory, Sprout, ThermometerSnowflake, CheckCircle } from 'lucide-react'
import { Link } from "react-router-dom"
const AboutUs = () => {
    const values = [
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Quality First",
            description: "We never compromise on quality, ensuring every product meets international standards.",
        },
        {
            icon: <Leaf className="h-8 w-8" />,
            title: "Sustainability",
            description: "Committed to sustainable practices that protect our environment for future generations.",
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: "Customer Focus",
            description: "Our customers are at the heart of everything we do, driving innovation and excellence.",
        },
        {
            icon: <Globe className="h-8 w-8" />,
            title: "Global Reach",
            description: "Serving customers worldwide with consistent quality and reliable supply chains.",
        },
    ]

    const milestones = [
        {
            year: "2013",
            event: "Company Founded",
            description: "United Agro was founded, beginning operations as a trading company in the food industry.",
        },
        {
            year: "2013 – 2017",
            event: "Building Strong Foundations",
            description: "Built a strong foundation in trading, focusing on sourcing and distribution of frozen food products.",
        },
        {
            year: "2017",
            event: "A Transformational Milestone",
            description: "Achieved a major milestone by establishing our first manufacturing facility in Komathan, near Shirdi, Maharashtra.",
        },
    ]

    const team = [
        {
            name: "Mr. Santosh V. Thorat",
            position: "Founder & Director",
            image:"Images/founder.jpg",
            qualification: "MBA in Finance",
            description: "A strategic thinker and finance expert with a deep understanding of the food business.",
        },
    ]

    const facilities = [
        {
            title: "Production Capacity",
            description:
                "Our plant boasts a robust processing line with a daily capacity of 20 Metric Tons (MT). Equipped with the latest technology and automated systems, ensuring hygienic and efficient operations from sorting to packing. Streamlined to maintain freshness, texture, and nutritional value in every product.",
            image: "Images/pdt.jpg",
            icon: <Factory className="h-8 w-8" />,
        },
        {
            title: "Farmer Network",
            description:
                "We are proud to have a strong, trust-based partnership with over 2,000 farmers. Our farmer network spans across a 100 km radius, ensuring a regular, fresh, and sustainable supply of high-quality raw materials. We promote Good Agricultural Practices (GAP), technical training, and fair trade to empower local farming communities.",
            image: "Images/farmer.jpg",
            icon: <Sprout className="h-8 w-8" />,
        },
        {
            title: "Cold Chain Infrastructure",
            description:
                "2 High-Capacity Blast Freezers Each with a capacity of 10 Metric Tons. Rapid freezing at optimum temperatures to preserve taste and nutrients instantly after processing. Cold Storage Facility: Total storage capacity of 500 Metric Tons. Maintains consistent temperature and hygiene conditions to ensure long shelf life and product safety.",
            image: "Images/cold.jpg",
            icon: <ThermometerSnowflake className="h-8 w-8" />,
        },
    ]

    const qualityStandards = [
        "End-to-end temperature-controlled operations",
        "Strict quality checks at each stage",
        "Compliant with food safety standards and regulatory norms",
        "Focus on sustainability and minimal food wastage",
    ]

    return (
        <div className="min-h-screen bg-[#F9F9F6]">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[#1C4532] to-[#8DBE4E] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About United Agro</h1>
                            <p className="text-xl text-gray-100 leading-relaxed mb-8">
                                United Agro Frozen Food Products Pvt. Ltd. is one of the leading names in the Indian frozen food industry, committed to delivering high-quality, hygienically processed food products to both domestic and international markets. Our brand stands for quality, trust, and customer satisfaction.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#FFD046] mb-2">12+</div>
                                    <div className="text-sm">Years of Excellence</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#FFD046] mb-2">10+</div>
                                    <div className="text-sm">Countries Served</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://res.cloudinary.com/dcxxiwmdo/image/upload/v1751978036/Logobard_bruakv.png"
                                alt="United Agro Agricultural Fields"
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-[#F9F9F6] p-8 rounded-xl">
                            <div className="flex items-center mb-6">
                                <Target className="h-8 w-8 text-[#8DBE4E] mr-3" />
                                <h2 className="text-2xl font-bold text-[#1C4532]">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To deliver nutritious, fresh-tasting frozen food using world-class processing and cold chain infrastructure.
                            </p>
                        </div>

                        <div className="bg-[#F9F9F6] p-8 rounded-xl">
                            <div className="flex items-center mb-6">
                                <Award className="h-8 w-8 text-[#8DBE4E] mr-3" />
                                <h2 className="text-2xl font-bold text-[#1C4532]">Our Vision</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To become a trusted household name in frozen foods, known for quality, purity, and innovation.

                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-[#F9F9F6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-4">Our Core Values</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            These fundamental principles guide every decision we make and every product we create.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="text-[#8DBE4E] mb-4 flex justify-center">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-[#1C4532] mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            

            {/* Timeline */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-4">Our Journey</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From humble beginnings to global presence - here are the key milestones in our growth story.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#8DBE4E] h-full"></div>

                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                            >
                                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                                    <div className="bg-[#F9F9F6] p-6 rounded-xl shadow-lg">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-[#8DBE4E] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                {milestone.year}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#1C4532] mb-2">{milestone.event}</h3>
                                        <p className="text-gray-600">{milestone.description}</p>
                                    </div>
                                </div>

                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FFD046] rounded-full border-4 border-white shadow-lg"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Processing Facilities */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-4">Our Processing Facilities</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Where Quality Meets Technology. At United Agro Frozen Food Products Pvt. Ltd., we believe that
                            world-class products come from world-class facilities. Our infrastructure is designed to deliver
                            freshness, safety, and consistency at every stage of production.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                        {facilities.map((facility, index) => (
                            <div
                                key={index}
                                className="bg-[#F9F9F6] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <img
                                    src={facility.image || "/placeholder.svg"}
                                    alt={facility.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="text-[#8DBE4E] mr-3">{facility.icon}</div>
                                        <h3 className="text-xl font-semibold text-[#1C4532]">{facility.title}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quality & Hygiene Standards */}
                    <div className="bg-[#1C4532] text-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-center">Quality & Hygiene Standards</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {qualityStandards.map((standard, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-[#8DBE4E] mt-1 flex-shrink-0" />
                                    <p className="text-gray-200">{standard}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 bg-[#F9F9F6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-4">Leadership Team</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Meet the experienced professionals who lead United Agro towards continued excellence and innovation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 justify-items-center">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-md"
                            >
                                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-[#1C4532] mb-1">{member.name}</h3>
                                    <p className="text-[#8DBE4E] font-medium mb-1">{member.position}</p>
                                    <p className="text-[#8DBE4E] font-medium mb-3"><span className='font-medium text-[#1C4532]'>Qualification : </span>{member.qualification}</p>
                                    <p className="text-gray-600">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#1C4532] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Our Success Story</h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                        If you're looking for business partnerships, we'd love to hear from you and
                        explore how we can grow together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <button className="px-8 py-4 bg-[#FFD046] text-[#1C4532] font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200">
                            Contact us
                        </button>
                        </Link>
                        <a href="https://wa.me/919529350434"
                            target="_blank"
                            rel="noopener noreferrer">
                        <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1C4532] transition-colors duration-200">
                            Partnership Inquiries
                        </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
