import React, { useEffect, useState } from 'react';
import { TbFidgetSpinner } from 'react-icons/tb';

const Loading = () => {

      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 300);
        return () => clearTimeout(timer);
      }, []);
      if (loading) {
        return (
          <div className="flex justify-center items-center min-h-screen bg-[#0f172a]">
            <TbFidgetSpinner className="text-cyan-400 text-6xl animate-spin" />
            OR: <p className="text-xl text-white">Loading...</p>
          </div>
        );
      }

    return (
        <div>
            
        </div>
    );
};

export default Loading;