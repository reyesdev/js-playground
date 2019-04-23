module.exports = {

  clearstring: function(str, dir, char) {
    str = str.substring(str.search(dir), str.search(char));
    var res = str.replace(dir, " ");
    return console.log(res);
  }

}