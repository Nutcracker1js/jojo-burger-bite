import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";

const offers = [
  {
    name: "2-for-1 Fridays",
    image: hero1,
    oldPrice: 6000,
    newPrice: 3000,
    description: "Buy one burger, get one free every Friday!",
    endsIn: "2 days",
  },
  {
    name: "Weekend Combo",
    image: hero2,
    oldPrice: 7000,
    newPrice: 5500,
    description: "Burger + Drink + Fries combo deal",
    endsIn: "3 days",
  },
  {
    name: "Student Special",
    image: hero1,
    oldPrice: 4000,
    newPrice: 3000,
    description: "25% off with valid student ID",
    endsIn: "Ongoing",
  },
];

export default function Offers() {
  return (
    <div className="pb-20 min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="px-4 py-4 max-w-screen-lg mx-auto">
          <h1 className="font-bold text-2xl">🔥 Hot Offers</h1>
          <p className="text-sm text-muted-foreground">Limited time deals</p>
        </div>
      </header>

      <main className="px-4 py-6 max-w-screen-lg mx-auto space-y-4">
        {offers.map((offer, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={offer.image}
                alt={offer.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-bold mb-1">{offer.name}</h3>
                <p className="text-sm opacity-90">{offer.description}</p>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground line-through">₦{offer.oldPrice.toLocaleString()}</span>
                  <span className="text-2xl font-bold text-primary">₦{offer.newPrice.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{offer.endsIn}</span>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                Order Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
