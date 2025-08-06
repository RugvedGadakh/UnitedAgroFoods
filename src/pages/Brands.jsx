import { Award, Star, Globe, Truck } from "lucide-react"
import { Link } from "react-router-dom"

const Brands = () => {
    const brands = [
        {
            id: 1,
            name: "Corn Master",
            category: "corn",
            description: "Premium quality sweet corn kernels, flash-frozen to preserve natural sweetness and nutrients.",
            established: "2015",
            products: [
                {
                    id: 1,
                    name: "Corn Master",
                    weight: "500gm And 1kg",
                    image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1752993717/sweetcorn_master_n9ghfk.png",
                    availability: "In Stock",
                    features: ["Premium Quality", "Flash Frozen", "No Preservatives", "Convenient Size"],
                    description: "Perfect portion size for small families, maintaining the same premium quality.",
                },
            ],
        },
        {
            id: 2,
            name: "Krushi Ratna",
            category: "corn",
            description: "Traditional farming meets modern technology. Premium frozen vegetables from trusted farms.",
            established: "2018",
            products: [
                {
                    id: 1,
                    name: "Krushi Ratna American Sweet Corn 1kg",
                    weight: "500gm and 1kg",
                    image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1752994064/krushiRatna_Corn_vkesce.png",
                    availability: "In Stock",
                    features: ["Organic Certified", "Hand Picked", "Flash Frozen", "Rich in Protein"],
                    description: "Tender sweet corn harvested at the perfect stage for optimal taste and texture.",
                },
            ],
        },
        {
            id: 3,
            name: "Frozen Green Peas",
            category: "peas",
            description: "Specially curated green peas collection offering various pack sizes for different needs.",
            products: [
                {
                    id: 1,
                    name: "Green Peas",
                    weight: "200gm, 500gm and 1kg",
                    image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1752765000/greenpeaspacket_byucb2.jpg",
                    availability: "In Stock",
                    features: ["Small Pack", "Fresh Quality", "Quick Cook", "Nutrient Rich"],
                    description: "Naturally sweet and tender, perfect for Indian gravies, fried rice, and snacks.",
                },
            ],
        },
        {
            id: 4,
            name: "Mix Veg",
            category: "vegetables",
            description: "A colorful blend of premium vegetables including carrots, peas, corn, and green beans.",
            products: [
                {
                    id: 1,
                    name: "Frozen Mix Veg",
                    weight: "1kg standard pack",
                    image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1752765000/mixvegpacket_ocmehw.jpg",
                    availability: "In Stock",
                    features: ["Tender & Sweet", "Restaurant Grade", "Flash Frozen", "Versatile Use"],
                    description: "A healthy mix of premium vegetables for pulao, soups, parathas, and more.",
                },
            ],
        },
        {
            id: 5,
            name: "Baby Corn",
            category: "corn",
            description: "Crisp, young corn ideal for stir-fries, oriented dishes, and salad",
            products: [
                {
                    id: 1,
                    name: "Baby Corn",
                    weight: "500gm and 1kg",
                    image: "https://res.cloudinary.com/dcxxiwmdo/image/upload/v1752765635/WhatsApp_Image_2025-07-10_at_08.49.42_e7a148d2_imr22t.jpg",
                    availability: "In Stock",
                    features: ["Tender & Sweet", "Restaurant Grade", "Flash Frozen", "Versatile Use"],
                    description: "Crisp, young corn ideal for stir-fries, oriented dishes, and salad",
                },
            ],
        },
    ]

    const achievements = [
        {
            icon: <Award className="h-8 w-8" />,
            title: "50+ Awards",
            description: "International recognition for quality and innovation",
        },
        {
            icon: <Star className="h-8 w-8" />,
            title: "4.8/5 Rating",
            description: "Average customer satisfaction across all brands",
        },
        {
            icon: <Globe className="h-8 w-8" />,
            title: "50+ Countries",
            description: "Global presence with trusted brand recognition",
        },
        {
            icon: <Truck className="h-8 w-8" />,
            title: "99.5% On-Time",
            description: "Reliable delivery performance worldwide",
        },
    ]

    return (
        <div className="min-h-screen bg-[#F9F9F6]">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#1C4532] to-[#8DBE4E] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Brand Portfolio</h1>
                    <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                        Discover our diverse range of trusted brands, crafted to serve specific markets and consumers with the highest quality.
                    </p>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="text-center">
                                <div className="text-[#8DBE4E] mb-4 flex justify-center">{achievement.icon}</div>
                                <h3 className="text-2xl font-bold text-[#1C4532] mb-2">{achievement.title}</h3>
                                <p className="text-gray-600">{achievement.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brands Grid */}
            <section className="py-20 bg-[#F9F9F6]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-4">Our Trusted Brands</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Each brand represents our commitment to excellence, designed for diverse consumer needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {brands.map((brand) => {
                            const product = brand.products[0]
                            return (
                                <div
                                    key={brand.id}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="md:flex">
                                        <div className="md:w-1/3">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-48 md:h-full object-cover"
                                            />
                                        </div>
                                        <div className="md:w-2/3 p-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-2xl font-bold text-[#1C4532]">{brand.name}</h3>
                                                
                                            </div>

                                            <p className="text-[#DAA520] font-semibold mb-2 capitalize">{brand.category}</p>

                                            <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>



                                            {/* Features */}
                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-[#1C4532] mb-2">Key Features:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {product.features.map((feature, index) => (
                                                        <span key={index} className="text-xs bg-[#F9F9F6] text-[#333333] px-2 py-1 rounded">
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Weight */}
                                            <div className="text-sm text-gray-500">Available Pack: {product.weight}</div>

                                        </div>
                                    </div>


                                </div>
                            )
                        })}
                    </div>
                    <div className="mt-12 flex justify-center">
                        <a
                            href="https://wa.me/919529350434"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-6 py-3 bg-green-700 text-white rounded-lg text-lg font-semibold hover:bg-green-800 transition duration-300">
                                Get Inquiry
                            </button>
                        </a>
                    </div>

                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4532] mb-6">Our Brand Philosophy</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#8DBE4E] rounded-full p-2 mt-1">
                                        <Award className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#1C4532] mb-2">Quality Excellence</h3>
                                        <p className="text-gray-600">
                                            Every brand maintains the highest quality standards, ensuring consistent excellence across all
                                            product lines.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#8DBE4E] rounded-full p-2 mt-1">
                                        <Globe className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#1C4532] mb-2">Market Focused</h3>
                                        <p className="text-gray-600">
                                            Each brand is carefully positioned to serve specific market segments with tailored solutions.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#8DBE4E] rounded-full p-2 mt-1">
                                        <Star className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#1C4532] mb-2">Innovation Driven</h3>
                                        <p className="text-gray-600">
                                            Continuous innovation ensures our brands stay ahead of market trends and consumer expectations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uaf2.jpg-4nOuhiUKpkTIcPDjEXypi75bSI4oKn.jpeg"
                                alt="Brand Portfolio Display"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-[#1C4532] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Private Label Services</h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                        We offer comprehensive private label services, from product development to
                        packaging design, helping you build a successful frozen food brand.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">Product Development</h3>
                            <p className="text-gray-200">Custom formulations and recipes tailored to your specifications</p>
                        </div>
                        <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">Packaging Design</h3>
                            <p className="text-gray-200">Eye-catching packaging that reflects your brand identity</p>
                        </div>
                        <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                            <p className="text-gray-200">Rigorous testing and certification for your peace of mind</p>
                        </div>
                    </div>
                   
                </div>
            </section>
        </div>
    )
}

export default Brands
