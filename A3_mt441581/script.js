// notification
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.classList.add(type);
    notification.textContent = message;
    document.body.appendChild(notification);
  
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
  document.getElementById('showNotification').addEventListener('click', () => {
    showNotification('This is a notification!', 'info');
  });
  

// changing background color on hover
document.getElementById('hoverElement').addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#f0f0f0'; 
});

document.getElementById('hoverElement').addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'transparent';
});


// greeting based on time of the day
function displayGreeting() {
    const now = new Date();
    const hour = now.getHours();

    let greeting = '';

    if (hour < 12) {
        greeting = 'Good morning!';
    } else if (hour < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    document.getElementById('greeting').textContent = greeting;
}

displayGreeting();

// changing color schemes
document.getElementById('colorScheme1').addEventListener('click', function() {
    document.getElementById('colorSchemeDefault').href = 'css/color-scheme-default.css';
});

document.getElementById('colorScheme2').addEventListener('click', function() {
    document.getElementById('colorSchemeAlternate').href = 'css/color-scheme-alternate.css';
});

document.getElementById('colorScheme3').addEventListener('click', function() {
    document.getElementById('colorSchemeAccent').href = 'css/color-scheme-accent.css';
});


// contactForm

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const age = document.getElementById('age').value;
        const message = document.getElementById('message').value;

        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

        if (!name.trim()) {
            alert('Please enter your name.');
            return;
        }

        if (!email.trim()) {
            alert('Please enter your email.');
            return;
        }

        if (!phonePattern.test(phone)) {
            alert('Please enter a valid phone number in the format 123-456-7890.');
            return;
        }

        if (isNaN(age) || age < 18) {
            alert('Please enter a valid age greater than or equal to 18.');
            return;
        }

        if (!message.trim()) {
            alert('Please enter your message.');
            return;
        }

        alert('Form submitted successfully!');

        form.reset();
    });
});
