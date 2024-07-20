document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('job-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        console.log('Form submitted:', { title, description });

        // Save the job data to local storage
        saveJob({ title, description });

        console.log('Job saved. Redirecting to home.html');
        window.location.href = "home.html";
    });
});

function saveJob(job) {
    const jobs = getJobs();
    console.log('Jobs before saving:', jobs);
    jobs.push(job);
    localStorage.setItem('jobs', JSON.stringify(jobs));
    console.log('Saved job to local storage:', job);
}

function getJobs() {
    const rawJobs = localStorage.getItem('jobs');
    console.log('Raw jobs from local storage:', rawJobs);
    const jobs = JSON.parse(rawJobs) || [];
    console.log('Parsed jobs from local storage:', jobs);
    return jobs;
}
