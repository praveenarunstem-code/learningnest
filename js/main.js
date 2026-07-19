// Universal Helper Function to submit Netlify Forms via AJAX Fetch
function submitNetlifyForm(event, formName, successCallback) {
    event.preventDefault(); // Prevents page reload

    const formElement = event.target;
    const formData = new FormData(formElement);
    
    // Ensure the form-name parameter is explicitly set in the form data
    formData.set("form-name", formName);

    // Send the POST request directly to the current page URL
    fetch(window.location.pathname, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    })
    .then(response => {
        if (response.ok) {
            successCallback();
        } else {
            throw new Error(`Server returned ${response.status}`);
        }
    })
    .catch(error => alert("Form submission error: " + error));
}

// 1. Handle Signup Form Submission
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        submitNetlifyForm(event, 'signup', function() {
            const studentName = document.getElementById('studentName').value;
            const classSchedule = document.getElementById('classSchedule').value;
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
        });
    });
}

// 2. Handle Testimonial Form Submission
const testimonialForm = document.getElementById('testimonialForm');
if (testimonialForm) {
    testimonialForm.addEventListener('submit', function(event) {
        submitNetlifyForm(event, 'testimonials', function() {
            testimonialForm.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <h3 style="color: #1e3a8a; margin-bottom: 10px;">Thank You!</h3>
                    <p>Your testimonial has been submitted. It will be reviewed and uploaded to the site soon.</p>
                </div>
            `;
        });
    });
}

// 3. Handle Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        submitNetlifyForm(event, 'contact', function() {
            contactForm.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <h3 style="color: #1e3a8a; margin-bottom: 10px;">Thank You for contacting us!</h3>
                    <p>We will review your message and get back to you as soon as possible.</p>
                </div>
            `;
        });
    });
}
