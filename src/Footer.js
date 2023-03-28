import "./Footer.css";

const quotes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
for (let i = 0; i < 10; i++) {
  quotes[i] = "Regra #" + (i + 1) + ": " + quotes[i];
}
const index = Math.round(Math.random() * 9.5);
console.log(index);

export default function Footer({ quote }) {
  quote = quotes[index];

  return (
    <footer>
      <p>{quote}</p>
    </footer>
  );
}
