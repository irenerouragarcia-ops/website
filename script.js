// script.js

// --- 1. Content Data (Bilingual) ---
const translations = {
    en: {
        nav: { about: "About", sessions: "Sessions", resources: "Resources", shop: "Shop", contact: "Contact" },
        hero: {
            title: "Irene Roura García",
            subtitle: "Nurse · Wellbeing Coach · Hypnotherapist · FND Specialist",
            quote: "\"The art of honoring what you need, with respect and without guilt.\"",
            cta: "Free Consultation"
        },
        about: {
            full_text: "<p>I am a nurse specialized in mental health, hypnotherapist, wellbeing coach, and Functional Neurological Disorder (FND) specialist. I have worked as a nurse at NHS mental health, neurology, and neuropsychiatry wards. I spent five years working on an inpatient neuropsychiatric ward supporting people living with FND, where I first encountered the condition and developed a strong commitment to support people living with it.</p><p>From early in my training, I was drawn to approaches that support the mind–body connection and nervous system regulation. I now integrate my clinical experience with hypnotherapy, mindfulness, and polyvagal theory–informed practices. I believe meaningful and lasting change comes from a holistic approach and from focusing on practical, helpful steps that can be adapted to each person’s circumstances.</p><p>Today, I collaborate with FND charities to deliver educational courses and provide one-to-one support for people living with FND worldwide. I am also about to publish a book in collaboration with lived experience of FND and I am a member of the FND UK Network, where I represent the Royal College of Nursing.</p>"
        },
        sessions: {
            title: "Sessions",
            offer1_title: "Wellbeing Coach",
            offer1_text: "Personalised sessions designed to support you in creating a more comfortable, healthy, and fulfilling life. We will work together to identify your needs and define practical, realistic, and sustainable steps that support your overall wellbeing. Throughout the process, I will share tools and techniques from different therapies and approaches, such as mindfulness, Cognitive Behavioural Therapy (CBT), and polyvagal theory, which you can easily integrate into your daily life to strengthen your internal resources and cultivate a greater sense of safety, balance, and wellbeing.",
            offer2_title: "Hypnotherapy",
            offer2_text: "Subconscious-focused work to help reframe limiting beliefs and unhelpful patterns. Hypnotherapy can be particularly effective for long-standing conditions and associated symptoms such as anxiety and depression. The scripts used during our sessions are very personalised and tailored to what brings you a sense of peace, calm, and safety. Before each session, I will invite you to complete a short form to identify what helps you feel calm, held and soothed and to clarify your specific goals and affirmations.",
            offer3_title: "FND Support",
            offer3_text: "Specialist guidance for people living with Functional Neurological Disorder. Support focused on understanding and managing your symptoms, building confidence, improving well-being and reclaiming a sense of control in your life.",
            btn: "Book Discovery Call",
            opt1_title: "1:1 Sessions",
            opt1_item1: "1 hour session",
            opt1_item2: "1.5 hour session + hypnotherapy personalized audio",
            opt1_pack3: "3 sessions pack",
            opt1_pack3_note: "(wellbeing coach)",
            opt1_pack6: "6 sessions pack",
            opt1_pack6_note: "(includes 1 hypnotherapy session)",
            opt1_note: "*All sessions within the package are weekly, one hour long and include follow-up emails with handouts and additional resources after each session.",
            opt2_title: "Group sessions / Programs",
            opt2_prog_title: "Winter FND Program",
            opt2_prog_en_label: "English Program",
            opt2_prog_es_label: "Spanish Program"
        },
        resources: {
            title: "Resources",
            text: "Free guides, FND care tools, and mindfulness exercises to calm your mind.",
            item1: "FND Useful Links",
            item2: "Grounding Exercise",
            item3: "FND Care Whatsapp Group",
            more_coming: "More resources coming up soon",
            view_btn: "View Link",
            join_btn: "Join Group",
            btn: "View Library →"
        },
        shop: {
            title: "Shop",
            text: "Products coming up soon.",
            btn: "Visit Full Shop"
        },
        contact: {
            title: "Contact",
            text: "Subscribe to the newsletter or get in touch below."
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    es: {
        nav: { about: "Sobre mí", sessions: "Sesiones", resources: "Recursos", shop: "Tienda", contact: "Contacto" },
        hero: {
            title: "Irene Roura García",
            subtitle: "Enfermera · Coach de Bienestar · Hipnoterapeuta · Especialista TNF",
            quote: "\"El arte de honrar lo que necesitas, con respeto y sin culpa.\"",
            cta: "Consulta Gratuita"
        },
        about: {
            title: "Sobre Mí",
            full_text: "<p>Soy enfermera especializada en salud mental, hipnoterapeuta, coach de bienestar y especialista en Trastorno Neurológico Funcional (TNF). Mi experiencia profesional incluye salud mental, neurología y neuropsiquiatría dentro del NHS (sistema público de salud en Inglaterra). Trabajé durante cinco años en una unidad de hospitalización de neuropsiquiatría apoyando a personas que viven con TNF donde conocí esta condición por primera vez y desarrollé un fuerte compromiso en apoyar a las personas que lo sufren.</p><p>Desde el inicio de mi formación, me interesaron los enfoques que apoyan la conexión mente-cuerpo y la regulación del sistema nervioso. Actualmente combino mi experiencia clínica con hipnoterapia, mindfulness y prácticas basadas en la teoría polivagal. Creo que el cambio profundo y duradero surge a través de un enfoque holístico y de centrarse en pasos prácticos y útiles, adaptados a las circunstancias de cada persona.</p><p>En la actualidad, colaboro con organizaciones benéficas de TNF impartiendo cursos y también ofrezco programas y sesiones individuales (todo online). Estoy a punto de publicar un libro en colaboración con personas con experiencia vivida de TNF \"FND Care Guide\" y soy miembro de la Red de TNF de Reino Unido (FND UK Network), donde represento la profesión de enfermería.</p>"
        },
        sessions: {
            title: "Sesiones",
            offer1_title: "Coach de Bienestar",
            offer1_text: "Sesiones personalizadas diseñadas para acompañarte en la creación de una vida más cómoda, saludable y plena. Trabajaremos junt@s para identificar tus necesidades y definir pasos prácticos, realistas y sostenibles que favorezcan tu bienestar integral. A lo largo del proceso, compartiré contigo herramientas y técnicas de distintas terapias y enfoques, como el mindfulness, la Terapia Cognitivo-Conductual (TCC) y la teoría polivagal, que podrás integrar fácilmente en tu día a día para fortalecer tus recursos internos y cultivar una mayor sensación de seguridad, equilibrio y bienestar en tu vida cotidiana.",
            offer2_title: "Hipnoterapia",
            offer2_text: "Trabajo a nivel subconsciente para ayudar a reformular creencias limitantes y patrones poco útiles. La hipnoterapia puede ser especialmente eficaz para la ansiedad, el estrés y condiciones de larga duración.",
            offer3_title: "Apoyo TNF",
            offer3_text: "Acompañamiento especializado para personas que viven con Trastorno Neurológico Funcional. Un apoyo centrado en comprender tus síntomas, fortalecer la confianza y recuperar una sensación de control sobre tu vida. (Sesiones de grupo e individuales)",
            btn: "Reservar Llamada",
            opt1_title: "Sesiones 1:1",
            opt1_item1: "Sesión 1 hora",
            opt1_item2: "Sesión 1.5 horas + audio hipnoterapia personalizado",
            opt1_pack3: "Pack 3 sesiones",
            opt1_pack3_note: "(coach de bienestar)",
            opt1_pack6: "Pack 6 sesiones",
            opt1_pack6_note: "(incluye 1 sesión de hipnoterapia)",
            opt1_note: "*Todas las sesiones del paquete son semanales, de una hora de duración e incluyen correos de seguimiento con material y recursos adicionales después de cada sesión",
            opt2_title: "Sesiones grupales / Programas",
            opt2_prog_title: "Programa TNF Invierno",
            opt2_prog_en_label: "Programa en Inglés",
            opt2_prog_es_label: "Programa en Español"
        },
        resources: {
            title: "Recursos",
            text: "Guías gratuitas, herramientas de cuidado para TNF y ejercicios de mindfulness para calmar tu mente.",
            item1: "Enlaces FND útiles",
            item2: "Ejercicio de Grounding",
            item3: "Grupo de WhatsApp FND Care",
            more_coming: "Más recursos próximamente",
            view_btn: "Ver enlace",
            join_btn: "Unirse al grupo",
            btn: "Ver Biblioteca →"
        },
        shop: {
            title: "Tienda",
            text: "Próximamente nuevos productos.",
            btn: "Visitar Tienda Completa"
        },
        contact: {
            title: "Contacto",
            text: "Suscríbete al boletín o ponte en contacto abajo."
        },
        footer: {
            rights: "Todos los derechos reservados."
        }
    }
};

const shopItems = [
    { id: 1, title_en: "Hypnotherapy Audio Pack", title_es: "Pack Audio Hipnoterapia", icon: "headphones" },
    { id: 2, title_en: "FND Care Affirmation Tee", title_es: "Camiseta Afirmación TNF", icon: "shirt" },
    { id: 3, title_en: "Mindzing Notebook", title_es: "Cuaderno Mindzing", icon: "book" },
];

// --- 2. Translation & Persistence ---
let currentLang = localStorage.getItem('siteLang') || 'en';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('siteLang', lang); // Save preference

    // Update Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update Body Class
    document.body.className = document.body.className.replace(/lang-\w+/, `lang-${lang}`);

    // Update Text Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const keys = key.split('.');
        let text = keys.reduce((obj, k) => obj && obj[k], translations[lang]);

        if (text) {
            // Handle HTML content if specified
            if (key.includes('full_text')) {
                el.innerHTML = text;
            } else {
                el.innerText = text;
            }
        }
    });

    // Refresh Shop Grid Titles if present
    const shopGrid = document.getElementById('shop-grid');
    if (shopGrid) renderShopGrid();
}

// --- 3. Render Shop Grid ---
function renderShopGrid() {
    const grid = document.getElementById('shop-grid');
    if (!grid) return;

    grid.innerHTML = shopItems.map(item => `
        <div class="shop-item-card">
            <div class="shop-item-img-placeholder"></div>
            <div class="shop-item-title">${currentLang === 'en' ? item.title_en : item.title_es}</div>
        </div>
    `).join('');
}


// --- 4. Initialization & Events ---
document.addEventListener('DOMContentLoaded', () => {

    // Initial Load
    updateLanguage(currentLang);

    // Language Toggle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => updateLanguage(btn.dataset.lang));
    });

    // Modal Logic
    const modalOverlay = document.getElementById('modal-overlay');

    if (modalOverlay) {
        const modalBody = document.getElementById('modal-body');
        const closeBtn = document.querySelector('.modal-close');

        window.openModal = function (content) {
            modalBody.innerHTML = content;
            modalOverlay.classList.remove('hidden');
        }

        function closeModal() {
            modalOverlay.classList.add('hidden');
        }

        closeBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        // Action Buttons
        document.querySelectorAll('[data-action]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                if (action === 'book-now') {
                    window.openModal(`<h2>${currentLang === 'en' ? 'Book a Session' : 'Reservar Sesión'}</h2><p>Calendly Integration would load here.</p>`);
                }
            });
        });
    }

    // Navbar Scroll (Visual only)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });
});

// --- 5. Session Options Toggle ---
function toggleSessionOption(headerElement) {
    const card = headerElement.parentElement;
    card.classList.toggle('expanded');
}
