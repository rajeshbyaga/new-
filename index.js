// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", myfun)
matcharr = []
function myfun() {
    event.preventDefault();
    var matchobj = {
        Matchnum: document.querySelector("#matchNum").value,
        teamA: document.querySelector("#teamA").value,
        teamB: document.querySelector("#teamB").value,
        date: document.querySelector("#date").value,
        venue: document.querySelector("#venue").value

    }
    matcharr.push(matchobj)
    console.log(matcharr)
    localStorage.setItem("schedule", JSON.stringify(matcharr))
    window.location.href = "matches.html"
}