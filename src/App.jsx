// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './components/Category/Category';
import ItemList from './components/ItemList/ItemList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Navbar from './components/Navbar/Navbar';
import ProductItem from './components/ProductItem/ProductItem';
import Footer from  './components/Footer/Footer';
import Header from './components/Header/Header';
import CategoryList from  './components/CategoryList/CategoryList';
import ItemDetail from  './components/ItemDetail/ItemDetail';
import Features from  './components/Features/Features';
import About from   './components/About/About';
import Contact from  './components/Contact/Contact';
import Loading from   './components/Loading/Loading';
import Cart from './components/Cart/Cart';
import './App.css';


const items = [
  {
    id: 1,
    name: 'Teddy Bear',
    description: 'Un suave y acogedor oso de peluche.',
    price: 19.980,
    image: 'https://m.media-amazon.com/images/I/61+KUSMYybL._AC_SY300_SX300_.jpg',
  },
  {
    id: 2,
    name: 'Lego Set',
    description: 'Un set de construcción LEGO para horas de diversión.',
    price: 29.950,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_976951-MLU72604319457_102023-F.webp',
  },
  {
    id: 3,
    name: 'Set de ToyStory Figure',
    description: 'Figuras de ToyStory los personajes favoritos de los niños.',
    price: 24.981,
    image: 'https://mirax.cl/productos/n220001a230000/n224001a225000/n224101a224200/n224156.jpg',
  },
  {
    id: 4,
    name: 'Auto a control remoto trepa paredes',
    description: 'Auto a control remoto trepa paredes para niños, lleva la diversión a otro nivel: ¡Maneja en pisos, ventanas y paredes!',
    price: 30.960,
    image: 'https://www.a3d.cl/media/catalog/product/cache/26063b30e217ebb4bb1ab7bf53e61dc9/2/_/2_5.jpg',
  },
  {
    id: 5,
    name: 'Star Belly Cachorro Mimoso',
    description: 'El espanta cuco de peluche de cachorro que convertirá la habitación de su hijo en un cielo estrellado. Con luces en movimiento y distintos colores.',
    price: 30.970,
    image: 'https://www.a3d.cl/media/catalog/product/cache/26063b30e217ebb4bb1ab7bf53e61dc9/s/b/sbelly1-azul_knmj18ftrqwlikwb.jpg',
  },
  {
    id: 6,
    name: 'Juego de Mesa Español Deluxe',
    description: 'Velocidad y Estrategia Mejoradas, Ideal para Diversión Familiar de 6+, Regalo de Navidad Perfecto',
    price: 19.912,
    image: 'https://img.kwcdn.com/product/fancy/d14808ed-5930-4a2c-93e7-19d6795b3a90.jpg?imageView2/2/w/800/q/70/format/webp',
  },
]
  // ... (tu arreglo de productos)


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
  // ... (tu arreglo de categorías)


  function App() {
    const [cart, setCart] = useState([]); // Estado para el carrito
    const [showCart, setShowCart] = useState(false); // Estado para mostrar/ocultar el carrito
  
    const handleAddToCart = (product) => {
      setCart([...cart, product]); // Agregar producto al carrito
    };
  
    const handleRemoveFromCart = (productId) => {
      setCart(cart.filter(item => item.id !== productId)); // Eliminar producto del carrito
    };
  
    const toggleCart = () => {
      setShowCart(!showCart); // Alternar la visibilidad del carrito
    };
  
    return (
      <Router>
        <div className="App">
          <Header toggleCart={toggleCart} /> {/* Pasar la función toggleCart */}
          <Navbar cartCount={cart.length} />
          <main>
            <h1 className="app-title">Lista de Juguetes</h1>
            <Category categories={categories} />
            <Routes>
              <Route path="/" element={<ItemList items={items} onAdd={handleAddToCart} />} />
              <Route path="/detalles/:id" element={<ProductDetails items={items} />} />
              <Route path="/about" element={<About />} /> {/* Ruta para About */}
              <Route path="/contact" element={<Contact />} /> {/* Ruta para Contact */}
            </Routes>
            {showCart && <Cart cartItems={cart} onRemove={handleRemoveFromCart} />} {/* Mostrar el carrito si showCart es true */}
            <About />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }

  export default App;