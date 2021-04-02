function largest()
			{
				var num1, num2, num3;
				num1 = Number(document.getElementById("first").value);
				num2 = Number(document.getElementById("second").value);
				num3 = Number(document.getElementById("third").value);

				if(num1>num2 && num1>num3)
				{
					document.getElementById("demo").innerHTML= num1 +" is large";
				}
				else if(num2>num1 && num2>num3)
				{
					document.getElementById("demo").innerHTML= num2 +" is large";
				}
				else if(num3>num1 && num3>num1)
				{
					document.getElementById("demo").innerHTML= num3 +" is large";
				}
			}