// 1. Handle Signup Form Submission
function handleSignupSubmit(event) {
    event.preventDefault(); // Prevents the page from reloading

    const signupForm = event.target;
    const formData = new FormData(signupForm);

    // Capture values for the custom success screen
    const studentName = document.getElementById('studentName').value;
    const classSchedule = document.getElementById('classSchedule').value;

    // Send the form data silently to Netlify in the background
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
        .then(() => {
            // SUCCESS: Show the custom success screen
            const signupSection = document.querySelector('.signup-section');
            if (signupSection) {
                signupSection.innerHTML = `
                <div style="background: white; padding: 45px; border-radius: 22px; box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1); text-align: center; max-width: 600px; margin: 0 auto;">
                    <div style="font-size: 50px; margin-bottom: 15px;">🎉</div>
                    <h3 style="color: #1e3a8a; font-size: 32px; margin-bottom: 15px;">Registration Submitted!</h3>
                    <p style="font-size: 18px; color: #374151; margin-bottom: 25px; line-height: 1.6;">
                        Thank you for registering, <strong>${studentName}</strong>! We are excited to have you join our STEM community.
                    </p>
                    
                    <div style="background: #f4f6fc; padding: 20px; border-radius: 12px; text-align: left; margin-bottom: 25px;">
                        <p style="margin-bottom: 0; line-height: 1.5;"><strong>Confirmed Class Details:</strong><br>${classSchedule}</p>
                    </div>

                    <p style="font-size: 14px; color: #6b7280; line-height: 1.6;">
                        A confirmation email has been routed to our tracking system. A parent/guardian will be contacted shortly to finalize onboarding details.
                    </p>
                </div>
            `;
            }
        })
        .catch(error => alert("Form submission failed. Please try again. Error: " + error));
}

// Attach event listener for signup
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', handleSignupSubmit);
}


// 2. Handle Testimonial Form Submission
function handleTestimonialSubmit(event) {
    event.preventDefault(); // Prevents the page from reloading

    const testimonialForm = event.target;
    const formData = new FormData(testimonialForm);

    // Send the form data silently to Netlify in the background
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
        .then(() => {
            // SUCCESS: Swap out the form with a thank-you message
            testimonialForm.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h3 style="color: #1e3a8a; margin-bottom: 10px;">Thank You!</h3>
                <p>Your testimonial has been submitted. It will be reviewed and uploaded to the site soon.</p>
            </div>
        `;
        })
        .catch(error => alert("Form submission failed. Please try again. Error: " + error));
}

// Attach event listener for testimonials
const testimonialForm = document.getElementById('testimonialForm');
if (testimonialForm) {
    testimonialForm.addEventListener('submit', handleTestimonialSubmit);
}

// Contacts 
function handleContactSubmit(event) {
    event.preventDefault(); // Prevents the page from reloading

    const contactForm = event.target;
    const formData = new FormData(contactForm);

    // Send the form data silently to Netlify in the background
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
        .then(() => {
            // SUCCESS: Swap out the form with a thank-you message
            contactForm.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h3 style="color: #1e3a8a; margin-bottom: 10px;">Thank You for contacing us!</h3>
                <p>We will review and get back to you ASAP.</p>
            </div>
        `;
        })
        .catch(error => alert("Form submission failed. Please try again. Error: " + error));
}

// Attach event listener for contacts
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
}