let progress = 0;

function updateProgressBar() {
    progress += 1;
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = progress + '%';
    progressBar.textContent = progress + '%';
    
    saveProgress(progress);

    if (progress < 100) {
        setTimeout(updateProgressBar, 5000);
    }
}

function saveProgress(progress) {
    localStorage.setItem('progress', progress);
}

function returnHome() {
    window.location.href = 'home.html';
}

// Start updating the progress bar
setTimeout(updateProgressBar, 5000); 
