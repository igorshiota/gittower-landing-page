    
        const images = document.querySelectorAll('.anim');

        console.log("I'm working!");

        observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {
              console.log("I'm working 2!");
              if (entry.intersectionRatio > 0) {
                entry.target.classList.add("fadeInUp", "animated", "animatedFadeInUp")
              } else {
                entry.target.classList.remove("fadeInUp", "animated", "animatedFadeInUp")
              }

            //   if(entry.intersectionRatio > 0) {
            //     entry.target.style.animation = `anim 2s ${entry.target.dataset.delay} fadeInUp animated animatedFadeInUp`;
            // }
            // else {
            //     entry.target.style.animation = 'none';
            // }
            })

        })

        images.forEach(image => {
          console.log("I'm working 3!")
            observer.observe(image)
        })
    
        