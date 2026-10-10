import React from 'react';

const ContactList = ({ contacts, search, onSearch, onEdit, onDelete, loading, error }) => (
  <div className="card">
    <div className="row between">
      <h2>Contacts ({contacts.length})</h2>
      <input
        className="search"
        placeholder="Search contacts..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>

    {error && <p className="error">{error}</p>}
    {loading && <p className="muted">Loading...</p>}

    {!loading && contacts.length === 0 ? (
      <p className="muted">No contacts found.</p>
    ) : (
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>{c.phone}</td>
                <td>{c.email}</td>
                <td>{c.address}</td>
                <td className="actions">
                  <button className="btn small" onClick={() => onEdit(c)}>
                    Edit
                  </button>
                  <button className="btn small danger" onClick={() => onDelete(c)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

export default ContactList;
