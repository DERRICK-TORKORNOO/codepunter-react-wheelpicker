import React, { useEffect, useRef, useCallback } from "react";
import "./index.css";
import { applyStyle } from "./applyStyle";

type WheelPickerProps = {
  height?: number; // Height of each item
  animation?: "flat" | "wheel"; // Animation style
  data: string[]; // Array of items to display
  parentHeight?: number; // Height of the parent container
  fontSize?: number; // Font size of items
  defaultSelection?: number; // Default selected item index
  updateSelection: (index: number) => void; // Callback to update the selected item
  scrollerId: string; // Unique ID for the scroller
  selectedBackgroundColor?: string; // Background color for the selected item
  selectedTextColor?: string; // Text color for the selected item
  unselectedTextColor?: string; // Text color for unselected items
  selectedItemStyles?: React.CSSProperties; // Styles applied to the selected item
  disableTextHighlight?: boolean; // Disable text highlighting
};

const WheelPicker: React.FC<WheelPickerProps> = ({
  height = 40,
  animation = "flat",
  data,
  parentHeight,
  fontSize = 16,
  defaultSelection = 0,
  updateSelection,
  scrollerId,
  selectedBackgroundColor = "blue",
  selectedTextColor = "white",
  unselectedTextColor = "black",
  selectedItemStyles = {}, // Default empty styles for selected items
  disableTextHighlight = false, // Default to allow text highlighting
}) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const finishedScrolling = useCallback(
    (selectorAreaHeight: number, id: string, itemInSelectorArea: number) => {
      updateSelection(itemInSelectorArea);
      const fix = document.getElementById(id);
      const y = itemInSelectorArea * selectorAreaHeight - 1;
      if (fix) {
        fix.scroll({
          top: Math.max(y, 0),
          behavior: "smooth",
        });
      }
    },
    [updateSelection]
  );

  const handleScroll = useCallback(
    (e: Event) => {
      if (!scrollerRef.current) return;

      const adjustedHeight = animation === "wheel" ? 40 : height;
      const scrollTop = (e.target as HTMLDivElement).scrollTop;

      const itemInSelectorArea = Math.floor(
        (scrollTop + adjustedHeight / 2) / adjustedHeight
      );

      if (itemInSelectorArea < data.length) {
        // Update styles for selected and unselected items
        data.forEach((_, index) => {
          const item = document.getElementById(
            `${scrollerId}-scroll-item--${index}`
          );
          if (item) {
            const isSelected = index === itemInSelectorArea;
            item.style.backgroundColor = isSelected
              ? selectedBackgroundColor
              : "transparent";
            item.style.color = isSelected
              ? selectedTextColor
              : unselectedTextColor;

            // Apply additional styles for selected items
            if (isSelected) {
              Object.entries(selectedItemStyles).forEach(([key, value]) => {
                (item.style as any)[key] = value;
              });
            } else {
              // Reset styles for unselected items
              Object.keys(selectedItemStyles).forEach((key) => {
                (item.style as any)[key] = "";
              });
            }
          }
        });
      }

      applyStyle(scrollerId, itemInSelectorArea, data.length, animation);

      // Prevent rapid scrolling adjustments
      if (scrollTimer.current) clearTimeout(scrollTimer.current);

      scrollTimer.current = setTimeout(() => {
        finishedScrolling(adjustedHeight, scrollerId, itemInSelectorArea);
      }, 150);
    },
    [
      animation,
      data,
      height,
      scrollerId,
      selectedBackgroundColor,
      selectedTextColor,
      unselectedTextColor,
      selectedItemStyles,
      finishedScrolling,
    ]
  );

  useEffect(() => {
    const scroller = document.getElementById(scrollerId);
    if (!scroller) return;

    const adjustedHeight = animation === "wheel" ? 40 : height;

    // Scroll to default selection
    const y = defaultSelection * adjustedHeight - 1;
    scroller.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });



    // Use requestAnimationFrame to apply styles after the scroll operation
    requestAnimationFrame(() => {
      const defaultSelectedItem = document.getElementById(
        `${scrollerId}-scroll-item--${defaultSelection}`
      );

      if (defaultSelectedItem) {
        defaultSelectedItem.style.backgroundColor = selectedBackgroundColor;
        defaultSelectedItem.style.color = selectedTextColor;

        // Apply custom styles for the selected item
        Object.entries(selectedItemStyles).forEach(([key, value]) => {
          (defaultSelectedItem.style as any)[key] = value;
        });
      }
    });

    // Attach scroll event listener
    scroller.addEventListener("scroll", handleScroll);
    return () => {
      scroller.removeEventListener("scroll", handleScroll);
    };
  }, [
    defaultSelection,
    height,
    animation,
    scrollerId,
    selectedBackgroundColor,
    selectedTextColor,
    selectedItemStyles,
    handleScroll,
  ]);

  const renderListItems = () => {
    const adjustedHeight = animation === "wheel" ? 40 : height;
    return data.map((item, index) => (
      <div
        key={index}
        className="scroll-item-container"
        style={{
          minHeight: adjustedHeight,
          maxHeight: adjustedHeight,
        }}
      >
        <div
          id={`${scrollerId}-scroll-item--${index}`}
          className={`scroll-item ${index === defaultSelection ? "selected-time" : ""
            }`}
          style={{
            fontSize: `${fontSize}px`,
            minHeight: adjustedHeight,
            maxHeight: adjustedHeight,
            backgroundColor:
              index === defaultSelection ? selectedBackgroundColor : "transparent",
            color:
              index === defaultSelection ? selectedTextColor : unselectedTextColor,
            userSelect: disableTextHighlight ? "none" : "auto", // Disable text highlight if required
          }}
          onClick={() => {
            const y = index * adjustedHeight - 1;
            scrollerRef.current?.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
            updateSelection(index);
          }}
        >
          {item}
        </div>
      </div>
    ));
  };

  const calculatedParentHeight =
    parentHeight || height * data.length || data.length * 40;

  return (
    <div
      className="scroll-select-container"
      style={{ height: calculatedParentHeight }}
    >
      <div
        className="scroll-selector-area"
        style={{
          height,
          top: `${calculatedParentHeight / 2 - height / 2}px`,
        }}
        id={`${scrollerId}--scroll-selector-area`}
      ></div>
      <div
        className="scroll-select-list"
        id={scrollerId}
        ref={scrollerRef}
        style={{
          paddingTop: `${calculatedParentHeight / 2 - height / 2}px`,
          paddingBottom: `${calculatedParentHeight / 2 - height / 2}px`,
        }}
      >
        {renderListItems()}
      </div>
    </div>
  );
};

export default WheelPicker;
