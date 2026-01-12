const $ = (ID, el = document) => el.querySelector(ID);
const Q = 'developer'
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "11cdeed8ffmsh0feffb204b634bep1f89dejsndd5ce559591f",
    "x-rapidapi-host": "jsearch.p.rapidapi.com",
  },
};

const getJob = async (query) => {
  try {
    document.querySelector("#jobs").innerHTML = ` <div class="spinner"></div>`;
    const response = await fetch(
      `https://jsearch.p.rapidapi.com/search?query=${query}&page=1&num_pages=1&country=us&date_posted=all`,
      options
    );
    const data = await response.json();
    const job = data.data;

    showjob(job);
  } catch (error) {
    console.log(error.message);
  }
};

function showjob(jobs) {
  const jobDiv = document.getElementById("jobs");
  jobDiv.innerHTML = "";
  jobs.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.classList.add("job-card");
    jobCard.innerHTML = `
        <h3>${job.job_title}</h3>
        <p><b>Company:</b> ${job.employer_name}</p>
        <p><b>Location:</b> ${job.job_city}, ${job.job_country}</p>
        <p><b>Type:</b> ${job.job_employment_type}</p>
        <a href="${job.job_apply_link}" target="_blank" class="apply">Apply Now</a>
    `;

    jobDiv.appendChild(jobCard);
  });
}

$("#Search_Btn").addEventListener("click", () => {
  let value = $("#searchInput").value.trim();
  getJob(value);
//   $("#jobs").innerHTML = "";
});

getJob(Q)


