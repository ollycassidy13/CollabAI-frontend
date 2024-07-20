let progress = 0;

function updateProgressBar() {
    progress += 1;
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = progress + '%';
    progressBar.textContent = progress + '%';

    if (progress < 100) {
        setTimeout(updateProgressBar, 10000); 
    }
}

function returnHome() {
    window.location.href = 'home.html';
}

// Start updating the progress bar
setTimeout(updateProgressBar, 10000); 
