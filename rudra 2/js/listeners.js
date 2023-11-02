const onClickKakapo = (e) => {
  window.location.pathname = "/pages/chalets/kakapo.html";
};

const onClickKereru = (e) => {
  window.location.pathname = "/pages/chalets/kereru.html";
};

const onClickPukeko = (e) => {
  window.location.pathname = "/pages/chalets/pukeko.html";
};

// Adding listeners
document.getElementById("kakapo").addEventListener("click", onClickKakapo);
document.getElementById("kereru").addEventListener("click", onClickKereru);
document.getElementById("pukeko").addEventListener("click", onClickPukeko);
