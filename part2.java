								var countA = 0;
                var countB = 0;
                var countC = 0;
                var countD = 0;
                function Pepperoni(){
                    countA += 1;
                    document.getElementById('para1').innerHTML = "$"+countA;
                }
                function Mushroom(){
                    countB += 1.5;
                    document.getElementById('para2').innerHTML = "$"+countB;
                }
                function Bellpepper(){
                    countC += 2;
                    document.getElementById('para3').innerHTML =  "$"+countD;
                }
                function total(){
                    var total = 0;
                    var tax = 0;
                    var sum = 0;
                    total = countA+countB+countC+countD;
                    tax = total*0.10
                    sum = total + tax
                    document.getElementById('total').innerHTML = "$"+total;
                    document.getElementById('tax').innerHTML = "$"+tax;
                    document.getElementById('sum').innerHTML = "$"+sum;
                }
                function Clear(){
                    countA = 0;
                    countB = 0;
                    countC = 0;
                    countD = 0;
                    total = 0;
                    tax = 0;
                    sum = 0;
                    document.getElementById('para1').innerHTML = "$"+0;
                    document.getElementById('para2').innerHTML = "$"+0;
                    document.getElementById('para3').innerHTML = "$"+0;
                    document.getElementById('para4').innerHTML = "$"+0;
                    document.getElementById('total').innerHTML = "$"+0;
                    document.getElementById('tax').innerHTML = "$"+0;
                    document.getElementById('sum').innerHTML = "$"+0;
                }
                function Order(){
                    var toppings = document.getElementById("order").value;
                    var Order = toppings.split(",");
                    for (var i = 0; i < Order.length; i++){
                        Order[i] = Order[i].trim();