document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorBox = document.getElementById('error-message');

    try {
        // Fetching from the Vercel Serverless Function
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();

        if (result.status === "locked") {
            errorBox.style.display = 'block';
        }
    } catch (err) {
        console.error("Connection error:", err);
        // Fallback: show error anyway for demo purposes
        errorBox.style.display = 'block';
    }
});
