export const numberFormatter = (number: number, decimal = 1) => {
  const suffixes = ["", "k", "M", "B", "T"];
  let magnitude = 0;
  while (Math.abs(number) >= 1000) {
    magnitude++;
    number /= 1000.0;
  }
  let formattedNumber =
    number.toLocaleString("en-US", { maximumFractionDigits: decimal }) +
    suffixes[magnitude];
  return formattedNumber.replace(/\.0/, "");
};
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): string {
  return "abc";
}

// let mySquare = createSquare({ COLOURR: "red", width: 100 });

let test = { COLOURR: "red", WIDTHH: 100 };
let mySquareTest = createSquare(test);
console.log({ mySquareTest });
