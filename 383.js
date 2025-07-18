let ransomNote = "aab";
let magazine = "baa";

function make(ransomNote, magazine) {
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }

  if (!ransomNote) return true;
  else return false;
}

console.log(make(ransomNote, magazine));
