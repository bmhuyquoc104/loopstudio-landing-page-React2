# Project noted:

1. ## useMediaQuery custom hook:
    This hook is used to re render the website by the actual media screen of the devices. For example, mobile and desktop version will have unique design

    Example:
     ```js
     export default function useMediaQuery(query) {

     const [matches, setMatches] = useState(false);

     useEffect(() => {
     const media = window.matchMedia(query);
     if (media.matches !== matches) {
        setMatches(media.matches);
     }
     const listener = () => {
        setMatches(media.matches);
     };
     media.addEventListener('change',listener);
     return () => media.removeEventListener('change',listener);
     }, [matches, query]);
     return matches;
   }  
   ```

2.  ## React provide tenary render
    ```js
    {isCondition ? (render A) : (renderB)}
    ```
    
3. ## WhileInView
    -Use to show animation when the element is in the view 
    - This code used to set the animation only occur once since the view is first seen.
    ```js
    viewport={{ once: true }} 
    ```

4. ## Absolute, Relative

- Another approach for render overflow elements is set the container for these elements, then set the position for both container and elements, then set the correct position for each element

5. ## Animate Presence

- To animate different elements, set the unique key for each element

6. ## Motion

- In styled.js, can use 
   ```js
  styled(motion.div)
to set animation for that element
