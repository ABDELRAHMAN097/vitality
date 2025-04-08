"use client"
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { db } from '../lib/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

type FirebaseCardType = {
  id: string;
  text1: string; // سيستخدم كعنوان للكارد
  text2: string; // سيستخدم كوصف للكارد
};

export const Services = () => {
  const [firebaseCards, setFirebaseCards] = useState<FirebaseCardType[]>([]);

  // البيانات الافتراضية (الصور والنصوص الاحتياطية)
  const defaultCards = [
    {
      imageUrl: '/assets/img/services03.png',
      title: 'Technology and Programming',
      description: 'Dive into the world of technical comprehensive courses in programming, web development, data science, and more.',
      imageWidth: 120,
      imageHeight: 120
    },
    {
      imageUrl: '/assets/img/services01.png',
      title: 'Personal Development',
      description: 'Enhance your skills with our personal development courses designed for professional growth.',
      imageWidth: 100,
      imageHeight: 100
    },
    {
      imageUrl: '/assets/img/services02.png',
      title: 'Creative Arts',
      description: 'Explore your creativity with our arts and design courses from industry experts.',
      imageWidth: 110,
      imageHeight: 110
    }
  ];

  // جلب البيانات من Firebase
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'cards'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          text1: doc.data().text1 || '',
          text2: doc.data().text2 || ''
        })) as FirebaseCardType[];
        setFirebaseCards(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    fetchCards();
  }, []);

  // دمج البيانات من Firebase مع البيانات الافتراضية
  const getMergedCardData = (index: number) => {
    // إذا كانت هناك بيانات من Firebase للكارد الحالي
    if (firebaseCards[index]) {
      return {
        ...defaultCards[index],
        title: firebaseCards[index].text1 || defaultCards[index].title,
        description: firebaseCards[index].text2 || defaultCards[index].description
      };
    }
    // إذا لم تكن هناك بيانات من Firebase، نستخدم البيانات الافتراضية
    return defaultCards[index];
  };

  return (
    <div id="Services" className="flex flex-col items-center justify-center gap-10 relative w-full min-h-screen my-10 md:my-2">
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 opacity-50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 opacity-50 rounded-full blur-3xl"></div>
      
      <div className="flex flex-col md:flex-row items-center justify-center px-2 md:px-7 w-full relative z-30">
        <div className='w-full flex flex-col items-center md:items-start justify-center gap-2 border-red-500 my-10 md:my-2'>
          <h2 className="text-[#190C71] text-center md:text-start font-semibold leading-[75px] text-xl md:text-6xl">
            Innovative Online<br className="hidden md:inline" />Learning Solutions
          </h2>
        </div>
        <div className='w-full flex flex-col items-center md:items-start justify-center gap-2 border-blue-500'>
          <div className="p-2 bg-[#D0DAF5] max-w-[310px] mx-auto md:mx-0 rounded-2xl">
            <p className="text-[#360099] text-xl text-center font-medium">
              Through Expert Online Training
            </p>
          </div>
          <p className="text-center md:text-start text-slate-500 text-xl md:text-xl my-10 md:my-2">
            experience the future education with our cutting edge online learning platform innovative courses utilize the latest technology
          </p>
        </div>
      </div>
      
      <div className='flex flex-col md:flex-row items-center justify-around gap-5 p-4 w-full relative z-50 mt-8'>
        {defaultCards.map((_, index) => {
          const cardData = getMergedCardData(index);
          return (
            <Card 
              key={`card-${index}`}
              imageUrl={cardData.imageUrl}
              title={cardData.title}
              description={cardData.description}
              imageWidth={cardData.imageWidth}
              imageHeight={cardData.imageHeight}
            />
          );
        })}
      </div>
    </div>
  )
}