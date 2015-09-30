// java-script code

// require http because we want to run it in the browser 
var http = require('http');

//require url library to parse a querystringvalue 
var url = require('url');

//start the server 
http.createServer(function(req, res){
    res.writeHead(200, {'content-Type': 'text-plain'});
    res.write('<h1>Calculator</h1>');
    
    //get the subtotal from the url querystring
    var qs = url.parse(req.url, true).query;
    var method = qs.method;
    var num1 = parseFloat(qs.x);
    var num2 = parseFloat(qs.y);
    var total = num1 + num2;
    
    //calculate the numbers 
    if (method == 'add')
    {
        res.write(num1 + ' + ' + num2 + ' = ' + (num1+num2));
    }
    else if (method == 'subtract')
    {
        res.write(num1 + ' - ' + num2 + ' = ' + (num1-num2));   
    }
    else if (method == 'multiply')
    {
        res.write(num1 + ' * ' + num2 + ' = ' + (num1*num2))
    }
    else if (method == 'divide')
    {
        res.write(num1 + ' / ' + num2 + ' = ' + (num1/num2))   
    }
    
    //testing code
    //res.write(JSON.stringify(qs)+'<br />');
    //res.write('' + qs.method + '<br />');
    //res.write('' + qs.x + '<br />');
    //res.write('' + qs.y + '<br />');
    //res.write('' + total + '<br />');
    res.end();
}).listen(3000);