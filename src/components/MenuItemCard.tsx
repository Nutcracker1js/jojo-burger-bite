import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface MenuItemCardProps {
  name: string;
  price: number;
  image: string;
  description?: string;
  isNew?: boolean;
}

export const MenuItemCard = ({ name, price, image, description, isNew }: MenuItemCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        {isNew && (
          <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
            NEW
          </span>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">₦{price.toLocaleString()}</span>
          <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90">
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
