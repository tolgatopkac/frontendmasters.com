# CSS Grid

## Codepen Practices
- [Grid](https://codepen.io/tolgatopkac/pen/QWxYvpR)
- [Grid Span](https://codepen.io/tolgatopkac/pen/dyKaWed)

❗  Gap gets applied BETWEEN rows/columns.
Why into CSS specification.

- Built into CSS specification.
- No "row" markup required.
		- Mind the parents and children.
- Grid is designed to work in 2 dimensions.
~~- "Use Flexbox for UI elements, but use Grid for major layout."~~
- **Use Flexbox and Grid where they make the most sense.**
![enter image description here](https://i.ibb.co/k8GQs3g/12.png)


![enter image description here](https://i.ibb.co/2SwSJp8/41.png)

- Flexbox had just a few types of properties that we needed to leverage to make a web page layout, Grid actually has several different types of syntax potentially to do the same thing.

![enter image description here](https://i.ibb.co/1dm3jNG/41.png)

![enter image description here](https://i.ibb.co/xfmvGVq/21.png)

![enter image description here](https://i.ibb.co/kSBvW3C/251.png)

## Additional Syntax 
- Span notations 
- Named lines ( instead of numbers )
- Named grid template areas ( headers, footer, etc )
- Tons of shorthand vs. longhand for properties
- **This is one of the most confusing parts of Grid**
[Complete Guilde to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
[CSS Grid Garden](https://cssgridgarden.com/)

## Tracking parents ( containers) and children (items)
A single element may be
	- A grid item AND a grid container
	- A flex item AND a flex container
	- A flex item AND a grid container
	- A grid item AND a flex container
![enter image description here](https://i.ibb.co/HNz3qs6/251.png)
