// Keep the native Formspree POST available when JavaScript is disabled.
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const button = form.querySelector('button[type="submit"]');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button.disabled) return;
    button.disabled = true;
    button.textContent = 'Sending…';
    status.textContent = '';
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { Accept: 'application/json' }
        });
        if (response.ok) {
            window.location.assign('thanks.html');
            return;
        }
        status.textContent = 'Your request could not be sent. Please check your details and try again.';
    } catch (error) {
        status.textContent = 'We could not confirm your request was sent. Please check your connection and try again.';
    }
    button.disabled = false;
    button.textContent = 'Request a Free Intro Call';
});
