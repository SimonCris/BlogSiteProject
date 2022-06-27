export const environment = {
  production: true,
  endpoint: {
    blog: {
      immagini: '/blog/media/immagini',
      articoli: '/blog/media/articoli',
      video: '/blog/media/video'
    },
    media: {
      consulenzaImmagine: '/blog/media/consulenzaImmagine',
      analisiStile: '/blog/media/analisiStile',
      shoppingEGuardaroba: '/blog/media/shoppingEGuardaroba',
      makeupPalette: '/blog/media/makeupPalette'
    },
    works: {
      armocromia: '/blog/media/works/media/armocromia',
      wedding: '/blog/media/works/media/wedding',
      facialShapes: '/blog/media/works/media/facialShapes',
      bodyShapes: '/blog/media/works/media/bodyShapes',
      lookChange: '/blog/media/works/media/lookChange'
    }
  },
  firebaseConfig: {
    apiKey: "AIzaSyArey947zHHmtMAvwMaa4A6lP6bHlcgRJc",
    authDomain: "blogsiteproject-570a4.firebaseapp.com",
    projectId: "blogsiteproject-570a4",
    storageBucket: "blogsiteproject-570a4.appspot.com",
    messagingSenderId: "336989683463",
    appId: "1:336989683463:web:05fdd95c06d65a5c144fa2",
    measurementId: "G-4T5RYTG7RF"
  },
  loggerServiceActive: false
};
