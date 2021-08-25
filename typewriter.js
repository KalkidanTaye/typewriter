const sentence = "hello there from lighthouse labs";
let counter = 0;

let newSentence = sentence.split("");
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, counter); // <= 1s delay to make it noticeable. Can dial it down later.
  counter += 50;
  process.stdout.write("\n");
}
