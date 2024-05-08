





const details = gsap.utils.toArray(".details-wrap:not(:first-child)")
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")


gsap.set(photos, {yPercent:100})

const allPhotos = gsap.utils.toArray(".desktopPhoto")


// create


  // this setup code only runs when viewport is at least 600px wide
  console.log("desktop")
	
  ScrollTrigger.create({
	trigger:".home-sec-four-wrap",
	start:"top top",
	end:"bottom bottom",
	pin:".right"
})


// gsap.from(".desktopPhotos",{
// 	x:"100%",
// 	scrollTrigger:{
// 		trigger:".desktopPhotos",
// 		start:"-70%",
// 		end:"10%",
// 		// markers:true,
// 		scrub:1
// 	}
// })
// gsap.from(".right",{
// 	x:"100%",
// 	ease:"none",
// 	scrollTrigger:{
// 		trigger:".right",
// 		start:"-70%",
// 		end:"10%",
// 		// markers:true,
// 		scrub:1
// 	}
// })
// gsap.from(".left",{
// 	x:"-100%",
// 	ease:"none",
// 	scrollTrigger:{
// 		trigger:".left",
// 		start:"-20%",
// 		end:"-1%",
// 		// markers:true,
// 		scrub:1
// 	}
// })

//create scrolltrigger for each details section
//trigger photo animation when headline of each details section 
//reaches 80% of window height
details.forEach((detail, index)=> {

	let headline = detail.querySelector("h1")
	let animation = gsap.timeline()
	   .to(photos[index], {yPercent:0})
	//    .set(allPhotos[index], {autoAlpha:0})
	ScrollTrigger.create({
		trigger:headline,
		start:"top 60%",
		end:"top 60%",
		animation:animation,
        scrub: 1,
        snap: 1 / (photos.length),
		// markers:true,
        ease:"none"
        
	})
})
	
	
  




