# Grid System

## Codepen Practice
- [GridSystem MobileFirst Span](https://codepen.io/tolgatopkac/pen/zYaePNR)
- [Grid System Figure/Figcaption](https://codepen.io/tolgatopkac/pen/ZERwaVx)
- [Grid System Animation](https://codepen.io/tolgatopkac/pen/JjZxMPV)
- [Grid Area](https://codepen.io/tolgatopkac/pen/zYaepzQ)
- [Card Layout](https://codepen.io/tolgatopkac/pen/rNKRObv)

 ❗ You were writing your CSS the best way to write it is the way that you understand it. You don't have to leverage all of the shortcuts and all of the additional syntax and all the rest of it. If you don't understand your own code, there are problems.

    wrapper { 
    	display: grid;
    	grid-template-columns : 25% 25% 25% 25%;
    } 
 
 // Alternative

    wrapper { 
        	display: grid;
        	grid-template-columns : repeat(4, 1fr)
        } 

❗ One of the really interesting things that grid does that flexbox does not do is grid allows your cells to overlap. 