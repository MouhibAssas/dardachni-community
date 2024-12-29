function setActive(link) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((item) => item.classList.remove('active'));
    
    link.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentUrl = window.location.pathname;

    navLinks.forEach((link) => {
        const href = link.getAttribute('href');

        if (href === "#" && currentUrl === "/") {
            link.classList.add('active');
        } else if (href !== "#" && currentUrl.endsWith(href)) {
            link.classList.add('active');
        }
    });
});


fetch('/html/header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
            })
            .catch(error => console.error('Error loading header:', error));
fetch('/html/footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;
            })
            .catch(error => console.error('Error loading header:', error));
let x = 0;
function justdoit(){
    
    if (x%2==0){
    const heading = document.createElement("h2");
    heading.id="added1";
    const texteInside = document.createTextNode("Try to talk");
    heading.appendChild(texteInside);
    document.body.appendChild(heading);
}
else{
    const heading = document.getElementById("added1");
    document.body.removeChild(heading);
}
x++;
}

// fonction add texte
// let y= 0;
// function justdoit1(){
//     const underheader = document.getElementById("under-header");
//     if (y%2==0){
//     const heading = document.createElement("h2");
//     heading.id="added1";
//     const texteInside = document.createTextNode("test test 1 2 1 2 ");
//     heading.appendChild(texteInside);
//     underheader.appendChild(heading);
// }
// else{
//     const heading = document.getElementById("added1");
//     underheader.removeChild(heading);
// }
// y++;
// }

function truncateDescription() {
    const descriptionElement = document.getElementById("post-description");
    const fullText = descriptionElement.textContent.trim();
    const words = fullText.split(/\s+/);

    if (words.length > 30) {
        const truncatedText = words.slice(0, 30).join(" ");
        const readMoreLink = document.createElement("a");
        readMoreLink.textContent = " Read More";
        readMoreLink.href = "#";
        readMoreLink.style.color = "var(--medium-gray)";
        readMoreLink.style.cursor = "pointer";

        descriptionElement.textContent = truncatedText + "...";
        descriptionElement.appendChild(readMoreLink);

        readMoreLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior
            if (descriptionElement.textContent.includes("...")) {
                descriptionElement.textContent = fullText; // Show full text
            } else {
                descriptionElement.textContent = truncatedText + "..."; 
                descriptionElement.appendChild(readMoreLink); 
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", truncateDescription);


document.addEventListener("DOMContentLoaded", function () {
    let voteCount = 0;

    const voteDisplay = document.getElementById("vote-count");
    const upvoteButton = document.getElementById("upvote");
    const downvoteButton = document.getElementById("downvote");

    upvoteButton.addEventListener("click", function () {
        voteCount++;
        updateVoteDisplay();
    });

    downvoteButton.addEventListener("click", function () {
        voteCount--;
        updateVoteDisplay();
    });

    function updateVoteDisplay() {
        voteDisplay.textContent = voteCount;
        voteDisplay.style.color = voteCount > 0 ? "var(--dark-gray)" : voteCount < 0 ? "#dc3545" : "var(--dark-gray)";
    }
});

// save and unsave btn
function toggleSave() {
    const icon = document.querySelector("#save-btn i"); 
    if (icon.classList.contains("fa-regular")) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
    } else {
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
    }
  }

// send comment 
function sendComment() {
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value;
    
    if (commentText.trim() !== "") {
      console.log("Comment sent: " + commentText);
      commentInput.value = ""; 
    } else {
      console.log("Please enter a comment.");
    }
  }

//   function autoResize(textarea) {
//     textarea.style.height = 'auto'; // Reset the height to auto to shrink it
//     textarea.style.height = (textarea.scrollHeight) + 'px'; // Set the height to the scroll height
// }

function autoResize(textarea) {
    // Reset the height to auto to shrink it
    textarea.style.height = 'auto';
    
    // Set the height to the scroll height, but limit it to 400px
    if (textarea.scrollHeight > 400) {
        textarea.style.height = '400px'; 
        textarea.style.overflowY = 'auto'; 
    } else {
        textarea.style.height = (textarea.scrollHeight) + 'px'; 
        textarea.style.overflowY = 'hidden'; 
    }
}
fetch('/html/notificationbar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('notificationbar').innerHTML = data;
            })
            .catch(error => console.error('Error loading header:', error));


function togglePasswordVisibility(icon) {
    var passwordInput = document.getElementById("password-input"); 
    

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';  // Show 
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        passwordInput.type = 'password';   // Hide it
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}
function limitCharacters(textarea, maxChars) {
    if (textarea.value.length > maxChars) {
        textarea.value = textarea.value.slice(0, maxChars); 
    }
}

function switchPostOrTopic(button){
    const topic = document.getElementById("create-topic-btn");
    const post  = document.getElementById("create-post-btn");
    const container_t = document.getElementById("topic-container");
    const container_p = document.getElementById("post-container");
    if(button==topic){
        post.classList.remove("active");
        container_p.classList.add("d-none")
        topic.classList.add("active");
        container_t.classList.remove("d-none");
    }
    else{
        topic.classList.remove("active");
        container_t.classList.add("d-none");
        post.classList.add("active");
        container_p.classList.remove("d-none");
    }

}

function toggleSections(buttonId, sectionId) {
    const buttons = document.querySelectorAll('.navbar-customized .btn');
    const sections = ['topics-profile', 'posts-profile', 'savings-profile'];

    const clickedButton = document.getElementById(buttonId);
    const clickedSection = document.getElementById(sectionId);

    const isActive = clickedButton.classList.contains('active');

    buttons.forEach(button => button.classList.remove('active'));
    sections.forEach(section => document.getElementById(section).classList.add('d-none'));

    if (!isActive) {
        clickedButton.classList.add('active');
        clickedSection.classList.remove('d-none');
    }
}

window.onload = function () {
    document.querySelector('.navbar-customized .btn:nth-child(1)').onclick = function () {
        toggleSections('topics-btn', 'topics-profile');
    };

    document.querySelector('.navbar-customized .btn:nth-child(2)').onclick = function () {
        toggleSections('posts-btn', 'posts-profile');
    };

    document.querySelector('.navbar-customized .btn:nth-child(3)').onclick = function () {
        toggleSections('savings-btn', 'savings-profile');
    };
};

// animation ll under header

document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("under-header");
    const title = header.querySelector(".under-header-title");
    const description = header.querySelector(".under-header-description");
    const button = header.querySelector("#btn-under-header");


    title.classList.add("animate__zoomInDown");
    description.classList.add("animate__flip");
    button.classList.add("animate__jackInTheBox");

    setTimeout(() => {
        title.style.visibility = "visible";
    }, 500);
    setTimeout(() => {
        description.style.visibility = "visible";
    }, 1000);
    setTimeout(() => {
        button.style.visibility = "visible";
    }, 1500);
});
