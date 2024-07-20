//dummy page to clear local storage - only accessible through URL

document.addEventListener('DOMContentLoaded', function() {
    displayJobs();
});

function createJob() {
    window.location.href = "create_job.html";
}

function displayJobs() {
    const jobContainer = document.querySelector('.job-container');
    const jobs = getJobs();

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <div class="job-info">
                <h2>${job.title}</h2>
                <p>${job.description}</p>
            </div>
        `;
        jobContainer.insertBefore(jobCard, jobContainer.querySelector('.add-job'));
    });
}

function getJobs() {
    return JSON.parse(localStorage.getItem('jobs')) || [];
}

function saveJob(job) {
    const jobs = getJobs();
    jobs.push(job);
    localStorage.setItem('jobs', JSON.stringify(jobs));
}

function clearJobs() {
    localStorage.removeItem('jobs');
    window.location.href = "home.html";
}
