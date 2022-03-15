// Get Slider Items | Array.form
let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
// Get Num Of Slide
let slidesCount = sliderImages.length;
// Set Current Slide 
let CurrentSlide = 1;
// Slide Number String Element 
let slideNumEle = document.getElementById('slide-number');
// Buttons prev and next
const nextButton = document.getElementById('next')
const prevButton = document.getElementById('prev')

// Handle Click on prev and next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main Ul Element 
const paginationEle = document.createElement('ul');
// Set Id On Created Ul Element
paginationEle.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides 
for (let i = 1; i <= slidesCount; i++){
    // Creat The LI
    const paginationItem = document.createElement('li');
    // Set Attr 
    paginationItem.setAttribute('data-index', i);
    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));
    // Append Items to The Main ul list 
    paginationEle.appendChild(paginationItem);
}

// Add the Created UL Element to the Page
document.getElementById('indicators').appendChild(paginationEle);

// Get The New Created Ul
let paginationUl = document.getElementById('pagination-ul');

// Get Padinations Items | Array.form
let padinationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (let i = 0; i < padinationsBullets.length; i++) {
    padinationsBullets[i].addEventListener('click', function () {
        CurrentSlide = parseInt(this.getAttribute('data-index'));
        // parseInt for change it to a number
        theChecker()
    }) 
}

// Trigger The Checker Func
theChecker();

function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        return false;
    } else {
        CurrentSlide++;
        theChecker();
    }
}
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        return false;
    } else {
        CurrentSlide--;
        theChecker();
    }
}
function theChecker() {
    slideNumEle.textContent = 'Slide #' + `${CurrentSlide}` + ' of ' + `${slidesCount}`;
    // Remove active classes
    removeAllActive();
    // Set Active Class On Current Slide
    sliderImages[CurrentSlide - 1].classList.add('active');
    // Set Active Class On Current Pagination Item
    paginationUl.children[CurrentSlide - 1].classList.add('active');
    // Check If current slide is the first for removing the class
    if (CurrentSlide == 1) {
        // Add Disabled Class on Prev Btn
        prevButton.classList.add('disabled');
    } else {
        // Remove Disabled Class on Prev Btn
        prevButton.classList.remove('disabled');
    }

    // Check If current slide is the last for adding the class
    if (CurrentSlide == slidesCount) {
        // Add Disabled Class on next Btn
        nextButton.classList.add('disabled');
    } else {
        // Remove Disabled Class on next Btn
        nextButton.classList.remove('disabled');
    }
}
// Remove All Active Class 
function removeAllActive() {
    sliderImages.forEach(ele => {
        ele.classList.remove('active');
    });
    // Loop through pagination Bullets
    padinationsBullets.forEach(bullet => {
        bullet.classList.remove('active');
    });
}