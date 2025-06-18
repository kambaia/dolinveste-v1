import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  pt: {
    translation: {
      nav: {
        home: "Home",
        about: "SOBRE NÓS",
        contact: "CONTACTOS",
        login: "Entrar",
        start: "Começar",
      },
      hero: {
        title: "GESTÃO DE INVESTIMENTOS",
        subtitle: "TECNOLOGIA E INOVAÇÃO",
        cta: "Saiba mais",
      },
      features: {
        title: "Por que escolher a DolInveste?",
        subtitle: "Oferecemos as melhores ferramentas e oportunidades para seus investimentos em dólar",
      },
      services: {
        title: "O SUCESSO DOS NOSSOS CLIENTES, SÃO O NOSSO MAIOR IMPULSO?",
        subtitle: "AS SUAS NECESSIDADES SÃO A NOSSA MAIOR PRIORIDADE",
        description:
          "Independentemente da complexidade e tamanho do projeto, a DolInveste se empenha no desenvolvimento sustentável para nós e os nossos clientes.",
        investment: {
          title: "GESTÃO DE INVESTIMENTOS E CARTEIRAS",
          description: "Fundos de investimento, Ações americanas, REITs",
        },
        security: {
          title: "SEGURANÇA FINANCEIRA",
          description: "Segurança de transações e segura de dados.",
        },
        infrastructure: {
          title: "INFRAESTRUTURAS DIGITAIS E TECNOLÓGICAS",
          description:
            "Planejamento e implementação de sistemas de trading, Planejamento e implementação de sistemas de análise, planejamento e implementação de sistemas de relatórios.",
        },
      },
      support: {
        title: "A NOSSA OFERTA PARA VOCÊ",
        subtitle: "Apoio ao Cliente em Vários Domínios",
        description:
          "É o sucesso dos nossos clientes que mais nos impulsiona?",
      },
      specialties: {
        primary: {
          label: "NOSSA ESPECIALIDADE PRIMARIA",
          title: "Conhecimento Funcional",
          description:
            "Desde projectos empresariais a serviços de assessoria e consultoria, estamos prontos para ajudá-lo a alcançar os objectivos da sua empresa. Um bom começo é o primeiro passo para um futuro promissor.",
        },
        secondary: {
          label: "NOSSA ESPECIALIDADE SECUNDÁRIA ",
          title: "Código de Conduta",
          description:
            "Privacidade, confidencialidade e confiança são pilares fundamentais da nossa ética profissional. Esta cultura constitui uma vantagem estratégica para quem escolhe a Dolinveste. Cada etapa do processo é personalizada através da aplicação de soluções integradas e inovadoras, com o objectivo de concretizar as missões estratégicas das organizações que servimos, recorrendo a talentos dinâmicos e diversificados.",
        },
      },
      contact: {
        title: "Estamos prontos para ter uma conversa introdutória consigo",
        cta: "Entre em contacto",
        form: {
          title: "Enviar-nos uma mensagem",
          pageTitle:"Contactos"
        },
        info: {
          description: "Gerenciamento De Investimentos É Nosso Core Business",
          schedule: "Seg-Sexta: 8h00 – 17h48",
          weekend: "Fim de semana: Fechado",
          email: "office@dolinvest.co.ao",
          phone: "+244 914 052 955 / +244 949 500 505",
          social: "Encontre-nos nas seguintes sociais:",
        },
        quickLinks: "Links rápidos",
        services: "Serviços",
        contacts: "Contactos",
        about: "SOBRE NÓS",
        organization: "Organização",
        management: "Gerenciamento",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "ABOUT US",
        contact: "CONTACTS",
        login: "Login",
        start: "Get Started",
      },
      hero: {
        title: "INVESTMENT MANAGEMENT",
        subtitle: "TECHNOLOGY AND INNOVATION",
        cta: "Learn more",
      },
      features: {
        title: "Why choose DolInveste?",
        subtitle: "We offer the best tools and opportunities for your dollar investments",
      },
      services: {
        title: "OUR CLIENTS' SUCCESS IS OUR GREATEST DRIVE?",
        subtitle: "YOUR NEEDS ARE OUR TOP PRIORITY",
        description:
          "Regardless of the complexity and size of the project, DolInveste is committed to sustainable development for us and our clients.",
        investment: {
          title: "INVESTMENT AND PORTFOLIO MANAGEMENT",
          description: "Investment funds, American stocks, REITs",
        },
        security: {
          title: "FINANCIAL SECURITY",
          description: "Transaction security and data security.",
        },
        infrastructure: {
          title: "DIGITAL AND TECHNOLOGICAL INFRASTRUCTURE",
          description:
            "Planning and implementation of trading systems, Planning and implementation of analysis systems, planning and implementation of reporting systems.",
        },
      },
      support: {
        title: "OUR OFFER FOR YOU",
        subtitle: "Customer Support in Various Domains",
        description:
          "From business projects to advisory and consulting assignments, we are eager to help you achieve your company's goals. A good start helps pave the way for a better future.",
      },
      specialties: {
        primary: {
          label: "PRIMARY SPECIALTY",
          title: "Functional Knowledge",
          description:
            "Due to significant experience in investment management, DolInveste has created high levels of compliance for quality - all are aligned with applicable legislation, as well as the requirements and expectations of our clients. Thus, we deliver measurable results",
        },
        secondary: {
          label: "SECONDARY SPECIALTY",
          title: "Code of Conduct",
          description:
            "Privacy, confidentiality and trust are pillars of our work ethic. This is the culture that creates a strategic advantage when choosing DolInveste. Each step of the process is also personalized through the application of integrated and innovative solutions to achieve our clients' organizational strategic missions through dynamic and diversified talents.",
        },
      },
      contact: {
        title: "We are ready to have an introductory conversation with you",
        cta: "Get in touch",
        form: {
          title: "Send us a Message",
            pageTitle: "CONTACT"
        },
        info: {
          description: "Investment Management Is Our Core Business",
          schedule: "Mon-Fri: 8:00 AM – 5:48 PM",
          weekend: "Weekend: Closed",
          email: "office@dolinvest.co.ao",
          phone: "+244 914 052 955 / +244 949 500 505",
          social: "Find us on the following social networks:",
        },
        quickLinks: "Quick links",
        services: "Services",
        contacts: "Contacts",
        about: "ABOUT US",
        organization: "Organization",
        management: "Management",
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
