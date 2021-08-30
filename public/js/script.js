function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "rock";
  if (comp >= 0.34 && comp < 0.67) return "scissor";
  return "papper";
}

function getHasil(comp, player) {
  if (player == comp) return "DRAW";
  if (player == "rock") return comp == "scissor" ? "WIN" : "LOSE";
  if (player == "scissor") return comp == "rock" ? "LOSE" : "WIN";
  if (player == "papper") return comp == "scissor" ? "LOSE" : "WIN";
}

//penyerderhaan dari fungsi dibawah
//if (player == comp) {
//  hasil = "DRAW";
//} else if (player == "rock") {
//  hasil = comp == "scissor" ? "WIN!" : "LOSE!";
//} else if (player == "scissor") {
//  hasil = comp == "rock" ? "LOSE!" : "WIN!";
//} else player == "papper";
//hasil = comp == "scissor" ? "LOSE" : "WIN!";
//}

//fungsi mengganti latar pilihan komputer
function getLatarComputer(comp) {
  var compPilihRock = document.getElementById("img-computer-rock");
  var compPilihScissor = document.getElementById("img-computer-scissor");
  var compPilihPapper = document.getElementById("img-computer-papper");

  if (comp == "rock") {
    compPilihRock.style.backgroundColor = "gray";
  } else if (comp == "Scissor") {
    compPilihScissor.style.backgroundColor = "gray";
  } else {
    compPilihPapper.style.backgroundColor = "gray";
  }
}

const pilihRock = document.querySelector(".rock");
pilihRock.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pilihRock.className;
  pilihRock.style.backgroundColor = "gray";
  getLatarComputer(pilihanComputer);

  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  const info = document.querySelector(".info");
  info.innerHTML = hasil;

  //fungsi menghasilkan image pilihan computer
  //var imgComputer = document.querySelector(".img-computer");
  //imgComputer.setAttribute("src", "/Users/Caesars/Desktop/test/img/" + pilihanComputer + ".png");

  console.log("comp :" + pilihanComputer);
  console.log("player:" + pilihanPlayer);
  console.log("hasil :" + hasil);
});

const pilihScissor = document.querySelector(".scissor");
pilihScissor.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pilihScissor.className;
  pilihScissor.style.backgroundColor = "gray";
  getLatarComputer(pilihanComputer);
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});

const pilihPapper = document.querySelector(".papper");
pilihPapper.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pilihPapper.className;
  pilihPapper.style.backgroundColor = "gray";
  getLatarComputer(pilihanComputer);
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});

const refreshButton = document.querySelector(".refresh-button");
const refreshPage = () => {
  location.reload();
};
refreshButton.addEventListener("click", refreshPage);
