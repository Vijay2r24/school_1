import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// import Navigation from "./components/Navigation/Navigation";
import Home from "./components/UploadForm/upload"
import "./index.css";


function App() {
  const location = useLocation();
  const showNavigation = location.pathname !== "/";

  return (
    <div className="App flex flex-col min-h-screen">
      {/* {showNavigation && <Navigation />} */}
      <main className="flex-grow p-0gi bg-gray-100">
         <Home />
                      <Routes>
                        
                      </Routes>
    
  
      </main>
    </div>
  );
}

export default App;


// import { Routes, Route, useLocation } from "react-router-dom";
// import Navigation from "./components/Navigation/Navigation";
// import AddProduct from "./components/Addproduct/AddProduct";
// import ProductPage from "./components/ProductsPage/ProductPage";
// import "./index.css";
// import User from "./components/User/User";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Login from "./components/Login/Login";
// import AddEditProduct from "./components/AddEditProduct/AddEditProduct";
// import Orders from "./components/Orders/Orders";
// import AddOrders from "./components/Orders/AddOrders";
// import Stores from "./components/Stores/Stores";
// import Reports from "./components/Reports/Reports";
// import Payments from "./components/Payments/Payments";
// import Customer from "./components/Customer/Customer";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
// import { UserProvider } from "../../Imlystudio/src/Context/userContext";
// import { StoreProvider } from "../src/Context/storeContext";

// import { CustomerProvider } from "../src/Context/customerContext";
// import { useAuth } from "../src/Context/AuthContext";
// import UserRoleForm from "./components/User/UserRole";
// import Returns from "./components/Returns/Returns";
// import Production from "./components/Production/Production";
// import Restricted from "./components/Unauthorized/Restricted";
// // import ModifiedUI from "./components/Customer/ModifiedUI";
// import Storeform from "./components/Stores/Storeform";
// // import StoreForUP from "./components/Stores/StoreForUP";

// function App() {
//   const location = useLocation();
//   const showNavigation = location.pathname !== "/";
//   const { userRole } = useAuth();

//   return (
//     <div className="App flex flex-col min-h-screen">
//       {showNavigation && <Navigation />}
//       <main className="flex-grow p-0gi bg-gray-100">
//         <UserProvider>
//           <CustomerProvider>
//             <StoreProvider>
//               <Routes>
//                 <Route path="/" element={<Login />} />

//                 <Route
//                   path="/product"
//                   element={
//                     <ProtectedRoute allowedRoles={[1]}>
//                       <ProductPage />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/products"
//                   element={
//                     <ProtectedRoute allowedRoles={[1]}>
//                       <AddProduct />
//                     </ProtectedRoute>
//                   }
//                 />

//                 <Route
//                   path="/user"
//                   element={
//                     <ProtectedRoute allowedRoles={[1]}>
//                       <User />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/Customer"
//                   element={
//                     <ProtectedRoute allowedRoles={[1]}>
//                       {/* <ModifiedUI /> */}
//                       <Customer/>
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/Orders"
//                   element={
//                     <ProtectedRoute allowedRoles={[1, 2]}>
//                       <Orders />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/dashboard"
//                   element={
//                     <ProtectedRoute allowedRoles={[1, 2]}>
//                       <Dashboard />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/add-product"
//                   element={
//                     <ProtectedRoute allowedRoles={[1]}>
//                       <AddEditProduct />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/AddOrders"
//                   element={
//                     <ProtectedRoute allowedRoles={[1]}>
//                       <AddOrders />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/Stores"
//                   element={
//                     <ProtectedRoute allowedRoles={[1, 2]}>
//                       <Stores />
//                     </ProtectedRoute>
//                   }
//                 />

//                 <Route
//                   path="/Stores/Add"
//                   element={
//                     <ProtectedRoute allowedRoles={[1, 2]}>
//                       {/* <StoreForUP /> */}
//                       <Storeform/>
//                     </ProtectedRoute>
//                   }
//                 />

//                 <Route
//                   path="/Stores/Update/:id"
//                   element={
//                     <ProtectedRoute allowedRoles={[1, 2]}>
//                       {/* <StoreForUP /> */}
//                       <Storeform/>
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/Reports"
//                   element={
//                     <ProtectedRoute allowedRoles={[1]}>
//                       <Reports />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/Payments"
//                   element={
//                     <ProtectedRoute allowedRoles={[1]}>
//                       <Payments />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/userrole"
//                   element={
//                     <ProtectedRoute allowedRoles={[1]}>
//                       <UserRoleForm />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/Returns"
//                   element={
//                     <ProtectedRoute allowedRoles={[1, 2]}>
//                       <Returns />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/Production"
//                   element={
//                     <ProtectedRoute allowedRoles={[1, 2]}>
//                       <Production />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/unauthorized"
//                   element={
//                     <ProtectedRoute allowedRoles={[1, 2]}>
//                       <Restricted />
//                     </ProtectedRoute>
//                   }
//                 />
//               </Routes>
//             </StoreProvider>
//           </CustomerProvider>
//         </UserProvider>
//       </main>
//     </div>
//   );
// }

// export default App;
