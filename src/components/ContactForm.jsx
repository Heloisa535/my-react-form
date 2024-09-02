import React, { useState } from 'react';
import './contactForm.css'; // Importa o CSS para o formulário de contato

const ContactForm = ({ onSubmit }) => {
  // Estados para os campos do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  // Valida a senha
  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError('Senha deve ter pelo menos 8 caracteres');
      setPasswordStrength('');
      return false;
    }

    let strength = 'Fraca';
    if (/[A-Z]/.test(password) && /[0-9]/.test(password)) {
      strength = 'Boa';
      if (/[^A-Za-z0-9]/.test(password)) {
        strength = 'Forte';
      }
    }
    setPasswordStrength(strength);
    setPasswordError('');
    return true;
  };

  // Atualiza a senha e valida
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  // Envia o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword(password)) {
      onSubmit({ name, email, phone, password });
      // Limpa os campos após o envio
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setPasswordError('');
      setPasswordStrength('');
    }
  };

  return (
    <div className="contact-form-container">
      <img src="./src/img/vans.png" alt="Descrição da imagem" className="form-image" />
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-title">QUERO ME CADASTRAR</h2>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {/* Exibe erros e força da senha se houver */}
          {passwordError && <p className="error">{passwordError}</p>}
          {passwordStrength && <p className="strength">Força da senha: {passwordStrength}</p>}
        </div>
        <button type="submit" className="button">Enviar</button>
      </form>
      <img src="./src/img/propaganda.png" alt="Descrição da imagem" className="form-image" />
    </div>
  );
};

export default ContactForm;
