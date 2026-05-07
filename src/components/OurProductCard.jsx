import React from 'react'

const OurProductCard = () => {
  const products = [
    {
      id: 1,
      name: 'Galaxy S22 Ultra',
      minPrice: '39999',
      maxPrice: '39999',
      stores: [
        { name: 'Daraz', price: '32999', color: 'text-orange-600' },
        { name: 'Priceoye', price: '32999', color: 'text-blue-600' },
        { name: 'HomeShopping', price: '32999', color: 'text-yellow-600' },
        { name: 'Mobile Mall', price: '32999', color: 'text-purple-600' }
      ]
    },
    {
      id: 2,
      name: 'Galaxy S22 Ultra',
      minPrice: '39999',
      maxPrice: '39999',
      stores: [
        { name: 'Daraz', price: '32999', color: 'text-orange-600' },
        { name: 'Priceoye', price: '32999', color: 'text-blue-600' },
        { name: 'HomeShopping', price: '32999', color: 'text-yellow-600' },
        { name: 'Mobile Mall', price: '32999', color: 'text-purple-600' }
      ]
    },
    {
      id: 3,
      name: 'Galaxy S22 Ultra',
      minPrice: '39999',
      maxPrice: '39999',
      stores: [
        { name: 'Daraz', price: '32999', color: 'text-orange-600' },
        { name: 'Priceoye', price: '32999', color: 'text-blue-600' },
        { name: 'HomeShopping', price: '32999', color: 'text-yellow-600' },
        { name: 'Mobile Mall', price: '32999', color: 'text-purple-600' }
      ]
    },
    {
      id: 4,
      name: 'Galaxy S22 Ultra',
      minPrice: '39999',
      maxPrice: '39999',
      stores: [
        { name: 'Daraz', price: '32999', color: 'text-orange-600' },
        { name: 'Priceoye', price: '32999', color: 'text-blue-600' },
        { name: 'HomeShopping', price: '32999', color: 'text-yellow-600' },
        { name: 'Mobile Mall', price: '32999', color: 'text-purple-600' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Compare Products</h1>
          <p className="text-gray-600">Find the best deals across multiple stores</p>
        </div>

        {/* Products Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {products.map((product) => (
            <div key={product.id} className="w-full max-w-[321.77px]">
              {/* Product Card */}
              <div className="relative w-full h-[375.4px] bg-gradient-to-br from-white via-white to-blue-50/30 rounded-[32px] shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-visible">
                
                {/* Price Ribbon - Left Side */}
                <div className="absolute -left-2 top-12 w-[145px] bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-r-[20px] shadow-lg py-5 px-4 z-10 border-l-4 border-blue-200">
                  {product.stores.map((store, index) => (
                    <div key={index} className="mb-[14px] last:mb-0">
                      {/* Store Name with custom styling */}
                      <div className="mb-1">
                        {store.name === 'Daraz' && (
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <path d="M12 2L2 7v10c0 5.5 3.8 9.7 10 11 6.2-1.3 10-5.5 10-11V7l-10-5z" fill="#FF6B35"/>
                            </svg>
                            <span className="text-[12px] font-bold text-orange-600">Daraz</span>
                          </div>
                        )}
                        {store.name === 'Priceoye' && (
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" fill="#4A90E2"/>
                              <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <span className="text-[12px] font-bold text-blue-600">Priceoye</span>
                          </div>
                        )}
                        {store.name === 'HomeShopping' && (
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" fill="#F59E0B"/>
                            </svg>
                            <span className="text-[12px] font-bold text-amber-600">HomeShopping</span>
                          </div>
                        )}
                        {store.name === 'Mobile Mall' && (
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <rect x="5" y="2" width="14" height="20" rx="2" fill="#8B5CF6"/>
                              <circle cx="12" cy="18" r="1" fill="white"/>
                            </svg>
                            <span className="text-[12px] font-bold text-purple-600">Mobile Mall</span>
                          </div>
                        )}
                      </div>
                      {/* Price */}
                      <div className="text-[16px] font-bold text-gray-900">
                        Rs {store.price}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card Content */}
                <div className="relative h-full flex flex-col items-center justify-between p-6 pt-10">
                  
                  {/* Product Image Section */}
                  <div className="flex-1 flex items-center justify-center w-full mb-2">
                    <div className="relative w-[200px] h-[180px]">
                      {/* Phone Back */}
                      <div className="absolute left-0 top-0 w-[120px] h-[160px] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[24px] shadow-2xl overflow-hidden transform -rotate-6">
                        {/* Carbon Fiber Texture */}
                        <div className="absolute inset-0 opacity-20" style={{
                          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255,255,255,.15) 1px, rgba(255,255,255,.15) 2px), repeating-linear-gradient(-45deg, transparent, transparent 1px, rgba(255,255,255,.15) 1px, rgba(255,255,255,.15) 2px)'
                        }}></div>
                        
                        {/* Camera Module */}
                        <div className="absolute top-3 left-3 w-[45px] h-[75px] bg-gray-950 rounded-[12px] border border-gray-700 shadow-lg">
                          <div className="flex flex-col gap-1.5 p-1.5">
                            <div className="w-[35px] h-[35px] bg-gradient-to-br from-gray-600 to-gray-900 rounded-full border-2 border-gray-700 flex items-center justify-center">
                              <div className="w-[25px] h-[25px] bg-gradient-to-br from-blue-900 to-black rounded-full"></div>
                            </div>
                            <div className="w-[35px] h-[35px] bg-gradient-to-br from-gray-600 to-gray-900 rounded-full border-2 border-gray-700 flex items-center justify-center">
                              <div className="w-[25px] h-[25px] bg-gradient-to-br from-blue-900 to-black rounded-full"></div>
                            </div>
                            <div className="flex justify-end">
                              <div className="w-[18px] h-[18px] bg-gray-800 rounded-full border border-gray-600"></div>
                            </div>
                          </div>
                        </div>

                        {/* narzo Text */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-blue-400/20 text-[8px] font-light tracking-[0.2em]">
                          narzo
                        </div>
                      </div>

                      {/* Phone Front */}
                      <div className="absolute right-0 top-4 w-[140px] h-[190px] bg-black rounded-[26px] border-[3px] border-gray-800 shadow-2xl overflow-hidden transform rotate-3">
                        {/* Screen with narzo branding */}
                        <div className="w-full h-full bg-gradient-to-br from-green-300 via-blue-400 to-yellow-300 flex items-center justify-center relative overflow-hidden">
                          {/* Animated Striped pattern */}
                          <div className="absolute inset-0" style={{
                            backgroundImage: 'repeating-linear-gradient(110deg, transparent 0px, transparent 8px, rgba(255,255,255,0.08) 8px, rgba(255,255,255,0.08) 9px), repeating-linear-gradient(110deg, transparent 0px, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px)'
                          }}></div>
                          
                          {/* narzo Text */}
                          <div className="relative z-10 -rotate-90 origin-center">
                            <div className="text-white text-[52px] font-bold tracking-tight drop-shadow-lg" style={{
                              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                            }}>
                              narzo
                            </div>
                          </div>
                        </div>
                        {/* Notch/Camera Cutout */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50px] h-[18px] bg-black rounded-b-2xl"></div>
                      </div>
                    </div>
                  </div>

                  {/* Product Name */}
                  <div className="text-center mb-3">
                    <h3 className="text-[24px] font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent tracking-tight">
                      {product.name}
                    </h3>
                  </div>

                  {/* Price Range */}
                  <div className="flex items-center justify-center gap-5 mb-5">
                    <div className="text-center">
                      <div className="text-[11px] text-gray-500 font-semibold mb-1 tracking-wide">Min</div>
                      <div className="text-[18px] font-bold text-green-600">Rs.{product.minPrice}</div>
                    </div>
                    <div className="text-gray-300 font-bold text-xl">—</div>
                    <div className="text-center">
                      <div className="text-[11px] text-gray-500 font-semibold mb-1 tracking-wide">Max</div>
                      <div className="text-[18px] font-bold text-red-600">Rs.{product.maxPrice}</div>
                    </div>
                  </div>

                  {/* Compare All Button */}
                  <button className="w-full max-w-[170px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-[15px] py-3.5 px-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
                    Compare All
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurProductCard