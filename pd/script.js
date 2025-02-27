// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links and sections
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');
    
    // Navigation functionality
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show corresponding section
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
            
            // Smooth scroll to section
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Feature buttons functionality
    const featureButtons = document.querySelectorAll('.feature-button');
    featureButtons.forEach(button => {
        button.addEventListener('click', () => {
            showFeatureAlert(button);
        });
    });

    // CTA button functionality
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Smooth scroll to journals section
            document.getElementById('journals').scrollIntoView({
                behavior: 'smooth'
            });
            
            // Show journals section
            sections.forEach(s => s.classList.remove('active'));
            document.getElementById('journals').classList.add('active');
            
            // Update nav active state
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelector('a[href="#journals"]').classList.add('active');
        });
    }
});

// Function to show feature alerts
function showFeatureAlert(button) {
    const features = {
        'Start Chat': 'Our AI-powered chatbot is coming soon to provide 24/7 support!',
        'Connect Now': 'Community features are being developed. Join our waitlist!',
        'Play Now': 'Mindfulness games are in development. Check back soon!',
        'Coming Soon': 'Journal features will be available in our next update!',
        'Open Notebook': 'Digital notebook feature launching soon!'
    };

    const message = features[button.textContent] || 'This feature is coming soon!';
    
    // Create and style custom alert
    const alert = document.createElement('div');
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        z-index: 1000;
        animation: slideDown 0.5s ease;
    `;
    alert.textContent = message;

    document.body.appendChild(alert);

    // Remove alert after 3 seconds
    setTimeout(() => {
        alert.style.animation = 'slideUp 0.5s ease';
        setTimeout(() => alert.remove(), 500);
    }, 3000);
}

// Add these animations to your CSS
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes slideDown {
            from { transform: translate(-50%, -100%); opacity: 0; }
            to { transform: translate(-50%, 0); opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translate(-50%, 0); opacity: 1; }
            to { transform: translate(-50%, -100%); opacity: 0; }
        }
    </style>
`);
