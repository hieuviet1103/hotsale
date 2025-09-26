import { useState } from "react";
import DealCard from "./DealCard";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface Deal {
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

interface DealGridProps {
  deals: Deal[];
  isLoading?: boolean;
  hasMore?: boolean;
  onLoadMore?: () => void;
}

export default function DealGrid({ deals, isLoading = false, hasMore = false, onLoadMore }: DealGridProps) {
  if (isLoading && deals.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin" />
        <span className="ml-2">Đang tải deals...</span>
      </div>
    );
  }

  if (deals.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
          <span className="text-4xl">🎯</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">Không tìm thấy deal nào</h3>
        <p className="text-muted-foreground">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Deal Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {deals.map((deal) => (
          <DealCard key={deal.id} {...deal} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={onLoadMore}
            disabled={isLoading}
            data-testid="button-load-more"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Đang tải...
              </>
            ) : (
              "Xem thêm deals"
            )}
          </Button>
        </div>
      )}
    </div>
  );
}