import type { VehicleInfo, PersonalInfo } from '../types';
import jsPDF from 'jspdf';
import Button from './ui/Button';

function calculatePremium(vehicle: VehicleInfo): number {
  const base = 500;
  const age = new Date().getFullYear() - vehicle.year;
  return Math.max(base + age * 25, 300);
}

export default function QuoteSummary({
  vehicle,
  personal
}: {
  vehicle: VehicleInfo;
  personal: PersonalInfo;
}) {
  const premium = calculatePremium(vehicle);

  const alertUser = () => {
    alert('Your query has been submitted');
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Motor Insurance Quote Summary', 14, 22);
    doc.setLineWidth(0.5);
    doc.line(14, 25, 196, 25);

    doc.setFontSize(12);
    doc.text(`Name: ${personal.name}`, 14, 40);
    doc.text(`Email: ${personal.email}`, 14, 50);
    doc.text(`Phone: ${personal.phone}`, 14, 60);

    doc.text(`Vehicle Make: ${vehicle.make}`, 14, 75);
    doc.text(`Model: ${vehicle.model}`, 14, 85);
    doc.text(`Year: ${vehicle.year}`, 14, 95);
    doc.text(`Usage Type: ${vehicle.usageType}`, 14, 105);
    doc.text(`Coverage Type: ${vehicle.coverageType}`, 14, 115);

    doc.setFontSize(14);
    doc.text(`Estimated Premium: K${premium.toFixed(2)}`, 14, 130);

    doc.save('motor-insurance-quote.pdf');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Quote Summary</h2>
      <p><strong>Name:</strong> {personal.name}</p>
      <p><strong>Email:</strong> {personal.email}</p>
      <p><strong>Phone:</strong> {personal.phone}</p>
      <p><strong>Vehicle:</strong> {vehicle.make} {vehicle.model} ({vehicle.year})</p>
      <p><strong>Usage Type:</strong> {vehicle.usageType}</p>
      <p><strong>Coverage Type:</strong> {vehicle.coverageType}</p>
      <p className="mt-4 text-lg font-semibold">Estimated Premium: K{premium.toFixed(2)}</p>

      <div className="flex flex-row gap-5 max-sm:flex max-sm:flex-col max-sm:gap-3 mt-4">
        <Button onClick={alertUser} text="Submit Quote" />
        <Button onClick={generatePDF} text="Download Quote" />
      </div>
    </div>
  );
}
