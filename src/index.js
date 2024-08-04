module.exports = function check(str, bracketsConfig) {
  let open = [];
  let pair = {};
  let stack = [];
  
  bracketsConfig.forEach(bracket => {
    open.push(bracket[0]);
    pair[bracket[1]] = bracket[0];
  });
  
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    
    if (current === stack[stack.length - 1] && current === pair[current]) {
      stack.pop();
    } else if (open.includes(current)) {
      stack.push(current);
    } else if (pair[current] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }
  
  return stack.length === 0;
}
