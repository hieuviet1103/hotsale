import DealCard from '../DealCard';

export default function DealCardExample() {
  return (
    <div className="max-w-sm">
      <DealCard
        id="1"
        title="iPhone 15 Pro Max - Giảm sốc 5 triệu"
        description="iPhone 15 Pro Max mới nhất với chip A17 Pro, camera chụp đêm cực đỉnh. Bảo hành chính hãng 12 tháng."
        discountPercentage={20}
        discountAmount="5,000,000đ"
        voucherCode="IPHONE15PRO"
        platform="shopee"
        category="ecommerce"
        originalPrice="34,990,000đ"
        discountedPrice="29,990,000đ"
        expiresAt="2024-12-31T23:59:59Z"
        isVerified={true}
        imageUrl="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop"
        dealUrl="https://shopee.vn/deal-iphone15"
      />
    </div>
  );
}