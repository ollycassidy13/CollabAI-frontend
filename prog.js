function getJobs() {
    return JSON.parse(localStorage.getItem('jobs')) || [];
}

function saveJobs(jobs) {
    localStorage.setItem('jobs', JSON.stringify(jobs));
}

function updateJobCompletion() {
    const jobs = getJobs();
    jobs.forEach(job => {
        if (job.completion < 100) {
            job.completion += 1;
        }
    });
    saveJobs(jobs);
}

function startUpdatingJobs() {
    setInterval(updateJobCompletion, 1000); 
}

// Start the job update process
startUpdatingJobs();
