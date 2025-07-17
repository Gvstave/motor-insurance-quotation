import { useState } from 'react';
import VehicleForm from './components/VehicleForm';
import PersonalForm from './components/PersonalForm';
import QuoteSummary from './components/Summary';
import type { VehicleInfo, PersonalInfo } from './types';

function App() {
  const [step, setStep] = useState(1);
  const [vehicle, setVehicle] = useState<VehicleInfo | null>(null);
  const [personal, setPersonal] = useState<PersonalInfo | null>(null);

  const handleVehicleSubmit = (data: VehicleInfo) => {
    setVehicle(data);
    setStep(2);
  };

  const handlePersonalSubmit = (data: PersonalInfo) => {
    setPersonal(data);
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 max-sm:bg-white">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg max-sm:bg-none max-sm:shadow-none">
        {step === 1 && <VehicleForm onSubmit={handleVehicleSubmit} />}
        {step === 2 && <PersonalForm onSubmit={handlePersonalSubmit} />}
        {step === 3 && vehicle && personal && (
          <QuoteSummary vehicle={vehicle} personal={personal} />
        )}
      </div>
    </div>
  );
}

export default App;
