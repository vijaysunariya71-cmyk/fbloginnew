export default function handler(req, res) {
    if (req.method === 'POST') {
        // This is where you would normally check a database.
        // For your request, we always return the "locked" status.
        return res.status(403).json({
            status: "locked",
            message: "Account security lock triggered"
        });
    } else {
        res.status(405).send('Method Not Allowed');
    }
}