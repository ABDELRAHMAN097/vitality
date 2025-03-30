import React from 'react'
import Card from '../Card/Card'

export const Services = () => {

  const cardsData = [
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

  return (
    <div id="Services" className="flex flex-col items-center justify-center gap-10 relative w-full min-h-screen my-10 md:my-2">
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 opacity-50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 opacity-50 rounded-full blur-3xl"></div>
        <div className="flex flex-col md:flex-row items-center justify-center px-2 md:px-7 w-full relative z-30">
          <div className='w-full flex flex-col items-center md:items-start justify-center gap-2 border-red-500 my-10 md:my-2'>
            <h2 className="text-[#190C71] text-center md:text-start font-semibold text-xl md:text-5xl">
            Innovative Online<br className="hidden md:inline" />Learning Solutions
            </h2>
          </div>
          <div className='w-full flex flex-col items-center md:items-start justify-center gap-2 border-blue-500'>
          <div className="p-2 bg-[#D0DAF5] max-w-[280px] rounded-2xl">
            <p className="text-[#360099] text-center md:text-start font-medium">
              Through Expert Online Training
            </p>
          </div>
          <p className="text-center md:text-start text-slate-500 text-2x my-10 md:my-2">
           experience the future education with or cutting edge online learning platform innovative courses utilize the latest technology
          </p>
          </div>

        </div>
          <div className='flex flex-col md:flex-row items-center justify-around w-full relative z-50 mt-8'>
            {cardsData.map((card, index) => (
          <Card 
            key={`card-${index}`}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            imageWidth={card.imageWidth}
            imageHeight={card.imageHeight}
          />
        ))}
          </div>
    </div>
  )
}
