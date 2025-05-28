"use client"

import Image from 'next/image';
import { Specialties } from '../specialties/specialties';
import { ExamsList } from '../exams/exams';
import { Footer } from '../footer/footer';
import { useState } from 'react';

export function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main>
            <section className="hero-section">
                <Image
                    src="/assets/img1.jpg"
                    alt="Hero Background"
                    fill
                    priority
                    quality={100}
                    style={{ objectFit: 'cover' }}
                />
                <div className="hero-text">
                    <h1>
                        A saúde que você merece, <br />
                        com o carinho e a atenção <br />
                        que <span className="highlight">você precisa.</span>
                    </h1>
                    <button
                        className="appointment-btg"
                        type="button"
                        aria-label="Agendar consulta"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Agende sua consulta
                    </button>
                </div>

                <div className="banner-box">
                    <div className="banner-item">
                        <h3>Diversas especialidades</h3>
                        <p>Possuímos consultas clínicas, diversas especialidades médicas e não-médicas, além de exames laboratoriais e de imagem.</p>
                    </div>
                    <div className="banner-item">
                        <h3>Valores acessíveis</h3>
                        <p>Saúde que cabe no seu bolso. É assim que praticamos por aqui para a saúde chegar até você!</p>
                    </div>
                    <div className="banner-item">
                        <h3>Atendimento humanizado</h3>
                        <p>Além de nossa estrutura física, você pode contar com a gente para irmos até o conforto da sua casa.</p>
                    </div>
                </div>

                <Specialties />
                <ExamsList />
                <Footer />
            </section>

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
        </main>
    );
}
