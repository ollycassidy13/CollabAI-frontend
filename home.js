document.addEventListener('DOMContentLoaded', function() {
    displayJobs();
    startDisplayJobUpdates();
});

function createJob() {
    window.location.href = "create-job.html";
}

function displayJobs() {
    const jobContainer = document.querySelector('.job-container');
    const jobs = getJobs();

    const addJobCard = document.querySelector('.add-job');
    jobContainer.innerHTML = '';
    jobContainer.appendChild(addJobCard);

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <div class="job-info">
                <h2>${job.title}</h2>
                <p>${job.description}</p>
                <p>Completion: <span class="completion">${job.completion}%</span></p>
            </div>
        `;
        jobContainer.insertBefore(jobCard, addJobCard);
    });
}

function getJobs() {
    return JSON.parse(localStorage.getItem('jobs')) || [];
}

function startDisplayJobUpdates() {
    setInterval(displayJobs, 1000);
}
