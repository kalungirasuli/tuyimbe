```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiple Cards Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .card {
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-bottom: 20px;
        }
        .card-image {
            width: 100%;
            max-width: 400px;
            height: auto;
            margin-bottom: 10px;
        }
        .audio-player {
            width: 100%;
            margin-bottom: 10px;
        }
        .comment-input {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            margin-bottom: 10px;
        }
        .submit-btn {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .submit-btn:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <% if (data.length > 0) { %>
        <% data.forEach(item => { %>
            <div class="card">
                <img class="card-image" src="<%= item.image %>" alt="Card Image">
                <audio controls class="audio-player">
                    <source src="<%= item.audio %>" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                <p><%= item.description %></p>
                <form action="/comment" method="POST">
                    <textarea class="comment-input" name="comment" rows="4" placeholder="Enter your comment" required></textarea>
                    <button type="submit" class="submit-btn">Submit</button>
                </form>
            </div>
        <% }); %>
    <% } else { %>
        <p>No data available.</p>
    <% } %>
</body>
</html>


<!-- this is part one -->

<!-- part two -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mixed Media Page</title>
    <style>
        /* Styles for cards, audio, video, etc. */
    </style>
</head>
<body>
    <% if (mixedData.length > 0) { %>
        <% mixedData.forEach(item => { %>
            <% if (item.type === 'video') { %>
                <!-- Video Card -->
            <% } else { %>
                <!-- Image Card -->
                <div class="card">
                    <img class="card-image" src="<%= item.url %>" alt="Card Image">
                    <!-- Other card content -->
                </div>
            <% } else if (item.type === 'audio') { %>
                <!-- Audio Card -->
                <div class="card">
                    <audio controls class="audio-player">
                        <source src="<%= item.url %>" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                    <!-- Other card content -->
                </div>
            <% } %>
        <% }); %>
    <% } else { %>
        <p>No mixed data available.</p>
    <% } %>
</body>
</html>

<!-- the vidoe css -->
```
```css
.card {
    width: 300px; /* Adjust the width as needed */
    margin: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.video-player {
    width: 100%;
    height: auto;
}

.card-content {
    padding: 20px;
}

/* Additional styles for card content if needed */

```
```js
const videoData = [
    { type: 'video', url: '/videos/video1.mp4' },
    { type: 'video', url: '/videos/video2.mp4' },
    // Add more video data objects as needed
];

const audioData = [
    { type: 'audio', url: '/audio/audio1.mp3' },
    { type: 'audio', url: '/audio/audio2.mp3' },
    // Add more audio data objects as needed
];

// Merge the two arrays
const mixedData = [...videoData, ...audioData];

// Shuffle the mixed data randomly
shuffleArray(mixedData);

// Function to shuffle array elements randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Render the EJS template with mixed data
res.render('mixedMediaPage', { mixedData: mixedData });
```


```html
<!-- this a form -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Signup</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 50%;
            margin: 50px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }
        input[type="text"],
        input[type="email"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Admin Signup</h2>
        <form action="/admin/signup" method="POST">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required>
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required>
            </div>
            <div class="form-group">
                <label for="residence">Residence</label>
                <input type="text" id="residence" name="residence">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>
</body>
</html>




<!-- this index page -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ABATO TUYIGE</title>
    <link rel="stylesheet" href="/style.css">
    <script src="https://kit.fontawesome.com/1a015cf62c.js" crossorigin="anonymous"></script>
</head>
<body>
<header>
    <nav class="navbar">
        <div class="logo">
            <!-- Your logo goes here -->
        </div>

        <div class="nav-right">
            <h6 class="animate-charcter">ABATO TUYIGE</h6>
            <div class="drop-down">
                <i class="fas fa-ellipsis-v fa-lg"></i>
                <div class="menu hidden">
                    <ul>
                        <li>
                            <a href="#"><i class="fas fa-font fa-lg"></i> English</a>
                        </li>
                        <li>
                            <a href="#"><i class="far fa-question-circle fa-lg"></i> Feedback and help</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</header>

<main>
    <div class="left">
        <div class="btns">
            <a href="/index"><i class="fas fa-home"></i> <span>VIDEOS</span></a>
            <a href="/learn"><i class="fas fa-user-friends"></i> <span>Learn</span></a>
            <a href="/login"><i class="fas fa-user-friends"></i> <span>Login</span></a>
            <a href="/signup"><i class="fas fa-user-friends"></i> <span>signup</span></a>
        </div>

        <div class="accounts">
            <p>Suggested topics</p>
            <div class="user">
                <img src="assets/Frankenstein.png" alt="avatar">
                <h6 class="username">Pictures</h6>
            </div>
            <div class="user">
                <img src="assets/Pirate.png" alt="avatar">
                <h6 class="username">Games</h6>
            </div>
            <div class="user">
                <img src="assets/Gypsy.png" alt="avatar">
                <h6 class="username">Songs</h6>
            </div>
        </div>

        <div class="tags">
            <p>Discover</p>
            <div>
                <a href="#"># childrensbook</a>
                <a href="#"># summeressentials</a>
                <a href="#"># child'smusic</a>
                <!-- Add more tags as needed -->
            </div>
        </div>

        <div class="links">
            <div class="link">
                <a href="#">About</a>
                <a href="#">Newsroom</a>
                <a href="#">Contact</a>
                <!-- Add more links as needed -->
            </div>
            <div class="copyright">
                <h6>&copy; 2023 Abato tuyige</h6>
            </div>
        </div>
    </div>

    <div class="right">
        <div class="post-content">
            <video autoplay muted controls loop disablepictureinpicture controlslist="nodownload noplaybackrate">
                <source src="assets/vid6.mp4" type="video/mp4">
            </video>
            <div class="video-icons">
                <a href="#"><i class="fas fa-heart fa-lg"></i><span>1.6K</span></a>
                <a href="#"><i class="fas fa-comment-dots fa-lg"></i><span>423</span></a>
            </div>
        </div>
        <form id="form" action="/comments" method="post">
            <textarea id="textarea" type="text" placeholder="Enter comment" name="comment"></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
</main>

<script src="/script.js"></script>
</body>
</html>

```
```css
/* Add your custom styles here */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
}

header {
    background-color: #222;
    color: #fff;
    padding: 10px 20px;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-right {
    display: flex;
    align-items: center;
}

.drop-down {
    position: relative;
}

.drop-down:hover .menu {
    display: block;
}

.menu {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #333;
    padding: 10px;
}

.menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.menu ul li {
    margin-bottom: 10px;
}

.btns a {
    display: block;
    color: #333;
    text-decoration: none;
    padding: 10px 20px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.btns a:hover {
    background-color: #ddd;
}

.accounts {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
}

.accounts p {
    font-weight: bold;
}

.user {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.user img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}

.tags {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
}

.tags p {
    font-weight: bold;
}

.tags a {
    color: #333;
    text-decoration: none;
    padding: 5px 10px;
    margin-right: 10px;
    background-color: #ddd;
    border-radius: 5px;
}

.links {
    background-color: #fff;
    padding: 20px;
}

.link a {
    color: #333;
    text-decoration: none;
    padding: 5px 10px;
    margin-right: 10px;
}

.link a:hover {
    text-decoration: underline;
}

#form {
    background-color: #fff;
    padding: 20px;
}

textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}
```