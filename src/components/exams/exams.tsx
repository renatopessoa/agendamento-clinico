import { useEffect, useRef, useState } from 'react';
import styles from './exams.module.css';

const labExamsList = [
  'Hemograma Completo',
  'Glicemia em Jejum',
  'Colesterol Total e Frações',
  'Triglicerídeos',
  'TSH e T4 Livre',
  'Ácido Úrico',
  'TGO e TGP',
  'Ureia e Creatinina',
  'PSA Total'
];

const imageExamsList = [
  'Raio-X',
  'Ultrassonografia',
  'Ressonância Magnética',
  'Tomografia Computadorizada',
  'Mamografia',
  'Densitometria Óssea',
  'Ecocardiograma',
  'Eletrocardiograma',
  'Endoscopia'
];

export function ExamsList() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`${styles.exams_section} ${isVisible ? styles.fadeIn : styles.fadeOut}`}
    >
      <div className={styles.exams_container}>
        <div className={`${styles.exams_card} ${isVisible ? styles.fadeIn : styles.fadeOut}`}>
          <h2>Exames Laboratoriais</h2>
          <ul className={styles.exams_list}>
            {labExamsList.map((exam, index) => (
              <li key={index}>{exam}</li>
            ))}
          </ul>
        </div>
        
        <div className={`${styles.exams_card} ${isVisible ? styles.fadeIn : styles.fadeOut}`}>
          <h2>Exames de Imagem</h2>
          <ul className={styles.exams_list}>
            {imageExamsList.map((exam, index) => (
              <li key={index}>{exam}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}