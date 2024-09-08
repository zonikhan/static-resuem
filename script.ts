// listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();


    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const eduationElement = document.getElementById('eduation') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;


    if (nameElement && emailElement && phoneElement && eduationElement && skillsElement) {

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const eduation = eduationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

    
    //create rusume Output  
    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>phone Number:</strong> ${phone} </p>

    <h3>Eduaction</h3>
    <p>${eduation}</p>

     <h3>Experience</h3>
      <p>${experience}</p>

     <h3>Skills</h3>
     <p>${skills}</p>
       `;

       const resumeOutputElement = document.getElementById('resumeOutput')
       if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    
    } else {
        console.error('the resume output elements are missing')   
    }
 } else {
    console.error('one or more output elements are missing')
    

 }
    
 })