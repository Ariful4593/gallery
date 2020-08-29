const imageArrayOne = ["images/nature/1.jpg","images/nature/2.jpg","images/nature/3.jpg","images/nature/4.jpg","images/nature/5.jpg","images/nature/6.jpg","images/nature/7.jpg","images/nature/8.jpg","images/nature/9.jpg","images/nature/10.jpg"]
const imageArrayTwo = ["images/lecture/1.jpg","images/lecture/2.jpg","images/lecture/3.jpg","images/lecture/4.jpg","images/lecture/5.jpg","images/lecture/6.jpg","images/lecture/7.jpg","images/lecture/8.jpg","images/lecture/9.jpg","images/lecture/10.jpg","images/lecture/11.jpg","images/lecture/12.jpg"]

const imageArrayThree = ["images/nature/1.jpg","images/nature/2.jpg","images/nature/3.jpg","images/nature/4.jpg","images/nature/5.jpg"]

const imageArrayFour = ["images/lab/1.jpg","images/lab/2.jpg","images/lab/3.jpg","images/lab/4.jpg","images/lab/5.jpg","images/lab/6.jpg","images/lab/7.jpg","images/lab/8.jpg","images/lab/9.jpg","images/lab/10.jpg","images/lab/11.jpg","images/lab/12.jpg"]

imageGallery("gallery1",imageArrayOne);

function imageGallery(one, imagelist){
    document.getElementById("gallery2").style.display = "none"
    document.getElementById("gallery3").style.display = "none"
    document.getElementById("gallery4").style.display = "none"
    imageMaker(one, imagelist)
    let button1 = document.getElementById("btn1");
    button1.addEventListener("click", function(){
        gallery1.style.display = "block";
        document.getElementById("gallery2").style.display = "none"
        document.getElementById("gallery3").style.display = "none"
        document.getElementById("gallery4").style.display = "none"
        console.log("clicked btn1")
   })
   
}

imageGalleryTwo("gallery2", imageArrayTwo)
function imageGalleryTwo(one, imagelist){
    imageMaker(one, imagelist)
    let button2 = document.getElementById("btn2");
    button2.addEventListener("click", function(){
        gallery2.style.display = "block";
        document.getElementById("gallery1").style.display = "none"
        document.getElementById("gallery3").style.display = "none"
        document.getElementById("gallery4").style.display = "none"
        console.log("clicked btn2")
   }) 
}

imageGalleryThree("gallery3", imageArrayThree)
function imageGalleryThree(one, imagelist){
    imageMaker(one, imagelist)
    let button2 = document.getElementById("btn3");
    button2.addEventListener("click", function(){
        gallery3.style.display = "block";
        document.getElementById("gallery1").style.display = "none"
        document.getElementById("gallery2").style.display = "none"
        document.getElementById("gallery4").style.display = "none"
        console.log("clicked btn3")
   }) 
}
imageGalleryFour("gallery4", imageArrayFour)
function imageGalleryFour(one, imagelist){
    imageMaker(one, imagelist)
    let button2 = document.getElementById("btn4");
    button2.addEventListener("click", function(){
        gallery4.style.display = "block";
        document.getElementById("gallery1").style.display = "none"
        document.getElementById("gallery2").style.display = "none"
        document.getElementById("gallery3").style.display = "none"
        console.log("clicked btn4")
   }) 
}


function imageMaker(one, imagelist){
    const gallery1 = document.getElementById(one);
    for(let i=0;i<imagelist.length;i++)
    {
        const image = document.createElement("img");
        image.style.width = "285px"
        image.style.padding = "10px"
        image.setAttribute("src", imagelist[i]);
        gallery1.appendChild(image)
    }
}