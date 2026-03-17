export function getSheepZakat(count: number): string {
  if (count < 40) return "No zakat due";
  if (count <= 120) return "1 sheep";
  if (count <= 200) return "2 sheep";
  if (count <= 399) return "3 sheep";
  return `${Math.floor(count / 100)} sheep`;
}

export function getCattleZakat(count: number): string {
  if (count < 30) return "No zakat due";
  if (count <= 39) return "1 tabi' (1-year-old calf)";
  if (count <= 59) return "1 musinnah (2-year-old cow)";
  if (count <= 69) return "2 tabi'";
  if (count <= 79) return "1 tabi' + 1 musinnah";
  return "For every 30 head: 1 tabi'. For every 40 head: 1 musinnah.";
}

export function getCamelZakat(count: number): string {
  if (count < 5) return "No zakat due";
  if (count <= 9) return "1 sheep";
  if (count <= 14) return "2 sheep";
  if (count <= 19) return "3 sheep";
  if (count <= 24) return "4 sheep";
  if (count <= 35) return "1 bint makhad (1-year-old she-camel)";
  if (count <= 45) return "1 bint labun (2-year-old she-camel)";
  if (count <= 60) return "1 hiqqah (3-year-old she-camel)";
  if (count <= 75) return "1 jadh'ah (4-year-old she-camel)";
  if (count <= 90) return "2 bint labun";
  if (count <= 120) return "2 hiqqah";
  return "Consult a scholar for herds above 120";
}
