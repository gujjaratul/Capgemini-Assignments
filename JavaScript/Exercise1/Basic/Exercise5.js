function padchars(num, string) {
    if(num < 0) 
      return "";
    if(num === 1) 
      return string;
    else 
      return string + padchars(num - 1,string );
  }