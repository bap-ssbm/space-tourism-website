# Frontend Mentor -space-tourism-website


### Links

- Solution URL: https://github.com/bap-ssbm/space-tourism-website
- Live Site URL: https://bap-ssbm.github.io/space-tourism-website/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- framer-motion
- react-routes



### What I learned

first project with framer-motion, and react-routing so i learned alot about both. I learned that I have to add key values to each child element inside a AnimatePresence tag.
I learned how to coniditionally run different animations. I also learned that you can't animate the exit of arrays, exit animations only animate once elements leave. Not when the inner html changes. 
So you have to wrap each of them conditionally. Kind of makes the code alittle bit more complicated, but its worth the cool user experience.

```html/react
const imgVariant = {
    hidden: {
        scale: 0,
        opacity: 0,
        x: -300
    },
    visible: {
        scale: 1,
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.8,
            ease: "easeIn",
            type: 'spring' // adjust this value as needed
        }
    },
    exit: {
        scale: 0,
        opacity: 0,
        x: 200,
        transition: {
            duration: 0.9,
            ease: "easeInOut" // adjust this value as needed
        }
    }
}

         <div className="planet-wrapper dest-section">
                        <AnimatePresence mode='wait'>
                            {active == 0 && (<motion.img drag dragConstraints={{left:0, top:0, right:0, bottom:0 }} key={0} variants={imgVariant} initial="hidden" animate="visible" exit="exit" src={destinations[0].images.png} />)}
                            {active == 1 && (<motion.img drag key={1} dragConstraints={{left:0, top:0, right:0, bottom:0 }} variants={imgVariant} initial="hidden" animate="visible" exit="exit" src={destinations[1].images.png} />)}
                            {active == 2 && (<motion.img drag key={2} dragConstraints={{left:0, top:0, right:0, bottom:0 }} variants={imgVariant} initial="hidden" animate="visible" exit="exit" src={destinations[2].images.png} />)}
                            {active == 3 && (<motion.img drag key={3} dragConstraints={{left:0, top:0, right:0, bottom:0 }} variants={imgVariant} initial="hidden" animate="visible" exit="exit" src={destinations[3].images.png} />)}
                        </AnimatePresence>
                    </div>

        Im proud of this little snippet here from react, this is the page for destination, in the website. It rotates the planets in and out, in the carousel. I thought I made the animation look really cool
```
```css
body {
    min-width: fit-content;
    margin: 0;
    font-size: 16px;
    background-color: black;
    color: white;
    font-family: 'Barlow', sans-serif;
    box-sizing: border-box;
    min-height: 100vh;
}

#root {
    width: 100%;
    height: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    min-height: 100vh;
}

    im proud of the way i mixined in min-width and flex-grow to adjust the height and width of the body and #root, to make the webpage more dynamic with the viewport and make it look more clean.
```
```js
const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useEffect(() => {
      function handleResize() {
          setViewportWidth(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
  }, []);

  const location = useLocation();
  console.log(location.pathname)

this wasnt really a js heavy project, but this viewport calculation function, helped with making the website more dynamic, and will continue to use this for more future websites that i make.

### Continued development
I want to learn more about route 
