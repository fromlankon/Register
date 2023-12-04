import { UserProvider } from "./context/AuthContext";
import { BasketProvider } from "./context/BasketContext";
import { SidebarProvider } from "./context/SidebarContext";
import { MainRouter } from "./router";

function App() {
  return (
    <UserProvider>
      <BasketProvider>
        <SidebarProvider >
          <MainRouter />
        </SidebarProvider>
      </BasketProvider>
    </UserProvider>

  )
}

export default App
