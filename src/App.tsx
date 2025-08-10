import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Index from "./pages/Index";

import Cart from "./pages/Cart";
import ComicDetails from "./pages/ComicDetails";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/comic/:id" element={<ComicDetails />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);

export default App;

