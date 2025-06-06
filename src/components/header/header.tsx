"use client"

import Link from 'next/link';
import '../styles/styles.css';
import { useState } from 'react';

interface NavItem {
    href: string;
    label: string;
}

const navItems: NavItem[] = [
    { href: '/inicio', label: 'Início' },
    { href: '/', label: 'Especialidades' },
    { href: '/exames', label: 'Exames' },
    { href: '/sobre', label: 'Sobre Nós' },
];

export function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const handleRegisterClick = () => {
        setIsLoginModalOpen(false);
        // Navigate to register page or open register modal
    };

    return (
        <>
            <header role="banner">
                <div className="interface">
                    <div className="auth-buttons">

                    </div>

                    <nav className="menu-desktop" role="navigation">
                        <ul>
                            {navItems.map(({ href, label }) => (
                                <li key={href}>
                                    <Link href={href}>
                                        {/* {label} */}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div>
                        <button
                            className="login-button"
                            onClick={() => setIsLoginModalOpen(true)}
                        >
                            {/* Login */}
                        </button>
                    </div>
                </div>
            </header>

            {/* Modal de Agendamento */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content appointment-modal" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="modal-close-button"
                            onClick={() => setIsModalOpen(false)}
                            aria-label="Fechar modal"
                        >
                            ×
                        </button>
                        
                        <div className="robot-container">
                            <div className="robot">
                                <div className="robot-head">
                                    <div className="robot-eyes">
                                        <div className="eye left-eye"></div>
                                        <div className="eye right-eye"></div>
                                    </div>
                                    <div className="robot-mouth"></div>
                                    <div className="robot-antennas">
                                        <div className="antenna left-antenna"></div>
                                        <div className="antenna right-antenna"></div>
                                    </div>
                                </div>
                                <div className="robot-body">
                                    <div className="robot-chest">
                                        <div className="chest-light"></div>
                                        <div className="chest-buttons">
                                            <div className="button"></div>
                                            <div className="button"></div>
                                            <div className="button"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="robot-arms">
                                    <div className="arm left-arm"></div>
                                    <div className="arm right-arm"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="modal-text">
                            <h3>Olá! Eu sou Judite sua assistente virtual</h3>
                            <p>Estou aqui para ajudá-lo com o agendamento da sua consulta. Vamos começar?</p>
                        </div>
                        
                        <div className="modal-actions">
                            <button className="btn-primary" onClick={() => setIsModalOpen(false)}>
                                Vamos começar!
                            </button>
                            <button className="btn-secondary" onClick={() => setIsModalOpen(false)}>
                                Talvez mais tarde
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

// Exportar também a função para abrir o modal de agendamento
export const useAppointmentModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return { isModalOpen, setIsModalOpen };
};