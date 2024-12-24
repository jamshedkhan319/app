document.getElementById("appForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const appName = document.getElementById("appName").value;
    const appLogo = document.getElementById("appLogo").value;
    const webLink = document.getElementById("webLink").value;

    const appContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${appName}</title>
        </head>
        <body style="text-align: center; padding: 50px;">
            <img src="${appLogo}" alt="${appName} Logo" style="width: 100px; height: 100px; border-radius: 50%;">
            <h1>Welcome to ${appName}</h1>
            <iframe src="${webLink}" style="width: 100%; height: 80vh; border: none;"></iframe>
        </body>
        </html>
    `;

    const blob = new Blob([appContent], { type: "text/html" });
    const link = document.getElementById("downloadLink");
    link.href = URL.createObjectURL(blob);

    document.getElementById("result").classList.remove("hidden");
});
