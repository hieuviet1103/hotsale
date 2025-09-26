# Design Guidelines: Voucher & Deals Sharing Platform

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern deal platforms like Honey, Rakuten, and GroupOn, combined with the vibrant aesthetics of Vietnamese e-commerce platforms. The design emphasizes visual appeal and emotional engagement to drive user participation in deal discovery and sharing.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Main brand: 280 85% 60% (vibrant purple for trust and premium feel)
- Secondary: 340 75% 55% (energetic pink for CTAs and highlights)

**Supporting Colors:**
- Success (voucher valid): 140 60% 50% 
- Warning (expiring soon): 35 85% 55%
- Error (expired): 0 70% 50%
- Neutral backgrounds: 220 15% 96% (light), 220 25% 15% (dark)

**Gradients:**
- Hero sections: Purple to pink diagonal gradients
- Deal cards: Subtle color overlays matching deal categories
- CTA buttons: Vibrant gradient backgrounds for maximum impact

### Typography
**Font Stack:** Inter (Google Fonts)
- Headlines: 700 weight, large sizes for impact
- Body text: 400 weight for readability
- Deal prices: 600 weight for emphasis
- Voucher codes: Monospace font for easy copying

### Layout System
**Tailwind Spacing Units:** 2, 4, 6, 8, 12, 16
- Consistent padding: p-4, p-6, p-8
- Margins: m-2, m-4, m-8
- Gaps in grids: gap-4, gap-6
- Component spacing: space-y-4, space-y-6

### Component Library

**Navigation:**
- Sticky header with gradient background
- Category tabs with active state indicators
- Mobile hamburger menu with slide-out drawer

**Deal Cards:**
- Card-based layout with subtle shadows
- Prominent discount badges in top-right corners
- Expiration countdown timers
- One-click voucher code copying
- Store logos and brand recognition elements

**Forms:**
- Rounded input fields with focus states
- Multi-step deal submission process
- File upload for deal screenshots
- Form validation with helpful error messages

**Data Displays:**
- Grid layouts for deal browsing (responsive: 1-2-3-4 columns)
- List view option for detailed deal information
- Filter sidebar with collapsible categories
- Search bar with autocomplete suggestions

**Overlays:**
- Modal dialogs for deal details
- Toast notifications for copied voucher codes
- Email subscription popup (exit-intent)
- Browser notification permission requests

## Key Design Principles

1. **Youthful Energy:** Bright colors, playful icons, and dynamic gradients create excitement around deal discovery
2. **Trust & Credibility:** Clear verification badges, user ratings, and transparent expiration dates build confidence
3. **Instant Gratification:** One-click voucher copying, quick deal sharing, and immediate notifications satisfy users' need for speed
4. **Visual Hierarchy:** Large discount percentages, prominent CTAs, and clear deal categorization guide user attention
5. **Mobile-First:** Responsive design optimized for mobile deal hunting and quick voucher access

## Images
**Hero Section:** Large banner image featuring diverse shopping items (electronics, fashion, food) with gradient overlay - creates immediate context for the platform's purpose.

**Deal Categories:** Icon-based representations for each platform (Shopee orange, Lazada blue, TikTok black) and category types (restaurant utensils, airplane, hotel bed).

**No large background images** beyond the hero - focus remains on deal content and voucher information for optimal performance and clarity.