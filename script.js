// basic info form to skill1 form
document.getElementById('next-skills1').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Hide the basic info form
    document.getElementById('basic-info-form').style.display = 'none';
    // Display the skills form
    document.getElementById('skills-form').style.display = 'block';
});

// document.getElementById('submit-skills').addEventListener('click', function (event) {
//     event.preventDefault(); // Prevent form submission

//     // Redirect to a new page
//     window.location.href = 'new-page.html'; // Replace 'new-page.html' with the URL of the new page
// });

// skill1 form to skill2 form
document.getElementById('next-skills2').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Hide the basic info form
    document.getElementById('skills-form').style.display = 'none';
    document.getElementById('basic-info-form').style.display = 'none';
    // Display the skills form
    document.getElementById('skills2-form').style.display = 'block';
});

//skill2 form to education form
document.getElementById('next-edu').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    document.getElementById('skills-form').style.display = 'none';
    document.getElementById('basic-info-form').style.display = 'none';
    document.getElementById('skills2-form').style.display = 'none';
    document.getElementById('education-form').style.display = 'block';
});

//education form to work form
document.getElementById('next-work').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    document.getElementById('skills-form').style.display = 'none';
    document.getElementById('basic-info-form').style.display = 'none';
    document.getElementById('skills2-form').style.display = 'none';
    document.getElementById('education-form').style.display = 'none';
    document.getElementById('work-form').style.display = 'block';
});

//work form to family form
document.getElementById('next-family').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    document.getElementById('skills-form').style.display = 'none';
    document.getElementById('basic-info-form').style.display = 'none';
    document.getElementById('skills2-form').style.display = 'none';
    document.getElementById('education-form').style.display = 'none';
    document.getElementById('work-form').style.display = 'none';
    document.getElementById('family-form').style.display = 'block';
});


function addEducationField() {
    var educationFields = document.getElementById('education-section');
    var newEducationField = document.createElement('div');
    newEducationField.classList.add('education-list');
    newEducationField.innerHTML = `
    <div class="section-border">
                    <div class="form-group">
                        <div class="education-group">
                            <div class="education-field">
                                <label for="started">入学年月/Started:</label>
                                <input type="text" id="started" name="started" placeholder="Started" required>
                            </div>
                            <div class="education-field">
                                <label for="finished">卒業/Finished:</label>
                                <input type="text" id="finished" name="finished" placeholder="Finished" required>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="school-name">学校名/School Name:</label>
                        <input type="text" id="school-name" name="school-name" placeholder="School Name" required>
                    </div>
                    <div class="form-group">
                        <label for="major">専門/Major:</label>
                        <input type="text" id="major" name="major" placeholder="Major" required>
                    </div>
                    <div class="form-group">
                        <label for="degree">資格/Degree:</label>
                        <input type="text" id="degree" name="degree" placeholder="Degree" required>
                    </div>
                </div>
    `;
    educationFields.appendChild(newEducationField);
}

function addWorkField() {
    var workFields = document.getElementById('work-section');
    var newWorkField = document.createElement('div');
    newWorkField.classList.add('work-list');
    newWorkField.innerHTML = `
    <div class="section-border">
                    <div class="form-group">
                        <div class="work-group">
                            <div class="work-field">
                                <label for="started">開始年月/Started:</label>
                                <input type="text" id="started" name="started" placeholder="Started" required>
                            </div>
                            <div class="work-field">
                                <label for="finished">終了/Finished:</label>
                                <input type="text" id="finished" name="finished" placeholder="Finished" required>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="company-name">社名/CompanyName:</label>
                        <input type="text" id="company-name" name="company-name" placeholder="CompanyName" required>
                    </div>
                    <div class="form-group">
                        <label for="job-type">仕事内容/Type of Job:</label>
                        <input type="text" id="job-type" name="job-type" placeholder="Type of Job" required>
                    </div>
                    <div class="form-group">
                        <label for="city">市名/City:</label>
                        <input type="text" id="city" name="city" placeholder="City" required>
                    </div>
                </div>
    `;
    workFields.appendChild(newWorkField);
}


function addFamilyField() {
    var familyFields = document.getElementById('family-section');
    var newFamilyField = document.createElement('div');
    newFamilyField.classList.add('family-list');
    newFamilyField.innerHTML = `
    <div class="section-border">
    <div class="form-group">
        <label for="name">氏名/Name:</label>
        <input type="text" id="name" name="name" placeholder="Name" required>
    </div>
    <div class="form-group">
        <label for="relation">続柄/Relation:</label>
        <div class="select-group">
            <select id="relation" name="relation" required>
                <option value="" disabled selected>Select Relation</option>
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="parent">Parent</option>
                <!-- Add more options as needed -->
            </select>
        </div>
    </div>
    <div class="form-group">
        <label for="age">年齢/Age:</label>
        <input type="text" id="age" name="age" placeholder="Age" required>
    </div>
    <div class="form-group">
        <label for="work">職業/Work:</label>
        <input type="text" id="work" name="work" placeholder="Work" required>
    </div>
    <div class="form-group">
        <label for="address">現住所/Address:</label>
        <textarea id="address" name="address" placeholder="Address" rows="4" required></textarea>
    </div>
    <div class="form-group">
        <label for="tel-no">電話番号/Tel No:</label>
        <input type="tel" id="tel-no" name="tel-no" placeholder="Tel No" required>
    </div>
</div>
    `;
    familyFields.appendChild(newFamilyField);
}








//back-link(move to top)
document.getElementById('next-basic-info').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Hide the basic info form
    document.getElementById('basic-info-form').classList.add('hidden');
    // Display the skills form
    document.getElementById('skills-form').classList.remove('hidden');
    // Show the back link
    document.getElementById('back-link').classList.remove('hidden');
});

document.getElementById('next-skills').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Hide the skills form
    document.getElementById('skills-form').classList.add('hidden');
    // Display the new section
    document.getElementById('new-section').classList.remove('hidden');
    // Show the back link
    document.getElementById('back-link').classList.remove('hidden');
});

document.getElementById('back').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    history.back(); // Go back to the previous page
});

//back-link()
document.getElementById('next-basic-info').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Hide the basic info form
    document.getElementById('basic-info-form').classList.add('hidden');
    // Display the skills form
    document.getElementById('skills-form').classList.remove('hidden');
    // Show the back link
    document.getElementById('back-link').classList.remove('hidden');
});

document.getElementById('next-skills').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Hide the skills form
    document.getElementById('skills-form').classList.add('hidden');
    // Display the new section
    document.getElementById('new-section').classList.remove('hidden');
    // Show the back link
    document.getElementById('back-link').classList.remove('hidden');
});

document.getElementById('back').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Hide the current section
    var currentSection = document.querySelector('.container > div:not(.hidden)');
    currentSection.classList.add('hidden');

    // Show the previous section
    var previousSection = currentSection.previousElementSibling;
    previousSection.classList.remove('hidden');

    // If we're back to the first section, hide the back link
    if (previousSection.id === 'basic-info-form') {
        document.getElementById('back-link').classList.add('hidden');
    }
});