function nameShuffler(str){
    //Shuffle It
    //PREP
    //parameter: str will full name separated by a space
    // return full name with first and last name switch separated by a space
    //"john McClane" --> "McClane john"
    //split str into array by the the space, so the array will have the first and last name separated
    //call reverse on that array
    //join
    
    return str.split(" ").reverse().join(" ")
  }