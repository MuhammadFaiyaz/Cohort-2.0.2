const reels = [
  {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: false,
    commentCount: 423,
    shareCount: 92,
    isFollowed: false,
    caption: "Dark mode > light mode. Change my mind.",
    video: "./video/vid1.mp4",
    userprofile: "./img/img2.jpg",
  },
  {
    username: "designbysan",
    likeCount: 9820,
    isLiked: true,
    commentCount: 184,
    shareCount: 41,
    isFollowed: false,
    caption: "UI tip: Padding is personality. Give your elements some space.",
    video: "./video/vid2.mp4",

    userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
  },
  {
    username: "frontend.ninja",
    likeCount: 22150,
    isLiked: false,
    commentCount: 612,
    shareCount: 138,
    isFollowed: true,
    caption: "When flexbox finally aligns the way you wanted 😭🔥",
    video: "./video/vid3.mp4",

    userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
  },
  {
    username: "travelwithriya",
    likeCount: 54200,
    isLiked: false,
    commentCount: 822,
    shareCount: 201,
    isFollowed: false,
    caption: "My solo Bali trip changed everything 🌴",
    video: "./video/vid4.mp4",
    userprofile: "./img/img3.jpg",
  },
  {
    username: "daily.dev.quotes",
    likeCount: 3120,
    isLiked: true,
    commentCount: 102,
    shareCount: 55,
    isFollowed: true,
    caption: "Code. Sleep. Repeat. That’s the cycle.",
    video: "./video/vid5.mp4",
    userprofile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
  },
  {
    username: "fitnessbymegha",
    likeCount: 27450,
    isLiked: false,
    commentCount: 540,
    shareCount: 87,
    isFollowed: true,
    caption: "No gym? No problem. Do this 12-min workout at home.",
    video: "./video/vid1.mp4",
    userprofile: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
  },
  {
    username: "streetfoodlover",
    likeCount: 68000,
    isLiked: true,
    commentCount: 1304,
    shareCount: 412,
    isFollowed: false,
    caption: "You won’t believe this burger exists 🤯🍔",
    video: "./video/vid2.mp4",
    userprofile: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
  },
  {
    username: "musicbytara",
    likeCount: 14500,
    isLiked: false,
    commentCount: 267,
    shareCount: 73,
    isFollowed: true,
    caption: "Late night vibes // piano version 🎹✨",
    video: "./video/vid3.mp4",
    userprofile: "./img/img4.jpg",
  },
  {
    username: "techreviews101",
    likeCount: 23180,
    isLiked: true,
    commentCount: 481,
    shareCount: 120,
    isFollowed: false,
    caption: "The most underrated smartphone of 2024 📱",
    video: "./video/vid4.mp4",
    userprofile: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
  },
  {
    username: "learnanimations",
    likeCount: 18740,
    isLiked: false,
    commentCount: 350,
    shareCount: 92,
    isFollowed: true,
    caption: "GSAP can literally change your career. Start today.",
    video: "./video/vid1.mp4",
    userprofile: "./img/img5.jpg",
  },
];
let isMuted = true;
let allRells = document.querySelector(".all-reels");

function addData() {
  let sum = "";
  reels.forEach((elem, idx) => {
    sum += `<div class="reel">
          <video autoplay loop muted src="${elem.video}"></video>
          <button id="${idx}" class="mute-btn"><i class="${isMuted ? "ri-volume-mute-line" : "ri-volume-up-line"}"></i>
          </button>
          <div class="bottom">
            <div class="user">
              <img
                src="${elem.userprofile}"
                alt="">
              <h4>${elem.username}</h4>
              <button id="${idx}" class="follow">${elem.isFollowed ? "Unfollow" : "Follow"}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div id="${idx}" class="like">
              <h4 class="like-icon icon">${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
            </div>
          </div>
        </div>`;
  });
  allRells.innerHTML = sum;
  document.querySelectorAll(".reel video").forEach((video) => {
    video.muted = isMuted;
  });
}
addData();
allRells.addEventListener("click", (e) => {
  const muteBtn = e.target.closest(".mute-btn");
  if (muteBtn) {
    isMuted = !isMuted;
    document.querySelectorAll(".reel video").forEach((video) => {
      video.muted = isMuted;
    });
    document.querySelectorAll(".mute-btn i").forEach((icon) => {
      icon.className = isMuted ? "ri-volume-mute-line" : "ri-volume-up-line";
    });
    return;
  }

  if (e.target.className === "like") {
    reels[e.target.id].isLiked = !reels[e.target.id].isLiked;
    reels[e.target.id].likeCount += reels[e.target.id].isLiked ? 1 : -1;

    e.target.querySelector("h4").innerHTML = reels[e.target.id].isLiked
      ? '<i class="love ri-heart-3-fill"></i>'
      : '<i class="ri-heart-3-line"></i>';
      return;
  }
  if (e.target.className === "follow") {
    reels[e.target.id].isFollowed = !reels[e.target.id].isFollowed;
    e.target.textContent = reels[e.target.id].isFollowed
      ? "Unfollow"
      : "Follow";
    return;
  }
});
