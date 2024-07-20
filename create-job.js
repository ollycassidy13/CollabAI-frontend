document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('job-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        // Save the job data to local storage
        saveJob({ title, description });

        window.location.href = "submit.html";
    });
});

function saveJob(job) {
    const jobs = getJobs();
    jobs.push(job);
    localStorage.setItem('jobs', JSON.stringify(jobs));
}

function getJobs() {
    return JSON.parse(localStorage.getItem('jobs')) || [];
}
