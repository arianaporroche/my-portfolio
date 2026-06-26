import SectionHeader from '../components/SectionHeader';

function ContactoPage() {
    return (
        <section>
            <SectionHeader title="Contacto" />
            <div className="contact-wrapper">
                <p className="contact-intro">
                    ¿Tienes un proyecto en mente o quieres trabajar juntos? No dudes en escribirme.
                </p>
                <a
                    href="mailto:ariana@example.com"
                    className="btn-primary contact-btn"
                >
                    Enviar mensaje <span className="arrow">→</span>
                </a>
            </div>
        </section>
    );
}

export default ContactoPage;
