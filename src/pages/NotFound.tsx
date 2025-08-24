import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <div className="mb-8">
          <AlertCircle className="h-24 w-24 text-accent mx-auto mb-6" />
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/">
            <Button variant="luxury" size="lg">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-sm text-muted-foreground">
            <p>Or try one of these pages:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link to="/about" className="text-accent hover:underline">
                About Us
              </Link>
              <Link to="/services" className="text-accent hover:underline">
                Services
              </Link>
              <Link to="/contact" className="text-accent hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
