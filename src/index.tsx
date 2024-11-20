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
}) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const scrollTimer = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    if (!scrollerRef.current) return;

    const adjustedHeight = animation === "wheel" ? 40 : height;
    const scrollTop = scrollerRef.current.scrollTop;
    const itemInSelectorArea = Math.floor(
      (scrollTop + adjustedHeight / 2) / adjustedHeight
    );

    if (itemInSelectorArea < data.length) {
      // Highlight the selected item
      data.forEach((_, index) => {
        const item = document.getElementById(
          `${scrollerId}-scroll-item--${index}`
        );
        if (item) {
          item.classList.toggle(
            "selected-time",
            index === itemInSelectorArea
          );
        }
      });
    }

    // Apply styles
    applyStyle(scrollerId, itemInSelectorArea, data.length, animation);

    // Prevent rapid scrolling adjustments
    if (scrollTimer.current) clearTimeout(scrollTimer.current);

    scrollTimer.current = setTimeout(() => {
      const y = itemInSelectorArea * adjustedHeight;
      scrollerRef.current?.scrollTo({ top: y, behavior: "smooth" });
      updateSelection(itemInSelectorArea);
    }, 150);
  }, [height, animation, data, scrollerId, updateSelection]);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) return;

    const adjustedHeight = animation === "wheel" ? 40 : height;

    // Scroll to the default selection
    const y = defaultSelection * adjustedHeight;
    scroller.scrollTo({ top: y, behavior: "smooth" });

    // Add scroll event listener
    scroller.addEventListener("scroll", handleScroll);
    return () => {
      scroller.removeEventListener("scroll", handleScroll);
    };
  }, [defaultSelection, height, animation, handleScroll]);

  const renderListItems = () => {
    const adjustedHeight = animation === "wheel" ? 40 : height;
    return data.map((item, index) => (
      <div
        key={index}
        className="scroll-item-container"
        style={{ minHeight: adjustedHeight, maxHeight: adjustedHeight }}
      >
        <div
          id={`${scrollerId}-scroll-item--${index}`}
          className={`scroll-item ${index === defaultSelection ? "selected-time" : ""}`}
          style={{
            fontSize,
            minHeight: adjustedHeight,
            maxHeight: adjustedHeight,
          }}
          onClick={() => {
            const y = index * adjustedHeight;
            scrollerRef.current?.scrollTo({ top: y, behavior: "smooth" });
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
