import React from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Footer from './components/footer';

function App() {
  const handleFormSubmit = (data) => {
    console.log('Dados do Formulário:', data);
  };

  return (
    <div>
      <Header />
      <main>
        <ContactForm onSubmit={handleFormSubmit} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
