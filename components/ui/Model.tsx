'use client';

// import Spline from '@splinetool/react-spline/next';
import Spline from '@splinetool/react-spline'; // ✅ Correct for Client Components


const ModelClient = () => {
  return (
    <main className='h-screen max-sm:h-[45vh] relative w-full'>
      <div className='absolute z-50 w-full h-1/6 bg-black bottom-0' />
      <Spline scene="https://prod.spline.design/IMbvTMqonMJOuq-y/scene.splinecode" />
    </main>
  );
};

export default ModelClient;
