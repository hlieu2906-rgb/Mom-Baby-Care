import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || 3000;

const app = express();
app.use(express.json());

// Initialize server-side Gemini client with User-Agent telemetry
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Multi-turn Gemini chatbot API for lactation and breast pump consultation
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Nội dung tin nhắn không hợp lệ.' });
    }

    const formattedContents: Array<{ role: 'user' | 'model'; parts: [{ text: string }] }> = [];
    
    // Add existing conversation history
    if (Array.isArray(history)) {
      for (const turn of history) {
        if (turn.role && turn.text) {
          formattedContents.push({
            role: turn.role === 'model' ? 'model' : 'user',
            parts: [{ text: String(turn.text) }],
          });
        }
      }
    }

    // Add current user prompt
    formattedContents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const systemInstruction = `Bạn là "Chuyên Gia Sữa Mẹ & Tư Vấn Máy Hút Sữa Mom&Baby Care Hà Nội" (Showroom tại Tầng 3, Discovery Complex, 302 Cầu Giấy, Hà Nội; Hotline: 0988 123 456).
Vai trò của bạn:
1. Tư vấn tận tâm, thấu hiểu, ân cần như một người bạn đồng hành cùng mẹ bỉm sữa.
2. Cung cấp kiến thức chuẩn y khoa về:
   - Các cữ hút sữa khoa học (L3, L4, L5), phương pháp kích sữa Power Pumping.
   - Nhận biết và xử lý nhanh hiện tượng tắc tia sữa, nứt cổ gà, căng tức sữa.
   - Nguyên tắc bảo quản sữa mẹ (nhiệt độ phòng, ngăn mát, ngăn đông) và cách rã đông giữ kháng thể.
3. Hướng dẫn đo size phễu silicone (đường kính chân ti + 3-4mm = size phễu: 21mm, 24mm, 27mm) để chống cọ xát và đau rát.
4. Giới thiệu các sản phẩm chính hãng của showroom:
   - Máy hút sữa rảnh tay MomCare Pro (890.000 ₫): 9 cấp độ hút & massage, LED nhớ nhịp hút, độ ồn <40dB.
   - Máy hút sữa không dây siêu êm UltraQuiet S2 (980.000 ₫): độ ồn siêu tĩnh <35dB, siêu mỏng giấu gọn trong áo ngực, pin 6 cữ.
   - Phễu silicone y tế siêu mềm (145.000 ₫/bộ 2 cái).
5. Luôn nhắc về đặc quyền vàng tại Hà Nội: "Bảo hành 24 tháng", "1 đổi 1 trong 30 ngày", "Cho mượn máy thay thế 0đ", và "Giao hỏa tốc 2H nội thành Hà Nội".
6. Trả lời súc tích, thân thiện, dùng biểu tượng cảm xúc nhẹ nhàng (🌸, 🤱, ✨), gạch đầu dòng rõ ràng để mẹ dễ đọc lúc bận chăm bé.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return res.json({ reply: response.text || 'Mom&Baby Care luôn sẵn sàng lắng nghe và hỗ trợ mẹ!' });
  } catch (error: any) {
    console.error('Error handling Gemini chat:', error);
    return res.status(500).json({
      error: 'Hệ thống đang bận. Mẹ có thể gọi trực tiếp Hotline 0988 123 456 để gặp chuyên gia ngay nhé!',
    });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Mom&Baby Care server running at http://localhost:${PORT}`);
  });
}

startServer();
