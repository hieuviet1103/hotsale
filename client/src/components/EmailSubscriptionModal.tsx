import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Bell, Gift, Plane, UtensilsCrossed, X } from "lucide-react";

interface EmailSubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (subscription: any) => void;
}

const categories = [
  { id: 'ecommerce', label: 'Thương mại điện tử', icon: Gift, description: 'Shopee, Lazada, TikTok Shop' },
  { id: 'restaurant', label: 'Nhà hàng & Ăn uống', icon: UtensilsCrossed, description: 'Voucher nhà hàng, food delivery' },
  { id: 'travel', label: 'Du lịch', icon: Plane, description: 'Vé máy bay, khách sạn, tour' },
  { id: 'entertainment', label: 'Giải trí', icon: Bell, description: 'Rạp phim, sự kiện, game' }
];

export default function EmailSubscriptionModal({ isOpen, onClose, onSubmit }: EmailSubscriptionModalProps) {
  const [email, setEmail] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['ecommerce']);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories(prev => [...prev, categoryId]);
    } else {
      setSelectedCategories(prev => prev.filter(id => id !== categoryId));
    }
    console.log(`Category ${categoryId} ${checked ? 'selected' : 'deselected'}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || selectedCategories.length === 0) return;

    setIsSubmitting(true);
    
    const subscription = {
      email,
      categories: selectedCategories,
      isActive: true
    };
    
    console.log('Email subscription submitted:', subscription);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onSubmit?.(subscription);
    setIsSubmitting(false);
    onClose();
    
    // Reset form
    setEmail("");
    setSelectedCategories(['ecommerce']);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Đăng ký nhận thông báo
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <Label htmlFor="email">Email của bạn *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="input-subscription-email"
            />
          </div>

          {/* Category Selection */}
          <div className="space-y-3">
            <Label>Chọn danh mục quan tâm *</Label>
            <div className="space-y-3">
              {categories.map((category) => (
                <div 
                  key={category.id} 
                  className="flex items-start space-x-3 p-3 rounded-lg border hover-elevate"
                >
                  <Checkbox
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                    data-testid={`checkbox-category-${category.id}`}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <category.icon className="w-4 h-4 text-primary" />
                      <Label 
                        htmlFor={category.id} 
                        className="text-sm font-medium cursor-pointer"
                      >
                        {category.label}
                      </Label>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Text */}
          <div className="text-xs text-muted-foreground bg-muted p-3 rounded-lg">
            Bạn sẽ nhận được email thông báo về deal hot, voucher mới và cảnh báo giảm giá. 
            Có thể hủy đăng ký bất cứ lúc nào.
          </div>

          {/* Submit Button */}
          <div className="flex gap-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
              data-testid="button-cancel-subscription"
            >
              Hủy
            </Button>
            <Button 
              type="submit" 
              className="flex-1"
              disabled={isSubmitting || !email || selectedCategories.length === 0}
              data-testid="button-submit-subscription"
            >
              {isSubmitting ? "Đang xử lý..." : "Đăng ký"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}