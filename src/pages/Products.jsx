"use client"

import { useState } from "react"
import { Search, Filter, Star } from 'lucide-react'
import { Link } from "react-router-dom"
import productsData from "../data/products"

const Products = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    const categories = ["All", "vegetables", "mixed"]

    const products = productsData.map(product => ({
        id: product.id,
        name: product.name,
        category: product.category,
        image: product.image,
        description: product.shortDescription,
        rating: product.rating || "4.5", // Default rating if not provided
    }))

    const filteredProducts = products.filter(product => {
        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen bg-[#F9F9F6] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#1C4532] mb-4">Our Products</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our premium frozen food collection—fresher, healthier, and always delicious.
                    </p>
                </div>

                {/* Search & Filter */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-12">
                    <div className="flex flex-col lg:flex-row gap-4 items-center">
                        {/* Search */}
                        <div className="relative w-full lg:w-2/3">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8DBE4E] focus:outline-none"
                            />
                        </div>

                        {/* Filter */}
                        <div className="flex items-center w-full lg:w-1/3">
                            <Filter className="text-gray-400 mr-2" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8DBE4E] focus:outline-none"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <div className="relative">
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-[#1C4532] mb-2">{product.name}</h3>
                                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                                <Link to={`/products/${product.id}`}>
                                    <button className="bg-[#1C4532] text-white px-5 py-2 rounded-lg hover:bg-[#14532d] transition duration-200">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <Search className="mx-auto text-gray-400 w-16 h-16 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-600">No products found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                    </div>
                )}

                {/* CTA Section */}
                <div className="bg-[#1C4532] rounded-xl text-white p-10 mt-20 text-center shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Need Custom Products?</h2>
                    <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                        We offer tailor-made processing and packaging solutions to meet your unique requirements.
                    </p>
                    <button className="px-8 py-4 bg-[#FFD046] text-[#1C4532] font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200">
                        Request Custom Quote
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products
