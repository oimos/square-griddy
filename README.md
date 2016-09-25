# Square-Griddy
JS plugin which shows square grids which works for responsive pages. You can set breakpoints as you like.

[Demo Page](https://stoneshower.github.io/square-griddy/)


###How to use
Please load the following files

*square-griddy.css

*jquery (v1.7+)

*square-griddy.js

*reset.css (optional)

1. Create index.html file
2. If the page is not long enough to show scroll bar, please add make it longer to show scrollbar. (I think most of the cases, you don't need to do this)
3. Add the following html inside <body><br>
`<div id="sq-griddy">`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div id="sq-griddy-inner">`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div style="background: #DA425F"></div>`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div style="background: #D72767"></div>`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div style="background: #36A690"></div>`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div style="background: #D9B777"></div>`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div style="background: #D96A69"></div>`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div style="background: #DABA5F"></div>`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div style="background: #D6D767"></div>`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div style="background: #326390"></div>`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div style="background: #D93577"></div>`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div style="background: #D9AC69"></div>`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`</div>`<br>
`</div>`

4. You can add setting inside html tag as following;<br>
`<div id="sq-griddy" `<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`data-defaultSelector='#sq-griddy-inner'`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`data-griddyColLength='18'`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`data-griddyResponsiveSetting='[`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`{ "breakpoint":1024, "collength":3 },`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`{ "breakpoint":767, "collength":2 } ]'>`<br>...

That's it! 
If you have questions or feedback, please contact me. 
Thanks!
