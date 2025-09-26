# Deployment Guide

## Vercel Deployment

### 1. Cấu hình đã được thiết lập:
- ✅ `vercel.json` - Cấu hình Vercel
- ✅ `package.json` - Scripts cho build và start
- ✅ Server config - Serve static files từ `dist/public`

### 2. Deploy lên Vercel:

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

### 3. Environment Variables trên Vercel:
- `NODE_ENV=production` (đã được set trong vercel.json)
- `PORT` sẽ được Vercel tự động set

### 4. Build Process:
1. Vercel sẽ chạy `npm run build`
2. Build client với Vite → `dist/public/`
3. Build server với esbuild → `dist/index.js`
4. Deploy `dist/index.js` như serverless function

### 5. Troubleshooting:
- Nếu thấy source code thay vì app: Kiểm tra `vercel.json` và build process
- Nếu lỗi static files: Đảm bảo `dist/public` tồn tại sau build
- Nếu lỗi server: Kiểm tra `dist/index.js` có được build đúng không
