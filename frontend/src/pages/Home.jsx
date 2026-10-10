import React, { useCallback, useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm.jsx';
import ContactList from '../components/ContactList.jsx';
import { addContact, deleteContact, getContacts, updateContact } from '../services/api.js';

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getContacts(search);
      setContacts(res.data);
      setError('');
    } catch {
      setError('Could not reach the API. Is the backend running?');
    } finally {
      setLoading(false);
    }
  }, [search]);

  // Debounce search so we don't call the API on every keystroke
  useEffect(() => {
    const t = setTimeout(load, 250);
    return () => clearTimeout(t);
  }, [load]);

  const handleSave = async (data) => {
    if (editing) {
      await updateContact(editing._id, data);
      setEditing(null);
    } else {
      await addContact(data);
    }
    await load();
  };

  const handleDelete = async (contact) => {
    if (!window.confirm(`Delete ${contact.name}?`)) return;
    await deleteContact(contact._id);
    if (editing && editing._id === contact._id) setEditing(null);
    await load();
  };

  return (
    <div className="container">
      <h1>My Address Book</h1>
      <ContactForm onSave={handleSave} editing={editing} onCancel={() => setEditing(null)} />
      <ContactList
        contacts={contacts}
        search={search}
        onSearch={setSearch}
        onEdit={setEditing}
        onDelete={handleDelete}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default Home;
