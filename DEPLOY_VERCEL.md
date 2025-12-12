# Hướng Dẫn Deploy Full Source lên Vercel

Cách này giúp website online 24/7 và dùng được Serverless Functions (API).

## Bước 1: Đẩy code lên GitHub

1.  Đăng nhập [GitHub](https://github.com) và tạo **New Repository** (đặt tên `ttstudio-web`).
2.  **Đừng** chọn "Add a README" hay ".gitignore" (vì mình đã có rồi).
3.  Mở Terminal tại thư mục code của bạn, chạy lần lượt:

```bash
git init
git add .
git commit -m "Upload full source"
git branch -M main
git remote add origin <LINK_GITHUB_CUA_BAN>
git push -u origin main
```

_(Thay `<LINK_GITHUB_CUA_BAN>` bằng link repo bạn vừa tạo)_

## Bước 2: Import vào Vercel

1.  Truy cập [Vercel Dashboard](https://vercel.com/dashboard).
2.  Bấm **Add New...** > **Project**.
3.  Chọn **Import** cạnh repo `ttstudio-web` bạn vừa up.
4.  Trong phần **Build and Output Settings**, để mặc định (Framework Preset: Other hoặc Next.js nếu nó tự nhận, nhưng code này là HTML thuần + API Nodejs nên cứ để mặc định).
5.  **QUAN TRỌNG:** Mở mục **Environment Variables** và thêm các biến giống file `.env`:

    - `MONGODB_URI`: (Copy từ file .env của bạn)
    - `API_SECRET`: (Copy từ file .env)
    - `API_URL`: (Điền: `https://ten-du-an-cua-ban.vercel.app/api/projects` - _Lưu ý: Sau khi deploy xong mới có link này, bạn có thể update sau_)
    - `DISCORD_TOKEN`: (Token bot)
    - `GUILD_ID`: (ID Server)

6.  Bấm **Deploy**.

## Bước 3: Cập nhật Webhook (Nếu cần)

Sau khi có link web (Ví dụ: `https://ttstudio.vercel.app`), bạn cần:

1.  Vào Dashboard Hosting của Bot (Render/Heroku...).
2.  Cập nhật biến `API_URL` thành link mới: `https://ttstudio.vercel.app/api/projects`.
3.  Khởi động lại Bot.

Vậy là xong! Web chạy trên Vercel, Bot chạy trên Render, Database chạy trên MongoDB Atlas.
