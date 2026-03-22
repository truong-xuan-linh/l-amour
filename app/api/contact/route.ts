import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  phone: string;
  date: string;
  style: string;
}

async function sendTelegram(data: ContactPayload) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const time = new Date().toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const text = [
    `💌 *Khách hàng mới — L'Amour Link*`,
    ``,
    `👤 *Tên:* ${data.name}`,
    `📞 *SĐT:* ${data.phone}`,
    `📅 *Ngày cưới:* ${data.date || "Chưa xác định"}`,
    `🎨 *Phong cách:* ${data.style}`,
    ``,
    `⏰ ${time}`,
  ].join("\n");

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
  });
}

async function sendEmail(data: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.OWNER_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "noreply@lamour.com.vn";
  if (!apiKey || !toEmail) return;

  const dateDisplay = data.date
    ? new Date(data.date).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "Chưa xác định";

  const html = `
<!DOCTYPE html>
<html lang="vi">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:40px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#d4af37;padding:32px 40px;text-align:center;">
            <p style="margin:0;color:#fff;font-size:13px;letter-spacing:3px;text-transform:uppercase;">L'Amour Link</p>
            <h1 style="margin:8px 0 0;color:#fff;font-size:26px;font-weight:700;">Khách hàng mới!</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">
            <p style="margin:0 0 24px;color:#555;font-size:15px;line-height:1.6;">
              Bạn vừa nhận được một yêu cầu tư vấn mới qua website. Thông tin chi tiết:
            </p>

            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:12px 16px;background:#faf8f4;border-radius:10px 10px 0 0;border-bottom:1px solid #ede9e0;">
                  <span style="font-size:12px;color:#999;text-transform:uppercase;letter-spacing:1px;">Tên</span><br/>
                  <span style="font-size:17px;font-weight:600;color:#1a1714;">${data.name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:#faf8f4;border-bottom:1px solid #ede9e0;">
                  <span style="font-size:12px;color:#999;text-transform:uppercase;letter-spacing:1px;">Số điện thoại</span><br/>
                  <span style="font-size:17px;font-weight:600;color:#1a1714;">
                    <a href="tel:${data.phone}" style="color:#d4af37;text-decoration:none;">${data.phone}</a>
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:#faf8f4;border-bottom:1px solid #ede9e0;">
                  <span style="font-size:12px;color:#999;text-transform:uppercase;letter-spacing:1px;">Ngày cưới dự kiến</span><br/>
                  <span style="font-size:17px;font-weight:600;color:#1a1714;">${dateDisplay}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;background:#faf8f4;border-radius:0 0 10px 10px;">
                  <span style="font-size:12px;color:#999;text-transform:uppercase;letter-spacing:1px;">Phong cách yêu thích</span><br/>
                  <span style="font-size:17px;font-weight:600;color:#1a1714;">${data.style}</span>
                </td>
              </tr>
            </table>

            <div style="margin-top:28px;text-align:center;">
              <a href="tel:${data.phone}"
                style="display:inline-block;background:#d4af37;color:#fff;text-decoration:none;padding:14px 32px;border-radius:50px;font-weight:600;font-size:15px;">
                Gọi ngay cho khách
              </a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;border-top:1px solid #f0ebe0;text-align:center;">
            <p style="margin:0;font-size:12px;color:#bbb;">
              Email tự động từ <strong>lamour.com.vn</strong>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: `L'Amour Link <${fromEmail}>`,
      to: [toEmail],
      subject: `💌 Khách hàng mới: ${data.name} — ${data.phone}`,
      html,
    }),
  });
}

export async function POST(req: NextRequest) {
  try {
    const data: ContactPayload = await req.json();

    if (!data.name?.trim() || !data.phone?.trim()) {
      return NextResponse.json({ error: "Thiếu thông tin bắt buộc" }, { status: 400 });
    }

    // Chạy song song, không block nhau
    await Promise.allSettled([sendTelegram(data), sendEmail(data)]);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
