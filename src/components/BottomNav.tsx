import { Home, Menu, Flame, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const tabs = [
  { icon: Home, label: "Home", route: "/" },
  { icon: Menu, label: "Menu", route: "/menu" },
  { icon: Flame, label: "Offers", route: "/offers" },
  { icon: ShoppingCart, label: "Cart", route: "/cart" },
  { icon: User, label: "Profile", route: "/profile" },
];

export const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 safe-area-bottom">
      <div className="flex justify-around items-center h-16 max-w-screen-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.route;
          
          return (
            <Link
              key={tab.route}
              to={tab.route}
              className={cn(
                "flex flex-col items-center justify-center flex-1 h-full transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className={cn("w-6 h-6 mb-1", isActive && "fill-primary")} />
              <span className="text-xs font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
