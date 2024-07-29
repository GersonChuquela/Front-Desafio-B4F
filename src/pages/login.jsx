
import { useState } from "react";
import { Header } from "../components/header";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
      }
      
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
        <div> <Header /> 
      <div className="max-w-md mx-auto mt-12 p-6 border border-green-400 rounded-lg bg-yellow-50">
        <h2 className="text-center mb-6 text-2xl font-bold text-green-700">Iniciar a secção</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-green-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-green-400 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-bold text-green-700">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-green-400 rounded"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-2 font-bold text-green-700">Confirmar Senha:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-2 border border-green-400 rounded"
            />
          </div>
          <button type="submit" className="w-full py-2 bg-green-600 text-yellow-50 rounded hover:bg-green-700">
            Entrar
          </button>
        </form>
      </div>
      </div>
    );
  };
