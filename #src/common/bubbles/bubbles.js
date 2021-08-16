$('.bubbles').each(function() {
    let $bubbles = $(this);
    function bubbles() {
        
        // Settings
        let min_bubble_count = $bubbles.data('min'), // Minimum number of bubbles
            max_bubble_count = $bubbles.data('max'), // Maximum number of bubbles
            min_bubble_size = 14, // Smallest possible bubble diameter (px)
            max_bubble_size = 91; // Maximum bubble blur amount (px)
        
        // Calculate a random number of bubbles based on our min/max
        let bubbleCount = min_bubble_count + Math.floor(Math.random() * (max_bubble_count + 1));
        
        // Create the bubbles
        for (let i = 0; i < bubbleCount; i++) {
          $bubbles.append('<div class="bubble-container"><div class="bubble"><img src="img/photo/bubble.png" alt=""></div></div>');
        }
        
        // Now randomise the letious bubble elements
        $bubbles.find('.bubble-container').each(function(){
          
          // Randomise the bubble positions (0 - 100%)
          let pos_rand = Math.floor(Math.random() * 101);
          
          // Randomise their size
          let size_rand = min_bubble_size + Math.floor(Math.random() * (max_bubble_size + 1));
          
          // Randomise the time they start rising (0-15s)
          let delay_rand = Math.floor(Math.random() * 16);
          
          // Randomise their speed (3-8s)
          let speed_rand = 3 + Math.floor(Math.random() * 9);
          
          // Random blur
          let blur_rand = Math.floor(Math.random() * 3);
          
          // Cache the this selector
          let $this = $(this);
          
          // Apply the new styles
          $this.css({
            'left' : pos_rand + '%',
            
            '-webkit-animation-duration' : speed_rand + 's',
            '-moz-animation-duration' : speed_rand + 's',
            '-ms-animation-duration' : speed_rand + 's',
            'animation-duration' : speed_rand + 's',
            
            '-webkit-animation-delay' : delay_rand + 's',
            '-moz-animation-delay' : delay_rand + 's',
            '-ms-animation-delay' : delay_rand + 's',
            'animation-delay' : delay_rand + 's',
            
            '-webkit-filter' : 'blur(' + blur_rand  + 'px)',
            '-moz-filter' : 'blur(' + blur_rand  + 'px)',
            '-ms-filter' : 'blur(' + blur_rand  + 'px)',
            'filter' : 'blur(' + blur_rand  + 'px)',
          });
          
          $this.children('.bubble').css({
            'width' : size_rand + 'px',
            'height' : size_rand + 'px'
          });
          
        });
      }
      
      
      bubbles();
})
