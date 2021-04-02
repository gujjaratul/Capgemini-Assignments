var string = "madam";
document.write("<br>String : "+string)
    const len = string.length;

   for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            document.write('<br><br>It is not a palindrome');
        }
    }
     document.write('<br><br>It is a palindrome');
