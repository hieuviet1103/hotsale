import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DealGrid from "@/components/DealGrid";
import FilterSidebar from "@/components/FilterSidebar";
import EmailSubscriptionModal from "@/components/EmailSubscriptionModal";
import DealSubmissionForm from "@/components/DealSubmissionForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

// todo: remove mock functionality
const mockDeals = [
  {
    id: "1",
    title: "iPhone 15 Pro Max - Giảm sốc 5 triệu",
    description: "iPhone 15 Pro Max mới nhất với chip A17 Pro, camera chụp đêm cực đỉnh. Bảo hành chính hãng 12 tháng.",
    discountPercentage: 20,
    discountAmount: "5,000,000đ",
    voucherCode: "IPHONE15PRO",
    platform: "shopee",
    category: "ecommerce",
    originalPrice: "34,990,000đ",
    discountedPrice: "29,990,000đ",
    expiresAt: "2024-12-31T23:59:59Z",
    isVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    dealUrl: "https://shopee.vn/deal-iphone15"
  },
  {
    id: "2", 
    title: "Buffet hải sản cao cấp - Giảm 50%",
    description: "Buffet hải sản tươi sống với hơn 100 món ăn đặc sắc. Áp dụng từ thứ 2 đến thứ 6.",
    discountPercentage: 50,
    voucherCode: "SEAFOOD50",
    platform: "restaurant",
    category: "restaurant",
    originalPrice: "899,000đ",
    discountedPrice: "449,000đ",
    expiresAt: "2024-11-30T23:59:59Z",
    isVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
    dealUrl: "https://restaurant.com/buffet-deal"
  },
  {
    id: "3",
    title: "Vé máy bay HCM - Hà Nội chỉ 999k",
    description: "Vé máy bay khứ hồi giá cực rẻ, thời gian bay linh hoạt. Đặt ngay kẻo lỡ!",
    discountPercentage: 40,
    platform: "flight",
    category: "travel", 
    originalPrice: "2,500,000đ",
    discountedPrice: "999,000đ",
    expiresAt: "2024-10-15T23:59:59Z",
    isVerified: false,
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop",
    dealUrl: "https://airline.com/cheap-flights"
  },
  {
    id: "4",
    title: "Laptop Gaming RTX 4060 - Sale khủng",
    description: "Laptop gaming mạnh mẽ với RTX 4060, RAM 16GB, SSD 512GB. Chiến game cực mượt.",
    discountPercentage: 25,
    voucherCode: "GAMING25",
    platform: "lazada",
    category: "ecommerce",
    originalPrice: "25,990,000đ", 
    discountedPrice: "19,490,000đ",
    expiresAt: "2024-12-15T23:59:59Z",
    isVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    dealUrl: "https://lazada.vn/gaming-laptop"
  },
  {
    id: "5",
    title: "Massage body 90 phút - Ưu đãi 60%",
    description: "Massage body thư giãn với tinh dầu thiên nhiên, không gian yên tĩnh, chuyên nghiệp.",
    discountPercentage: 60,
    voucherCode: "RELAX60",
    platform: "restaurant",
    category: "entertainment",
    originalPrice: "500,000đ",
    discountedPrice: "200,000đ",
    expiresAt: "2024-11-20T23:59:59Z",
    isVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
    dealUrl: "https://spa.com/massage-deal"
  },
  {
    id: "6",
    title: "Khách sạn 5 sao Đà Lạt - Flash sale",
    description: "Khách sạn 5 sao view hồ Xuân Hương, bao gồm buffet sáng và xe đưa đón sân bay.",
    discountPercentage: 45,
    platform: "hotel",
    category: "travel",
    originalPrice: "2,000,000đ",
    discountedPrice: "1,100,000đ",
    expiresAt: "2024-10-25T23:59:59Z",
    isVerified: true,
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    dealUrl: "https://hotel.com/dalat-luxury"
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredDeals, setFilteredDeals] = useState(mockDeals);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isSubmitFormOpen, setIsSubmitFormOpen] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterDeals(query, activeCategory);
  };

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    filterDeals(searchQuery, category);
  };

  const filterDeals = (query: string, category: string) => {
    let filtered = mockDeals;

    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(deal => deal.category === category);
    }

    // Filter by search query
    if (query) {
      filtered = filtered.filter(deal => 
        deal.title.toLowerCase().includes(query.toLowerCase()) ||
        deal.description.toLowerCase().includes(query.toLowerCase()) ||
        deal.platform.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredDeals(filtered);
    console.log(`Filtered deals: ${filtered.length} results`);
  };

  const handleFiltersChange = (filters: any) => {
    let filtered = mockDeals;

    // Apply platform filters
    if (filters.platforms?.length > 0) {
      filtered = filtered.filter(deal => filters.platforms.includes(deal.platform));
    }

    // Apply category filters
    if (filters.categories?.length > 0) {
      filtered = filtered.filter(deal => filters.categories.includes(deal.category));
    }

    // Apply discount filter
    if (filters.minDiscount > 0) {
      filtered = filtered.filter(deal => 
        deal.discountPercentage && deal.discountPercentage >= filters.minDiscount
      );
    }

    // Apply verified filter
    if (filters.verifiedOnly) {
      filtered = filtered.filter(deal => deal.isVerified);
    }

    // Apply expiring soon filter
    if (filters.expiringSoon) {
      const oneDayFromNow = new Date();
      oneDayFromNow.setDate(oneDayFromNow.getDate() + 1);
      
      filtered = filtered.filter(deal => {
        if (!deal.expiresAt) return false;
        return new Date(deal.expiresAt) <= oneDayFromNow;
      });
    }

    setFilteredDeals(filtered);
    console.log('Filters applied, deals found:', filtered.length);
  };

  const handleEmailSubmit = (email: string) => {
    console.log('Hero email submission:', email);
    setIsEmailModalOpen(true);
  };

  const handleEmailSubscription = (subscription: any) => {
    console.log('Email subscription created:', subscription);
    // TODO: Save subscription to backend
  };

  const handleDealSubmission = (deal: any) => {
    console.log('New deal submitted:', deal);
    // TODO: Save deal to backend
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onSearchChange={handleSearch}
        onCategorySelect={handleCategorySelect}
        activeCategory={activeCategory}
      />
      
      <HeroSection onEmailSubmit={handleEmailSubmit} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSidebar 
                onFiltersChange={handleFiltersChange}
                onClearFilters={() => setFilteredDeals(mockDeals)}
              />
            </div>
          </aside>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  {activeCategory === 'all' ? 'Tất cả deals' : `Deals ${activeCategory}`}
                </h2>
                <p className="text-muted-foreground">
                  {filteredDeals.length} deals được tìm thấy
                  {searchQuery && ` cho "${searchQuery}"`}
                </p>
              </div>
              
              <Button 
                onClick={() => setIsSubmitFormOpen(true)}
                data-testid="button-add-deal-main"
              >
                <Plus className="w-4 h-4 mr-2" />
                Thêm Deal
              </Button>
            </div>
            
            <DealGrid 
              deals={filteredDeals}
              isLoading={false}
              hasMore={false}
              onLoadMore={() => console.log('Load more deals')}
            />
          </div>
        </div>
      </main>
      
      {/* Email Subscription Modal */}
      <EmailSubscriptionModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        onSubmit={handleEmailSubscription}
      />
      
      {/* Deal Submission Modal */}
      <Dialog open={isSubmitFormOpen} onOpenChange={setIsSubmitFormOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DealSubmissionForm
            onSubmit={handleDealSubmission}
            onClose={() => setIsSubmitFormOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}