import React, { useEffect, useState } from 'react';

const empty = { name: '', phone: '', email: '', address: '' };

const ContactForm = ({ onSave, editing, onCancel }) => {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState('');

  useEffect(() => {
    setForm(editing ? { ...empty, ...editing } : empty);
    setError('');
  }, [editing]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.address.trim()) {
      setError('All fields are required.');
      return;
    }
    try {
      await onSave({
        name: form.name,
        phone: form.phone,
        email: form.email,
        address: form.address,
      });
      setForm(empty);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Could not save contact.');
    }
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>{editing ? 'Edit Contact' : 'Add Contact'}</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
      {error && <p className="error">{error}</p>}
      <div className="row">
        <button type="submit" className="btn primary">
          {editing ? 'Update' : 'Save'}
        </button>
        {editing && (
          <button type="button" className="btn" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
