"use client"

import Image from 'next/image';
import { useState } from 'react';
import './apresentacao.css';

export default function ApresentacaoPage() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            title: "Agendamento Inteligente",
            description: "Nossa IA analisa disponibilidade e preferências para encontrar o melhor horário",
            icon: "📅"
        },
        {
            title: "Consultas Online",
            description: "Atendimento médico virtual com qualidade e segurança",
            icon: "💻"
        },
        {
            title: "Exames Digitais",
            description: "Agendamento e resultados de exames integrados na plataforma",
            icon: "🔬"
        },
        {
            title: "Secretária Virtual",
            description: "Assistente IA disponível 24/7 para suas necessidades médicas",
            icon: "🤖"
        }
    ];

    return (
        <div className="presentation-container">
            {/* Hero Section */}
            <section className="hero-presentation">
                <div className="hero-content">
                    <div className="hero-text-content">
                        <h1 className="hero-title">
                            O Futuro da <span className="gradient-text">Saúde Digital</span> está aqui
                        </h1>
                        <p className="hero-subtitle">
                            Revolucione sua clínica com nossa plataforma completa de agendamento inteligente, 
                            consultas online e assistente virtual com IA.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-demo">
                                Ver Demonstração
                            </button>
                            <button className="btn-contact">
                                Falar com um Especialista
                            </button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="floating-elements">
                            <div className="element element-1">📱</div>
                            <div className="element element-2">🏥</div>
                            <div className="element element-3">🤖</div>
                            <div className="element element-4">💊</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <h2 className="section-title">Funcionalidades que <span className="highlight">Transformam</span></h2>
                    
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                                onMouseEnter={() => setActiveFeature(index)}
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                <div className="feature-glow"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Assistant Section */}
            <section className="ai-section">
                <div className="container">
                    <div className="ai-content">
                        <div className="ai-visual">
                            <div className="ai-robot">
                                <div className="robot-head-large">
                                    <div className="robot-eyes-large">
                                        <div className="eye-large left-eye-large"></div>
                                        <div className="eye-large right-eye-large"></div>
                                    </div>
                                    <div className="robot-mouth-large"></div>
                                </div>
                                <div className="ai-waves">
                                    <div className="wave wave-1"></div>
                                    <div className="wave wave-2"></div>
                                    <div className="wave wave-3"></div>
                                </div>
                            </div>
                        </div>
                        <div className="ai-text">
                            <h2>Conheça sua <span className="gradient-text">Secretária Virtual</span></h2>
                            <p>
                                Nossa IA funciona como uma secretária real, gerenciando agendamentos, 
                                enviando lembretes, respondendo dúvidas e muito mais. Disponível 24/7 
                                para seus pacientes.
                            </p>
                            <div className="ai-benefits">
                                <div className="benefit">
                                    <span className="benefit-icon">⚡</span>
                                    <span>Respostas instantâneas</span>
                                </div>
                                <div className="benefit">
                                    <span className="benefit-icon">🎯</span>
                                    <span>Precisão nos agendamentos</span>
                                </div>
                                <div className="benefit">
                                    <span className="benefit-icon">📈</span>
                                    <span>Aumento na produtividade</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="stats-section">
                <div className="container">
                    <h2 className="section-title">Resultados que <span className="highlight">Impressionam</span></h2>
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-number">95%</div>
                            <div className="stat-label">Redução no tempo de agendamento</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Disponibilidade da IA</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">300%</div>
                            <div className="stat-label">Aumento na eficiência</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">99.9%</div>
                            <div className="stat-label">Uptime garantido</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Pronto para Revolucionar sua Clínica?</h2>
                        <p>Junte-se a centenas de profissionais que já transformaram seu atendimento</p>
                        <div className="cta-buttons">
                            <button className="btn-primary-large">
                                Começar Agora
                            </button>
                            <button className="btn-secondary-large">
                                Agendar Demonstração
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
