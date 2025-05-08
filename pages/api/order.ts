import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log("🚀 Orden recibida. Enviando a flujo n8n...");
    // Aquí en el futuro puedes disparar el webhook real a n8n o Telnyx
    return res.status(200).json({ success: true });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
