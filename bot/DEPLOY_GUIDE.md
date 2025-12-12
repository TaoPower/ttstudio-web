# Hướng Dẫn Chạy Bot Online 24/7 (Miễn Phí)

GitHub chỉ là nơi lưu code, nó không thể chạy Bot liên tục (trừ khi dùng Codespaces nhưng sẽ tắt khi bạn off). Để Bot online 24/7, bạn nên dùng **Render.com** (hoặc Railway, Heroku).

Dưới đây là cách dễ nhất dùng **Render** (Free).

## Bước 1: Đẩy Code lên GitHub

1.  Tạo một Repository mới trên GitHub (VD: `ttstudio-web`).
2.  Mở terminal VS Code, chạy lệnh:
    ```bash
    git init
    git add .
    git commit -m "Upload code"
    git branch -M main
    git remote add origin <LINK_REPO_CUA_BAN>
    git push -u origin main
    ```

## Bước 2: Deploy lên Render

1.  Vào [Render.com](https://render.com) > Đăng ký bằng GitHub.
2.  Chọn **New +** > **Web Service**.
3.  Chọn Repo GitHub bạn vừa tạo.
4.  Điền thông tin:
    - **Name**: `ttstudio-bot`
    - **Root Directory**: `.` (để trống hoặc dấu chấm)
    - **Environment**: `Node`
    - **Build Command**: `npm install`
    - **Start Command**: `node bot/index.js`
    - **Plan**: Free

## Bước 3: Cài đặt Biến Môi Trường (Quan trọng)

Trong trang Dashboard của Render vừa tạo, tìm mục **Environment** (hoặc Environment Variables):
Thêm các biến giống trong file `.env` của bạn:

1.  `DISCORD_TOKEN`: (Token con bot)
2.  `API_SECRET`: (Mã bí mật bạn tự đặt, VD: ttstudio_secret_key_123)
3.  `API_URL`: `https://<ten-du-an-vercel>.vercel.app/api/projects`
    - _Lưu ý: API_URL phải là link website đã deploy trên Vercel, không phải localhost._

## Bước 4: Hoàn tất

Bấm **Create Web Service**. Đợi khoảng 2-3 phút, Bot sẽ online và bạn có thể gõ lệnh `!post` trong Discord bất cứ lúc nào!
