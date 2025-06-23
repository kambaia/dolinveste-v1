import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  pt: {
    translation: {
      nav: {
        home: "HOME",
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
        title: "É o sucesso dos nossos clientes que mais nos impulsiona?",
        subtitle: "AS SUAS NECESSIDADES SÃO A NOSSA MAIOR PRIORIDADE",
        description:
          "Independentemente da complexidade e tamanho do projeto, a Dolinveste se empenha no desenvolvimento sustentável para nós e os nossos clientes.",
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
          "Desde projectos empresariais a serviços de assessoria e consultoria, estamos prontos para ajudá-lo a alcançar os objectivos da sua empresa. Um bom começo é o primeiro passo para um futuro promissor.",
      },
      specialties: {
        primary: {
          label: "NOSSA ESPECIALIDADE PRIMARIA",
          title: "Conhecimento Funcional",
          description:
            "Com uma vasta experiência na área de gestão de projectos, a Dolinveste estabeleceu elevados padrões de conformidade e qualidade, totalmente alinhados com a legislação aplicável, bem como com os requisitos e expectativas dos seus clientes. Como resultado, garantimos a entrega de soluções eficazes e resultados mensuráveis.",
        },
        secondary: {
          label: "NOSSA ESPECIALIDADE SECUNDÁRIA",
          title: "Código de Conduta",
          description:
            "Privacidade, confidencialidade e confiança são pilares fundamentais da nossa ética profissional. Esta cultura constitui uma vantagem estratégica para quem escolhe a Dolinveste. Cada etapa do processo é personalizada através da aplicação de soluções integradas e inovadoras, com o objectivo de concretizar as missões estratégicas das organizações que servimos, recorrendo a talentos dinâmicos e diversificados.",
        },
      },
      /* traduções do sobre */
      about: {
        pageTitle: "SOBRE NÓS",
        breadcrumb: {
          home: "HOME",
          about: "About",
        },
        howWeServe: {
          subtitle: "OS NOSSOS TRABALHOS",
          title: "COMO SERVIMOS",
          expertise: {
            title: "PERÍCIA DO THINK TANK",
            description:
              "O nosso know-how baseia-se numa experiência significativa na área e nos nossos projetos diversificados. Cada projeto único acrescenta à base de conhecimentos que muito valorizamos.",
          },
          heart: {
            title: "CORAÇÃO PARA O SERVIÇO",
            description:
              "Nossa paixão é encontrada em testemunhar o seu sucesso. Nosso equipe faz isso dominando seus desafios, resolvendo-os e fechando cada caso com sua satisfação.",
          },
          diligence: {
            title: "DILIGÊNCIA MUITO DILIGENCIAL",
            description:
              "Nenhum projecto ou processo é o mesmo. A nossa equipa tem olho para os detalhes e está empenhada no mais alto padrão de trabalho.",
          },
          solutions: {
            title: "SOLUÇÕES E RESULTADOS",
            description:
              "Na Dolinveste falamos a linguagem das soluções e dos resultados. Não há problema que, após análise, não possa ser tratado.",
          },
        },
        whoWeAre: {
          subtitle: "QUEM SOMOS",
          title: "SOMOS A DOLINVESTE - ESTAMOS PRONTOS PARA SERVIR",
          description:
            "A Dolinveste LDA é uma empresa orientada para a gestão de projectos, impulsionada pela inovação e comprometida com a missão dos seus clientes. Atuamos no desenvolvimento e implementação de soluções nas áreas de Tecnologias de Informação, Telecomunicações, Construção Civil e Gestão Imobiliária.",
          description1:
            "Somos ainda fornecedores de sistemas e serviços de segurança de elevada complexidade, oferecendo soluções tecnológicas adaptadas às necessidades de instituições públicas, empresas privadas e unidades industriais.",
        },
        inspiration: {
          subtitle: "INSPIRAÇÃO",
          title: "FAMILIARIZAR-SE COM O NOSSO PROTOCOLO.",
          description:
            "Embora Dolinveste tenha tudo a ver com uma abordagem personalizada, fazemos a promessa de que receberá de nós quatro coisas: conhecimento, serviço, precisão e resultados.",
        },
      },
      /* traduções do sobre */
      contact: {
        title: "Estamos disponíveis para agendar uma conversa introdutória consigo",
        cta: "Entre em contacto",
        form: {
          title: "Envie-nos uma mensagem",
          pageTitle: "CONTACTO",
          send: "Enviar",
          fullName: "Ex. Manuel Pacavira",
          email: "ex. manuelpacavira@gmail.com",
          subject: "Escreva aqui o que desejas",
          message: "Escreva aqui a sua mensaem para nós"
        },
        breadcrumb: {
          home: "home",
          contact: "Contacto"
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
        title: "BUSINESS MANAGEMENT",
        subtitle: "TECHNOLOGY AND INNOVATION",
        cta: "Learn more",
      },
      features: {
        title: "YOUR NEEDS ARE OUR HIGHEST PRIORITY",
        subtitle: "Is it our clients' success that drives us the most?",
      },
      services: {
        title: "ARE THE SUCCESS OF OUR CUSTOMERS OUR BIGGEST IMPULSE?",
        subtitle: "YOUR NEEDS ARE OUR HIGHEST PRIORITY",
        description:
          "Regardless of the complexity and size of the project, Dolinvest strives to sustainable development for us and our customers.",
        investment: {
          title: "Civil Construction and Real Estate Management",
          description: "Public works, condominiums, and housing projects.",
        },
        security: {
          title: "Electronic Security",
          description: "Security for communications and data protection.",
        },
        infrastructure: {
          title: "Electrical and Electronic Infrastructures",
          description:
            "Planning and implementing trading systems, planning and implementing analysis systems, planning and implementing reporting systems.",
        },
      },
      support: {
        title: "OUR OFFER FOR YOU",
        subtitle: "Customer Support in Various Domains",
        description:
          "From business projects to advisory and consultancy services, we are ready to support you in achieving your company’s goals. A strong start is the first step toward a promising future.",
      },
      specialties: {
        primary: {
          label: "OUR EXPERTISE",
          title: "Functional Knowledge",
          description:
            "With extensive experience in project management, Dolinveste has established high standards of compliance and quality, fully aligned with applicable legislation and with the requirements and expectations of our clients. As a result, we ensure the delivery of effective solutions and measurable outcomes",
        },
        secondary: {
          label: "OUR SECONDARY EXPERTISE",
          title: "Code of Conduct",
          description:
            "Privacy, confidentiality, and trust are fundamental pillars of our professional ethics. This culture represents a strategic advantage for those who choose Dolinveste. Every step of the process is tailored through the application of integrated and innovative solutions, with the aim of fulfilling the strategic missions of the organizations we serve, by leveraging dynamic and diverse talent",
        },
      },
      /* traduções do sobre */
      about: {
        pageTitle: "ABOUT US",
        breadcrumb: {
          home: "HOME",
          about: "About",
        },
        howWeServe: {
          subtitle: "OUR WORK",
          title: "HOW WE SERVE",
          expertise: {
            title: "THINK TANK EXPERTISE",
            description:
              "Our know-how is based on significant experience in the field and our diverse projects. Each unique project adds to the knowledge base that we value highly",
          },
          heart: {
            title: "HEART FOR SERVICE",
            description:
              "Our passion is found in witnessing your success. Our team does this by mastering your challenges, solving them, and closing each case to your satisfaction.",
          },
          diligence: {
            title: "VERY DILIGENT",
            description:
              "Not one project or process is the same. Our team has an eye for detail and is committed to the highest standard of work.",
          },
          solutions: {
            title: "SOLUTIONS AND RESULTS",
            description:
              "At Dolinvest we speak the language of solutions and results. There is no problem that, after analysis, cannot be treated.",
          },
        },
        whoWeAre: {
          subtitle: "WHO WE ARE",
          title: "WE ARE DOLINVESTE — READY TO SERVE",
          description:
            "Dolinveste LDA is a project-oriented company, driven by innovation and committed to delivering on the mission of its clients. We operate in the development and implementation of solutions in the fields of Information Technology, Telecommunications, Civil Construction, and Real Estate Management. We are also providers of complex security systems and services, offering technological solutions tailored to the needs of public institutions, private companies, and industrial facilities.",
          description1:
            "We are also providers of complex security systems and services, offering technological solutions tailored to the needs of public institutions, private companies, and industrial facilities.",
        },
        inspiration: {
          subtitle: "INSPIRATION",
          title: "FAMILIARIZE YOURSELF WITH OUR PROTOCOL.",
          description:
            "While Dolinvest is all about a personalized approach, we make a promise that you will receive four things from us, knowledge, service, accuracy, and results.",
        },
      },
      /* traduções do sobre */
      contact: {
        title: "We’re ready to schedule an introductory meeting with you let’s start the conversation.",
        cta: "Get in touch",
        form: {
          title: "Send us a Message",
          pageTitle: "CONTACT",
          send: "Send",
          fullName: "Ex. Manuel Pacavira",
          email: "ex. manuelpacavira@gmail.com",
          subject: "Write what you want here",
          message: "Write your message to us here"
        },
        breadcrumb: {
          home: "home",
          contact: "Contact"
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
