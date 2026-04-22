function simulate(i1: boolean, i2: boolean, i3: boolean, i4: boolean): boolean {
  const i1Not: boolean = !i1;
  const bottomOR: boolean = i2 || i1Not;
  const middleAND: boolean = bottomOR && i3;
  const middleOR: boolean = middleAND || i4;
  const topOR: boolean = i2 || i3;
  const topORNot: boolean = !topOR;
  const output: boolean = middleOR || topORNot;
  return output;
}

const i1: boolean = false,
  i2: boolean = false,
  i3: boolean = false,
  i4: boolean = true;

const ans: boolean = simulate(i1, i2, i3, i4);
console.log(ans);
