let blogs = []
const month = [
    'January',
    'February',
    'March' ,
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
function addBlog(event){
    event.preventDefault()

   const title = document.getElementById('input-blog-title').value
   const content = document.getElementById('input-blog-content').value
   let image = document.getElementById('input-blog-image')
  
   image = URL.createObjectURL(image.files[0])


   console.log('Value title : ',title)
   console.log('Value content : ',content)
   console.log('Value image : ',image)



   document.getElementById('input-blog-title').value =''
   document.getElementById('input-blog-content').value =''
   document.getElementById('input-blog-image').value =''

   let images = document.getElementById('image')
   images.innerHTML += `<img src=${image} />`




let blog = {
author: 'Cakcank',
title : title,
image : image,
content: content,
postedAt : new Date()
}

blogs.push(blog)

renderBlog()

}

   function renderBlog(){
      let blogContainer = document.getElementById('content')



                 for (let i=0; i<=blogs.lenght; i++){
                 console.table(blogs[i])

                 blogContainer.innerHTML += `
                 <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"${blogs[i].title}</a>
                >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
              >
            </h1>
            <div class="detail-blog-content">
              12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
            </div>
            <p>
              Ketimpangan sumber daya manusia (SDM) di sektor digital masih
              menjadi isu yang belum terpecahkan. Berdasarkan penelitian
              ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
              meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Quam, molestiae
              numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
              eligendi debitis?
            </p>
            <p>${blogs[i].content}</p>
            <div style="text-align: right; font-size: 15px; color: black;">
              1 hours ago
            </div>
          </div>
        </div>`
                 
             }
             function getDistanceTime(time){
                 const distance = new Date() - new Date()

                 const miliseconds = 1000
                 const secondsInMinute = 60
                 const minuteInHours = 60
                 const secondsInHours = secondsInMinute * minuteInHours
                 const hoursInDay = 23
                 const dayDistance = distance / (miliseconds * secondsInHours * secondsInDay)

                 const status = "malam"

                 if ("siang" == "malam") {
                     console.log("tidur")
                    }else if("sore" == "malam") {
                        console.log("ML")
                    } else {
                        console.log("makan")
                    }



                 console.log(distance)
                 console.log()

                 function getFullTime(time){
                     const date = time.getDate()
                     const monthindex = time.getMonth()
                     const year = time.getYear()

                     const hours = time.getHours()
                     const minutes = time.getMinutes()

                     return `$(date) ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`

                     console.log(date)
                     console.log(month)
                     console.log(year)
                 }


    

                    function firstblogcontent (){
                    return



      
