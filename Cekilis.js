let input = document.getElementById("input");
let buttonO = document.getElementById("buttonO");
let buttonF = document.getElementById("buttonF");
let katilimcilar = document.getElementById("katilimcilar");
let cSonucu = document.getElementById("cSonucu");
let pHediyeler = document.getElementById("hediyeler");

let hediyeler = ["yap-boz", "çanta", "ayakkabı", "gözlük", "bilgisayar", "elbise", "kupa", "action figure", "kolye", "bileklik", "telefon", "yastık", "peluş", "dudak kremi", "masa lambası"].sort();
let isimler = []
let sonuc = [];
let sonucText = "";
let min = 0;
let counter = -1;
let tek = 0;

hediyeler.forEach((element,i) => {
    pHediyeler.innerHTML += (`<span class="${i}">${element.toUpperCase()}</span>`)
});

function tektek() {
    if (input.value=="") {
        alert("Lütfen Katılımcı Ekleyiniz!!!")
    } 
    else {
        tek = 1;
        if (counter < 0 ) {
            input.disabled = true;
            isimler = input.value.split(",").sort();
            min = (hediyeler.length<isimler.length) ?  hediyeler.length : isimler.length;
            document.getElementById("katilimcilar").classList.remove("d-none")
            isimler.forEach((element,i) => {
                katilimcilar.innerHTML += (`<span class="${i}">${element.toUpperCase()}</span>`)
            });
        }
        counter = counter + 1;
        if (counter > 0) {
            let kisi = Math.floor(Math.random() * isimler.length);
            let hediye = Math.floor(Math.random() * hediyeler.length);
            
            sonucText = `${isimler[kisi]} <span class="span">${hediyeler[hediye]}</span> Kazandı.`
            sonuc.push(sonucText)
            document.getElementById("cSonucu").classList.remove("d-none")
            sonuc.sort().forEach(element => {
                cSonucu.innerHTML += (`<span">${element.toUpperCase()}</span><br>`)
            });
            sonuc.splice(0,1)
    
            katilimcilar.childNodes.forEach((katilimci) => {
                if (katilimci.innerText == isimler[kisi].toUpperCase()) {katilimci.innerHTML = `<s>${katilimci.innerText}</s>`}
            });
            
            pHediyeler.childNodes.forEach((e) => {
                if (e.innerText == hediyeler[hediye].toUpperCase()) {e.innerHTML = `<s>${e.innerText}</s>`}
            });

            isimler.splice(kisi,1);
            hediyeler.splice(hediye,1);
        }
        if (counter == min) {
            buttonO.disabled = true
            buttonF.disabled = true
        }
    
    }
}

function toplu() {
    if (input.value=="") {
        alert("Lütfen Katılımcı Ekleyiniz!!!")
    }  
    else {
        input.disabled = true;
        buttonO.disabled = true
        buttonF.disabled = true
        if (tek == 0) {
            document.getElementById("katilimcilar").classList.remove("d-none")
            isimler = input.value.split(",").sort();
            isimler.forEach((element,i) => {
                katilimcilar.innerHTML += (`<span class="${i}">${element.toUpperCase()}</span>`)
            });
        }
        min = (hediyeler.length<isimler.length) ?  hediyeler.length : isimler.length;
        for (let i = 0; i < min; i++) {
            let kisi = Math.floor(Math.random() * isimler.length);
            let hediye = Math.floor(Math.random() * hediyeler.length);
            
            sonucText = `${isimler[kisi]} <span class="span">${hediyeler[hediye]}</span> Kazandı.`
            sonuc.push(sonucText)

            katilimcilar.childNodes.forEach((katilimci) => {
                if (katilimci.innerText == isimler[kisi].toUpperCase()) {katilimci.innerHTML = `<s>${katilimci.innerText}</s>`}
            });
            
            pHediyeler.childNodes.forEach((e) => {
                if (e.innerText == hediyeler[hediye].toUpperCase()) {e.innerHTML = `<s>${e.innerText}</s>`}
            });
    
            isimler.splice(kisi,1);
            hediyeler.splice(hediye,1);
        }
        document.getElementById("cSonucu").classList.remove("d-none")
        sonuc.sort().forEach(element => {
            cSonucu.innerHTML += (`<span">${element.toUpperCase()}</span><br>`)
        }); 
    
    }
}
