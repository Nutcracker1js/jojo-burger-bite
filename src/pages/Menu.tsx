import { useState } from "react";
import { MenuItemCard } from "@/components/MenuItemCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";

const categories = ["All", "Burgers", "Drinks", "Sides", "Grillz"];

const menuItems = [
  {
    name: "Classic Cheeseburger",
    price: 3500,
    image: hero1,
    description: "Juicy beef patty with melted cheese",
    category: "Burgers",
  },
  {
    name: "Spicy Chicken Burger",
    price: 4000,
    image: hero2,
    description: "Crispy chicken with hot sauce",
    category: "Burgers",
    isNew: true,
  },
  {
    name: "BBQ Bacon Burger",
    price: 4200,
    image: hero1,
    description: "Smoky BBQ sauce with crispy bacon",
    category: "Burgers",
  },
  {
    name: "Veggie Delight",
    price: 3200,
    image: hero1,
    description: "Plant-based patty, fresh veggies",
    category: "Burgers",
  },
  {
    name: "Coca Cola",
    price: 500,
    image: hero1,
    description: "Chilled soft drink",
    category: "Drinks",
  },
  {
    name: "Fresh Fries",
    price: 1200,
    image: hero1,
    description: "Crispy golden fries",
    category: "Sides",
  },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-20 min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="px-4 py-4 max-w-screen-lg mx-auto">
          <h1 className="font-bold text-2xl mb-3">Menu</h1>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search for burgers, drinks..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="px-4 py-6 max-w-screen-lg mx-auto">
        {/* Categories */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-6">
          <TabsList className="w-full justify-start overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="whitespace-nowrap">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-4">
          {filteredItems.map((item, index) => (
            <MenuItemCard key={index} {...item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No items found</p>
          </div>
        )}
      </main>
    </div>
  );
}
