import Footer from "./pages/footer/footer";
import Navbar from "./pages/components/Navbar";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {/* Your main content here */}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
