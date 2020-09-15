module.exports = function check(str, bracketsConfig) {
  if (str.length%2!=0) return false;
  let newMus=bracketsConfig.map(item=>item.join(""));
  let mus=[];
  let open=[];
  let close=[];
  for (let i=0; i<bracketsConfig.length; i++){
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }
  for (let i=0; i<str.length; i++){
    if (open.includes(str[i])&&close.includes(str[i])){
      if (mus[mus.length-1]==str[i]){
        mus.pop();
      }else{
        mus.push(str[i]);
      }
    }else if (open.includes(str[i])) {
      mus.push(str[i]);
    } else if (close.includes(str[i])&&mus[mus.length-1]==open[close.indexOf(str[i])]){
      mus.pop();
    }else{
      return false;
    }
  }
  if (mus.length!=0) return false;
  return true;
}
