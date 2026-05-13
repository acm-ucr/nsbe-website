import React from 'react';

const Opportunities = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-nsbe-yellow-100 text-4xl font-bold text-right">
          OPPORTUNITIES
        </p>

        <div className="grid grid-cols-2 gap-24 items-start">
      
          <div className="relative">
            <div className="absolute inset-0 bg-nsbe-red-100 rounded-2xl translate-x-4 translate-y-4" />
            
            <div className="relative bg-nsbe-gray-50 border p-10 rounded-2xl">
              <p className="text-white text-3xl font-extrabold mb-6">
                NSBE FALL REGIONAL CONFERENCE
              </p>
              <p className="text-gray-400 text-lg mb-10">
                Excited to dip your toes in professional development and have the chance to meet students and recruiters from schools across the southwest? The Region VI Fall Conference is for you!
              </p>
              <div className="self-start">
                <a href="#" className="inline-block border-2 border-white text-white px-8 py-2 rounded-lg font-bold hover:bg-white hover:text-black">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>

          <div className="relative mt-32">
            <div className="absolute inset-0 bg-nsbe-green-100 rounded-2xl translate-x-4 translate-y-4" />
            
            <div className="relative bg-nsbe-gray-50 border p-10 rounded-2xl flex flex-col">
              <p className="text-white text-3xl font-extrabold mb-6">
                NSBE ANNUAL CONVENTION
              </p>
              <p className="text-gray-400 text-lg mb-10">
                Ready for a larger career fair? NSBE's annual convention exposes students to hundreds of companies hiring both interns and full-time new grads; there are limitless opportunities to connect with ambitious students and professionals in various engineering and financial fields!
              </p>
              <div className="self-end">
                <a href="#" className="inline-block border-2 border-white text-white px-8 py-2 rounded-lg font-extrabold hover:bg-white hover:text-black">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Opportunities;