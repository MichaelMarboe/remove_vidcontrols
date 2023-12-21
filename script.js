if (document.getElementsByClassName("exam-video") != null){
    const exam_video = document.querySelector(".exam-video")
    exam_video.addEventListener("play", (event) => {
        exam_video.removeAttribute("controls");
      });
}


