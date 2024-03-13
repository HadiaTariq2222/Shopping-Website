//This is the code to handle the logic of serach icon
const searchIcon = document.getElementById("search");
const searchBar = document.getElementById("searchBar");
const closebtn = document.getElementById("close butt");
// Initially, hide the search bar
searchBar.style.display = "none";
// Toggle the search bar visibility on search icon click
searchIcon.addEventListener("click", () => {
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "block";
        searchBar.focus(); // Optional: automatically focus on the input field
    } else {
        searchBar.style.display = "none";
    }
});
closebtn.addEventListener("click", () => {
    searchBar.style.display = "none";
});
//This is the code to handle the logic of Menu icon
function toggleSidebar() {
    const sidebar = document.getElementById('SB');
    const overlay = document.getElementById('overlay');
    const content = document.querySelector('.content');
    const closbtn = document.getElementById("CB");
    

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    content.classList.toggle('active');
    closbtn.classList.active("active");

}

function closeSidebar() {
    const sidebar = document.getElementById('SB');
    const overlay = document.getElementById('overlay');
    const content = document.querySelector('.content');
    const closbtn = document.getElementById("CB");

    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    content.classList.remove('active');
    closbtn.classList.remove("active");

}
