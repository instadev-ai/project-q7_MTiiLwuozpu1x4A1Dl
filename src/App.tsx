import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { CTASection } from "./components/CTASection";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-white">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
    </QueryClientProvider>
  );
}

export default App;