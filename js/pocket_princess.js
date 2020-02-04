
let princessArr = ["2.jpg", "3.jpg", "8.jpg", "16.jpg", "19.jpg", "24.jpg", "25.jpg", 
"30.jpg", "33.jpg", "35.jpg", "36.jpg", "39.jpg", "41.jpg", "46.jpg", "47.jpg", "53.jpg", "56.jpg", "58.jpg", 
"60.jpg", "61.jpg", "72.jpg", "74.jpg", "76.jpg", "77.jpg", "80.jpg", "83.jpg", "87.jpg", "88.jpg",
 "90.jpg", "93.jpg", "95.jpg", "96.jpg", "97.jpg", "98.jpg", "99.jpg", "100.jpg", "101.jpg",
 "104.jpg", "105.jpg", "107.jpg", "108.jpg"];

const gallery_id = document.querySelector("#gallery");

let count = 0;

const next_image = () => {
    if(count < princessArr.length-1) {
        count += 1;
    } else {
        count = 0;
    } 
    
    gallery_id.innerHTML = "<img src=../pocket_pr_pictures/" + princessArr[count+1] + " .jpg>";
}





