const stories = [
  {
    dp: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
    story: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&h=500&fit=crop"
  },
  {
    dp: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&h=500&fit=crop",
    story: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=500&fit=crop"
  },
  {
    dp: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    story: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=500&h=500&fit=crop"
  },
  {
    dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=500&fit=crop",
    story: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&h=500&fit=crop"
  },
  {
    dp: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&h=500&fit=crop",
    story: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500&h=500&fit=crop"
  },
  {
    dp: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&h=500&fit=crop",
    story: "https://images.unsplash.com/photo-1501706362039-c6e08c9b9b0f?w=500&h=500&fit=crop"
  },
  {
    dp: "https://images.unsplash.com/photo-1541534401786-2077eed87a74?w=500&h=500&fit=crop",
    story: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop"
  },
  {
    dp: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&h=500&fit=crop",
    story: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=500&h=500&fit=crop"
  },
  {
    dp: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=500&fit=crop",
    story: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=500&fit=crop"
  },
  {
    dp: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=500&fit=crop",
    story: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=500&fit=crop"
  },
  {
    dp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop",
    story: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&h=500&fit=crop"
  }
];

let card = document.querySelector('.card')
let storyian = document.querySelector('.storyian')
let story = document.querySelector('.story')
let fullScreen = document.querySelector('.full-screen')

let clutter = ''
stories.forEach(function(elem, idx){
    clutter+= `<div class="story">
                    <img id="${idx}" src="${elem.dp}" alt="">
                </div>`
})
storyian.innerHTML = clutter
storyian.addEventListener('click', function (dets) {
    fullScreen.style.display = 'block'
    fullScreen.style.backgroundImage = `url(${stories[dets.target.id].story})`
    setTimeout(() => {
        fullScreen.style.display = 'none'
        storyian.innerHTML = clutter
        
    }, 5000);
})