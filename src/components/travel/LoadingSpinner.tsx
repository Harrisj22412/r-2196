
const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-16 h-16 border-4 border-gray-200 border-t-sky-600 rounded-full animate-spin mb-4"></div>
      <p className="text-lg text-gray-600">Loading destination information...</p>
    </div>
  );
};

export default LoadingSpinner;
