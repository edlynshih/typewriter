const sentence = "hello there from lighthouse labs";
let time = 0;
for (const char of sentence) {
  if(sentence.length === time+1) {
    setTimeout(() => {
      process.stdout.write(`${char}\n`);
    }, time * 500);
  } else {
    setTimeout(() => {
      process.stdout.write(char);
    }, time * 500);
  }
  time = time + 1;
}


//sentence length is 32
//time at last index is 31