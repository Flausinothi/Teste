import type { ResumeData } from "../types";

export const initialData: ResumeData = {
  name: "Seu Nome Completo",
  title: "Advogada | Especialista em Direito Civil",
  email: "contato@escritorio.adv.br",
  phone: "+55 (11) 9 9999-9999",
  location: "São Paulo, Brasil",
  linkedin: "linkedin.com/in/seuperfil",
  github: "",
  about:
    "Advogada com sólida atuação em Direito Civil, especialmente nas áreas de contratos, responsabilidade civil e direito de família. Pós-graduada em Direito Civil, com experiência em contencioso e consultivo, assessorando pessoas físicas e jurídicas com ética, comprometimento e excelência técnica.",
  experiences: [
    {
      id: "exp1",
      company: "Escritório Próprio",
      role: "Advogada Autônoma",
      period: "Jan 2021 – Presente",
      location: "São Paulo, SP",
      description:
        "Atuação consultiva e contenciosa em Direito Civil: elaboração e revisão de contratos, representação em ações de indenização por danos morais e materiais, inventários extrajudiciais e processos de divórcio. Atendimento humanizado com foco na solução eficiente dos conflitos.",
    },
    {
      id: "exp2",
      company: "Escritório Silva & Associados",
      role: "Advogada Associada",
      period: "Mar 2018 – Dez 2020",
      location: "São Paulo, SP",
      description:
        "Integrei a equipe cível com ênfase em responsabilidade civil e direito do consumidor. Elaboração de peças processuais, acompanhamento de audiências de conciliação e instrução, pesquisa jurisprudencial e assessoria a clientes corporativos.",
    },
    {
      id: "exp3",
      company: "Escritório Costa Advogados",
      role: "Estagiária de Direito",
      period: "Ago 2016 – Fev 2018",
      location: "São Paulo, SP",
      description:
        "Auxílio na elaboração de petições iniciais, contestações e recursos cíveis. Acompanhamento de audiências e atendimento a clientes sob supervisão dos advogados seniores.",
    },
  ],
  education: [
    {
      id: "edu1",
      institution: "Escola Paulista de Direito – EPD",
      degree: "Pós-Graduação (Lato Sensu)",
      field: "Direito Civil",
      period: "2019 – 2020",
      description:
        "Especialização com ênfase em Direito Contratual, Responsabilidade Civil e Direito das Sucessões. Trabalho de conclusão sobre a função social do contrato no Código Civil de 2002.",
    },
    {
      id: "edu2",
      institution: "Universidade Presbiteriana Mackenzie",
      degree: "Bacharelado em Direito",
      field: "Direito",
      period: "2013 – 2018",
      description:
        "Formação com participação no Núcleo de Prática Jurídica e em projeto de extensão de assistência jurídica gratuita à comunidade.",
    },
  ],
  skills: [
    {
      id: "sk1",
      category: "Áreas de Atuação",
      items: "Direito Civil, Direito Contratual, Responsabilidade Civil, Direito de Família, Direito das Sucessões",
    },
    {
      id: "sk2",
      category: "Prática Jurídica",
      items: "Petições e Recursos, Audiências, Mediação, Contratos, Inventário Extrajudicial",
    },
    {
      id: "sk3",
      category: "Ferramentas",
      items: "PJe, PROJUDI, e-SAJ, Thomson Reuters Proview, LexML",
    },
    {
      id: "sk4",
      category: "Idiomas",
      items: "Português (nativo), Inglês (intermediário), Espanhol (básico)",
    },
  ],
  certificates: [
    {
      id: "cert1",
      title: "Especialização em Direito Civil",
      issuer: "Escola Paulista de Direito – EPD",
      date: "Dezembro 2020",
      credential: "EPD-2020-DC-0842",
      description:
        "Pós-graduação lato sensu com foco em Direito Contratual, Responsabilidade Civil e Sucessões.",
    },
    {
      id: "cert2",
      title: "Mediação e Conciliação de Conflitos",
      issuer: "Conselho Nacional de Justiça – CNJ",
      date: "Agosto 2021",
      credential: "CNJ-MC-11438",
      url: "https://www.cnj.jus.br/",
      description:
        "Formação em técnicas de mediação e conciliação conforme a Resolução CNJ nº 125/2010.",
    },
    {
      id: "cert3",
      title: "Direito Digital e LGPD para Advogados",
      issuer: "OAB SP – Escola Superior de Advocacia",
      date: "Março 2022",
      credential: "ESA-SP-LGPD-2022",
      description:
        "Capacitação em proteção de dados pessoais, Lei Geral de Proteção de Dados e impactos no Direito Civil.",
    },
    {
      id: "cert4",
      title: "Inventário, Partilha e Planejamento Sucessório",
      issuer: "Instituto Brasileiro de Direito de Família – IBDFAM",
      date: "Setembro 2022",
      credential: "IBDFAM-IPS-0334",
      url: "https://ibdfam.org.br/",
      description:
        "Curso avançado sobre inventário judicial e extrajudicial, testamentos e planejamento sucessório.",
    },
    {
      id: "cert5",
      title: "Contratos Imobiliários na Prática",
      issuer: "Damásio Educacional",
      date: "Maio 2023",
      credential: "DAM-CI-7721",
      description:
        "Estudo aprofundado de contratos de compra e venda, locação, permuta e incorporação imobiliária.",
    },
    {
      id: "cert6",
      title: "Processo Civil Contemporâneo – CPC/2015",
      issuer: "Complexo Educacional Damásio de Jesus",
      date: "Novembro 2019",
      credential: "DAM-CPC-4498",
      description:
        "Atualização sobre o Código de Processo Civil de 2015: tutelas provisórias, cumprimento de sentença e recursos.",
    },
  ],
};
