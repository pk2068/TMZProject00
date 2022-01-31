alert('Question 3');

/*Question 3: Write a function that converts HEX to RGB. 
Then Make that function auto-dect the formats so that if you enter HEX color format 
it returns RGB and if you enter RGB color format it returns HEX.
*/
let hexcolor= "#ff64c8"
let rgbcolor = "rgb(7, 191, 255)"


const ConvertColor = ( color ) =>
{
    function ColorToHex(color) {
        var hexadecimal = color.toString(16);
        return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
      }

    let text = color;
    if (color[0] === '#')
    {
        var hex = "#ff64c8";
        var red = parseInt(hex[1]+hex[2],16);
        var green = parseInt(hex[3]+hex[4],16);
        var blue = parseInt(hex[5]+hex[6],16);
        let result = "rgb( "+red+","+green+","+blue+")"
        //console.log(result);
        return result;
    }
    else if (text.includes("rgb"))
    {
        debugger;
        let a = text.indexOf("(");
        let b = text.indexOf(")");
        let result = text.substring(a+1,b);
        const myArray = result.split(",");
        let red = ColorToHex(myArray[0].trim());
        let green = ColorToHex(myArray[1].trim());
        let blue = ColorToHex(myArray[2].trim());
        let result2 = "#"+red+green+blue;
        //console.log(result2);
        return result2;
    }
};

console.log('input', hexcolor);
let result3 =  ConvertColor(hexcolor);
console.log('result', result3);

console.log('input', rgbcolor);
result3 =  ConvertColor(rgbcolor);
console.log('result', result3);

