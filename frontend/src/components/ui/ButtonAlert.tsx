import { useState } from 'react';

const ButtonAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <button
        onClick={toggleAlert}
        className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-400 transition-colors duration-200"
      >
        Toggle Alert
      </button>

      {showAlert && (
        <div className="mt-4 px-6 py-4 bg-green-500 text-white rounded-lg shadow-lg">
          <p>Este é um alerta de sucesso!</p>
        </div>
      )}
    </div>
  );
};

export {ButtonAlert} ;
