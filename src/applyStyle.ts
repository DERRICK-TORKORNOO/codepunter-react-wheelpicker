export function applyStyle(
    scrollerId: string,
    itemInSelectorArea: number,
    dataLen: number,
    style: "flat" | "wheel" | "default" = "flat"
  ): void {
    switch (style) {
      case "flat":
        console.log("Flat style applied");
  
        let topFade = 1;
        for (let i = itemInSelectorArea; i >= 0; i--) {
          const element = document.getElementById(`${scrollerId}-scroll-item--${i}`);
          if (element) {
            element.style.transition = "all 0.3s";
            element.style.opacity = `${topFade}`;
            topFade -= 0.333333;
          }
        }
  
        let bottomFade = 0.66666;
        for (let i = itemInSelectorArea + 1; i < dataLen; i++) {
          const element = document.getElementById(`${scrollerId}-scroll-item--${i}`);
          if (element) {
            element.style.transition = "all 0.3s";
            element.style.opacity = `${bottomFade}`;
            bottomFade -= 0.33333;
          }
        }
        break;
  
      case "wheel":
        console.log("Wheel style applied");
  
        const selectorArea = document.getElementById(`${scrollerId}--scroll-selector-area`);
        if (selectorArea) {
          selectorArea.style.border = "unset";
        }
  
        let topRotate = 45;
        let topWidth = 97;
        let topMarginBottom = 5;
        topFade = 0.6666;
  
        for (let i = itemInSelectorArea - 1; i >= 0; i--) {
          const element = document.getElementById(`${scrollerId}-scroll-item--${i}`);
          if (element) {
            element.style.transition = "all 0.3s";
            element.classList.add("wheel-item");
            element.style.transform = `rotateX(${topRotate}deg)`;
            element.style.width = `calc(${topWidth}% - 10px)`;
            element.style.marginTop = `${topMarginBottom}px`;
            element.style.opacity = `${topFade}`;
  
            topRotate += 20;
            topWidth -= 3;
            topMarginBottom += 19;
            topFade -= 0.333333;
          }
        }
  
        const selectedItem = document.getElementById(`${scrollerId}-scroll-item--${itemInSelectorArea}`);
        if (selectedItem) {
          selectedItem.classList.add("wheel-item");
          selectedItem.style.transform = "rotateX(0deg)";
          selectedItem.style.width = "calc(99% - 10px)";
          selectedItem.style.marginTop = "unset";
          selectedItem.style.marginBottom = "unset";
          selectedItem.style.opacity = "1";
          selectedItem.style.transition = "all 0.3s";
        }
  
        let bottomRotate = 45;
        let bottomWidth = 97;
        let bottomMarginTop = 5;
        bottomFade = 1;
  
        for (let i = itemInSelectorArea + 1; i < dataLen; i++) {
          const element = document.getElementById(`${scrollerId}-scroll-item--${i}`);
          if (element) {
            element.style.transition = "all 0.3s";
            element.classList.add("wheel-item");
            element.style.transform = `rotateX(-${bottomRotate}deg)`;
            element.style.width = `calc(${bottomWidth}% - 10px)`;
            element.style.marginTop = `-${bottomMarginTop}px`;
            element.style.opacity = `${bottomFade}`;
  
            bottomRotate += 20;
            bottomWidth -= 3;
            bottomMarginTop += 19;
            bottomFade -= 0.33333;
          }
        }
        break;
  
      default:
        console.log("Default style applied");
  
        topFade = 1;
        for (let i = itemInSelectorArea; i >= 0; i--) {
          const element = document.getElementById(`${scrollerId}-scroll-item--${i}`);
          if (element) {
            element.style.transition = "all 0.3s";
            element.style.opacity = `${topFade}`;
            topFade -= 0.333333;
          }
        }
  
        bottomFade = 0.66666;
        for (let i = itemInSelectorArea + 1; i < dataLen; i++) {
          const element = document.getElementById(`${scrollerId}-scroll-item--${i}`);
          if (element) {
            element.style.transition = "all 0.3s";
            element.style.opacity = `${bottomFade}`;
            bottomFade -= 0.33333;
          }
        }
        break;
    }
  }
  