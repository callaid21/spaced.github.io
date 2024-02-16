function showContent(contentNum, btnNum, imgNum, activitiesNum){

    var contents = document.getElementsByClassName('content');
    var buttons = document.getElementsByClassName('img-btn');
    var images = document.getElementsByClassName('img-content');
    var activities = document.getElementsByClassName('activities-content');

    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
        buttons[i].classList.remove('selected');
        images[i].classList.remove('active');
        activities[i].classList.remove('active');
    }  

    var selected = document.getElementById(contentNum);
    var selectedBtn = document.getElementById(btnNum);
    var selectedImages = document.getElementById(imgNum);
    var selectedActivities = document.getElementById(activitiesNum);

    if (selected){
        selected.classList.add('active');
        selectedBtn.classList.add('selected');
        selectedImages.classList.add('active');
        selectedActivities.classList.add('active');
    }
}