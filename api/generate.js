export default async function handler(req, res) {
  try {
    const { prompt } = req.body;

    const r = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token r8_0UftiIqIp7hTQLouJlI0Q0k0wmj4mrL22AlaN`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        version: "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa", // Yahan apne model ka real version ID daal dena
        input: { prompt }
      })
    });

    const data = await r.json();

    res.status(200).json(data);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
