import DealGrid from '../DealGrid';

// todo: remove mock functionality
const mockDeals = [
  {
    id: "1",
    title: "Du lịch giờ chót Vietravel - giảm đến 40%",
    description: "Với những giảm giá rất ưu đãi phối hợp với hệ thống đối tác lớn mạnh, Vietravel cho Quý khách cơ hội được tận hưởng những dịch vụ chất lượng vàng không đổi từ công ty lữ hành uy tín nhất Việt Nam.",
    discountPercentage: 40,
    discountAmount: "700,000đ",
    voucherCode: "VTR",
    platform: "vietravel",
    category: "travel",
    originalPrice: "7.990.000",
    discountedPrice: "7,290,000đ",
    expiresAt: "2025-12-31T23:59:59Z",
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
  }
];

const mockDeals2 = [
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
  }
];

export default function DealGridExample() {
  return (
    <div className="p-4">
      <DealGrid
        deals={mockDeals}
        isLoading={false}
        hasMore={true}
        onLoadMore={() => console.log('Load more deals')}
      />
    </div>
  );
}