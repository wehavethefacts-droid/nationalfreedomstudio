import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import MobileMenu from "./components/MobileMenu";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Studio from "./pages/Studio";
import Gear from "./pages/Gear";
import Discography from "./pages/Discography";
import Mastering from "./pages/Mastering";
import About from "./pages/About";
import Contact from "./pages/Contact";


function Router() {
  return (
    <>
      <MobileMenu />
      <Layout>
        <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/studio"} component={Studio} />
        <Route path={"/gear"} component={Gear} />
        <Route path={"/discography"} component={Discography} />
        <Route path={"/mastering"} component={Mastering} />
        <Route path={"/about"} component={About} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
        </Switch>
      </Layout>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
