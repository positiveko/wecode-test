const getNum = () => {
  let res = [];
  for (let i = 1; i < 51; i++) {
    if (i % 2 == 0) {
      res.push(i);
    }
  }

  return res;
};

getNum();
