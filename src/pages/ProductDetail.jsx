"use client"

import { useParams, Link } from "react-router-dom"
import productsData from "../data/products"
import { ArrowLeft, CheckCircle, Info, Snowflake, Utensils, BookOpen, Clock } from 'lucide-react'

const ProductDetail = () => {
    const { id } = useParams()
    const product = productsData.find((p) => p.id === parseInt(id))

    if (!product) {
        return (
            <div className="min-h-screen bg-[#F9F9F6] flex items-center justify-center py-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#1C4532] mb-4">Product Not Found</h1>
                    <p className="text-lg text-gray-600 mb-8">The product you are looking for does not exist.</p>
                    <Link
                        to="/products"
                        className="inline-flex items-center px-6 py-3 bg-[#8DBE4E] text-white font-semibold rounded-lg hover:bg-[#7AB042] transition-colors duration-200"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to Products
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#F9F9F6] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <div className="mb-8">
                    <Link
                        to="/products"
                        className="inline-flex items-center text-[#1C4532] hover:text-[#8DBE4E] transition-colors duration-200 font-medium"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to All Products
                    </Link>
                </div>

                {/* Product Overview */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden lg:flex lg:items-center">
                    <div className="lg:w-1/2">
                        <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-96 object-cover lg:h-full"
                        />
                    </div>
                    <div className="lg:w-1/2 p-8">
                        <span className="text-sm font-semibold text-[#8DBE4E] bg-[#8DBE4E] bg-opacity-10 px-3 py-1 rounded-full mb-3 inline-block">
                            {product.category}
                        </span>
                        <h1 className="text-4xl font-bold text-[#1C4532] mb-4">{product.name}</h1>
                        <p className="text-xl text-gray-700 mb-6 leading-relaxed">{product.shortDescription}</p>
                        <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

                        {/* Highlights */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-[#1C4532] mb-3 flex items-center">
                                <CheckCircle className="h-5 w-5 text-[#8DBE4E] mr-2" />
                                Product Highlights
                            </h3>
                            <ul className="space-y-2 text-gray-600">
                                {product.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="text-[#8DBE4E] mr-2">•</span> {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a href="https://wa.me/919529350434"
                            target="_blank"
                            rel="noopener noreferrer">

                            <button className="w-full lg:w-auto px-8 py-4 bg-[#8DBE4E] text-white font-semibold rounded-lg hover:bg-[#7AB042] transition-colors duration-200">
                                Inquire About This Product
                            </button>

                        </a>
                    </div>
                </div>

                {/* Nutrition and Storage */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                    {/* Nutrition Information */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-[#1C4532] mb-6 flex items-center">
                            <Info className="h-6 w-6 text-[#FFD046] mr-3" />
                            Nutrition Information
                        </h2>
                        <div className="space-y-3 text-gray-700">
                            <p>
                                <span className="font-semibold">Serving Size:</span> {product.nutrition.servingSize}
                            </p>
                            <p>
                                <span className="font-semibold">Calories:</span> {product.nutrition.calories}
                            </p>
                            <p>
                                <span className="font-semibold">Total Fat:</span> {product.nutrition.totalFat}
                            </p>
                            <p>
                                <span className="font-semibold">Sodium:</span> {product.nutrition.sodium}
                            </p>
                            <p>
                                <span className="font-semibold">Total Carbs:</span> {product.nutrition.totalCarbs}
                            </p>
                            <p>
                                <span className="font-semibold">Protein:</span> {product.nutrition.protein}
                            </p>
                        </div>
                    </div>

                    {/* Storage and Usage Tips */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-[#1C4532] mb-6 flex items-center">
                            <Snowflake className="h-6 w-6 text-[#FFD046] mr-3" />
                            Storage & Usage
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-[#1C4532] mb-2 flex items-center">
                                    <BookOpen className="h-5 w-5 text-[#8DBE4E] mr-2" />
                                    Instructions
                                </h3>
                                <p className="text-gray-700">{product.storage.instructions}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#1C4532] mb-2 flex items-center">
                                    <Clock className="h-5 w-5 text-[#8DBE4E] mr-2" />
                                    Shelf Life
                                </h3>
                                <p className="text-gray-700">{product.storage.shelfLife}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#1C4532] mb-2 flex items-center">
                                    <Utensils className="h-5 w-5 text-[#8DBE4E] mr-2" />
                                    Usage Tips
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    {product.storage.usageTips.map((tip, index) => (
                                        <li key={index} className="flex items-center">
                                            <span className="text-[#8DBE4E] mr-2">•</span> {tip}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
