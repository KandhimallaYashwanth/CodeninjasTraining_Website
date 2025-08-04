document.addEventListener('DOMContentLoaded', () => {
    // --- Supabase & Popup Logic ---
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    const enrollmentForm = document.getElementById('enrollment-form');
    const submitButton = enrollmentForm.querySelector('.cta-button');
    const popup = document.getElementById('popup-message');
    const popupText = document.getElementById('popup-text');
    const popupClose = document.getElementById('popup-close');
    let popupTimeout;

    // UPDATED: This function now accepts a status string ('success', 'error', or 'info')
    const showPopup = (message, status) => {
        clearTimeout(popupTimeout);
        popupText.innerText = message;
        popup.className = 'popup'; // Reset classes
        popup.classList.add(status, 'show'); // Adds the correct class (success, error, or info)
        
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

    if (enrollmentForm) {
        enrollmentForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(enrollmentForm);
            const formObject = Object.fromEntries(formData.entries());

            submitButton.disabled = true;
            submitButton.innerText = 'Checking...';

            try {
                // STEP 1: Check if the user has already enrolled in this course
                const { data: existingEnrollment, error: checkError } = await supabase
                    .from('enrollments')
                    .select('email')
                    .eq('email', formObject.email)
                    .eq('course_name', formObject.selectedCourse)
                    .single();

                if (checkError && checkError.code !== 'PGRST116') {
                    throw checkError;
                }
                
                if (existingEnrollment) {
                    // UPDATED: Now calls showPopup with the 'info' status
                    showPopup("You have already enrolled in this course. We will review your application shortly.", 'info');
                    return; // Stop the function here
                }

                // STEP 2: If no existing enrollment was found, proceed to insert
                submitButton.innerText = 'Submitting...';
                const { data, error: insertError } = await supabase
                    .from('enrollments')
                    .insert([{
                        first_name: formObject.firstName,
                        last_name: formObject.lastName,
                        email: formObject.email,
                        phone: formObject.phone,
                        course_name: formObject.selectedCourse,
                    }]);

                if (insertError) throw insertError;

                showPopup("Thank you for enrolling! We will contact you shortly to confirm.", 'success');
                enrollmentForm.reset();

            } catch (error) {
                console.error('Error submitting enrollment:', error.message);
                showPopup("Sorry, there was an error with your enrollment. Please try again.", 'error');
            } finally {
                submitButton.disabled = false;
                submitButton.innerText = 'Submit Enrollment';
            }
        });
    }
});
