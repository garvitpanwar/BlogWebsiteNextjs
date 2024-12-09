'use client'
import { Card } from '@/components/Card';
import { Button } from '@headlessui/react';
import axios from 'axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const Bottom = () => {
    const [category, setCatory] = useState('Web Development');
    const [data, setData] = useState([]);
    const categories = [
        {
            id: 1,
            name: "Web Development"
        },
        {
            id: 2,
            name: "Artifical Intelligence"
        },
        {
            id: 3,
            name: "Cloud"
        },
        {
            id: 4,
            name: "Data Science"
        },
    ]

    const handleCategory = (cat) => {
        // console.log(cat);
        setCatory(cat.name);
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/everything?q=${category}&language=en&apiKey=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
                );
                setData(response.data.articles);
                // console.log(response.data.data[0]?.title);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [category]);



    return (
        <div className="w-full mx-auto">
            <div className="flex justify-center">
                {categories.map((item) => (
                    <div key={item.id} className='my-20 bg-gray-700 text-white border-2 border-gray-500'>
                        <Button onClick={() => handleCategory(item)} className={`px-20 py-4 ${category == item.name && 'bg-white text-black'}`}>
                            {item.name}
                        </Button>
                    </div>
                ))}
            </div>
            {/* <div className="mt-4 text-center">Selected Category: {category}</div> */}
            <div className="grid grid-cols-2 gap-20 mx-[25%] mt-6">
                {data.map((item, idx) => (
                    
                    <div key={idx} className="">
                        <Card
                            imageSrc={item.urlToImage}
                            description={item.description}
                            title={item.title}
                        />
                    </div>
                ))}
            </div>
        </div>

    )
}
