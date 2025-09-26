# Deployment Guide

## Vercel Deployment - FIXED ✅

### 1. Cấu hình đã được thiết lập:
- ✅ `vercel.json` - Cấu hình Vercel với API routes
- ✅ `api/index.js` - Vercel serverless function
- ✅ Static files được serve từ `dist/public`

### 2. Cấu trúc mới:
```
hotsale/
├── api/
│   └── index.js          # Vercel serverless function
├── dist/
│   └── public/           # Built static files
├── vercel.json           # Vercel config
└── package.json
```

### 3. Deploy lên Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Hoặc deploy production
vercel --prod
```

### 4. Cách hoạt động:
1. **Build:** Vercel chạy `npm run build` → tạo `dist/public/`
2. **API:** Tất cả requests → `/api/index.js`
3. **Static:** API serve static files từ `dist/public/`
4. **SPA:** Fallback về `index.html` cho client-side routing

### 5. Test local:
```bash
# Build trước
npm run build

# Test API
node api/index.js
# Server chạy trên http://localhost:3000
```

### 6. Troubleshooting:
- ✅ **500 Error:** Đã fix bằng cách tạo `api/index.js`
- ✅ **Static files:** Serve từ `dist/public/`
- ✅ **SPA routing:** Fallback về `index.html`
- ✅ **ES Modules:** Sử dụng `import/export`

### 7. Lưu ý:
- Mỗi khi sửa code, cần chạy `npm run build` trước khi deploy
- API function sẽ tự động serve cả static files và handle routing


# Mỗi khi sửa code, chạy:
npm run build
vercel --prod