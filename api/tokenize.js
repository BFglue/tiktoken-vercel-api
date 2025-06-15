import { encoding_for_model } from "@dqbd/tiktoken";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { text = "", model = "gpt-4o" } = req.body;

  try {
    const enc = encoding_for_model(model);
    const count = enc.encode(text).length;
    res.status(200).json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
