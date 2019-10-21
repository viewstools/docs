# Known CSS Ticks

Here we collect useful CSS tricks we use to solve known issues in layouts we design.

1. If you want to keep the width of the centred layout within a specific width
   add `maxWidth` and some pixel value, like 600, on the container, but also add
   `width 100%` to the same container to prevent the container's content collapsing
   ![Center with the maxWidth and resizable with flex, no media query](images/centerMaxWidth.png)
   
2. Ellipsis
   
   Add these props to Text block
   ```
   textOverflow ellipsis
   whiteSpace nowrap
   overflowX hidden
   ```
   to get this ![Example](images/ellipsisExample.png)
   
   **the Text block or a wrapping parent block needs to have a `width` set for the ellipsis to work**
   
   you can put the ellipsis on the start of the Text block with
   `direction rtl`
   
