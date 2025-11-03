import { BannerCarousel } from "@/components/BannerCarousel";
import { MenuItemCard } from "@/components/MenuItemCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import hero1 from "@/assets/hero1.jpg";

export default function Home() {
  const featuredItems = [
    {
      name: "Classic Cheeseburger",
      price: 3500,
      image: hero1,
      description: "Juicy beef patty with melted cheese, fresh veggies",
      isNew: false,
    },
    {
      name: "BBQ Bacon Burger",
      price: 4200,
      image: hero1,
      description: "Smoky BBQ sauce, crispy bacon, onion rings",
      isNew: true,
    },
  ];

  return (
    <div className="pb-20 min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-4 py-3 max-w-screen-lg mx-auto">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Jojo's Burger" className="w-12 h-12" />
            <div>
              <h1 className="font-bold text-xl">Jojo's Burger</h1>
              <p className="text-xs text-muted-foreground">Bite Into Happiness</p>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 py-6 max-w-screen-lg mx-auto space-y-8">
        {/* Banner Carousel */}
        <BannerCarousel />

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <Link to="/menu" className="block">
            <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
              <span className="text-2xl">🍔</span>
              <span className="text-xs font-semibold">Menu</span>
            </Button>
          </Link>
          <Link to="/offers" className="block">
            <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
              <span className="text-2xl">🔥</span>
              <span className="text-xs font-semibold">Offers</span>
            </Button>
          </Link>
          <Link to="/cart" className="block">
            <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
              <span className="text-2xl">📦</span>
              <span className="text-xs font-semibold">Orders</span>
            </Button>
          </Link>
        </div>

        {/* Featured Items */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Today's Picks</h2>
            <Link to="/menu">
              <Button variant="ghost" size="sm" className="text-primary">
                View All
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {featuredItems.map((item, index) => (
              <MenuItemCard key={index} {...item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
