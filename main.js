function showInfo(name, ...skills) {
  console.log(name);     // "FPT"
  console.log(skills);   // ["JS", "HTML", "CSS"]
}
showInfo("FPT", "JS", "HTML", "CSS");


const skills = ["JS", "HTML", "CSS"];
showInfo("FPT", ...skills);


















