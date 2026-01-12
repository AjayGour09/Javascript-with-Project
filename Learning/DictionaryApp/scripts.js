// selectiong element funtion
const $ = (id, el = document) => el.querySelector(id);

// creating element function
const createEl = (TagName, el = document) => el.createElement(TagName);

async function fetchWord(query) {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
    );
    const Result = await response.json();
    console.log(Result);
    renderUI(Result[0]);
  } catch (err) {
    $("#word").textContent = "Not found";
    $("#phonetic").textContent = "";
    $("#audioList").innerHTML = "";
    $("#meanings").innerHTML = '<div class="muted">No definition found.</div>';
  }
}

function renderUI(data) {
  $("#word").textContent = data.word || "";
  $("#phonetic").textContent = data.phonetics.find((p) => p.text)?.text || "";

  // audio
  const audioList = $("#phonetic");

  audioList.innerHTML = "";

  data.phonetics.forEach((p) => {
    // checking audio is there or not
    if (!p.audio && !p.text) return;

    const div = createEl("div");

    // settinattribute
    div.className = "audio-item";

    // creating btn
    const btn = createEl("button");
    btn.className = "play-btn";

    // seting audio url to btn
    btn.textContent = p.audio ? "▶" : "—";

    // audio play and pause
    if (p.audio) {
      const audio = new Audio(p.audio);
      btn.onclick = () => audio.play();
    } else btn.disabled = true;

    const info = createEl("div");

    info.style.flex = 1;
    info.innerHTML = `<div style="font-weight:600">${p.text || ""}</div>
    <div class="muted">${
      p.sourceUrl ? new URL(p.sourceUrl).hostname : ""
    }</div>`;

    div.appendChild(btn);
    div.appendChild(info);
    audioList.appendChild(div);
  });
  // meanings
  const meanings = $("#meanings");
  meanings.innerHTML = "";
  data.meanings.forEach((m) => {
    const wrap = createEl("div");
    wrap.className = "meaning";
    wrap.innerHTML = `<div class="pos">${m.partOfSpeech}</div>`;
    m.definitions.forEach((d) => {
      wrap.innerHTML += `<div class="def">${d.definition}</div>${
        d.example ? `<div class="example">“${d.example}”</div>` : ""
      }`;
    });
    meanings.appendChild(wrap);
  });
  // license & source
  $("#license").textContent = data.license?.name || "—";
  $("#sourceLink").href = data.sourceUrls?.[0] || "#";
  $("#sourceLink").textContent = data.sourceUrls?.[0] ? "Open source" : "—";
}

$("#searchBtn").addEventListener("click", () => {
  const q = $("#searchInput").value.trim();
  if (q) {
    fetchWord(q);
  }
});

// default load
fetchWord("hello");
