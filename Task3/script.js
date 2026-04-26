// 🌙 Toggle Mode
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  toggleBtn.textContent = document.body.classList.contains("light")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// 🔗 GitHub API + REPOS
async function getGitHub() {
  const username = document.getElementById("username").value;

  if (!username) {
    alert("Enter username");
    return;
  }

  document.getElementById("githubResult").innerHTML = "Loading...";
  document.getElementById("repoList").innerHTML = "";

  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();

  document.getElementById("githubResult").innerHTML = `
    <img src="${data.avatar_url}" width="100">
    <h3>${data.name || data.login}</h3>
    <p>Followers: ${data.followers}</p>
    <p>Repos: ${data.public_repos}</p>
    <a href="${data.html_url}" target="_blank">🔗 View Profile</a>
  `;

  // 📦 Repo List
  const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);
  const repos = await repoRes.json();

  let repoHTML = "<h4>Repositories:</h4>";

  repos.slice(0, 5).forEach(repo => {
    repoHTML += `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
  });

  document.getElementById("repoList").innerHTML = repoHTML;
}

// 🌦 Weather API
async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "55315156bed3fdf3edf484024249130d";

  if (!city) {
    alert("Enter city");
    return;
  }

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await res.json();

  document.getElementById("weatherResult").innerHTML = `
    <h3>${data.name}</h3>
    🌡 Temp: ${data.main.temp}°C <br>
    💧 Humidity: ${data.main.humidity}% <br>
    ☁ ${data.weather[0].description}
  `;
}
