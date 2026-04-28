
import { createBrowserRouter, RouterProvider } from "react-router-dom";



import Layout from "../../../react-app-starter/src/components/Layout";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {

      },{},{}
    ]
  },
  
])


export default function App() {
  

  return <RouterProvider router={router} />; 
}

<<<<<<< HEAD

=======
function MainFeed() {
  return (
    <div className="middle-column">
      <StartPost />

    </div>
  )
}

export default App
>>>>>>> df57ef7a6678b1339d37d47535acb43d1d63f841
