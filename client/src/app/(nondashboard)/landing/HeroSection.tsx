// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useDispatch } from "react-redux";
// import { useRouter } from "next/navigation";
// import { setFilters } from "@/state";

// const HeroSection = () => {
//   const dispatch = useDispatch();
//   const [searchQuery, setSearchQuery] = useState("");
//   const router = useRouter();

//   const handleLocationSearch = async () => {
//     try {
//       const trimmedQuery = searchQuery.trim();
//       if (!trimmedQuery) return;

//       const response = await fetch(
//         `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
//           trimmedQuery
//         )}.json?access_token=${
//           process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
//         }&fuzzyMatch=true`
//       );
//       const data = await response.json();
//       if (data.features && data.features.length > 0) {
//         const [lng, lat] = data.features[0].center;
//         dispatch(
//           setFilters({
//             location: trimmedQuery,
//             coordinates: [lat, lng],
//           })
//         );
//         const params = new URLSearchParams({
//           location: trimmedQuery,
//           lat: lat.toString(),
//           lng: lng,
//         });
//         router.push(`/search?${params.toString()}`);
//       }
//     } catch (error) {
//       console.error("error search location:", error);
//     }
//   };

//   return (
//     <div className="relative h-screen">
//       <Image
//         src="/landing-splash.jpg"
//         alt="Rentiful Rental Platform Hero Section"
//         fill
//         className="object-cover object-center"
//         priority
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="absolute top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center w-full"
//       >
//         <div className="max-w-4xl mx-auto px-16 sm:px-12">
//           <h1 className="text-5xl font-bold text-white mb-4">
//             Start your journey to finding the perfect place to call home
//           </h1>
//           <p className="text-xl text-white mb-8">
//             Explore our wide range of rental properties tailored to fit your
//             lifestyle and needs!
//           </p>

//           <div className="flex justify-center">
//             <Input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search by city, neighborhood or address"
//               className="w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12"
//             />
//             <Button
//               onClick={handleLocationSearch}
//               className="bg-secondary-500 text-white rounded-none rounded-r-xl border-none hover:bg-secondary-600 h-12"
//             >
//               Search
//             </Button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default HeroSection;

'use client';

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <div className='relative min-h-[calc(100vh-4rem)]'>
            <Image
                src='/landing-splash.jpg'
                alt='Rentiful Rental Platform Hero Section'
                fill
                className='object-cover object-center z-0'
                priority
            />
            <div className='absolute inset-0 bg-black/60 z-10' />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='absolute inset-0 z-20 flex items-center justify-center'
            >
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <h1 className='text-4xl sm:text-5xl font-bold text-white mb-6'>
                        Start your journey to finding the perfect place to call home
                    </h1>
                    <p className='text-lg sm:text-xl text-white mb-8'>
                        Explore our wide range of rental properties tailored to fit your lifestyle and needs!
                    </p>
                    <div className='flex justify-center max-w-2xl mx-auto'>
                        <input
                            type='text'
                            defaultValue=''
                            onChange={(e) => console.log(e.target.value)}
                            placeholder='Search by city, neighborhood or address'
                            className='w-full rounded-l-xl border-0 bg-white h-12 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary'
                        />
                        <button
                            onClick={() => { }}
                            className='bg-primary hover:bg-primary/90 text-white rounded-r-xl px-6 h-12 font-medium transition-colors'
                        >
                            Search
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default HeroSection