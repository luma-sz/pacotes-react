import React from 'react';
import EventCard from '../EventCard/EventCard.jsx';
import './EventsSection.css';

const eventsData = [
    { 
        id: 1, title: 'Dia das Crianças', subtitle: 'Alegria e Diversão', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/4.jpg',
        details: { title: 'Diversão para os Pequenos', pills: [{ icon: 'fas fa-gamepad', text: 'Dos dias 10/10 a 12/10' }, { icon: 'fas fa-magic', text: 'Mínimo 2 diárias' }, { icon: 'fas fa-ice-cream', text: 'Brincadeiras em família!' }], whatsappText: 'Programação Infantil', buttonText: 'Pacotes Dia das Crianças' }
    },
    { 
        id: 2, title: 'Dia do Servidor Público', subtitle: 'Merecido Reconhecimento', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/5.jpg',
        details: { title: 'Dia do Servidor Público', pills: [{ icon: 'fas fa-tags', text: 'Dos dias 25/10 a 28/10' }, { icon: 'fas fa-cocktail', text: 'Mínimo 3 diárias' }, { icon: 'fas fa-spa', text: 'Bem-Estar e Relaxamento' }], whatsappText: 'Condições Especiais', buttonText: 'Pacotes para Servidores' }
    },
    { 
        id: 3, title: 'Natal', subtitle: 'Magia e Encanto', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/6.jpg',
        details: { title: 'Natal', pills: [{ icon: 'fas fa-sleigh', text: 'Dos dias 23/12 a 26/12' }, { icon: 'fas fa-utensils', text: 'Mínimo 3 diárias' }, { icon: 'fas fa-gift', text: 'Especial Natalino' }], whatsappText: 'Programação de Natal', buttonText: 'Pacotes Natalinos' }
    },
    { 
        id: 4, title: 'Réveillon 2026', subtitle: 'Celebre o Novo Ano', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/13.jpg',
        details: { title: 'Réveillon Inesquecível 2026', pills: [{ icon: 'fas fa-cocktail', text: 'Dos dias 29/12 a 01/01' }, { icon: 'fas fa-star', text: 'Mínimo 3 diárias' }, { icon: 'fas fa-music', text: 'Festa da virada' }], whatsappText: 'Detalhes da Festa', buttonText: 'Pacotes de Réveillon 2026' }
    },
    { 
        id: 5, title: 'Carnaval 2026', subtitle: 'Alegria Contagiante', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/7.jpg',
        details: { title: 'Carnaval 2026: Pura Folia!', pills: [{ icon: 'fas fa-drum', text: 'Dos dias 14/02 a 18/02' }, { icon: 'fas fa-cocktail', text: 'Mínimo 4 diárias' }, { icon: 'fas fa-music', text: 'Muita Música' }], whatsappText: 'Programação de Carnaval', buttonText: 'Pacotes Carnaval 2026' }
    },
    { 
        id: 6, title: 'Pacote Romântico', subtitle: 'Momento a Dois', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/SaveClip.App_501890139_18060369629515797_1203191363873345339_n-1080x1350.jpg',
        details: { title: 'Decoração especial!', pills: [{ icon: 'fa-solid fa-calendar', text: 'Escolha o melhor dia' }, { icon: 'fas fa-wine-glass-alt', text: 'Comemorações a dois!' }, { icon: 'fa-solid fa-shield-heart', text: 'Momentos Inesquecíveis' }], whatsappText: 'Hospedagem Especial', buttonText: 'Pacotes Dos Namorados' }
    },
    { 
        id: 7, title: 'Férias de Julho 2026', subtitle: 'Descanso e diversão', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/16.jpg',
        details: { title: 'Aproveite as férias!', pills: [{ icon: 'fa-solid fa-location-dot', text: 'Para julho inteiro!' }, { icon: 'fas fa-users', text: 'Consulte os melhores dias' }, { icon: 'fas fa-hotel', text: 'Aproveite ao máximo' }], whatsappText: 'Invista em suas férias', buttonText: 'Aproveite suas férias' }
    },
    { 
        id: 8, title: 'Dia dos Pais 2026', subtitle: 'Homenagem Especial', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/15.jpg',
        details: { title: 'Dia dos Pais Inesquecível', pills: [{ icon: 'fas fa-gift', text: 'Dos dias 08/08 a 10/08' }, { icon: 'fas fa-utensils', text: 'Mínimo 2 diárias' }, { icon: 'fas fa-users', text: 'Momentos em Família' }], whatsappText: 'Veja a programação', buttonText: 'Pacotes Dia dos Pais' }
    },
    { 
        id: 9, title: 'Verde e Amarelo 2026', subtitle: 'Orgulho Nacional', image: 'https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/Site_Eventos/3.jpg',
        details: { title: 'Celebre o Brasil 2026', pills: [{ icon: 'fas fa-futbol', text: 'Dos dias 05/09 a 07/09' }, { icon: 'fas fa-music', text: 'Mínimo 2 diárias' }, { icon: 'fas fa-glass-cheers', text: 'Ordem e progresso!' }], whatsappText: 'Confira as festividades', buttonText: 'Pacotes Brasileiros' }
    },
];

const EventsSection = () => {
  return (
    <section className="events-section">
      <h2 className="section-title">Celebre os Feriados Conosco</h2>
      <p className="section-subtitle">
        Planeje sua viagem e aproveite os feriados prolongados e datas especiais com Viale Hotéis.
      </p>
      <div className="events-grid">
        {eventsData.map(event => (
          <EventCard 
            key={event.id}
            event={event}
          />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;