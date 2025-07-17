import { useState } from 'react';
import type { VehicleInfo } from '../types';
import Input from './ui/Input';
import Button from './ui/Button';
import Select from './ui/Select';

export default function VehicleForm({ onSubmit }: { onSubmit: (data: VehicleInfo) => void }) {
  const [form, setForm] = useState<VehicleInfo>({
    make: '',
    model: '',
    year: 2020,
    usageType: 'private',
    coverageType: 'third-party',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'year' ? +value : value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <h2 className="text-xl font-bold mb-4">Vehicle Information</h2>

      <Input type="text" name="make" placeholder="Make" onChange={handleChange} value={form.make} />
      <Input name="model" placeholder="Model" onChange={handleChange} value={form.model} />
      <Input
        type="number"
        name="year"
        placeholder="Year of Manufacture"
        onChange={handleChange}
        value={form.year}
      />

      <Select
        name="usageType"
        label="Usage Type"
        value={form.usageType}
        onChange={handleChange}
        className="w-full"
        options={[
          { label: 'Private', value: 'private' },
          { label: 'Commercial', value: 'commercial' },
        ]}
      />

      <Select
        name="coverageType"
        label="Coverage Type"
        value={form.coverageType}
        onChange={handleChange}
        className="w-full"
        options={[
          { label: 'Third-Party', value: 'third-party' },
          { label: 'Comprehensive', value: 'comprehensive' },
        ]}
      />

      <Button type="submit" text="Next" />
    </form>
  );
}
