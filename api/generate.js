export default async function handler(req, res) {
  try {
    const { prompt } = req.body;

    const response = await fetch("sk-b8f9c4ab7c************e475dc98d3", {
      method: "POST",
      headers: {
        "Authorization": `Bearer sk-b8f9c4ab7c************e475dc98d3`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Video generation failed" });
  }
}
