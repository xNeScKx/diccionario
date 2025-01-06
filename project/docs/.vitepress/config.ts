import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Diccionario de Componentes Glosario',
  description: 'Diccionario de Coomponentes Glosario',
  base: '/glosario/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }]
  ],



  themeConfig: {
    logo: 'img/logo.png',
    //nav: [
    //{ text: 'Example', link: '/example' },
    //{ text: 'Seccion 1', link: '/seccion1' },

    //{
    //text: 'Dropdown Menu',
    //items: [
    //{ text: 'Item A', link: '/item-1' },
    //     { text: 'Item B', link: '/item-2' },
    //     { text: 'Item C', link: '/item-3' },
    //],
    //},

    // ...
    //],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          {
            text: 'Pagina Inicio',
            collapsed: true,   // Opcional: inicia colapsado
            items: [
              { text: 'Componente Header', link: '/header' },
              { text: 'Componente Últimas Noticias', link: '/noticias' },
              { text: 'Componente de Convocatorias', link: '/convocatorias' },
              { text: 'Componentes de Recursos para el Ciudadano', link: '/recursos' },
              { text: 'Componente Footer', link: '/footer' },
              { text: 'Vista de la página Inicio', link: '/paginainicio' },
            ],
          },
          {
            text: 'Pagina Acerca De',
            collapsed: true,   // Opcional: inicia colapsado
            items: [
              { text: 'Componente Acerca De', link: '/acercade' },
              { text: 'Componente Valores', link: '/valores' },
              { text: 'Componente Directorio', link: '/directorio' },
              { text: 'Componente Organigrama', link: '/organigrama' },
              { text: 'Componente Footer', link: '/footer' },
              { text: 'Componente Fideicomisos/Organismos', link: '/fideicomisos' },
              { text: 'Vista de la página Acerca De', link: '/paginaacercade' },
            ],
          },
          {
            text: 'Pagina Programas',
            collapsed: true,   // Opcional: inicia colapsado
            items: [
              { text: 'Componente Header', link: '/header' },
              { text: 'Componente Programas Sociales (Permanentes)', link: '/programassociales' },
              { text: 'Componente Programas Sociales (Temporales)', link: '/programassocialestemporales' },
              { text: 'Componente Preguntas Frecuentes', link: '/preguntasfrecuentes' },
              { text: 'Componente Atención Ciudadana', link: '/atencionciudadana' },
              { text: 'Componente Footer', link: '/footer' },
              { text: 'Vista de la página Programas', link: '/paginaprogramas' },
            ],
          },
          {
            text: 'Pagina Convocatorias',
            collapsed: true,   // Opcional: inicia colapsado
            items: [
              { text: 'Componente Header (Convocatorias)', link: '/headerconvocatoria' },
              { text: 'Componente Eventos', link: '/eventos' },
              { text: 'Componente Contactanos', link: '/contactanos' },
              { text: 'Componente Footer', link: '/footer' },
              { text: 'Vista de la página Convocatorias', link: '/paginaconvocatorias' },
            ],
          },
          {
            text: 'Pagina Trámites',
            collapsed: true,   // Opcional: inicia colapsado
            items: [
              { text: 'Componente Header (Trámites)', link: '/header' },
              { text: 'Componente Trámites', link: '/tramites' },
              { text: 'Componente Preguntas Frecuentes', link: '/preguntasfrecuentes' },
              { text: 'Componente Atención Ciudadana', link: '/atencionciudadana' },
              { text: 'Componente Footer', link: '/footer' },
              { text: 'Vista de la página Trámites', link: '/paginatramites' },
            ],
          },
          {
            text: 'Página Fideicomisos/Organismos',
            collapsed: true,   // Opcional: inicia colapsado
            items: [
              { text: 'Componente Header (Fideicomisos/Organismos)', link: '/header' },
              { text: 'Componente Fideicomisos/Organismos', link: '/fideicomisos' },
              { text: 'Componente Preguntas Frecuentes', link: '/preguntasfrecuentes' },
              { text: 'Componente Directorio', link: '/directorio' },
              { text: 'Componente Atención Ciudadana', link: '/atencionciudadana' },
              { text: 'Componente Footer', link: '/footer' },
              { text: 'Vista de la página Fideicomisos/Organismos', link: '/paginafideicomisos' },
            ],
          },
          {
            text: 'Página Transparencia',
            collapsed: true,   // Opcional: inicia colapsado
            items: [
              { text: 'Componente Header', link: '/header' },
              { text: 'Componente Transparencia', link: '/transparencia' },
              { text: 'Componente Marco Jurídico', link: '/marcojuridico' },
              { text: 'Componente Contactanos', link: '/contactanos' },
              { text: 'Componente Footer', link: '/footer' },
              { text: 'Vista de la página Marco Jurídico', link: '/paginamarcojuridico' },
            ],
          },
          {
            text: 'Página Contactanos',
            collapsed: true,   // Opcional: inicia colapsado
            items: [
              { text: 'Componente Header', link: '/header' },
              { text: 'Componente Contactanos', link: '/contactanos' },
              { text: 'Componente Preguntas Frecuentes', link: '/preguntasfrecuentes' },
              { text: 'Componente Footer', link: '/footer' },
              { text: 'Vista de la página Contactanos', link: '/paginacontactanos' },
            ],
          },
        ],
      },
    ],
  },
});
