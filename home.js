document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded. Displaying jobs.');
    setTimeout(displayJobs, 100); // Add a delay to check for timing issues
});

function createJob() {
    window.location.href = "create-job.html";
}

function displayJobs() {
    const jobContainer = document.querySelector('.job-container');
    const jobs = getJobs();

    console.log('Displaying jobs:', jobs);

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <div class="job-info">
                <h2>${job.title}</h2>
                <p>${job.description}</p>
            </div>
        `;
        // Insert the job card before the add-job button
        jobContainer.insertBefore(jobCard, jobContainer.querySelector('.add-job'));
    });
}

function getJobs() {
    const rawJobs = localStorage.getItem('jobs');
    console.log('Raw jobs from local storage:', rawJobs);
    const jobs = JSON.parse(rawJobs) || [];
    console.log('Parsed jobs from local storage:', jobs);
    return jobs;
}

function saveJob(job) {
    const jobs = getJobs();
    jobs.push(job);
    localStorage.setItem('jobs', JSON.stringify(jobs));
    console.log('Saved job to local storage:', job);
}
