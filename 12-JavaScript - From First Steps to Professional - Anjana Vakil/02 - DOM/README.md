# DOM

## Finding Elements in a Web Page 
- `document` ( the entire HTML document )
- `document.title` ( the page (document) title )
- `document.body` ( the `body` element )
- `document.body.children`  ( all the elements within the `body` )
- `document.getElementById("board")`  ( the (first) element with `id="board"` ) 
- `document.querySelector("#board")`
- `document.getElementsByTagName("h1")` all the `h1` elements
- `document.querySelectorAll("h1")` all the `h1` elements
- `document.getElementsByClassName("player")`  all the elements with `class="player"`
- `document.querySelectorAll("h1")` 

## .length & .textContent

 The number of elements with `class="player"`
- `document.getElementsByClassName("player").length`
- `document.querySelectorAll(".player").length`

The text inside the element with `id="p1-name"`
- `document.getElementById("p1-name").textContent"`

## Changing a Web Page

- `document.title = "My Page";`  change the page title
- `document.getElementById("p1-name").textContent = "Tolga"`  - replace the text of the `#p1-name` element 
- `document.getElementById("p1-name").append(" & friends");` - add to the end of the element's current text

