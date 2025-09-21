document.getElementById("btnGiai").addEventListener("click", function() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);
    var output = document.getElementById('End');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        output.innerHTML = "Vui lòng nhập đủ a, b, c!";
        return;
    }

    if (a === 0) {
        
        if (b === 0) {
            if (c === 0) {
                output.innerHTML = "Phương trình có vô số nghiệm";
            } else {
                output.innerHTML = "Phương trình vô nghiệm";
            }
        } else {
            var x = -c / b;
            output.innerHTML = "Phương trình bậc 1, có 1 nghiệm: x = " + x;
        }
        return;
    }

    var delta = b * b - 4 * a * c;
    if (delta < 0) {
        output.innerHTML = "Phương trình vô nghiệm";
    } else if (delta === 0) {
        var nk = -b / (2 * a);
        output.innerHTML = "Phương trình có nghiệm kép: x₁ = x₂ = " + nk;
    } else {
        var n1 = (-b + Math.sqrt(delta)) / (2 * a);
        var n2 = (-b - Math.sqrt(delta)) / (2 * a);
        output.innerHTML = "Phương trình có 2 nghiệm phân biệt:<br>x₁ = " + n1 + "<br>x₂ = " + n2;
    }
});
