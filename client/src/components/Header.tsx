import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Bell, 
  Plus, 
  Menu,
  Sun,
  Moon,
  Gift,
  User
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onSearchChange?: (query: string) => void;
  onCategorySelect?: (category: string) => void;
  activeCategory?: string;
}

const categories = [
  { id: 'all', label: 'Tất cả', count: 156 },
  { id: 'ecommerce', label: 'Thương mại điện tử', count: 89 },
  { id: 'restaurant', label: 'Nhà hàng', count: 34 },
  { id: 'travel', label: 'Du lịch', count: 23 },
  { id: 'entertainment', label: 'Giải trí', count: 10 }
];

export default function Header({ onSearchChange, onCategorySelect, activeCategory = 'all' }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange?.(query);
    console.log(`Search query: ${query}`);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    console.log(`Dark mode ${!isDarkMode ? 'enabled' : 'disabled'}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DealShare
            </h1>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Tìm kiếm voucher, deal..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10"
              data-testid="input-search"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              data-testid="button-theme-toggle"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => console.log('Notifications clicked')}
              data-testid="button-notifications"
            >
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs bg-secondary">
                3
              </Badge>
            </Button>

            <Button
              onClick={() => console.log('Add deal clicked')}
              data-testid="button-add-deal"
            >
              <Plus className="w-4 h-4 mr-2" />
              Thêm Deal
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" data-testid="button-user-menu">
                  <User className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => console.log('Profile clicked')}>
                  <User className="w-4 h-4 mr-2" />
                  Tài khoản
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => console.log('Settings clicked')}>
                  <Bell className="w-4 h-4 mr-2" />
                  Cài đặt thông báo
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => console.log('Logout clicked')}>
                  Đăng xuất
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="border-t">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "ghost"}
                size="sm"
                onClick={() => {
                  onCategorySelect?.(category.id);
                  console.log(`Category selected: ${category.id}`);
                }}
                className="whitespace-nowrap flex items-center gap-2"
                data-testid={`button-category-${category.id}`}
              >
                {category.label}
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}