import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias por registrarse a la página: ${email}`);
  };

  return (
    <section>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu correo electrónico"
          required
        />
        <button type="submit">REGISTRAR</button>
      </form>
    </section>
  );
}

export default Contact;
  