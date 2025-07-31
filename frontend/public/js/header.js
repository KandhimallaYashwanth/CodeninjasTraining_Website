document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');

            // Check the state of the nav links to determine which icon to show
            if (navLinks.classList.contains('nav-active')) {
                // If the menu is open, set the button's content to be an 'x' icon
                menuToggle.innerHTML = '<i data-feather="x"></i>';
            } else {
                // If the menu is closed, set it back to the 'menu' icon
                menuToggle.innerHTML = '<i data-feather="menu"></i>';
            }
            
            // After changing the HTML, we must call feather.replace() again
            // to render the new icon we just added.
            feather.replace();
        });
    }

});
