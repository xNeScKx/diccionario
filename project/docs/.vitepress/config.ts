import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Diccionario de Coomponentes Glosario',
  description: 'Diccionario de Coomponentes Glosario',



  themeConfig: {
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
              { text: 'Componente Fideicomisos/Organismos', link: '/fideicomisos' },
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
              { text: 'Vista de la página Trámites', link: '/paginartramites' },
            ],
          },
        ],
      },
    ],
  },
});
