// Initialize EmailJS (replace 'YOUR_USER_ID' with your EmailJS user ID
(function() {
    emailjs.init('0HlvNYu6OWQByqsMS'); // Replace with your actual user ID
})();

// Contact form submission handler
const contactForm = document.getElementById('contact-form');
const spinner = document.getElementById('spinner');
const overlay = document.getElementById('overlay');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    
    overlay.style.display = 'block';

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Log values for debugging
    console.log({ name, email, phone, subject, message });

    // Prepare the template parameters
    const templateParams = {
        name,
        email,
        phone,
        subject,
        message
    };

    // Send email using EmailJS
    emailjs.send('service_o2zik5g', 'template_0qxsrhc', templateParams)
        .then(function(response) {
            console.log('Success:', response);
            alert('Message sent successfully!');
            contactForm.reset(); // Reset form after submission
        }, function(error) {
            console.log('Error:', error);
            alert('Failed to send message. Please try again later.');
        }).finally(() => {
            // Hide loading spinner and overlay
            overlay.style.display = 'none';
        });
});

// Menu and navbar toggling functionality
const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active');
};

const section = document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top > offset && top < offset + height) {
            sec.classList.add('start-animation');
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // Close menu on scroll
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active');
}

// Read More functionality
const readMoreBtn = document.getElementById('read-more-btn');
const fullDescription = document.querySelector('.full-description');

readMoreBtn.onclick = () => {
    if (fullDescription.style.display === "none") {
        fullDescription.style.display = "block";
        readMoreBtn.textContent = "Read Less"; // Change button text
    } else {
        fullDescription.style.display = "none";
        readMoreBtn.textContent = "Read More"; // Change button text back
    }
}

// Hire Me functionality
const hireMeBtn = document.getElementById('hire-me-btn');

hireMeBtn.onclick = () => {
    const email = 'subhamconcepts@gmail.com';
    const subject = 'Hiring Inquiry';
    const body = ''; 

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
}

// View Resume functionality
const viewResumeBtn = document.getElementById('view-cv-btn');

viewResumeBtn.onclick = () => {
    const resumeUrl = 'documents/Resume.pdf'; // Adjust the path to include the folder
    window.open(resumeUrl, '_blank');
}

// Bubble functionality (already integrated in your code)
const bubbleContainer = document.querySelector('.bubble-container');

// Function to create a bubble
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Set random size
    const size = Math.random() * 50 + 20; // Size between 20px and 70px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * (window.innerWidth - size)}px`;
    bubble.style.top = `${Math.random() * (window.innerHeight - size)}px`;

    // Set random movement speed and direction
    let dx = (Math.random() - 0.5) * 2; // Horizontal speed
    let dy = (Math.random() - 0.5) * 2; // Vertical speed

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    // Move the bubble
    function moveBubble() {
        if (!isDragging) {
            let left = parseFloat(bubble.style.left);
            let top = parseFloat(bubble.style.top);

            // Update position
            bubble.style.left = `${left + dx}px`;
            bubble.style.top = `${top + dy}px`;

            // Check for boundary collision
            if (left + dx < 0 || left + dx > window.innerWidth - size) {
                dx = -dx;
            }
            if (top + dy < 0 || top + dy > window.innerHeight - size) {
                dy = -dy;
            }
        }

        requestAnimationFrame(moveBubble); // Continue moving
    }

    // Mouse down event (start dragging)
    bubble.addEventListener('mousedown', (event) => {
        isDragging = true;
        offsetX = event.clientX - bubble.offsetLeft;
        offsetY = event.clientY - bubble.offsetTop;
        bubble.classList.add('dragging');
    });

    // Mouse move event (dragging)
    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            bubble.style.left = `${event.clientX - offsetX}px`;
            bubble.style.top = `${event.clientY - offsetY}px`;
        }
    });

    // Mouse up event (stop dragging)
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            bubble.classList.remove('dragging');
        }
    });

    bubbleContainer.appendChild(bubble);
    moveBubble(); // Start moving the bubble
}

// Create multiple bubbles
for (let i = 0; i < 10; i++) {
    createBubble();
}

// Modal functionality
document.getElementById('dino-game-btn').onclick = function() {
    document.getElementById('dino-modal').style.display = "block";
}

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('dino-modal').style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('dino-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

