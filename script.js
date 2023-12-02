const votes = {};

function countVote() {
  const candidates = document.getElementsByName("candidate");
  let selectedCandidate;

  for (const candidate of candidates) {
    if (candidate.checked) {
      selectedCandidate = candidate.value;
      break;
    }
  }

  if (selectedCandidate) {
    votes[selectedCandidate] = (votes[selectedCandidate] || 0) + 1;
    displayResults();  // Agregamos esta línea para mostrar los resultados
  } else {
    alert("Por favor, selecciona un candidato antes de votar.");
  }
}

function displayResults() {
  const resultList = document.getElementById("resultList");
  resultList.innerHTML = "";

  for (const candidate in votes) {
    const listItem = document.createElement("li");
    listItem.textContent = `${candidate}: ${votes[candidate]} votos`;
    resultList.appendChild(listItem);
  }
}
