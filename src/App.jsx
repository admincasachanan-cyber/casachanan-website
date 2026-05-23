import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Home from './pages/Home';
import About from './pages/About';
import Industries from './pages/Industries';
import Subsidiaries from './pages/Subsidiaries';
import Sustainability from './pages/Sustainability';
import Operations from './pages/Operations';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Gallery from './pages/Gallery';
import Petroleum from './pages/subsidiaries/Petroleum';
import Logistics from './pages/subsidiaries/Logistics';
import Farms from './pages/subsidiaries/Farms';
import Mining from './pages/subsidiaries/Mining';
import Products from './pages/subsidiaries/Products';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/subsidiaries" element={<Subsidiaries />} />
      <Route path="/sustainability" element={<Sustainability />} />
      <Route path="/operations" element={<Operations />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/subsidiaries/petroleum" element={<Petroleum />} />
      <Route path="/subsidiaries/logistics" element={<Logistics />} />
      <Route path="/subsidiaries/farms" element={<Farms />} />
      <Route path="/subsidiaries/mining" element={<Mining />} />
      <Route path="/subsidiaries/products" element={<Products />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App