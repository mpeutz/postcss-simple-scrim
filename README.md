# Simple scrim postcss plugins

This PostCSS plugin lets you add very simple scrim style gradients. It is base on the awesome and more powerful [postcss-easing-gradients](https://github.com/larsenwork/postcss-easing-gradients) plugin by [Andreas Larsen](https://github.com/larsenwork). I didn't need the color and easing control that Andreas plugin offered, and found the syntax hard to remember. Thous the plugin was simplifed making it easier to use.

#### Usage
---

background: scrim(&lt;direction&gt;, &lt;distance&gt;, &lt;opacity&gt;);

- **@direction** can take any linear-gradient direction property _e.g. to left, 32deg, 1.5rads, 0.25turns ..._
- **@distance** can take any css length property _e.g. 100px, 60%, 6em, ..._
- **@opacity** sets the starting opacity of the scrim. _(the scrim will always end with a transparent color-stop)_

---

```css
/* input.css */
background-image: scrim(to bottom, 100px, 1);

/* output.css */
background-image:
    linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0.95) 7.5px,
        rgba(0, 0, 0, 0.89) 14.6px,
        rgba(0, 0, 0, 0.84) 20.8px,
        rgba(0, 0, 0, 0.79) 26.3px,
        rgba(0, 0, 0, 0.74) 31.2px,
        rgba(0, 0, 0, 0.68) 35.7px,
        rgba(0, 0, 0, 0.63) 39.9px,
        rgba(0, 0, 0, 0.58) 44px,
        rgba(0, 0, 0, 0.53) 48px,
        rgba(0, 0, 0, 0.47) 51.9px,
        rgba(0, 0, 0, 0.42) 55.8px,
        rgba(0, 0, 0, 0.37) 59.9px,
        rgba(0, 0, 0, 0.32) 64.1px,
        rgba(0, 0, 0, 0.26) 68.6px,
        rgba(0, 0, 0, 0.21) 73.5px,
        rgba(0, 0, 0, 0.16) 79px,
        rgba(0, 0, 0, 0.11) 85.2px,
        rgba(0, 0, 0, 0.05) 92.3px,
        rgba(0, 0, 0, 0)
    );
```