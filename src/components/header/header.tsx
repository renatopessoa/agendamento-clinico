"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Specialties } from '../specialties/specialties';
import '../styles/styles.css';
import { useState } from 'react';
import { ExamsList } from '../exams/exams';
import { Footer } from '../footer/footer';

interface NavItem {
    href: string;
    label: string;
}

const navItems: NavItem[] = [
    { href: '/inicio', label: 'Início' },
    { href: '/', label: 'Especialidades' }, // Changed back to original route
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
                                        {label}
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
                            Login
                        </button>
                    </div>
                </div>
            </header>

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
            </main>
        </>


    );


}