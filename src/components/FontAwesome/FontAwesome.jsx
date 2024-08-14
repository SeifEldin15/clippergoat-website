import { useEffect } from 'react';

const FontAwesome = () => {
  useEffect(() => {
    // Create a link element
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/fontawesome6/pro/css/all.min.css'; // Updated path
    link.onload = () => {
      console.log('Font Awesome CSS loaded');
    };
    document.head.appendChild(link);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default FontAwesome;
