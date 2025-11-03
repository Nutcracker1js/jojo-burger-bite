import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, MapPin, Heart, Clock, Bell, HelpCircle, LogOut } from "lucide-react";

const menuItems = [
  { icon: MapPin, label: "Saved Addresses", href: "#" },
  { icon: Clock, label: "Order History", href: "#" },
  { icon: Heart, label: "Favorites", href: "#" },
  { icon: Bell, label: "Notifications", href: "#" },
  { icon: HelpCircle, label: "Help & Support", href: "#" },
];

export default function Profile() {
  return (
    <div className="pb-20 min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-primary text-primary-foreground px-4 py-8">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-20 h-20 border-4 border-primary-foreground/20">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary-foreground text-primary text-2xl font-bold">
                JD
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-primary-foreground/80">john.doe@email.com</p>
              <p className="text-primary-foreground/80">+234 801 234 5678</p>
            </div>
          </div>
          <Button variant="secondary" className="w-full">
            Edit Profile
          </Button>
        </div>
      </header>

      <main className="px-4 py-6 max-w-screen-lg mx-auto space-y-4">
        {/* Menu Items */}
        <Card>
          <CardContent className="p-0">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors border-b last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </a>
            ))}
          </CardContent>
        </Card>

        {/* Logout */}
        <Button variant="destructive" className="w-full" size="lg">
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </Button>

        {/* App Version */}
        <p className="text-center text-sm text-muted-foreground">
          Version 1.0.0
        </p>
      </main>
    </div>
  );
}
