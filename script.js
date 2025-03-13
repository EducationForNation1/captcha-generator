document.addEventListener("DOMContentLoaded", () => {
    const captchaText = document.getElementById("captchaText");
    const refreshCaptcha = document.getElementById("refreshCaptcha");
    const captchaInput = document.getElementById("captchaInput");
    const checkCaptcha = document.getElementById("checkCaptcha");
    const captchaMessage = document.getElementById("captchaMessage");

    function generateCaptcha() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let captcha = "";
        for (let i = 0; i < 6; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        captchaText.textContent = captcha;
    }

    function validateCaptcha() {
        if (captchaInput.value === captchaText.textContent) {
            captchaMessage.style.color = "green";
            captchaMessage.textContent = "✅ CAPTCHA Verified!";
        } else {
            captchaMessage.style.color = "red";
            captchaMessage.textContent = "❌ Incorrect CAPTCHA. Try Again.";
            generateCaptcha();
        }
        captchaInput.value = "";
    }

    refreshCaptcha.addEventListener("click", generateCaptcha);
    checkCaptcha.addEventListener("click", validateCaptcha);

    generateCaptcha(); // Generate CAPTCHA on page load
});
