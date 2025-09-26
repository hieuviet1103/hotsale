import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Filter, X } from "lucide-react";

interface FilterSidebarProps {
  onFiltersChange?: (filters: any) => void;
  onClearFilters?: () => void;
}

const platforms = [
  { id: 'shopee', label: 'Shopee', count: 45 },
  { id: 'lazada', label: 'Lazada', count: 32 },
  { id: 'tiktok_shop', label: 'TikTok Shop', count: 28 },
  { id: 'restaurant', label: 'Nhà hàng', count: 23 },
  { id: 'flight', label: 'Vé máy bay', count: 15 },
  { id: 'hotel', label: 'Khách sạn', count: 13 }
];

const categories = [
  { id: 'ecommerce', label: 'Thương mại điện tử', count: 89 },
  { id: 'restaurant', label: 'Nhà hàng', count: 34 },
  { id: 'travel', label: 'Du lịch', count: 23 },
  { id: 'entertainment', label: 'Giải trí', count: 10 }
];

export default function FilterSidebar({ onFiltersChange, onClearFilters }: FilterSidebarProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [discountRange, setDiscountRange] = useState([0]);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [expiringSoon, setExpiringSoon] = useState(false);

  const [platformsOpen, setPlatformsOpen] = useState(true);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [discountOpen, setDiscountOpen] = useState(true);
  const [statusOpen, setStatusOpen] = useState(true);

  const handlePlatformChange = (platformId: string, checked: boolean) => {
    const newPlatforms = checked 
      ? [...selectedPlatforms, platformId]
      : selectedPlatforms.filter(id => id !== platformId);
    
    setSelectedPlatforms(newPlatforms);
    applyFilters({ platforms: newPlatforms });
    console.log(`Platform ${platformId} ${checked ? 'selected' : 'deselected'}`);
  };

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const newCategories = checked
      ? [...selectedCategories, categoryId] 
      : selectedCategories.filter(id => id !== categoryId);
    
    setSelectedCategories(newCategories);
    applyFilters({ categories: newCategories });
    console.log(`Category ${categoryId} ${checked ? 'selected' : 'deselected'}`);
  };

  const applyFilters = (partialFilters: any = {}) => {
    const filters = {
      platforms: selectedPlatforms,
      categories: selectedCategories,
      minDiscount: discountRange[0],
      verifiedOnly,
      expiringSoon,
      ...partialFilters
    };
    
    onFiltersChange?.(filters);
    console.log('Filters applied:', filters);
  };

  const clearAllFilters = () => {
    setSelectedPlatforms([]);
    setSelectedCategories([]);
    setDiscountRange([0]);
    setVerifiedOnly(false);
    setExpiringSoon(false);
    onClearFilters?.();
    console.log('All filters cleared');
  };

  const activeFiltersCount = selectedPlatforms.length + selectedCategories.length + 
    (discountRange[0] > 0 ? 1 : 0) + (verifiedOnly ? 1 : 0) + (expiringSoon ? 1 : 0);

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Bộ lọc
          {activeFiltersCount > 0 && (
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
              {activeFiltersCount}
            </span>
          )}
        </CardTitle>
        {activeFiltersCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            data-testid="button-clear-filters"
          >
            <X className="w-4 h-4 mr-1" />
            Xóa
          </Button>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Platforms */}
        <Collapsible open={platformsOpen} onOpenChange={setPlatformsOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <h4 className="font-medium">Nền tảng</h4>
            <ChevronDown className={`w-4 h-4 transition-transform ${platformsOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 mt-3">
            {platforms.map((platform) => (
              <div key={platform.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={platform.id}
                    checked={selectedPlatforms.includes(platform.id)}
                    onCheckedChange={(checked) => handlePlatformChange(platform.id, checked as boolean)}
                    data-testid={`checkbox-platform-${platform.id}`}
                  />
                  <Label htmlFor={platform.id} className="text-sm cursor-pointer">
                    {platform.label}
                  </Label>
                </div>
                <span className="text-xs text-muted-foreground">{platform.count}</span>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Categories */}
        <Collapsible open={categoriesOpen} onOpenChange={setCategoriesOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <h4 className="font-medium">Danh mục</h4>
            <ChevronDown className={`w-4 h-4 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 mt-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                    data-testid={`checkbox-category-${category.id}`}
                  />
                  <Label htmlFor={category.id} className="text-sm cursor-pointer">
                    {category.label}
                  </Label>
                </div>
                <span className="text-xs text-muted-foreground">{category.count}</span>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Discount Range */}
        <Collapsible open={discountOpen} onOpenChange={setDiscountOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <h4 className="font-medium">% Giảm giá tối thiểu</h4>
            <ChevronDown className={`w-4 h-4 transition-transform ${discountOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 mt-3">
            <div className="px-3">
              <Slider
                value={discountRange}
                onValueChange={(value) => {
                  setDiscountRange(value);
                  applyFilters({ minDiscount: value[0] });
                }}
                max={100}
                step={5}
                className="w-full"
                data-testid="slider-discount"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>0%</span>
                <span className="font-medium">{discountRange[0]}%+</span>
                <span>100%</span>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Status Filters */}
        <Collapsible open={statusOpen} onOpenChange={setStatusOpen}>
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <h4 className="font-medium">Trạng thái</h4>
            <ChevronDown className={`w-4 h-4 transition-transform ${statusOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 mt-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="verified"
                checked={verifiedOnly}
                onCheckedChange={(checked) => {
                  setVerifiedOnly(checked as boolean);
                  applyFilters({ verifiedOnly: checked });
                }}
                data-testid="checkbox-verified"
              />
              <Label htmlFor="verified" className="text-sm cursor-pointer">
                Chỉ deal đã xác minh
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="expiring"
                checked={expiringSoon}
                onCheckedChange={(checked) => {
                  setExpiringSoon(checked as boolean);
                  applyFilters({ expiringSoon: checked });
                }}
                data-testid="checkbox-expiring"
              />
              <Label htmlFor="expiring" className="text-sm cursor-pointer">
                Sắp hết hạn (24h)
              </Label>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}