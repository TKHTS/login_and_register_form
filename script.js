
// These are for login form modal
let loginButton = document.getElementById('loginButton');
let modal_overlay_login = document.getElementById('modal_overlay_login');
let modal_overlay_login_content = document.getElementById('modal_overlay_login_content');
let modal_login_close = document.getElementById('modal_login_close');

// These are for register form modal 
let registerButton = document.getElementById('registerButton');
let modal_overlay_register = document.getElementById('modal_overlay_register');
let modal_overlay_register_content = document.getElementById('modal_overlay_register_content');
let modal_register_close = document.getElementById('modal_register_close');


//When user click login button, modal is opened.
loginButton.addEventListener('click', () => {
    modal_overlay_login.style.display = 'block';
    modal_overlay_login_content.style.display = 'block';
})

//When user click close button, modal for login form is closed.
modal_login_close.addEventListener('click', () => {
    modal_overlay_login.style.display = 'none';
    modal_overlay_login_content.style.display = 'none';
})

//When user click register button, modal is opened.
registerButton.addEventListener('click', () => {
    modal_overlay_register.style.display = 'block';
    modal_overlay_register_content.style.display = 'block';
})

//When user click close button, modal for register form is closed.
modal_register_close.addEventListener('click', () => {
    modal_overlay_register.style.display = 'none';
    modal_overlay_register_content.style.display = 'none';
})


//These are for select course in register form
let select_course = document.getElementById('selectCourse');
let register_form = document.getElementById('registerForm');
let select_class_radio = register_form.classes;

let career_classes = new Map([['WD', 'Web Development'], ['UI', 'User Interface'], ['UX', 'User experience'], ['HM', 'Hospitality Management'], ['DM', 'Digital Marketing']]);
let english_classes = new Map([['ESL', 'ESL'], ['Tofel', 'Tofel'], ['Ielts', 'Ielts']]);

// It create the options for courses
let create_classes_filler = (object_courses) => {
    select_course.innerHTML = '';
    let listElement = document.createElement('select');
    listElement.setAttribute('name', 'select_course');
    listElement.setAttribute('id', 'select_course');

    for (let key of object_courses.keys()) {
        let listOption = document.createElement('option');
        listOption.setAttribute('value', key);
        listOption.innerHTML = object_courses.get(key);
        listElement.appendChild(listOption);
        select_course.appendChild(listElement)
    }
}

create_classes_filler(career_classes);
let selectCourse = document.getElementById('selectCourse');
let selectCourseForm = document.getElementById("select_course");


// It creates the elements inside "<div id="selectCourse"></div>"
for (radio of select_class_radio) {
    radio.addEventListener('click', (event) => {
        switch (event.target.value) {
            case 'english':
                create_classes_filler(english_classes);
                break;
            case 'career':
                create_classes_filler(career_classes);
                break;
        }
    })
}


// <== For Login form start==>
let login_form = document.getElementById('loginForm');

//When there is a blank form, this function changes the background color.
let checkInput = (inputBoxes) => {
    let check = true;
    for (let i = 0; i < inputBoxes.length; i++) {
        if (inputBoxes[i].value == '') {
            inputBoxes[i].style.backgroundColor = "yellow";
            check = false;
        } else {
            inputBoxes[i].style.backgroundColor = "white";
        }
    }
    return check;
}


// When the radio button is not checked, this function changes the background color.
let choose_classes = document.getElementById('choose_classes');
let checkRadioInput = (inputBoxes) => {
    let check = false;
    for (let i = 0; i < inputBoxes.length; i++) {
        if (inputBoxes[i].checked) {
            check = true;
        }
    }
    return check;
}


//If there is a blank form in login, it will prevent submitting.
login_form.addEventListener('submit', (event) => {
    if (!checkInput(login_form)) {
        event.preventDefault();
        alert("Please fill in all the form");
    }
})

//It resets the color.
let colorChange = (object) => {
    object.style.backgroundColor = "white";
}


//If the form was focused, this function will reset the color.
for (let i = 0; i < login_form.length; i++) {
    login_form[i].addEventListener('focus', () => {
        colorChange(login_form[i]);
    })
}

//user name accepts only alphabet.
login_form.addEventListener('keypress', (event) => {
    if (!((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122))) {
        event.preventDefault();
    }
})
// <== Login form end==>


// <== Register form start==>

let username = document.getElementById('username');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let choose_class = document.getElementsByName('classes');
let password = document.getElementById('password');

// we don't have paramater for course number. we made it randomly
// english: 1 ~ 4
// career: 1 ~ 6
let active_course_number_english = random = Math.floor(Math.random() * 4) + 1;
let active_course_number_career = random = Math.floor(Math.random() * 6) + 1;

let validate_input = (event) => {
    if (!((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122))) {
        event.preventDefault();
    }
}

username.addEventListener('keypress', (event) => {
    validate_input(event);
});
firstname.addEventListener('keypress', (event) => {
    validate_input(event);
});
lastname.addEventListener('keypress', (event) => {
    validate_input(event);
});


// course_number (key) => [subject, gpa] (value)
let WD_course = new Map([[1, { subject: "html", gpa: 0 }], [2, { subject: "CSS", gpa: 0 }], [3, { subject: "JS", gpa: 4 }], [4, { subject: "JS2", gpa: 0 }], [5, { subject: "PHP", gpa: 0 }], [6, { subject: "CMS", gpa: 0 }]]);
let UX_course = new Map([[1, { subject: "Fundamentals of UX", gpa: 0 }], [2, { subject: "Fundamentals for UX Design", gpa: 0 }], [3, { subject: "Visual Design for UX", gpa: 0 }], [4, { subject: "Design Tools for UX", gpa: 0 }], [5, { subject: "Introduction to Quality Assurance for UX", gpa: 0 }], [6, { subject: "Preparing UX Professionals for the Workplace", gpa: 0 }]]);
let UI_course = new Map([[1, { subject: "Fundamentals of Web Development", gpa: 0 }], [2, { subject: "Introduction to UI Design", gpa: 0 }], [3, { subject: "Visual Design for UI", gpa: 0 }], [4, { subject: "Design Tools for UI", gpa: 0 }], [5, { subject: "Digital Marketing for UI", gpa: 0 }], [6, { subject: "Career Preparation for UI", gpa: 0 }]]);
let DM_course = new Map([[1, { subject: "Introduction to Marketing", gpa: 0 }], [2, { subject: "Digital Marketing Fundamentals", gpa: 0 }], [3, { subject: "Marketing Channels—Paid Channels", gpa: 0 }], [4, { subject: "Strategic Web Design", gpa: 0 }], [5, { subject: "Marketing Technology & Automation", gpa: 0 }], [6, { subject: "Marketing Channels—Content is King", gpa: 0 }]]);
let ESL_course = new Map([[1, { subject: "Essential English Class", gpa: 0 }], [2, { subject: "Elective Class level 1", gpa: 0 }], [3, { subject: "Elective Class level 2", gpa: 0 }], [4, { subject: "English for Real Life class", gpa: 0 }]]);
let IELTS_course = new Map([[1, { subject: "Listening for IELTS", gpa: 0 }], [2, { subject: "Writing for IELTS", gpa: 0 }], [3, { subject: "Reading for IELTS", gpa: 0 }], [4, { subject: "Speaking for IELTS", gpa: 0 }]]);
let TOEFL_course = new Map([[1, { subject: "Listening for TOEFL", gpa: 0 }], [2, { subject: "Writing for TOEFL", gpa: 0 }], [3, { subject: "Reading for TOEFL", gpa: 0 }], [4, { subject: "Speaking for TOEFL", gpa: 0 }]]);


class Student {
    constructor(username, firstName, lastName, tel, email, enrolledClass, enrolledCourse, password) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.tel = tel;
        this.email = email;
        this.enrolledClass = enrolledClass;
        this.enrolledCourse = enrolledCourse;
        this.password = password;
    }
}

class ESL_Student extends Student {
    constructor(username, firstName, lastName, tel, email, enrolledClass, enrolledCourse, password, current_enrolled_course, program_courses) {
        super(username, firstName, lastName, tel, email, enrolledClass, enrolledCourse, password);
        this.current_enrolled_course = current_enrolled_course;
        this.program_courses = program_courses;
    }
    set Current_enrolled_course(newCurrentEnrolledCourse) {
        this.current_enrolled_course = newCurrentEnrolledCourse;
    }
    get Current_enrolled_course() {
        return this.current_enrolled_course;
    }
    // This method is for taking the GPA of the active course
    GPA_active_course() {
        return enrolledCourse.get(this.current_enrolled_course).gpa;
    }
    // This method is for updating the GPA
    GPA_update(course_number, gpa) {
        this.program_courses.get(course_number).gpa = gpa;
    }
    // It shows the Average overall GPA
    average_overall_GPA() {
        let total_gpa = 0;
        for (let i = 1; i < this.Current_enrolled_course + 1; i++) {
            total_gpa += this.program_courses.get(i).gpa;
        }

        let average_overall_gpa = total_gpa / this.Current_enrolled_course;

        return average_overall_gpa;
    }

}

class Career_Student extends Student {
    constructor(username, firstName, lastName, tel, email, enrolledClass, enrolledCourse, password, current_enrolled_course, program_courses) {
        super(username, firstName, lastName, tel, email, enrolledClass, enrolledCourse, password);
        this.current_enrolled_course = current_enrolled_course;
        this.program_courses = program_courses;
    }

    //To set the active course.
    set Current_enrolled_course(newCurrentEnrolledCourse) {
        this.current_enrolled_course = newCurrentEnrolledCourse;
    }
    get Current_enrolled_course() {
        return this.current_enrolled_course;
    }
    // This method is for taking the GPA of the active course
    GPA_active_course() {
        return enrolledCourse.get(this.current_enrolled_course).gpa;
    }
    // This method is for updating the GPA
    GPA_update(course_number, gpa) {
        this.program_courses.get(course_number).gpa = gpa;
    }
    // It shows the Average overall GPA
    average_overall_GPA() {
        let total_gpa = 0;
        for (let i = 1; i < this.Current_enrolled_course + 1; i++) {
            total_gpa += this.program_courses.get(i).gpa;
        }

        let average_overall_gpa = total_gpa / this.Current_enrolled_course;

        return Math.round(average_overall_gpa * 10) / 10;
    }

}

let choose_classes_value = '';
for (let i = 0; i < choose_class.length; i++) {
    if (choose_class[i].checked) {
        choose_classes_value = choose_class[i].value;
    }
}

//It rerurns map object according to select form.
let program_choose = (valueFromSelectTag) => {
    switch (valueFromSelectTag) {
        case 'WD':
            return WD_course;
            break;
        case 'UX':
            return UX_course;
            break;
        case 'UI':
            return UI_course;
            break;
        case 'DM':
            return UI_course;
            break;
        case 'ESL':
            return ESL_course;
            break;
        case 'Tofel':
            return TOEFL_course;
            break;
        case 'Ielts':
            return IELTS_course;
            break;
    }
}

//If the form was focused, this function will reset the color.
for (let i = 0; i < register_form.length; i++) {
    register_form[i].addEventListener('focus', () => {
        colorChange(register_form[i]);
    })
}
//If user select radio button, this function will reset the background color.
choose_classes.addEventListener('click', () => {
    colorChange(choose_classes);
})


//If there is a blank form in register, it will prevent submitting.
register_form.addEventListener('submit', (event) => {

    // This is for check box
    if (!checkRadioInput(register_form.classes)) {
        event.preventDefault();
        choose_classes.style.backgroundColor = 'yellow';
    } else if (!checkInput(register_form)) {
        event.preventDefault();
        alert("Please fill in all the form");
    } else {
        //If user choose English, it makes instance using ESL_Student class.
        //If user choose Career, it makes instance using Career_Student class.
        let newStudent;
        switch (choose_classes_value) {
            case 'english':
                newStudent = new ESL_Student(username.value, firstname.value, lastname.value, phone.value, email.value, choose_classes_value, selectCourseForm.value, password.value, active_course_number_career, program_choose(selectCourseForm.value));
                break;
            case 'career':
                newStudent = new Career_Student(username.value, firstname.value, lastname.value, phone.value, email.value, choose_classes_value, selectCourseForm.value, password.value, active_course_number_career, program_choose(selectCourseForm.value));
                break;
        }
    }
})
//  <== Register form end==>


