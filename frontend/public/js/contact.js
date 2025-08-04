document.addEventListener('DOMContentLoaded', () => {
    console.log("Contact form script loaded.");

    // Check if the Supabase variables exist before trying to connect
    if (typeof SUPABASE_URL === 'undefined' || typeof SUPABASE_ANON_KEY === 'undefined') {
        console.error("Supabase URL or Key is not defined. Make sure they are passed correctly from your EJS file.");
        return; // Stop the script if keys are missing
    }
    
    // --- Supabase & Popup Logic ---
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("Supabase client initialized.");
    
    const contactForm = document.getElementById('contact-form');
    const submitButton = document.querySelector('.cta-button-unique');
    const popup = document.getElementById('popup-message');
    const popupText = document.getElementById('popup-text');
    const popupClose = document.getElementById('popup-close');
    let popupTimeout;

    const showPopup = (message, isSuccess) => {
        clearTimeout(popupTimeout);
        popupText.innerText = message;
        popup.className = 'popup'; // Reset classes
        popup.classList.add(isSuccess ? 'success' : 'error', 'show');
        
        popupTimeout = setTimeout(() => {
            popup.classList.remove('show');
        }, 5000); // Hide after 5 seconds
    };

    if (popupClose) {
        popupClose.addEventListener('click', () => {
            clearTimeout(popupTimeout);
            popup.classList.remove('show');
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            console.log("Form submission initiated.");
            const formData = new FormData(contactForm);
            const formObject = Object.fromEntries(formData.entries());

            submitButton.disabled = true;
            submitButton.innerText = 'Sending...';

            try {
                const { data, error } = await supabase
                    .from('queries')
                    .insert([{
                        name: formObject.name,
                        email: formObject.email,
                        phone: formObject.phone,
                        subject: formObject.subject,
                        message: formObject.message,
                    }]);

                if (error) throw error;

                console.log("Submission successful!");
                showPopup("Thank you! Your message has been sent successfully.", true);
                contactForm.reset();

            } catch (error) {
                console.error('Error submitting form:', error.message);
                showPopup("Sorry, there was an error sending your message. Please try again.", false);
            } finally {
                submitButton.disabled = false;
                submitButton.innerText = 'Send Message';
            }
        });
    } else {
        console.error("Contact form not found on this page.");
    }
});
