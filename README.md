# WoW-react
WoW.js with react. [**DEMO**](https://nenadv91.github.io/WoW-react/#/)


1. `npm install wowjs`
2. Include `animate.css` in index.html
3. `import {WOW} from 'wowjs'`


```javascript
componentDidMount() {
    const wow = new WOW({
        offset: 100,
        mobile: false,
        live: true
    })

    wow.init();
}
```
