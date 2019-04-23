var str = "/root/somedirectory/page-name";
str = str.substring(str.search("somedirectory/"), str.search("-"));
var res = str.replace("somedirectory/", " ");

console.log(res);
