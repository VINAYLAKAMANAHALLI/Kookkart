import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from "react-hot-toast";
import Footer from './components/Footer';
import { useAppContext } from './context/AppContext';
import Login from './components/Login';
import AllProducts from './pages/AllProducts';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AddAddress from './pages/AddAddress';
import MyOrders from './pages/MyOrders';
import SellerLogin from './components/seller/SellerLogin';
import SellerLayout from './pages/seller/SellerLayout';
import AddProduct from './pages/seller/AddProduct';
import ProductList from './pages/seller/ProductList.jsx';
import Orders from './pages/seller/Orders';
import Loading from './components/Loading';
import Contact from './pages/Contact'



const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin, isSeller} = useAppContext()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-400 to-orange-300 text-gray-900 font-sans transition-all duration-300 ease-in-out">
      {/* Navbar (hide on seller routes) */}

     {isSellerPath ? null : <Navbar/>} 
     {showUserLogin ? <Login/> : null}

     <Toaster />

      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<AllProducts/>} />
          <Route path='/products/:category' element={<ProductCategory/>} />
          <Route path='/products/:category/:id' element={<ProductDetails/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/add-address' element={<AddAddress/>} />
          <Route path='/my-orders' element={<MyOrders/>} />
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/loader' element={<Loading/>} />
          <Route path='/seller' element={isSeller ? <SellerLayout/> : <SellerLogin/>}>
            <Route index element={isSeller ? <AddProduct/> : null} />
            <Route path='product-list' element={<ProductList/>} />
            <Route path='orders' element={<Orders/>} />
          </Route>
        </Routes>
      </div>
     {!isSellerPath && <Footer/>}
    </div>
  )
}

export default App


// import React from 'react'
// import Navbar from './components/Navbar'
// import { Route, Routes, useLocation } from 'react-router-dom'
// import Home from './pages/Home'
// import { Toaster } from "react-hot-toast";
// import Footer from './components/Footer';
// import { useAppContext } from './context/AppContext';
// import Login from './components/Login';
// import AllProducts from './pages/AllProducts';
// import ProductCategory from './pages/ProductCategory';
// import ProductDetails from './pages/ProductDetails';
// import Cart from './pages/Cart';
// import AddAddress from './pages/AddAddress';
// import MyOrders from './pages/MyOrders';
// import SellerLogin from './components/seller/SellerLogin';
// import SellerLayout from './pages/seller/SellerLayout';
// import AddProduct from './pages/seller/AddProduct';
// import ProductList from './pages/seller/ProductList.jsx';
// import Orders from './pages/seller/Orders';
// import Loading from './components/Loading';
// import Contact from './pages/Contact';

// const App = () => {
//   const isSellerPath = useLocation().pathname.includes("seller");
//   const { showUserLogin, isSeller } = useAppContext();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-400 to-orange-300 text-gray-900 font-sans transition-all duration-300 ease-in-out">
//       {/* Navbar (hide on seller routes) */}
//       {!isSellerPath && <Navbar />}

//       {/* Login Modal */}
//       {showUserLogin && <Login />}

//       {/* Toast Notifications */}
//       <Toaster position="top-right" toastOptions={{ style: { background: "#fff", color: "#333" } }} />

//       {/* Main Layout */}
//       <main className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32 py-4"}`}>
//         <div className="rounded-xl overflow-hidden">
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/products' element={<AllProducts />} />
//             <Route path='/products/:category' element={<ProductCategory />} />
//             <Route path='/products/:category/:id' element={<ProductDetails />} />
//             <Route path='/cart' element={<Cart />} />
//             <Route path='/add-address' element={<AddAddress />} />
//             <Route path='/my-orders' element={<MyOrders />} />
//             <Route path='/Contact' element={<Contact />} />
//             <Route path='/loader' element={<Loading />} />
//             <Route path='/seller' element={isSeller ? <SellerLayout /> : <SellerLogin />}>
//               <Route index element={isSeller ? <AddProduct /> : null} />
//               <Route path='product-list' element={<ProductList />} />
//               <Route path='orders' element={<Orders />} />
//             </Route>
//           </Routes>
//         </div>
//       </main>

//       {/* Footer (hide on seller routes) */}
//       {!isSellerPath && <Footer />}
//     </div>
//   );
// }

// export default App;

