//section 2

let sec2 = document.createElement("section")
let text = document.createElement("div")
let Summary =document.createElement("div")
let stext = document.createElement("span")
let btext = document.createElement("button")
let ptext = document.createElement("p")
let imgdiv =document.createElement("div")
let imgcock =document.createElement("div")
let img = document.createElement("img")
let pp =document.createElement("p")

//append

document.body.appendChild(sec2)
imgdiv.appendChild(img)
sec2.append(text , Summary , imgdiv)
imgdiv.appendChild(imgcock)
img.src="images/burger.png"
Summary.append(stext ,btext , ptext,pp)

//css
function styleInject(cssText) {
    let head = document.head;
    let style = document.createElement("style");
    style.appendChild(document.createTextNode(cssText));
    head.appendChild(style);}

    styleInject("@keyframes bedo{   0%{transform: translateY(-303px);    }    100%{        transform: translateX(0);   } }  body{margin:0; padding:0;}  ")

sec2.style.cssText ="   width: 100%; height:895px;"
text.style.cssText = " width: 210px; height: 240px; position: relative; left: 40px; top: 350px; color: black;     font-size: 60px;text-align: center;      font-weight: 700;"
imgcock.style.cssText="  width: 574.35px; height: 527px; position: relative;top: -465px; left: 15px;     display: flex; flex-direction: column-reverse; "
imgdiv.style.cssText=` width: 574.35px; height: 527px; position: relative;top: -355px; left: 329px;    `
img.style.cssText="    width: 574.35px; height: 527px; position: relative;"
Summary.style.cssText="  width:263px; height: 263px;  position: relative;top: -67px; left: 980px;"
stext.style.cssText="  ;     position: absolute;    width:150px; height:45px; font-size: 41px; font-weight: 600;"
btext.style.cssText = "    position: relative; top: 119px; left: 156px; width: 200px; height: 56px; border-radius: 90px; background-color: #5243C2; border-style: none;     font-size: 22px; font-weight: 700;"
ptext.style.cssText="    width: 50px; height: 50px; color: rgb(82, 67, 194);position: relative;top: 15px;    font-size: 46px; font-weight: 600;"
pp.style.cssText="    width: 50px; height: 50px; color: rgb(82, 67, 194);position: relative;top: -80px;     left: -28px; font-size: 46px; font-weight: 600;"
//textcontent
text.textContent="Make Your Burger"
stext.textContent="Summary"
btext.textContent="Checkout"
ptext.textContent="0"
pp.textContent="$"


//cooking section

let image = ["images/cutlet.png",
"images/mayo.png",
"images/onion.png",
"images/tomatoe.png",
"images/cucumber.png",
"images/cheese.png",
"images/salad.png",
"images/bun_top.png",
"images/default.png"]


let maindiv = document.createElement("div")
sec2.appendChild(maindiv)
maindiv.style.cssText="width:80%; height:0px; display:flex;     justify-content: space-between;    position: relative;   top: -54px; left: 106px;    "
for (let i = 0; i < image.length; i++) {

    let div = document.createElement("div")
    let allImages = document.createElement("img")
    let controls =document.createElement("div")
    let plus = document.createElement("button")
          plus.setAttribute("class", "h")
    let mins = document.createElement("button")
         mins.setAttribute("id", "h")

    let p = document.createElement("p")

    //event

   plus.addEventListener("click" ,function(){
     

    numberP = parseInt(p.textContent) + 1;
    p.textContent = numberP;

    numberCash = parseFloat(ptext.textContent) +1;
    ptext.textContent = numberCash;

   
   })

   mins.addEventListener("click" ,function(){

    numberM = parseInt(p.textContent) -1;
    p.textContent = numberM;

    numberCashM = parseFloat(ptext.textContent) -1;
    ptext.textContent=numberCashM
   })

    //append
    maindiv.appendChild(div)
    div.appendChild(allImages)

    div.appendChild(controls)

    controls.append(plus,mins,p)

    allImages.src = image[i];


    //css  
      div.style.cssText="    position: relative; top:-273px; width:110px; height:113px; background:white; padding:24px, 18px, 24px, 18px; gap:10px;     border-color:#F0F7FA; border-radius: 32px; border-width: 2px;  border-style: solid;  "
    allImages.style.cssText="    width: 91px;  height: 34px; position: relative; top: 17px; left: 11px;"

controls.style.cssText="display:flex; justify-content: space-around; "
mins.style.cssText="    width: 30px; height: 30px; border-radius: 99px; border-style: none; position: relative; top: 25px; left: 35px;"

plus.style.cssText="    width: 30px; height: 30px; border-radius: 99px; border-style: none; position: relative; top: 25px; left: 3px;"
p.style.cssText="     width: 30px; height: 30px; border-radius: 99px; border-style: none; position: relative;    top: 5px; left: -25px; font-size: 23px; font-weight: 600;"

//textcontent
mins.textContent="-"
plus.textContent="+"
p.textContent="0"
}

//cooking animatioonnnnn


let buttons  =document.querySelectorAll("button")

buttons[1].addEventListener("click",()=>{
let imgg =document.createElement("img")
imgcock.appendChild(imgg)
imgg.src="images/cutlet.png"
 imgg.style.cssText="width: 380px;  height: 80px;  z-index:9; margin-top: -48px;   animation-duration: 2s; animation-iteration-count: 1;  animation-name: bedo;  margin-bottom: -50;  position: relative; top: -134px; left: 76px;"

});
    buttons[3].addEventListener("click",()=>{
        let imgg =document.createElement("img")
        imgcock.appendChild(imgg)
        imgg.src="images/mayo.png"
        
         imgg.style.cssText="width: 380px;  height: 80px;  z-index:9;   animation-duration: 2s; animation-iteration-count: 1;  animation-name: bedo;       margin-top: -68px;         position: relative; top: -134px; left: 76px;"
        });
   
         buttons[5].addEventListener("click",()=>{
        let imgg =document.createElement("img")
        imgcock.appendChild(imgg)
        imgg.src="images/onion.png"
        imgg.style.cssText="width: 380px;  height: 80px;  z-index:9; margin-top: -48px;   animation-duration: 2s; animation-iteration-count: 1;  animation-name: bedo;  margin-bottom: -50;  position: relative; top: -134px; left: 76px;"
    });
   
         buttons[7].addEventListener("click",()=>{
        let imgg =document.createElement("img")
        imgcock.appendChild(imgg)
        imgg.src="images/tomatoe.png"
        imgg.style.cssText="width: 380px;  height: 80px;  z-index:9; margin-top: -48px;   animation-duration: 2s; animation-iteration-count: 1;  animation-name: bedo;  margin-bottom: -50;  position: relative; top: -134px; left: 76px;"
    });
    
         buttons[9].addEventListener("click",()=>{
let imgg =document.createElement("img")
imgcock.appendChild(imgg)
imgg.src="images/cucumber.png"
imgg.style.cssText="width: 380px;  height: 80px;  z-index:9; margin-top: -48px;   animation-duration: 2s; animation-iteration-count: 1;  animation-name: bedo;  margin-bottom: -50;  position: relative; top: -134px; left: 76px;"
});
   
 buttons[11].addEventListener("click",()=>{
    let imgg =document.createElement("img")

    imgg.src="images/cheese.png"
    imgcock.appendChild(imgg)
    imgg.style.cssText="width: 380px;  height: 80px;  z-index:9; margin-top: -98px;   animation-duration: 2s; animation-iteration-count: 1;  animation-name: bedo;  margin-bottom: -50;  position: relative; top: -106px; left: 76px;"
});
    
buttons[13].addEventListener("click",()=>{
    let imgg =document.createElement("img")

    imgg.src="images/salad.png"
    imgcock.appendChild(imgg)
    imgg.style.cssText="width: 380px;  height: 80px;  z-index:9; margin-top: -48px;   animation-duration: 2s; animation-iteration-count: 1;  animation-name: bedo;  margin-bottom: -50;  position: relative; top: -134px; left: 76px;"


});/////////////////////////////
buttons[15].addEventListener("click",()=>{
    let imgg =document.createElement("img")

    imgg.src="images/bun_top.png"
    imgcock.appendChild(imgg)
    imgg.style.cssText="width: 411px;  height: 130px;  z-index:9; margin-top: -48px;   animation-duration: 2s; animation-iteration-count: 1;  animation-name: bedo;  margin-bottom: -50;  position: relative; top: -134px; left: 57px;"


});/////////////////////////////
buttons[17].addEventListener("click",()=>{
    let imgg =document.createElement("img")

    imgg.src="images/default.png"
    imgcock.appendChild(imgg)
    imgg.style.cssText="width: 411px;  height: 130px;  z-index:9; margin-top: -48px;   animation-duration: 2s; animation-iteration-count: 1;  animation-name: bedo;  margin-bottom: -50;  position: relative; top: -134px; left: 57px;"


});/////////////////////////////
imgcock.setAttribute("id","n")////////
///////-------////////////////////////
buttons[2].addEventListener("click",()=>{
let rimg =document.querySelectorAll('#n>img[src="images/cutlet.png"]')
rimg[0].remove()

});
    buttons[4].addEventListener("click",()=>{
        let rimg =document.querySelectorAll('#n>img[src="images/mayo.png"]')
        rimg[0].remove()
            });
        buttons[6].addEventListener("click",()=>{
            let rimg =document.querySelectorAll('#n>img[src="images/onion.png"]')
        rimg[0].remove()
            });
            buttons[8].addEventListener("click",()=>{
                let rimg =document.querySelectorAll('#n>img[src="images/tomatoe.png"]')
                rimg[0].remove()
                            });
                buttons[10].addEventListener("click",()=>{
                    let rimg =document.querySelectorAll('#n>img[src="images/cucumber.png"]')
                    rimg[0].remove()
                                    });
                    buttons[12].addEventListener("click",()=>{
                        let rimg =document.querySelectorAll('#n>img[src="images/cheese.png"]')
                        rimg[0].remove()                     
                       });
                        buttons[14].addEventListener("click",()=>{
                            let rimg =document.querySelectorAll('#n>img[src="images/salad.png"]')
                            rimg[0].remove()
                                                    
                        });
                        buttons[16].addEventListener("click",()=>{
                            let rimg =document.querySelectorAll('#n>img[src="images/bun_top.png"]')
                            rimg[0].remove()
                                                    
                        });
                        buttons[18].addEventListener("click",()=>{
                            let rimg =document.querySelectorAll('#n>img[src="images/default.png"]')
                            rimg[0].remove()
                                                    
                        });


//checkoout section

buttons[0].addEventListener("click", ()=>{
 let maincheck =document.createElement("div")
let sheet = document.createElement("div")
let sheettext =document.createElement("p")
let sheettext2 =document.createElement("div")
let sheettext3 =document.createElement("div")
let sheettext4 =document.createElement("div")
let checkbtns = document.createElement("div")
let checkoutbutton =document.createElement("button")
let cancelbutton =document.createElement("button")



let form = document.createElement("form")
let label2 = document.createElement("label")
let name =document.createElement("input")
let label3 = document.createElement("label")
let phone =document.createElement("input")
let label4 = document.createElement("label")
let location =document.createElement("input")

//append
sec2.appendChild(maincheck)
maincheck.appendChild(sheet)
// form.append(label2,name,label3,phone,label4,location)
sheet.append(sheettext,sheettext2,sheettext3,sheettext4,checkbtns)
sheettext2.append(label2,name)
sheettext3.append(label3,phone)
sheettext4.append(label4,location)
checkbtns.append(checkoutbutton,cancelbutton)
//attribute
checkbtns.setAttribute("id","btns")
maincheck.setAttribute("id","maincheck")
phone.setAttribute("type","number")
phone.setAttribute("maxlength","11")
checkoutbutton.setAttribute("type","submit")

//css
maincheck.style.cssText="position: absolute; background: #00579f85;width: 85%;height: 85vh;top: 25%;left: 5%;border-radius: 75px;z-index: 9;"
sheet.style.cssText="width:450px; height:420px;  background:white;   border-radius: 50px; position: relative; top: 60px; left:370px; "
sheettext.style.cssText="width:100%; height:50px; margin-bottom:50px; margin-top:50px; font-size:40px; color:black;  text-align: center;"
sheettext2.style.cssText=" width:100%; height:50px; margin-bottom:50px; display:flex;"
sheettext3.style.cssText=" width:100%; height:50px; margin-bottom:20px; display:flex;"
sheettext4.style.cssText=" width:100%; height:50px; margin-bottom:20px;     margin-top: 50px; display:flex;"
checkoutbutton.style.cssText="    width: 100px; height: 36px; background: rgb(82, 67, 194); color:white; font-size:17px; border-radius: 40px; border-style: none;"
cancelbutton.style.cssText="width: 100px; height: 36px; background: white ;color:black; font-size:17px; border-radius: 40px; border-style: none;"

label2.innerHTML="<br>Your Name:"
label3.innerHTML="<br>Phone Number:"
label4.innerHTML="<br>Shipping Address:"
checkoutbutton.textContent="Checkout"
cancelbutton.textContent="Cancel"

styleInject("#btns{    display: flex; justify-content: space-evenly;} hr{position: relative;top: -17px;} label{width: 119px; height: 50px; text-align:center; } input{    width: 323px; border-radius: 61px;     border-style: solid;   border-color: black;  border-width: 1px;")

//text content

sheettext.innerHTML="Checkout <hr>"

//checkout event
let lastbuttons= document.querySelectorAll("#btns>button")

lastbuttons[0].addEventListener("click", ()=>{
    let checkout = document.querySelectorAll("#maincheck")[0]
    checkout.remove()})
lastbuttons[1].addEventListener("click", ()=>{
let cancel = document.querySelectorAll("#maincheck")[0]
cancel.remove()
})

})



