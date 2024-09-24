import React from 'react'

const Shimmermenu = () => {
  return (
    <div className="w-[45%] mx-auto p-6 space-y-6">
    {/* Header */}
    <div className="flex items-center space-x-6">
      <div className="shimmer w-20 h-20 rounded bg-gray-300"></div>
      <div className="space-y-2">
        <div className="shimmer w-48 h-6 bg-gray-300"></div>
        <div className="shimmer w-32 h-4 bg-gray-300"></div>
      </div>
    </div>

    {/* Categories */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="shimmer w-full h-8 bg-gray-300 rounded"></div>
      <div className="shimmer w-full h-8 bg-gray-300 rounded"></div>
      <div className="shimmer w-full h-8 bg-gray-300 rounded"></div>
      <div className="shimmer w-full h-8 bg-gray-300 rounded"></div>
    </div>
  </div>
  )
}

export default Shimmermenu

