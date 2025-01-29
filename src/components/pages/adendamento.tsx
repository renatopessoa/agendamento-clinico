import React, { useState } from 'react';
import './modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  const today = new Date().toISOString().split('T')[0];
  const [selectedDateTime, setSelectedDateTime] = useState('');

  const handleDateTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateTime = new Date(e.target.value);
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const currentTime = hours * 60 + minutes;

    // Convert business hours to minutes for comparison
    const morningStart = 8 * 60; // 8:00
    const morningEnd = 12 * 60; // 12:00
    const afternoonStart = 14 * 60; // 14:00
    const afternoonEnd = 18 * 60; // 18:00

    if ((currentTime >= morningStart && currentTime < morningEnd) ||
      (currentTime >= afternoonStart && currentTime < afternoonEnd)) {
      setSelectedDateTime(e.target.value);
    } else {
      alert('Horário indisponível. Por favor, selecione um horário entre 8h-12h ou 14h-18h');
      e.target.value = '';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Agende sua consulta</h2>
        <form className="appointment-form">
          <input type="text" placeholder="Nome completo" required />
          <input type="email" placeholder="E-mail" required />
          <input type="tel" placeholder="Telefone" required />
          <select aria-label="Especialidade médica" required>
            <option value="">Selecione a especialidade</option>
            <option value="Cardiologia">Cardiologia</option>
            <option value="Pediatria">Pediatria</option>
            <option value="Ginecologia">Ginecologia</option>
            <option value="Fonoaudiologia">Fonoaudialogia</option>
            <option value="Fisioterapia">Fisioterapia</option>
            <option value="Nutricionista">Nutricionista</option>
          </select>
          <input
            type="datetime-local"
            aria-label="Data e hora da consulta"
            min={`${today}T08:00`}
            max={`${today}T18:00`}
            step={1800}
            value={selectedDateTime}
            onChange={handleDateTimeChange}
            required
          />
          <button

            type="submit">Agendar
          </button>
        </form>
      </div>
    </div>
  );


}
