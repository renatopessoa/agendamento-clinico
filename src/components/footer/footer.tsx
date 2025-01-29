import styles from './footer.module.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.map_container}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=YOUR_MAP_URL"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            <div className={styles.info_container}>
                <div className={styles.contact_section}>
                    <div className={styles.address}>
                        <h3>Nossa Localização</h3>
                        <p>Rua Example, 123 - Bairro</p>
                        <p>Cidade - Estado, CEP</p>
                    </div>
                    <div className={styles.social}>
                        <h4>Contato</h4>
                        <p>Telefone: (11) 1234-5678</p>
                        <p>Email: clinica@clinica.com.br</p>
                    </div>
                </div>

                <div className={styles.social_section}>
                    <h3>Redes Sociais</h3>
                    <div className={styles.social_icons}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}