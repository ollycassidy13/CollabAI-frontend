// Retrieve the last saved job and update its progress
let jobs = getJobs();
let lastJobIndex = jobs.length - 1;
let progress = jobs[lastJobIndex].completion;

function updateProgressBar() {
    progress += 1;
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = progress + '%';
    progressBar.textContent = progress + '%';

    // Update job completion in local storage
    jobs[lastJobIndex].completion = progress;
    saveJobs(jobs);

    if (progress < 100) {
        setTimeout(updateProgressBar, 3000); 
    }
}

function saveJobs(jobs) {
    localStorage.setItem('jobs', JSON.stringify(jobs));
}

function getJobs() {
    return JSON.parse(localStorage.getItem('jobs')) || [];
}

function returnHome() {
    window.location.href = 'home.html';
}

// Start updating the progress bar
setTimeout(updateProgressBar, 3000); 
