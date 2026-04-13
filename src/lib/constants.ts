import type {
  PersonaData,
  BenefitData,
  TestimonialData,
  ProcessStepData,
  FAQItem,
} from '@/types'

// Contact Info
export const CONTACT_INFO = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+5511999999999',
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+5511999999999',
  email: process.env.NEXT_PUBLIC_EMAIL || 'contato@totaldocumentos.com.br',
}

// Hero Section
export const HERO = {
  title: 'Sua Marca Está Blindada? Descubra em 2 Minutos',
  subtitle: '6-12 meses de acompanhamento profissional. Nenhuma surpresa com INPI. Vinicius responde.',
  cta: 'Agendar Consultoria Gratuita',
  trustStatements: [
    '350+ Marcas Protegidas',
    '95% Taxa de Aprovação INPI',
    '6-12 Meses de Acompanhamento',
  ],
}

// Problema Section
export const PERSONAS: PersonaData[] = [
  {
    id: 'ecommerce',
    name: 'E-commerce',
    icon: 'ecommerce',
    scenario: 'Começou vendendo online. Crescimento rápido.',
    painPoint:
      '"Minha marca cresceu, mas nunca protegi. E agora? Posso perder tudo?"',
  },
  {
    id: 'franqueador',
    name: 'Franqueador',
    icon: 'franquia',
    scenario: 'Quer expandir com franquias. Precisa se blindar.',
    painPoint:
      '"Se não proteger minha marca, alguém copia. Como garanto exclusividade?"',
  },
  {
    id: 'liberal',
    name: 'Profissional Liberal',
    icon: 'profissional',
    scenario: 'Consultiva, serviços, atuação individual.',
    painPoint:
      '"Minha reputação é meu ativo. Como protejo meu nome/marca profissional?"',
  },
]

// Solução Section
export const SOLUTION_STEPS: ProcessStepData[] = [
  {
    number: 1,
    title: 'Consultoria Gratuita',
    description: 'Análise de viabilidade e estratégia de proteção em 1h.',
    duration: '1h',
    icon: 'consultoria',
  },
  {
    number: 2,
    title: 'Análise INPI',
    description: 'Busca de marcas similares e avaliação de conflitos potenciais.',
    duration: '3-5d',
    icon: 'analise',
  },
  {
    number: 3,
    title: 'Registro Protocolado',
    description: 'Protocolo formal no INPI com acompanhamento completo.',
    duration: '30-60d',
    icon: 'registro',
  },
  {
    number: 4,
    title: 'Deferimento INPI',
    description: 'Aprovação oficial e concessão da marca protegida.',
    duration: '6-12m',
    icon: 'deferimento',
  },
  {
    number: 5,
    title: 'Proteção Contínua',
    description: 'Monitoramento, renovações e defesa de direitos.',
    duration: 'Indefinido',
    icon: 'protecao',
  },
]

// Diferencial Section
export const BENEFITS: BenefitData[] = [
  {
    id: 'consultiva',
    title: 'Consultiva',
    description: 'Estratégia alinhada ao seu negócio, não apenas protocolo burocrático.',
    icon: 'benefit1',
  },
  {
    id: 'acompanhada',
    title: 'Acompanhada',
    description: '6-12 meses ao seu lado. Sem surpresas. Vinicius responde pessoalmente.',
    icon: 'benefit2',
  },
  {
    id: 'pragmatica',
    title: 'Pragmática',
    description: 'Foco em resultado prático. Marca aprovada com segurança garantida.',
    icon: 'benefit3',
  },
  {
    id: 'transparente',
    title: 'Transparente',
    description: 'Preço fechado, cronograma claro, zero surpresas no caminho.',
    icon: 'benefit4',
  },
  {
    id: 'profissionalizada',
    title: 'Profissionalizada',
    description: 'Equipe INPI + especialistas. Expertise + relacionamento institucional.',
    icon: 'benefit5',
  },
  {
    id: 'expertise',
    title: 'Expertise',
    description: 'Vinicius com 15+ anos em propriedade intelectual e INPI.',
    icon: 'benefit6',
  },
]

// Social Proof Section
export const NUMBERS = [
  { value: '350+', label: 'Marcas Protegidas' },
  { value: '95%', label: 'Taxa de Aprovação INPI' },
  { value: '6-12m', label: 'Acompanhamento Completo' },
]

export const TESTIMONIALS: TestimonialData[] = [
  {
    name: 'Carolina M.',
    company: 'Tech Startup SP',
    quote:
      'Vinicius foi excepcional. Explicou tudo de forma clara, agilizou o processo e a marca foi aprovada em 8 meses. Altamente recomendo!',
  },
  {
    name: 'Roberto D.',
    company: 'E-commerce Varejo',
    quote:
      'Estava com medo de perder minha marca. Agora durmo tranquilo sabendo que está 100% protegida. Vinicius entendeu meu negócio.',
  },
  {
    name: 'Patricia A.',
    company: 'Consultoria Empresarial',
    quote:
      'A melhor decisão que tomei foi investir em proteção de marca. Vinicius tornou o processo simples e transparente. Muito obrigada!',
  },
]

// Quiz Section
export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Sua marca está registrada formalmente no INPI?',
    options: [
      { id: 'q1_yes', label: 'Sim, já protegida', risk: 0 },
      { id: 'q1_no', label: 'Não, apenas uso informal', risk: 10 },
      { id: 'q1_unsure', label: 'Não tenho certeza', risk: 7 },
    ],
  },
  {
    id: 2,
    question: 'Você já checou se alguém registrou uma marca similar?',
    options: [
      { id: 'q2_yes', label: 'Sim, fiz busca completa', risk: 0 },
      { id: 'q2_no', label: 'Não, nunca fiz', risk: 10 },
      { id: 'q2_partial', label: 'Fiz uma busca rápida', risk: 5 },
    ],
  },
  {
    id: 3,
    question: 'Sua marca está crescendo em relevância/faturamento?',
    options: [
      { id: 'q3_high', label: 'Crescimento acelerado', risk: 10 },
      { id: 'q3_moderate', label: 'Crescimento moderado', risk: 6 },
      { id: 'q3_low', label: 'Crescimento lento/estável', risk: 2 },
    ],
  },
  {
    id: 4,
    question: 'Qual é o risco competitivo do seu mercado?',
    options: [
      { id: 'q4_high', label: 'Muito competitivo (high risk)', risk: 10 },
      { id: 'q4_moderate', label: 'Moderadamente competitivo', risk: 6 },
      { id: 'q4_low', label: 'Pouco competitivo', risk: 2 },
    ],
  },
  {
    id: 5,
    question: 'Você investe significativamente em marketing/marca?',
    options: [
      { id: 'q5_yes', label: 'Sim, investo bastante', risk: 9 },
      { id: 'q5_moderate', label: 'Investo moderadamente', risk: 5 },
      { id: 'q5_no', label: 'Investimento mínimo', risk: 2 },
    ],
  },
]

export const QUIZ_RESULTS = {
  low: {
    title: '🟢 Risco Baixo',
    description: 'Sua marca está em posição segura no momento.',
    recommendation:
      'Ainda é importante regularizar a proteção junto ao INPI para eliminar qualquer vulnerabilidade futura. Converse conosco sobre um plano preventivo.',
  },
  medium: {
    title: '🟡 Risco Médio',
    description: 'Existem oportunidades de melhoria na proteção de marca.',
    recommendation:
      'Recomendamos uma consultoria urgente para avaliar riscos específicos e estruturar um plano de proteção robusto.',
  },
  high: {
    title: '🔴 Risco Alto',
    description: 'Sua marca corre riscos significativos sem proteção formal.',
    recommendation:
      'É crítico agir agora. Agende uma consultoria imediata com Vinicius para proteger seu maior ativo de negócio.',
  },
}

// FAQ Section
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Quanto tempo leva para registrar uma marca?',
    answer:
      'O processo completo é de 6-12 meses (média 9 meses). Consultoria: 1h. Análise INPI: 3-5 dias. Protocolo: 30-60 dias. Deferimento: 6-12 meses. Fornecemos suporte em todas as etapas.',
  },
  {
    id: 'faq2',
    question: 'Qual é o custo do registro de marca?',
    answer:
      'O custo varia conforme a complexidade. Consultoria inicial é gratuita. Custos estão ligados a guia INPI (variável por classe) + nossos honorários profissionais. Informaremos valores exatos após consultoria.',
  },
  {
    id: 'faq3',
    question: 'Posso usar a marca antes da aprovação INPI?',
    answer:
      'Sim, você pode usar a marca enquanto o processo corre. Recomendamos usar a notação ™ (uso não registrado) até a aprovação. Assim que aprovado, você usa ® (marca registrada).',
  },
  {
    id: 'faq4',
    question: 'E se minha marca for rejeitada?',
    answer:
      'Fazemos buscas prévias minuciosas para evitar rejeições. Se houver motivos menores, fazemos modificações. Se inviabilizar, retornamos os valores ao cliente sem custos ocultos.',
  },
  {
    id: 'faq5',
    question: 'Preciso estar no Brasil para registrar?',
    answer:
      'Não. Você pode estar em qualquer país. O registro é válido no Brasil e, opcionalmente, podemos expandir para MERCOSUL e outros territórios.',
  },
  {
    id: 'faq6',
    question: 'Vinicius acompanha pessoalmente meu processo?',
    answer:
      'Sim, em todos os passos. Você tem um contato direto com Vinicius ou seu time especializado. Não somos uma máquina burocrática.',
  },
  {
    id: 'faq7',
    question: 'Posso registrar múltiplas marcas simultaneamente?',
    answer:
      'Sim. Muitos clientes protegem marca principal, logos, slogans. Recomendamos uma estratégia integrada. Converse conosco sobre o melhor plano.',
  },
  {
    id: 'faq8',
    question: 'E após a aprovação? Vocês oferecem suporte contínuo?',
    answer:
      'Sim. Oferecemos monitoramento pós-aprovação, renovação em 10 anos, defesa contra cópias e expansão para novos territórios. Somos seu parceiro durável.',
  },
]

export const FINAL_CTA = {
  title: 'Pronto para Blindar Sua Marca?',
  subtitle: 'Agendar sua consultoria gratuita é o primeiro passo.',
  primaryCTA: 'Fale no WhatsApp',
  secondaryCTA: 'Ligue Agora',
  tertiaryCTA: 'Envie Email',
}
