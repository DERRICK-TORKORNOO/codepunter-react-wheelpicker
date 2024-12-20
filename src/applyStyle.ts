export function applyStyle(
  scrollerId: string,
  itemInSelectorArea: number,
  dataLen: number,
  style: "flat" | "wheel" | "default" = "flat"
){
  var style = style || 'flat'

  switch(style){
      case 'flat':
          console.log('flat applied')
          var topShadeItem = itemInSelectorArea 
          var topFade = 1
          while(topShadeItem >= 0){
              console.log('shading');
              (document.getElementById(`${scrollerId}-scroll-item--${topShadeItem}`) as HTMLElement).style.transition = `all 0.3s`;
              (document.getElementById(`${scrollerId}-scroll-item--${topShadeItem}`) as HTMLElement).style.opacity = `${topFade}`;
              topFade -= 0.333333;
              topShadeItem--;
          }

          (document.getElementById(`${scrollerId}-scroll-item--${itemInSelectorArea}`) as HTMLElement).style.opacity = `1`
          
          var bottomFade = 0.66666;
          var bottomShade = itemInSelectorArea + 1;
          for(var i=bottomShade; i< dataLen; i++){
              (document.getElementById(`${scrollerId}-scroll-item--${i}`) as HTMLElement).style.transition = `all 0.3s`;
              (document.getElementById(`${scrollerId}-scroll-item--${i}`) as HTMLElement).style.opacity = `${bottomFade}`
              bottomFade -= 0.33333;
          }
          break;
          
      case 'wheel':
          console.log('wheel applied')
          var scrollSelectorArea = (document.getElementById(scrollerId+"--scroll-selector-area") as HTMLElement)
          scrollSelectorArea.style.border = 'unset'
          

          var topShadeItem = itemInSelectorArea-1 

          var topFade = 0.6666
          var topRotate = 45
          var topWidth = 97
          var topMarginBottom = 5
          var topBackground = 255

          while(topShadeItem >= 0){
              // scroller.style.paddingTop = `${paddingTop+ (10*itemInSelectorArea)}px`
              console.log('shading');
              (document.getElementById(`${scrollerId}-scroll-item--${topShadeItem}`) as HTMLElement).style.transition = `all 0.3s`;
              // document.getElementById(`${scrollerId}-scroll-item--${topShadeItem}`).style.transition = `color 0.5s`
              // document.getElementById(`${scrollerId}-scroll-item--${topShadeItem}`).style.transition = `opacity 0.5s`
              // document.getElementById(`${scrollerId}-scroll-item--${topShadeItem}`).style.transition = `font-weight 0.2s ease-in-out`
              
              (document.getElementById(`${scrollerId}-scroll-item--${topShadeItem}`) as HTMLElement).classList.add('wheel-item');
              (document.getElementById(`${scrollerId}-scroll-item--${topShadeItem}`) as HTMLElement).style.transform = `rotateX(${topRotate}deg)`;
              (document.getElementById(`${scrollerId}-scroll-item--${topShadeItem}`) as HTMLElement).style.width = `calc(${topWidth}% - 10px)`;
              (document.getElementById(`${scrollerId}-scroll-item--${topShadeItem}`) as HTMLElement).style.marginTop = `${topMarginBottom}px`;
              (document.getElementById(`${scrollerId}-scroll-item--${topShadeItem}`) as HTMLElement).style.opacity = `${topFade}`;

              topRotate += 20
              topWidth -= 3
              topMarginBottom += 19
              topFade -= 0.333333
              
              topShadeItem--
          }


          // reset middle element =======
          (document.getElementById(`${scrollerId}-scroll-item--${itemInSelectorArea}`) as HTMLElement).classList.add('wheel-item');
          (document.getElementById(`${scrollerId}-scroll-item--${itemInSelectorArea}`) as HTMLElement).style.transform = `rotateX(0deg)`;
          (document.getElementById(`${scrollerId}-scroll-item--${itemInSelectorArea}`) as HTMLElement).style.width = `calc(99% - 10px)`;
          (document.getElementById(`${scrollerId}-scroll-item--${itemInSelectorArea}`) as HTMLElement).style.marginTop = `unset`;
          (document.getElementById(`${scrollerId}-scroll-item--${itemInSelectorArea}`) as HTMLElement).style.marginBottom = `unset`;
          (document.getElementById(`${scrollerId}-scroll-item--${itemInSelectorArea}`) as HTMLElement).style.opacity = `1`;

          (document.getElementById(`${scrollerId}-scroll-item--${itemInSelectorArea}`) as HTMLElement).style.transition = `all 0.3s`;
          // document.getElementById(`${scrollerId}-scroll-item--${itemInSelectorArea}`).style.transition = `color 0.5s`
          // document.getElementById(`${scrollerId}-scroll-item--${itemInSelectorArea}`).style.transition = `opacity 0.5s`
          // document.getElementById(`${scrollerId}-scroll-item--${itemInSelectorArea}`).style.transition = `font-weight 0.2s ease-in-out`
          // ----------------------


          var bottomRotateItem = itemInSelectorArea + 1
          var bottomFade = 1
          var bottomRotate = 45
          var bottomWidth = 97
          var bottomMarginTop = 5
          for(var i=bottomRotateItem; i< dataLen; i++){
              console.log('bottom item = ', i);
              (document.getElementById(`${scrollerId}-scroll-item--${i}`) as HTMLElement).style.transition = `all 0.3s`;
              // document.getElementById(`${scrollerId}-scroll-item--${i}`).style.transition = `color 0.5s`
              // document.getElementById(`${scrollerId}-scroll-item--${i}`).style.transition = `opacity 0.5s`
              // document.getElementById(`${scrollerId}-scroll-item--${i}`).style.transition = `font-weight 0.2s ease-in-out`
              (document.getElementById(`${scrollerId}-scroll-item--${i}`) as HTMLElement).classList.add('wheel-item');
              (document.getElementById(`${scrollerId}-scroll-item--${i}`) as HTMLElement).style.transform = `rotateX(-${bottomRotate}deg)`;
              (document.getElementById(`${scrollerId}-scroll-item--${i}`) as HTMLElement).style.width = `calc(${bottomWidth}% - 10px)`;
              (document.getElementById(`${scrollerId}-scroll-item--${i}`) as HTMLElement).style.marginTop = `-${bottomMarginTop}px`;
              (document.getElementById(`${scrollerId}-scroll-item--${i}`) as HTMLElement).style.opacity = `${bottomFade}`;
              
              bottomRotate += 20
              bottomWidth -= 3
              bottomMarginTop += 19
              bottomFade -= 0.33333
          }
          break;
      
      default: // flat
          // color fade
          var topShadeItem = itemInSelectorArea 
          var topFade = 1
          var topRotate = 50
          while(topShadeItem >= 0){
              // console.log('shading')
              (document.getElementById(`${scrollerId}-scroll-item--${topShadeItem}`) as HTMLElement).style.transition = `all 0.3s`;
              (document.getElementById(`${scrollerId}-scroll-item--${topShadeItem}`) as HTMLElement).style.opacity = `${topFade}`;
              (document.getElementById(`${scrollerId}-scroll-item--${topShadeItem}`) as HTMLElement).style.transform = `rotateY()`;
              topFade -= 0.333333;

              topShadeItem--;
          }

          var bottomFade = 0.66666;
          var bottomShade = itemInSelectorArea + 1;
          for(i=bottomShade; i< dataLen; i++){
              (document.getElementById(`${scrollerId}-scroll-item--${i}`) as HTMLElement).style.transition = `all 0.3s`;
              (document.getElementById(`${scrollerId}-scroll-item--${i}`) as HTMLElement).style.opacity = `${bottomFade}`;
              bottomFade -= 0.33333;
          }
          break;
  }
}