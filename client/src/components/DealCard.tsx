import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Copy, ExternalLink, Shield, Star } from "lucide-react";
import { useState } from "react";

interface DealCardProps {
  id: string;
  title: string;
  description: string;
  discountPercentage?: number;
  discountAmount?: string;
  voucherCode?: string;
  platform: string;
  category: string;
  originalPrice?: string;
  discountedPrice?: string;
  expiresAt?: string;
  isVerified: boolean;
  imageUrl?: string;
  dealUrl?: string;
}

const platformColors = {
  shopee: "bg-orange-500",
  lazada: "bg-blue-500", 
  tiktok_shop: "bg-black",
  restaurant: "bg-green-500",
  flight: "bg-sky-500",
  hotel: "bg-purple-500"
};

const categoryColors = {
  ecommerce: "bg-orange-100 text-orange-800",
  restaurant: "bg-green-100 text-green-800", 
  travel: "bg-blue-100 text-blue-800",
  entertainment: "bg-purple-100 text-purple-800"
};

export default function DealCard(props: DealCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyVoucher = async () => {
    if (props.voucherCode) {
      await navigator.clipboard.writeText(props.voucherCode);
      setCopied(true);
      console.log(`Voucher code ${props.voucherCode} copied to clipboard`);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatTimeLeft = (expiresAt: string) => {
    const now = new Date();
    const expiry = new Date(expiresAt);
    const diffInHours = Math.ceil((expiry.getTime() - now.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h còn lại`;
    } else {
      const diffInDays = Math.ceil(diffInHours / 24);
      return `${diffInDays} ngày còn lại`;
    }
  };

  return (
    <Card className="hover-elevate group overflow-hidden" data-testid={`card-deal-${props.id}`}>
      {props.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={props.imageUrl} 
            alt={props.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {props.discountPercentage && (
            <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground font-bold">
              -{props.discountPercentage}%
            </Badge>
          )}
        </div>
      )}
      
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <Badge 
            className={`${platformColors[props.platform as keyof typeof platformColors] || 'bg-gray-500'} text-white text-xs font-medium`}
            data-testid={`badge-platform-${props.platform}`}
          >
            {props.platform.toUpperCase()}
          </Badge>
          
          {props.isVerified && (
            <div className="flex items-center gap-1 text-green-600">
              <Shield className="w-3 h-3" />
              <span className="text-xs font-medium">Verified</span>
            </div>
          )}
        </div>
        
        <h3 className="font-semibold text-base leading-tight" data-testid={`text-title-${props.id}`}>
          {props.title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {props.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {(props.originalPrice || props.discountedPrice) && (
          <div className="flex items-center gap-2">
            {props.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {props.originalPrice}
              </span>
            )}
            {props.discountedPrice && (
              <span className="text-lg font-bold text-primary" data-testid={`text-price-${props.id}`}>
                {props.discountedPrice}
              </span>
            )}
          </div>
        )}

        {props.voucherCode && (
          <div className="flex items-center gap-2 p-2 bg-muted rounded-md">
            <code className="flex-1 font-mono text-sm" data-testid={`text-voucher-${props.id}`}>
              {props.voucherCode}
            </code>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleCopyVoucher}
              data-testid={`button-copy-${props.id}`}
            >
              <Copy className="w-4 h-4" />
              {copied ? "Đã copy!" : "Copy"}
            </Button>
          </div>
        )}

        <div className="flex items-center justify-between">
          <Badge 
            variant="secondary" 
            className={categoryColors[props.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-800'}
          >
            {props.category}
          </Badge>
          
          {props.expiresAt && (
            <div className="flex items-center gap-1 text-orange-600 text-xs">
              <Clock className="w-3 h-3" />
              <span>{formatTimeLeft(props.expiresAt)}</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        {props.dealUrl && (
          <Button 
            variant="default" 
            className="flex-1" 
            onClick={() => {
              console.log(`Opening deal URL: ${props.dealUrl}`);
              window.open(props.dealUrl, '_blank');
            }}
            data-testid={`button-view-deal-${props.id}`}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Xem Deal
          </Button>
        )}
        
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => console.log(`Saving deal ${props.id} to favorites`)}
          data-testid={`button-favorite-${props.id}`}
        >
          <Star className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}