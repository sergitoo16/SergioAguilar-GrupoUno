import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoryList from './components/CategoryList/CategoryList';
import Header from './components/Header/Header';
import About from './components/About/About';
import Features from './components/Features/Features';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ItemList from './components/ItemList/ItemList';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Category from './components/Category/Category';
import Loading from './components/Loading/Loading';
import './App.css';

function App() {
  // Definición de ítems
  const items = [
    {
      id: 1,
      name: 'Teddy Bear',
      description: 'Un suave y acogedor oso de peluche.',
      price: 19.99,
      image: 'https://m.media-amazon.com/images/I/61+KUSMYybL._AC_SY300_SX300_.jpg',
    },
    {
      id: 2,
      name: 'Lego Set',
      description: 'Un set de construcción LEGO para horas de diversión.',
      price: 29.99,
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_976951-MLU72604319457_102023-F.webp',
    },
    {
      id: 3,
      name: 'Set de ToyStory Figure',
      description: 'Figuras de ToyStory los personajes favoritos de los niños.',
      price: 24.99,
      image: 'https://mirax.cl/productos/n220001a230000/n224001a225000/n224101a224200/n224156.jpg',
    },
    {
      id: 4,
      name: 'Auto a control remoto trepa paredes',
      description: 'Auto a control remoto trepa paredes para niños, lleva la diversión a otro nivel: ¡Maneja en pisos, ventanas y paredes!',
      price: 30.99,
      image: 'https://www.a3d.cl/media/catalog/product/cache/26063b30e217ebb4bb1ab7bf53e61dc9/2/_/2_5.jpg',
    },
    {
      id: 5,
      name: 'Star Belly Cachorro Mimoso',
      description: 'El espanta cuco de peluche de cachorro que convertirá la habitación de su hijo en un cielo estrellado. Con luces en movimiento y distintos colores.',
      price: 30.99,
      image: 'https://www.a3d.cl/media/catalog/product/cache/26063b30e217ebb4bb1ab7bf53e61dc9/s/b/sbelly1-azul_knmj18ftrqwlikwb.jpg',
    },
  ].sort((a, b) => a.name.localeCompare(b.name)); // Ordenar por nombre

  // Definición de categorías
  const categories = [
    {
      id: 1,
      name: 'Peluches',
      image: 'https://static.vecteezy.com/system/resources/previews/006/008/937/non_2x/cute-bear-says-hello-an-image-for-a-children-s-postcard-holiday-invitations-greetings-decoration-of-a-children-s-room-flat-style-illustration-for-cover-design-notebooks-mugs-fabrics-free-vector.jpg',
    },
    {
      id: 2,
      name: 'Construcción',
      image: 'https://www.redcenit.com/redcenit/wp-content/uploads/2016/03/building-674828_1920.jpg',
    },
    {
      id: 3,
      name: 'Figuras de Acción',
      image: 'https://img.freepik.com/fotos-premium/coleccion-figuras-accion-estante-madera_950558-13693.jpg',
    },
    {
      id: 4,
      name: 'Juegos de Mesa',
      image: 'https://www.hola.com/horizon/landscape/a83cdb05d655-juego-mesa-portada-t.jpg',
    },
  ]

  return (
    
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Features />
              <Contact />
              <div className="App">
            <h1>Lista de Categoria</h1>
            <Category categories={categories} />
            
        </div>
              <Category />
              <div className="App">
            <h1>Lista de Juguetes</h1>
            <ItemList items={items} />
        </div>
            </>
          } />
          <Route path="/item/:id" element={<ItemDetail />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;