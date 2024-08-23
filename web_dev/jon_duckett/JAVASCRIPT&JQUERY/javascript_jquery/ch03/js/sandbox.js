function getSize(width,height,depth){
    var area = width * height;
    var volume = width*height*depth;
    var size = [area , volume];
    return size;
}

var areaOne = getSize(5,5,5)[0];
var volumeOne = getSize(34,3,5)[1];

console.log(areaOne);
console.log(volumeOne);