# Flexbox Grid System

# Codepen Practices 
- [1 Demonstrating Flexbox Properties](https://codepen.io/tolgatopkac/pen/eYKQwjP)
- [2a-begin Flexbox Grid System](https://codepen.io/tolgatopkac/pen/eYKQqyO)
- [2b-begin Flexbox Grid System](https://codepen.io/tolgatopkac/pen/gOKQVKz)
- [2c-begin Flexbox Grid System](https://codepen.io/tolgatopkac/pen/abKQeaZ)


![enter image description here](https://i.ibb.co/n3xXV0r/124.png)

    .row {
	    display: flex;
	    flex-flow: row wrap;
	    justify-content: center;
	   }
	   
	.col{ 
		/* desktop */
		flex-basis: 24%;
		
		/* tablet */ 
		flex-basis: 48%;
		
		/*phone */
		flex-basis: 98%;
	}		

### Rearranging the columns

    .col-push-1 {
	    order: 2;
	}
	 .col-pull-3 {
		order:1;
	}
	    
