const oddSeries = num =>{
  let init = 1;
  for(let i = 0; i < num; i++){
    console.log(init);
    init += 2;
  }
}

let num = 3;
oddSeries(num);
