import { useState } from 'react';
import type { PersonalInfo } from '../types';
import Input from './ui/Input';
import Button from './ui/Button';

export default function PersonalForm({ onSubmit }: { onSubmit: (data: PersonalInfo) => void }) {
  const [form, setForm] = useState<PersonalInfo>({ name: '', email: '', phone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(form); }}>
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>
      <Input name="name" type='string' placeholder="Full Name" onChange={handleChange} />
      <Input name="email" type='email' placeholder="Email" onChange={handleChange} />
      <Input name="phone" type='number' placeholder="Phone Number" onChange={handleChange} />
      <Button type='submit' text='Get Quote' />
    </form>
  );
}
