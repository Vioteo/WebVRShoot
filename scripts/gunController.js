AFRAME.registerComponent('guncontroller', {
    init: function() {
        console.warn("started")
        },
    tick: function (time, timeDelta) {
     if (Right_hand.getAttribute('position')&&Left_hand.getAttribute('position')&&Rifle)
     {
         Rifle.setAttribute('position',{x:Right_hand.getAttribute('position').x,y:Right_hand.getAttribute('position').y,z:Right_hand.getAttribute('position').z})
         distance =  Math.sqrt(((Right_hand.getAttribute('position').x - Left_hand.getAttribute('position').x) ** 2) + ((Right_hand.getAttribute('position').z - Left_hand.getAttribute('position').z) ** 2))
         if (distance<0.4)
         {
            angle2 = Math.atan2(Right_hand.getAttribute('position').x-Left_hand.getAttribute('position').x,Right_hand.getAttribute('position').z-Left_hand.getAttribute('position').z)/Math.PI*180
         angle1 = Math.atan2(Right_hand.getAttribute('position').y-Left_hand.getAttribute('position').y,Math.sqrt(Math.pow(Right_hand.getAttribute('position').z-Left_hand.getAttribute('position').z,2)+Math.pow(Right_hand.getAttribute('position').x-Left_hand.getAttribute('position').x,2)))/Math.PI*180
         Rifle.setAttribute('rotation',{x:-angle1 ,y:angle2 ,z:angle3})
         Right_rifle.setAttribute('visible','false')
         Real_rifle.setAttribute('visible','true')

         }
         else
         {
             Right_rifle.setAttribute('visible','true')
             Real_rifle.setAttribute('visible','false')
         }
    }
    }
});
