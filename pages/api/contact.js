

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    // Log the message to the server console to simulate storing it
    console.log('New Contact Message:', message);
    res.status(200).json({ success: true, message: 'Message received' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}