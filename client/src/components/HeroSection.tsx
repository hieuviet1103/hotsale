import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Zap, Users, Shield } from "lucide-react";
import { useState } from "react";
import heroImage from "@assets/generated_images/Shopping_hero_banner_image_06beaee0.png";

interface HeroSectionProps {
  onEmailSubmit?: (email: string) => void;
}

export default function HeroSection({ onEmailSubmit }: HeroSectionProps) {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onEmailSubmit?.(email);
      console.log(`Email subscription: ${email}`);
      setEmail("");
    }
  };

  const stats = [
    { icon: Zap, label: "Deal mới mỗi ngày", value: "50+" },
    { icon: Users, label: "Thành viên tin dùng", value: "10K+" },
    { icon: Shield, label: "Deal đã xác minh", value: "95%" }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background image with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-purple-900/40" />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl text-white">
          {/* Badge */}
          <Badge className="mb-6 bg-white/10 text-white backdrop-blur-sm border-white/20">
            <Zap className="w-3 h-3 mr-1" />
            Mới: Tích hợp TikTok Shop!
          </Badge>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Khám phá <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Deal Hot
            </span> mỗi ngày
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Chia sẻ và săn voucher từ Shopee, Lazada, TikTok Shop. 
            Nhận thông báo vé máy bay, khách sạn giá rẻ qua email!
          </p>
          
          {/* Email subscription form */}
          <form onSubmit={handleEmailSubmit} className="flex gap-2 max-w-md mb-12">
            <Input
              type="email"
              placeholder="Nhập email để nhận deal hot..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60"
              data-testid="input-email-subscribe"
            />
            <Button 
              type="submit" 
              variant="secondary"
              data-testid="button-subscribe"
            >
              <Mail className="w-4 h-4 mr-2" />
              Đăng ký
            </Button>
          </form>
          
          {/* CTA buttons */}
          <div className="flex gap-4 mb-16">
            <Button 
              size="lg" 
              variant="default"
              onClick={() => console.log('Explore deals clicked')}
              data-testid="button-explore-deals"
            >
              Khám phá Deal ngay
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              onClick={() => console.log('Share deal clicked')}
              data-testid="button-share-deal"
            >
              Chia sẻ Deal của bạn
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                data-testid={`stat-${index}`}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 text-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}