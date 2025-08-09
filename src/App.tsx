import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Store } from 'lucide-react'

import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const queryClient = new QueryClient();


const App = () => {
  return (
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
