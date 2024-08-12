const breakfastMenu=['pancakes- $12','eggs benedict','oatmeal','frittata'];
const maincourseMenu=['steak','pasta','burger','salmon'];
const desertMenu=['cake','ice cream','pudding','fruit salad'];

const breakfastMenuItemsHTML=breakfastMenu.map((item,index)=> `<p>Item ${index+1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML=breakfastMenuItemsHTML;

let mainCourseItem='';
maincourseMenu.forEach((item,index)=>{
    mainCourseItem+=`<p>Item ${index+1}:${item}</p>`;});
    document.getElementById('maincourseMenuItems').innerHTML=mainCourseItem;

let desertItem='';
for(let i=0;i<desertMenu.length;i++){
    desertItem+=`<p>Item ${i+1}: ${desertMenu[i]}</p>`;}
document.getElementById('desertMenuItems').innerHTML=desertItem;

//they are three different ways to write you arrays in html format ;loop seems like the most easiet option 