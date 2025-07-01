const headerHTML = `
<header>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact</a></li>
            <span class="social-icons">
                <a href="https://github.com/" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                <a href="https://linkedin.com/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="https://twitter.com/" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a>
            </span>
        </ul>
    </nav>
</header>
`;

document.addEventListener("DOMContentLoaded", function() {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});