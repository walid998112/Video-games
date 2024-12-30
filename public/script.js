// Smooth scrolling for internal links (like menu)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const test = document.querySelector('#test')

const scrollTopBtn = document.createElement('div');
scrollTopBtn.innerHTML = "&#8679;";
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Login form validation
// document.getElementById('login-form').addEventListener('submit', function (e) {
//     e.preventDefault();
    
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     let errorMessage = '';

//     if (email === '' || password === '') {
//         errorMessage = 'Both email and password are required!';
//     } else if (!validateEmail(email)) {
//         errorMessage = 'Please enter a valid email address!';
//     }

//     if (errorMessage !== '') {
//         alert(errorMessage);
//     } else {
//         alert('Login successful');
//         // Add actual login functionality here
//         this.submit();
//     }
// });

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Sign up form validation
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let errorMessage = '';

    if (email === '' || password === '' || confirmPassword === '') {
        errorMessage = 'All fields are required!';
    } else if (!validateEmail(email)) {
        errorMessage = 'Please enter a valid email address!';
    } else if (password !== confirmPassword) {
        errorMessage = 'Passwords do not match!';
    }

    if (errorMessage !== '') {
        alert(errorMessage);
    } else {
        alert('Sign-up successful');
        // Add actual sign-up functionality here
        this.submit();
    }
});

// Animate elements on scroll (using Intersection Observer)
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

animatedElements.forEach(element => {
    observer.observe(element);
});

// Category filter on Explore Games page
const categoryButtons = document.querySelectorAll('.category-btn');
const allGames = document.querySelectorAll('.game-item');

categoryButtons.forEach(button => {
    button.addEventListener('click', function () {
        const category = this.dataset.category;

        allGames.forEach(game => {
            if (game.classList.contains(category) || category === 'all') {
                game.style.display = 'block';
            } else {
                game.style.display = 'none';
            }
        });
    });
});

// Hover animation for buttons and images
const buttons = document.querySelectorAll('.btn, .home-button img');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('hover-animation');
    });

    button.addEventListener('mouseout', () => {
        button.classList.remove('hover-animation');
    });
});

// Toggle dropdown menu for mobile
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
});

// Background video control (optional)
const video = document.querySelector('video');
document.querySelector('.play-video').addEventListener('click', function () {
    if (video.paused) {
        video.play();
        this.innerText = "Pause";
    } else {
        video.pause();
        this.innerText = "Play";
    }
});
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});
const hoverElements = document.querySelectorAll('.hover-item');

hoverElements.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1) rotate(3deg)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1) rotate(0deg)';
    });
});
function typeWriter(element, text, speed) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

const title = document.querySelector('.typing-title');
typeWriter(title, 'Welcome to Our Gaming World!', 100);
window.addEventListener('scroll', function() {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.addEventListener('scroll', function() {
    const animateItems = document.querySelectorAll('.scroll-animate');

    animateItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        if (itemPosition < window.innerHeight) {
            item.classList.add('active');
        }
    });
});
function togglePassword() {
    var passwordField = document.getElementById("password");
    var eyeIcon = document.getElementById("eyeIcon");
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}
document.getElementById("signupForm").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Check if passwords match
    if (password !== confirmPassword) {
        event.preventDefault(); // Prevent form submission
        errorMessage.style.display = "block"; // Show error message
    } else {
        errorMessage.style.display = "none"; // Hide error message
    }
});
const APLINK ='URL: https://www.giantbomb.com/api/games/?api_key=272348befe9d30caa8b99d8857735e0cc2341255'
const SEARCHAPI=' https://www.giantbomb.com/api/search/?api_key=272348befe9d30caa8b99d8857735e0cc2341255'
const main = document.getElementById("game-categories");
const search= document.getElementById("search");

returnGames(APLINK)
function returnGames(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    console.log(data.results);
    data.results.forEach(element => {
        const div_card = 
        document.createElement('div');
        div_card.setAttribute('class', 'category');
        
        const div_row = document.createElement('div');
        div_row.setAttribute('class', 'row');
        
        const div_column = document.createElement('div');
        div_column.setAttribute('class', 'column');
        
        const image = document.createElement('img');
        image.setAttribute('class', 'thumbnail');
        image.setAttribute('id', 'image');
        
        const title = document.createElement('h3');
        title.setAttribute('id', 'title');
        
        title.innerHTML = `${element.title}`;
        image.src = IMG_PATH + element.poster_path;
  
        center.appendChild(image);
        div_card.appendChild(center);
        div_card.appendChild(title);
        div_column.appendChild(div_card);
        div_row.appendChild(div_column);
  
        main.appendChild(div_row);
    });
  });
  }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = '';

  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
      search.value = "";
  }
});
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (data.token) {
        localStorage.setItem('token', data.token);  // Store token in localStorage
        window.location.href = 'user_dashboard.html';  // Redirect to user dashboard
    } else {
        alert('Login failed');
    }
});
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (data.token) {
        localStorage.setItem('token', data.token);  // Store token in localStorage
        window.location.href = 'user_dashboard.html';  // Redirect to user dashboard
    } else {
        alert('Login failed');
    }
});
const verifyAdmin = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1];
    const decoded = jwt.verify(token, secret);
    if (decoded.role !== 'admin') return res.status(403).json({ error: 'Admin access only' });
    next();
};

app.get('/admin', verifyAdmin, (req, res) => {
    res.send('Welcome, Admin');
});
document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    // Send data to backend API
    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            alert('User signed up successfully');
            // Redirect to login or dashboard
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error signing up');
    }
});
document.querySelector('#loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        alert('Login successful!');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  });