export function saveJobs(job) {
    const jobs = JSON.parse(localStorage.getItem("jobs")) || []
    
    jobs.push(job)

    localStorage.setItem("jobs", JSON.stringify(jobs))
}

export function getJobs() {
    return JSON.parse(localStorage.getItem("jobs")) || []
}