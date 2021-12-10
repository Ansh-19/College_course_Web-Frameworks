//document.getElementById("mainheading").innerText = "NCU";
//document.getElementById("para").innerText = "NCU";

function changeText(){
    p = document.getElementById("mainheading");
    // p.innerText = p.innerText + " NCU";
    p.innerHTML = "<h1>Main Heading</h1>";
    l = document.getElementsByTagName("label")[0];
    l.innerHTML = "This is in the label";
    // r = document.getElementsByName("radioinput");
    // console.log(r.value);
    i = document.getElementById("inputbox");
    console.log(i.value);
    document.getElementById("inputbox").value = parseInt(document.getElementById("inputbox").value) + 1;
}
