function move() {

    let firstPromise = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 750, changeTheTextContentById("adv", "3!"));
        });
    }

    let secondPromise = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 750, changeTheTextContentById("adv", "2!"));
        });
    }

    let thirdPromise = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 750, changeTheTextContentById("adv", "1!"));
        });
    }

    firstPromise().then(function () {
            return secondPromise()
        })
        .then(function () {
            return thirdPromise()
        })
        .then(function () {
            return loop()
        })
        .then(function () {
            return afterStart()
        });

    function changeTheTextContentById(Id, text) {
        document.getElementById(Id).style.fontSize = "100px";
        document.getElementById(Id).style.marginRight = "20%";
        document.getElementById(Id).textContent = text;
    }

    function afterStart() {
        document.getElementById("clickMe").hidden = true;
        document.getElementById("adv").hidden = true;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 250);

        function frame() {
            if (width >= 100) {
                if (counter >= 0) {
                    window.alert("FAILURE!!! YOU COULD NOT FINISHED WITHIN THE GIVEN TIME!");
                    location.reload();
                }
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                elem.textContent = width + '%';
            }
        }
    }

}