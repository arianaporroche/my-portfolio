import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeader from '../../components/SectionHeader';
import './ContactPage.css';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

const MOTIVO_OPTIONS = [
    { value: 'oferta', label: 'Oferta de trabajo' },
    { value: 'proyecto', label: 'Propuesta de proyecto' },
    { value: 'colaboracion', label: 'Colaboración' },
    { value: 'otro', label: 'Otro' },
];

function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});

    function validate(form: HTMLFormElement): boolean {
        const newErrors: Record<string, string> = {};
        const nombre = (form.elements.namedItem('nombre') as HTMLInputElement).value.trim();
        const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
        const motivo = (form.elements.namedItem('motivo') as HTMLSelectElement).value;
        const mensaje = (form.elements.namedItem('mensaje') as HTMLTextAreaElement).value.trim();

        if (!nombre) newErrors.nombre = 'El nombre es obligatorio.';
        if (!email) {
            newErrors.email = 'El correo es obligatorio.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Introduce un correo válido.';
        }
        if (!motivo) newErrors.motivo = 'Selecciona el motivo de contacto.';
        if (!mensaje) newErrors.mensaje = 'El mensaje no puede estar vacío.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!formRef.current) return;
        if (!validate(formRef.current)) return;

        setStatus('sending');
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
            );
            setStatus('sent');
            formRef.current.reset();
        } catch {
            setStatus('error');
        }
    }

    return (
        <section>
            <SectionHeader title="Contacto" />
            {status !== 'sent' && (
                <div className="contact-intro-block">
                    <p className="contact-intro-text">
                        ¿Tienes una oferta de trabajo, una idea de proyecto o simplemente quieres ponerte en contacto?
                        Rellena el formulario y te responderé lo antes posible.
                    </p>
                </div>
            )}

            <div className="contact-page">
                <div className="contact-form-wrapper">
                    {status === 'sent' ? (
                        <div className="contact-success">
                            <span className="contact-success-icon">✓</span>
                            <p className="contact-success-title">Mensaje enviado</p>
                            <p className="contact-success-sub">
                                Gracias por escribirme. Te responderé en cuanto pueda.
                            </p>
                            <button
                                className="btn-primary"
                                onClick={() => setStatus('idle')}
                            >
                                Enviar otro mensaje
                            </button>
                        </div>
                    ) : (
                        <form
                            ref={formRef}
                            className="contact-form"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="contact-form-row">
                                <div className="contact-field">
                                    <label className="contact-label" htmlFor="contact-nombre">
                                        Nombre
                                    </label>
                                    <input
                                        id="contact-nombre"
                                        className={`contact-input${errors.nombre ? ' contact-input--error' : ''}`}
                                        type="text"
                                        name="nombre"
                                        placeholder="Tu nombre"
                                        autoComplete="name"
                                    />
                                    {errors.nombre && (
                                        <span className="contact-error">{errors.nombre}</span>
                                    )}
                                </div>

                                <div className="contact-field">
                                    <label className="contact-label" htmlFor="contact-email">
                                        Correo electrónico
                                    </label>
                                    <input
                                        id="contact-email"
                                        className={`contact-input${errors.email ? ' contact-input--error' : ''}`}
                                        type="email"
                                        name="email"
                                        placeholder="tucorreo@dominio.com"
                                        autoComplete="email"
                                    />
                                    {errors.email && (
                                        <span className="contact-error">{errors.email}</span>
                                    )}
                                </div>
                            </div>

                            <div className="contact-field">
                                <label className="contact-label" htmlFor="contact-motivo">
                                    Motivo de contacto
                                </label>
                                <select
                                    id="contact-motivo"
                                    className={`contact-input contact-select${errors.motivo ? ' contact-input--error' : ''}`}
                                    name="motivo"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Selecciona una opción</option>
                                    {MOTIVO_OPTIONS.map((opt) => (
                                        <option key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.motivo && (
                                    <span className="contact-error">{errors.motivo}</span>
                                )}
                            </div>

                            <div className="contact-field">
                                <label className="contact-label" htmlFor="contact-empresa">
                                    Empresa / Organización <span className="contact-label-optional">(opcional)</span>
                                </label>
                                <input
                                    id="contact-empresa"
                                    className="contact-input"
                                    type="text"
                                    name="empresa"
                                    placeholder="Nombre de la empresa u organización"
                                    autoComplete="organization"
                                />
                            </div>

                            <div className="contact-field">
                                <label className="contact-label" htmlFor="contact-mensaje">
                                    Mensaje
                                </label>
                                <textarea
                                    id="contact-mensaje"
                                    className={`contact-input contact-textarea${errors.mensaje ? ' contact-input--error' : ''}`}
                                    name="mensaje"
                                    placeholder="Cuéntame en qué puedo ayudarte…"
                                    rows={6}
                                />
                                {errors.mensaje && (
                                    <span className="contact-error">{errors.mensaje}</span>
                                )}
                            </div>

                            {status === 'error' && (
                                <p className="contact-error-global">
                                    Hubo un problema al enviar el mensaje. Inténtalo de nuevo o escríbeme directamente.
                                </p>
                            )}

                            <div className="contact-form-footer">
                                <button
                                    type="submit"
                                    className="btn-primary"
                                    disabled={status === 'sending'}
                                    id="contact-submit"
                                >
                                    {status === 'sending' ? (
                                        <>Enviando…</>
                                    ) : (
                                        <>Enviar mensaje <span className="arrow">→</span></>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ContactPage;
