// const cloud =document.querySelectorAll('.cloud' )
// window.addEventListener('scroll',()=> {
//     let windowY =this.scrollY
//     cloud.forEach(clouds => {
//        let seek =clouds.getAttribute('strive') 
//        clouds.style.transform = `translateX(${windowY*strive}px)`
//     })
const cloud =document.querySelectorAll('.cloud')
window.addEventListener('scroll', () => {
    let windowY = this.scrollY
    cloud.forEach(cloud => {
        let seek = cloud.getAttribute('strive')
         cloud.style.transform = `translateX(${windowY*seek}px)`
    })
})

const bird =document.querySelectorAll('.bird')
window.addEventListener('scroll',() => {
    let windowY =this.scrollY
    bird.forEach(bird => {
        let fly = bird.getAttribute('soar')
        bird.style.transform = `translateY(${windowY*fly}px)`
    })
})

const sun =document.querySelectorAll('sun')
window.addEventListener('scroll',() => {
    let windowY =this.scrollY
    sun.forEach(sun=>{
        let disc = sun.getAttribute('solar')
        sun.style.transform= `translateY(${windowY*disc}px)`
    })
})