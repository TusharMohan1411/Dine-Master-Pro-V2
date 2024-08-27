import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Navbar/RootLayout";
import Dashboard from './pages/Dashboard/Dashboard';
import Bills from './pages/Bills/BIlls';
import Employees from './pages/Employees/Employees';
import Weather from './pages/Weather/Weather';
import AddEmployee from "./pages/Employees/AddEmployee";
import ProductsCategories from "./pages/Our Products/ProductsCategories";
import ProductTypes from "./pages/Our Products/ProductTypes";
import ProductDetails from "./pages/Our Products/ProductDetails";
import EditEmployeeDetails from "./pages/Employees/EditEmployee";

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Dashboard /> },

        // Bills
        { path: 'bills', element: <Bills /> },

        // Products 
        {
          path: 'ProductsCategories',
          children: [
            { index: true, element: <ProductsCategories /> },
            {
              path: ':categoryName', children: [
                { index: true, element: <ProductTypes /> },
                { path: ':productName', element: <ProductDetails /> },
              ]
            }
          ]
        },

        // Employees
        {
          path: 'employees',
          children: [
            { index: true, element: <Employees /> },
            { path: 'addEmployee', element: <AddEmployee /> },
            { path: 'editEmployeeDetails', element: <EditEmployeeDetails /> }
          ]
        },

        // Weather
        { path: 'weather', element: <Weather /> },

      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}


