# Hướng Dẫn Cài Đặt Discord Bot (A-Z)

Đây là hướng dẫn chi tiết để chạy Backend lấy số lượng thành viên Discord thật.

## Bước 1: Chuẩn bị Discord Bot

1. Truy cập [Discord Developer Portal](https://discord.com/developers/applications).
2. Nhấn **New Application** -> Đặt tên (ví dụ: `TTStudioBot`).
3. Vào mục **Bot** (menu bên trái) -> Nhấn **Reset Token** để lấy **Token**.
   - **Lưu ý**: Copy Token này ngay, bạn sẽ không thấy lại nó.
4. Kéo xuống mục **Privileged Gateway Intents**:
   - Bật **Server Members Intent**.
   - Nhấn **Save Changes**.
5. Vào mục **OAuth2** -> **URL Generator**:
   - Chọn `bot`.
   - Chọn quyền `Administrator` (hoặc chỉ cần `Read Messages/View Channels` là đủ, nhưng Admin cho lẹ nếu server của bạn).
   - Copy link phía dưới -> Dán vào trình duyệt -> Mời Bot vào Server của bạn.

## Bước 2: Lấy Server ID (Guild ID)

1. Mở Discord > **User Settings** (Cài đặt) > **Advanced** (Nâng cao).
2. Bật **Developer Mode** (Chế độ nhà phát triển).
3. Chuột phải vào tên Server của bạn ở cột bên trái -> Chọn **Copy Server ID**.

## Bước 3: Cấu hình Code

1. Mở file `backend/.env` bằng VS Code.
2. Dán thông tin vào:
   ```env
   DISCORD_TOKEN=Dán_Token_Của_Bạn_Vào_Đây
   GUILD_ID=Dán_ID_Server_Vào_Đây
   PORT=3000
   ```

## Bước 4: Cài đặt & Chạy Server

1. Mở Terminal trong VS Code (Ctrl + `).
2. Chuyển vào thư mục backend:
   ```bash
   cd backend
   ```
3. Cài đặt thư viện (chỉ làm 1 lần):
   ```bash
   npm install
   ```
4. Chạy server:
   ```bash
   npm start
   ```
   Nếu thấy thông báo: `Logged in as ...` và `Server running at ...` là thành công!

## Bước 5: Kiểm tra Website

1. Mở file `index.html` (hoặc chạy Live Server).
2. Kéo xuống phần thống kê (Stats).
3. Số lượng thành viên sẽ tự động cập nhật sau 2 giây.

---

**Lưu ý**: Bạn cần giữ cửa sổ Terminal chạy `npm start` thì web mới lấy được dữ liệu.
