document.getElementById('job-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const completion = 0; 

    const job = { title, description, completion };
    saveJob(job);
    window.location.href = "submit.html";
});

function saveJob(job) {
    const jobs = getJobs();
    jobs.push(job);
    localStorage.setItem('jobs', JSON.stringify(jobs));
}

function getJobs() {
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    return jobs;
}
