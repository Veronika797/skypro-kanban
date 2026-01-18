import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { TaskProvider } from "./context/TaskProvider.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
