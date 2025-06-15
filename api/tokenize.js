import { encoding_for_model } from "@dqbd/tiktoken";

export default async (req, res) => {
  const { text = "", model = "gpt-4o" } = req.query;

  try {
    const enc = encoding_for_model(model);
    const tokens = enc.encode(text);
    res.status(200).json({ tokens: Array.from(tokens), count: tokens.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
