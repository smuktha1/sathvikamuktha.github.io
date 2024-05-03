const courses = document.getElementById("courses");
const addCourseBtn = document.getElementById("addCourseBtn");
const courseInput = document.getElementById("courseInput");
let count = 0;

courseInput.addEventListener("click", addCourse);

function addCourse() {
    if (!document.getElementById('deleteBtn')) {
        deleteBTN();
    }
    let addInput = document.createElement('input');
    addInput.type = 'text';
    addInput.id = 'coursesUserTaken'; 
    addInput.className = 'coursesUserTaken';
    courses.appendChild(addInput);
    let lineBreak = document.createElement('br');
    courses.appendChild(lineBreak);
    count++;
}
function displayCourses() {
    let courseList = ''; 
    for(let x = 0; x < courses.children.length; x++) {
        if(courses.children[x].value){
            courseList += `<li>${courses.children[x].value}</li>`;
        }
    }
    return courseList;
}
function deleteBTN() {
    let deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.id = 'deleteBtn';
    deleteBtn.className = 'deleteBtn';
    deleteBtn.value = 'Delete';
    addCourseBtn.appendChild(deleteBtn);
    let spacing = document.createElement('br');
    addCourseBtn.appendChild(spacing);

    deleteBtn.addEventListener("click", () => {
        if (courses.lastElementChild) {
            courses.removeChild(courses.lastElementChild);
            courses.removeChild(courses.lastElementChild);
            count--; 
            if (count === 0) {
                deleteBtn.remove();
            }
        }
    });
}

const name1 = document.getElementById("name");
const mascot = document.getElementById("mascot");
const image = document.getElementById("image");
const caption = document.getElementById("caption");
const personal = document.getElementById("personal");
const professional = document.getElementById("professional");
const academic = document.getElementById("academic");
const web_dev = document.getElementById("web-dev");
const platform = document.getElementById("platform");
const funny = document.getElementById("funny");
const anything_else = document.getElementById("else");
const intro = document.getElementById("intro");
const form = document.getElementById("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const courseList = displayCourses();

    let imageLoad = image.files[0];
    const imageURL = URL.createObjectURL(imageLoad);
    let text = "<img src=\"" + imageURL + "\" >";
    
    intro.innerHTML = '';
    intro.innerHTML = `
    <h3> ${name1.value} || ${mascot.value}</h3>
    <figure>
        ${text}
        <figcaption>${caption.value}</figcaption>
    </figure>
        <ul>
            <li><strong>Personal Background:</strong> ${personal.value}</li>
            <li><strong>Professional Background:</strong>  ${professional.value}</li>
            <li><strong>Academic Background:</strong> ${academic.value}</li>
            <li><strong>Web-development background:</strong> ${web_dev.value}</li>
            <li><strong>Primary Computer Platform:</strong>  ${platform.value}</li>
            <li><strong>Courses:</strong>
                <ul>
                    ${courseList}
                </ul>
            </li>
            <li><strong>Funny/Interesting thing to remember me by:</strong> ${funny.value}</li> 
            <li><strong>I'd also like to share:</strong> ${anything_else.value}</li>
        </ul>
       
    `;
});