import React, { useState } from 'react';
import {
    Calendar,
    Target,
    Globe,
    AlertTriangle,
    Bot,
    Zap,
    ArrowUp,
    Eye,
    Package,
    TrendingUp,
    Clock,
    MapPin,
    CheckCircle
} from 'lucide-react';

const InventoryPlanner = () => {
    const [selectedFestival, setSelectedFestival] = useState(null);

    const upcomingFestivals = [
        {
            id: 1,
            name: 'Raksha Bandhan',
            date: 'Aug 19',
            daysLeft: 14,
            category: 'Family',
            color: 'bg-pink-500',
            urgency: 'high',
            items: ['Rakhi Sets', 'Sweets', 'Brother Gifts', 'Gift Wrapping'],
            expectedSales: '₹45,000',
            preparation: 'Critical - Stock Now'
        },
        {
            id: 2,
            name: 'Janmashtami',
            date: 'Aug 26',
            daysLeft: 21,
            category: 'Religious',
            color: 'bg-blue-500',
            urgency: 'medium',
            items: ['Krishna Items', 'Decorations', 'Prasad Boxes'],
            expectedSales: '₹28,000',
            preparation: 'Plan by Aug 15'
        },
        {
            id: 3,
            name: 'Ganesh Chaturthi',
            date: 'Sep 7',
            daysLeft: 33,
            category: 'Religious',
            color: 'bg-orange-500',
            urgency: 'low',
            items: ['Ganesh Idols', 'Modak Boxes', 'Decorations'],
            expectedSales: '₹35,000',
            preparation: 'Early Planning'
        },
        {
            id: 4,
            name: 'Navratri',
            date: 'Oct 15',
            daysLeft: 71,
            category: 'Cultural',
            color: 'bg-purple-500',
            urgency: 'low',
            items: ['Chaniya Choli', 'Dandiya Sticks', 'Accessories'],
            expectedSales: '₹65,000',
            preparation: 'Monitor Trends'
        },
        {
            id: 5,
            name: 'Diwali',
            date: 'Nov 12',
            daysLeft: 99,
            category: 'Major Festival',
            color: 'bg-yellow-500',
            urgency: 'low',
            items: ['Diyas', 'Rangoli', 'Sweets', 'Decorations'],
            expectedSales: '₹120,000',
            preparation: 'Long-term Planning'
        }
    ];

    const topProductsToStock = [
        {
            id: 1,
            name: 'Silk Rakhi Sets',
            demand: 'Very High',
            profit: '₹120',
            units: '25-30',
            urgency: 'high',
            trend: '+45%',
            stockLevel: 'Critical',
            competitor: '₹180',
            yourPrice: '₹150'
        },
        {
            id: 2,
            name: 'Traditional Sweets Box',
            demand: 'High',
            profit: '₹80',
            units: '15-20',
            urgency: 'high',
            trend: '+32%',
            stockLevel: 'Low',
            competitor: '₹220',
            yourPrice: '₹200'
        },
        {
            id: 3,
            name: 'Brother Gift Sets',
            demand: 'Medium',
            profit: '₹200',
            units: '10-15',
            urgency: 'medium',
            trend: '+18%',
            stockLevel: 'Good',
            competitor: '₹450',
            yourPrice: '₹399'
        },
        {
            id: 4,
            name: 'Cotton Kurta Sets',
            demand: 'High',
            profit: '₹150',
            units: '20-25',
            urgency: 'high',
            trend: '+28%',
            stockLevel: 'Low',
            competitor: '₹380',
            yourPrice: '₹350'
        },
        {
            id: 5,
            name: 'Festive Jewelry',
            demand: 'Medium',
            profit: '₹300',
            units: '8-12',
            urgency: 'medium',
            trend: '+15%',
            stockLevel: 'Good',
            competitor: '₹650',
            yourPrice: '₹599'
        }
    ];

    const nearbyDemand = [
        {
            id: 1,
            area: 'Karol Bagh',
            distance: '2.5 km',
            product: 'Silk Sarees',
            demand: 'Very High',
            shoppers: '1,200+',
            avgSpend: '₹2,500',
            peakHours: '6-9 PM'
        },
        {
            id: 2,
            area: 'Lajpat Nagar',
            distance: '3.1 km',
            product: 'Traditional Jewelry',
            demand: 'High',
            shoppers: '800+',
            avgSpend: '₹1,800',
            peakHours: '7-10 PM'
        },
        {
            id: 3,
            area: 'Chandni Chowk',
            distance: '4.2 km',
            product: 'Wedding Wear',
            demand: 'High',
            shoppers: '2,000+',
            avgSpend: '₹3,200',
            peakHours: '5-8 PM'
        },
        {
            id: 4,
            area: 'Connaught Place',
            distance: '5.0 km',
            product: 'Indo-Western',
            demand: 'Medium',
            shoppers: '600+',
            avgSpend: '₹2,100',
            peakHours: '6-9 PM'
        }
    ];

    const avoidProducts = [
        {
            id: 1,
            name: 'Heavy Winter Jackets',
            reason: 'Seasonal Mismatch',
            returnRate: '35%',
            impact: 'High Loss',
            lossAmount: '₹12,000',
            suggestion: 'Wait until October'
        },
        {
            id: 2,
            name: 'Swimwear Collection',
            reason: 'Low Demand',
            returnRate: '28%',
            impact: 'Medium Loss',
            lossAmount: '₹8,500',
            suggestion: 'Focus on festive wear'
        },
        {
            id: 3,
            name: 'Formal Suits (Western)',
            reason: 'Cultural Preference',
            returnRate: '22%',
            impact: 'Low Loss',
            lossAmount: '₹5,000',
            suggestion: 'Consider Indo-Western'
        },
        {
            id: 4,
            name: 'Imported Electronics',
            reason: 'High Return Rate',
            returnRate: '40%',
            impact: 'High Loss',
            lossAmount: '₹15,000',
            suggestion: 'Stick to textiles'
        }
    ];

    const aiRecommendations = [
        {
            id: 1,
            product: 'Kurti Set #A32',
            action: 'Restock 5 units before Aug 8',
            priority: 'High',
            reason: 'Festival demand spike expected',
            confidence: '92%',
            potentialRevenue: '₹3,500'
        },
        {
            id: 2,
            product: 'Silk Saree #B17',
            action: 'Reduce price by 8%',
            priority: 'Medium',
            reason: 'Competitor analysis shows overpricing',
            confidence: '87%',
            potentialRevenue: '₹2,200'
        },
        {
            id: 3,
            product: 'Jewelry Set #C44',
            action: 'Increase stock by 12 units',
            priority: 'High',
            reason: 'Local wedding season approaching',
            confidence: '94%',
            potentialRevenue: '₹8,400'
        },
        {
            id: 4,
            product: 'Cotton Dupatta #D21',
            action: 'Maintain current stock',
            priority: 'Low',
            reason: 'Stable demand pattern',
            confidence: '78%',
            potentialRevenue: '₹1,800'
        },
        {
            id: 5,
            product: 'Handbag #E33',
            action: 'Clear inventory - 20% off',
            priority: 'Medium',
            reason: 'Seasonal transition needed',
            confidence: '85%',
            potentialRevenue: '₹2,800'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">📦 Inventory Planner</h1>
                        <p className="text-gray-600">AI-powered insights to optimize your stock and maximize profits</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <div className="text-sm text-gray-600">Total Inventory Value</div>
                            <div className="text-2xl font-bold text-green-600">₹2,45,000</div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-gray-600">AI Confidence</div>
                            <div className="text-2xl font-bold text-blue-600">89%</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">
                {/* Main Content */}
                <div className="flex-1 p-6 space-y-6">
                    {/* Upcoming Festival Timeline */}
                    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-6">
                            <Calendar className="w-6 h-6 text-purple-600" />
                            <h2 className="text-xl font-semibold text-gray-800">🎉 Upcoming Festival Timeline</h2>
                        </div>

                        <div className="space-y-4">
                            {upcomingFestivals.map((festival) => (
                                <div key={festival.id} className="relative">
                                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                                        onClick={() => setSelectedFestival(festival.id === selectedFestival ? null : festival.id)}>
                                        <div className={`w-4 h-4 rounded-full ${festival.color}`}></div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-semibold text-gray-800 text-lg">{festival.name}</h3>
                                                <span className="text-sm text-gray-500">• {festival.date}</span>
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${festival.urgency === 'high' ? 'bg-red-100 text-red-700' :
                                                        festival.urgency === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                                            'bg-green-100 text-green-700'
                                                    }`}>
                                                    {festival.daysLeft} days left
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                                <span>Expected Sales: <strong className="text-green-600">{festival.expectedSales}</strong></span>
                                                <span>Status: <strong>{festival.preparation}</strong></span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <button className="text-blue-600 hover:text-blue-800 font-medium">
                                                Plan Stock →
                                            </button>
                                        </div>
                                    </div>

                                    {selectedFestival === festival.id && (
                                        <div className="mt-2 p-4 bg-white rounded-lg border border-gray-200">
                                            <h4 className="font-medium text-gray-800 mb-2">Recommended Stock Items:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {festival.items.map((item, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Products to Stock */}
                    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-6">
                            <Target className="w-6 h-6 text-green-600" />
                            <h2 className="text-xl font-semibold text-gray-800">🔮 Top Products to Stock This Week</h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2 border-gray-200">
                                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Product</th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Demand</th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Profit/Unit</th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Stock Level</th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Recommended</th>
                                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Trend</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topProductsToStock.map((product) => (
                                        <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-3 h-3 rounded-full ${product.urgency === 'high' ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
                                                    <div>
                                                        <div className="font-medium text-gray-800">{product.name}</div>
                                                        <div className="text-sm text-gray-600">Your Price: {product.yourPrice}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${product.demand === 'Very High' ? 'bg-red-100 text-red-700' :
                                                        product.demand === 'High' ? 'bg-orange-100 text-orange-700' :
                                                            'bg-yellow-100 text-yellow-700'
                                                    }`}>
                                                    {product.demand}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="font-semibold text-green-600">{product.profit}</div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <span className={`px-2 py-1 rounded-full text-sm ${product.stockLevel === 'Critical' ? 'bg-red-100 text-red-700' :
                                                        product.stockLevel === 'Low' ? 'bg-yellow-100 text-yellow-700' :
                                                            'bg-green-100 text-green-700'
                                                    }`}>
                                                    {product.stockLevel}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="font-medium text-gray-800">{product.units} units</div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-1 text-green-600">
                                                    <ArrowUp className="w-4 h-4" />
                                                    <span className="font-medium">{product.trend}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* In Demand Near You */}
                    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-6">
                            <MapPin className="w-6 h-6 text-blue-600" />
                            <h2 className="text-xl font-semibold text-gray-800">📍 In Demand Near You</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {nearbyDemand.map((location) => (
                                <div key={location.id} className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="font-semibold text-gray-800 text-lg">{location.area}</h3>
                                        <span className="text-sm text-gray-600 flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {location.distance}
                                        </span>
                                    </div>

                                    <div className="mb-3">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-sm font-medium text-blue-700">{location.product}</span>
                                            <span className={`px-2 py-1 rounded-full text-xs ${location.demand === 'Very High' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                                                }`}>
                                                {location.demand}
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-600">Avg. Spend: <strong>{location.avgSpend}</strong></div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Eye className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">{location.shoppers} shoppers</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-600">{location.peakHours}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Avoid These Products */}
                    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-6">
                            <AlertTriangle className="w-6 h-6 text-red-600" />
                            <h2 className="text-xl font-semibold text-gray-800">🔻 Avoid These Products</h2>
                        </div>

                        <div className="space-y-4">
                            {avoidProducts.map((product) => (
                                <div key={product.id} className="flex items-center gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-2">
                                            <h3 className="font-semibold text-gray-800">{product.name}</h3>
                                            <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                                                {product.returnRate} returns
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-1">{product.reason}</div>
                                        <div className="text-sm text-green-700 font-medium">💡 {product.suggestion}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-medium text-red-700">{product.impact}</div>
                                        <div className="text-sm text-gray-600">Potential Loss: {product.lossAmount}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* AI Recommendations Side Panel */}
                <div className="w-96 bg-white border-l border-gray-200 p-6 overflow-y-auto">
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <Bot className="w-6 h-6 text-purple-600" />
                            <h2 className="text-xl font-semibold text-gray-800">💡 AI Recommendations</h2>
                        </div>
                        <p className="text-sm text-gray-600">Personalized insights for your products</p>
                    </div>

                    <div className="space-y-4">
                        {aiRecommendations.map((rec) => (
                            <div key={rec.id} className={`p-4 rounded-lg border ${rec.priority === 'High' ? 'bg-red-50 border-red-200' :
                                    rec.priority === 'Medium' ? 'bg-yellow-50 border-yellow-200' :
                                        'bg-green-50 border-green-200'
                                }`}>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className={`w-3 h-3 rounded-full ${rec.priority === 'High' ? 'bg-red-500' :
                                            rec.priority === 'Medium' ? 'bg-yellow-500' :
                                                'bg-green-500'
                                        }`}></div>
                                    <h3 className="font-semibold text-gray-800">{rec.product}</h3>
                                </div>

                                <div className="mb-3">
                                    <p className="text-sm font-medium text-gray-700 mb-1">{rec.action}</p>
                                    <p className="text-xs text-gray-600">{rec.reason}</p>
                                </div>

                                <div className="flex items-center justify-between mb-3">
                                    <div className="text-xs text-gray-600">
                                        Confidence: <span className="font-medium text-blue-600">{rec.confidence}</span>
                                    </div>
                                    <div className="text-xs text-gray-600">
                                        Revenue: <span className="font-medium text-green-600">{rec.potentialRevenue}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${rec.priority === 'High' ? 'bg-red-100 text-red-700' :
                                            rec.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-green-100 text-green-700'
                                        }`}>
                                        {rec.priority} Priority
                                    </span>
                                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                        Apply →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="flex items-center gap-2 mb-3">
                            <Zap className="w-5 h-5 text-purple-600" />
                            <h3 className="font-semibold text-purple-800">Quick AI Analysis</h3>
                        </div>
                        <p className="text-sm text-purple-700 mb-4">
                            Get instant inventory recommendations based on your current stock and upcoming trends.
                        </p>
                        <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                            Generate New Insights
                        </button>
                    </div>

                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">📊 Quick Stats</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Products Analyzed:</span>
                                <span className="font-medium">247</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">High Priority Items:</span>
                                <span className="font-medium text-red-600">12</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Potential Revenue:</span>
                                <span className="font-medium text-green-600">₹18,700</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Last Updated:</span>
                                <span className="font-medium">2 min ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryPlanner;