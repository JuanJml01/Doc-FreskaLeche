import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FreskaLeche",
  description: "nothing",
  base: '/repo/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: './img/images.png',

    siteTitle:'Manual de instalacion',

    search:{
      provider: 'local'
    },

    nav: [
      
    ],
    

    sidebar: [
      {
        text: 'Fedora Server',
        items: [
          {text: 'Paso de instalacion',items: [
            {text:'Requisisto de sistema',link:'/instalacion/paso_instalacion.md#paso_1'},
            {text:'Descargar la Imagen de Fedora Server ',link:'/instalacion/paso_instalacion.md#paso_2'},
            {text:'Crear un Medio de Arranque',link:'/instalacion/paso_instalacion.md#paso_3'},
            {text:'Arrancar desde el Medio de Arranque',link:'/instalacion/paso_instalacion.md#paso_4'},
            {text:'Iniciar el Proceso de Instalación',link:'/instalacion/paso_instalacion.md#paso_5'},
            {text:'Configurar el Idioma y la Zona Horaria',link:'/instalacion/paso_instalacion.md#paso_6'},
            {text:'Configurar el Disco',link:'/instalacion/paso_instalacion.md#paso_7'},
            {text:'Configurar la Red',link:'/instalacion/paso_instalacion.md#paso_8'},
            {text:'Establecer Contraseña de Root y Crear Usuario',link:'/instalacion/paso_instalacion.md#paso_9'},
            {text:'Comenzar la Instalación',link:'/instalacion/paso_instalacion.md#paso_10'},
            {text:'Reiniciar el Sistema',link:'/instalacion/paso_instalacion.md#paso_11'}
          ], link:'/instalacion/paso_instalacion.md' },
          {text: 'Prueba de instalacion en virtualbox',items:[], link:'/virtualbox/ins_vi.md'},
          {text: 'Apache y PHP',items:[
            {text:'Instalacion',link:'/apache/pasos.md'},
            {text:'Instalacion de modulos',link:'/apache/modulos.md'}
          ],link:'/apache/pasos.md'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer:{
      message:'Esto es una prueba version definitiva, esperar pa',
      copyright:'Mis bolas'

    }
  }
})
