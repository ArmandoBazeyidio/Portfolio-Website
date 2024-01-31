/*INDEX>HTML SLIDESHOW */

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 4000;	// Time Between Switch

        // Image List
images[0] = "images/jcolee.jpg";
images[1] = "images/soccer.jpg";
images[2] = "images/basketballl.jpeg";
images[3] = "images/movie.jpg"

function changeImg(){
    document.getElementsByClassName('slide')[0].style.opacity = 0; // Fade out

    setTimeout(function() {
        document.getElementsByClassName('slide')[0].src = images[i]; // Change image source

        // Check If Index Is Under Max
        if(i < images.length - 1){
            // Add 1 to Index
            i++; 
        } else { 
            // Reset Back To 0
            i = 0;
        }

        document.getElementsByClassName('slide')[0].style.opacity = 1; // Fade in

        // Run function every x seconds
        setTimeout(changeImg, time);
    }, 500); // Delay to allow fade out effect
}

        // Run function when page loads
        window.onload = changeImg;

/* PROJECT.HTML */
let currentProjectIndex = 0;
const projects = document.querySelectorAll('.project');

function showProject(index) {
    projects.forEach((project, i) => {
        if (i === index) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

function showNext() {
    currentProjectIndex++;
    if (currentProjectIndex >= projects.length) {
        currentProjectIndex = 0;
    }
    showProject(currentProjectIndex);
}

function showPrevious() {
    currentProjectIndex--;
    if (currentProjectIndex < 0) {
        currentProjectIndex = projects.length - 1;
    }
    showProject(currentProjectIndex);
}

showProject(currentProjectIndex);

// ...

function addProject() {
    const form = document.getElementById('addProjectForm');

    // Get values from the form
    const projectName = form.projectName.value;
    const projectImage = form.projectImage.value;
    const projectDescription = form.projectDescription.value;
    const projectTechnologies = form.projectTechnologies.value;
    const projectDate = form.projectDate.value;

    // Create a new project element
    const newProject = document.createElement('div');
    newProject.classList.add('project');

    newProject.innerHTML = `
        <h2>${projectName}</h2>
        <img class="projectimg" src="${projectImage}" alt="${projectName}">
        <p>${projectDescription}</p>
        <p>Done with: ${projectTechnologies}</p>
        <p>Date Completed: ${projectDate}</p>
    `;

    // Add the new project to the container
    document.querySelector('.container').appendChild(newProject);

    // Clear the form
    form.reset();
}

// ...


