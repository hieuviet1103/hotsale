import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Calendar, Upload, X } from "lucide-react";

interface DealSubmissionFormProps {
  onSubmit?: (deal: any) => void;
  onClose?: () => void;
}

export default function DealSubmissionForm({ onSubmit, onClose }: DealSubmissionFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    platform: "",
    category: "", 
    voucherCode: "",
    discountPercentage: "",
    discountAmount: "",
    originalPrice: "",
    discountedPrice: "",
    dealUrl: "",
    expiresAt: "",
    submittedBy: "",
    hasImage: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Submitting deal:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onSubmit?.(formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      title: "",
      description: "",
      platform: "",
      category: "", 
      voucherCode: "",
      discountPercentage: "",
      discountAmount: "",
      originalPrice: "",
      discountedPrice: "",
      dealUrl: "",
      expiresAt: "",
      submittedBy: "",
      hasImage: false
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Chia sẻ Deal mới</CardTitle>
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose} data-testid="button-close-form">
            <X className="w-4 h-4" />
          </Button>
        )}
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Tiêu đề Deal *</Label>
            <Input
              id="title"
              placeholder="VD: iPhone 15 Pro Max - Giảm sốc 5 triệu"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              required
              data-testid="input-title"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Mô tả Deal *</Label>
            <Textarea
              id="description"
              placeholder="Mô tả chi tiết về sản phẩm/dịch vụ, điều kiện áp dụng..."
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              required
              rows={3}
              data-testid="input-description"
            />
          </div>

          {/* Platform and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Nền tảng *</Label>
              <Select value={formData.platform} onValueChange={(value) => handleInputChange('platform', value)}>
                <SelectTrigger data-testid="select-platform">
                  <SelectValue placeholder="Chọn nền tảng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shopee">Shopee</SelectItem>
                  <SelectItem value="lazada">Lazada</SelectItem>
                  <SelectItem value="tiktok_shop">TikTok Shop</SelectItem>
                  <SelectItem value="restaurant">Nhà hàng</SelectItem>
                  <SelectItem value="flight">Vé máy bay</SelectItem>
                  <SelectItem value="hotel">Khách sạn</SelectItem>
                  <SelectItem value="travel">Vietravel</SelectItem>
                  <SelectItem value="other">Khác</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Danh mục *</Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger data-testid="select-category">
                  <SelectValue placeholder="Chọn danh mục" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ecommerce">Thương mại điện tử</SelectItem>
                  <SelectItem value="restaurant">Nhà hàng</SelectItem>
                  <SelectItem value="travel">Du lịch</SelectItem>
                  <SelectItem value="entertainment">Giải trí</SelectItem>
                  <SelectItem value="other">Khác</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Voucher Code */}
          <div className="space-y-2">
            <Label htmlFor="voucherCode">Mã Voucher</Label>
            <Input
              id="voucherCode"
              placeholder="VD: IPHONE15PRO"
              value={formData.voucherCode}
              onChange={(e) => handleInputChange('voucherCode', e.target.value)}
              data-testid="input-voucher-code"
            />
          </div>

          {/* Discount Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="discountPercentage">% Giảm giá</Label>
              <Input
                id="discountPercentage"
                type="number"
                placeholder="20"
                value={formData.discountPercentage}
                onChange={(e) => handleInputChange('discountPercentage', e.target.value)}
                data-testid="input-discount-percentage"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="discountAmount">Số tiền giảm</Label>
              <Input
                id="discountAmount"
                placeholder="500,000đ"
                value={formData.discountAmount}
                onChange={(e) => handleInputChange('discountAmount', e.target.value)}
                data-testid="input-discount-amount"
              />
            </div>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="originalPrice">Giá gốc</Label>
              <Input
                id="originalPrice"
                placeholder="1,000,000đ"
                value={formData.originalPrice}
                onChange={(e) => handleInputChange('originalPrice', e.target.value)}
                data-testid="input-original-price"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="discountedPrice">Giá sau giảm</Label>
              <Input
                id="discountedPrice"
                placeholder="800,000đ"
                value={formData.discountedPrice}
                onChange={(e) => handleInputChange('discountedPrice', e.target.value)}
                data-testid="input-discounted-price"
              />
            </div>
          </div>

          {/* Deal URL */}
          <div className="space-y-2">
            <Label htmlFor="dealUrl">Link Deal *</Label>
            <Input
              id="dealUrl"
              type="url"
              placeholder="https://shopee.vn/deal-iphone15"
              value={formData.dealUrl}
              onChange={(e) => handleInputChange('dealUrl', e.target.value)}
              required
              data-testid="input-deal-url"
            />
          </div>

          {/* Expiry Date */}
          <div className="space-y-2">
            <Label htmlFor="expiresAt">Ngày hết hạn</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="expiresAt"
                type="datetime-local"
                value={formData.expiresAt}
                onChange={(e) => handleInputChange('expiresAt', e.target.value)}
                className="pl-10"
                data-testid="input-expires-at"
              />
            </div>
          </div>

          {/* Submitter Name */}
          <div className="space-y-2">
            <Label htmlFor="submittedBy">Tên người chia sẻ</Label>
            <Input
              id="submittedBy"
              placeholder="Tên của bạn (tùy chọn)"
              value={formData.submittedBy}
              onChange={(e) => handleInputChange('submittedBy', e.target.value)}
              data-testid="input-submitted-by"
            />
          </div>

          {/* Image Upload Toggle */}
          <div className="flex items-center space-x-2">
            <Switch
              id="hasImage"
              checked={formData.hasImage}
              onCheckedChange={(checked) => handleInputChange('hasImage', checked.toString())}
              data-testid="switch-has-image"
            />
            <Label htmlFor="hasImage">Có hình ảnh đính kèm</Label>
          </div>

          {formData.hasImage && (
            <div className="space-y-2">
              <Label>Upload hình ảnh</Label>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full h-20 border-dashed"
                onClick={() => console.log('Image upload clicked')}
                data-testid="button-upload-image"
              >
                <Upload className="w-6 h-6 mr-2" />
                Chọn hình ảnh
              </Button>
            </div>
          )}

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
            data-testid="button-submit-deal"
          >
            {isSubmitting ? "Đang gửi..." : "Chia sẻ Deal"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}