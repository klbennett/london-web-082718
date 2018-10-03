# CSS - Basics

## Main Takeaways

### - CSS is crazy good. So much fun to be had!
### - SCSS, SASS, CSS3 are all the same thing
### - .SCSS files have more functionality than .CSS and .SASS is written differently
### - in a SCSS file, classes begin with '.', id's with '#' and elements are just 'div', 'ul' etc
### - #id's are unique! .classes can be reused! adding CSS to all elements is BAD!!!!!
### - use of '!important' is not good practice
### - CSS grids are rubbish. Use Flex and/or bootstrap grids instead!

## Specificity

```scss
<!-- LEAST SPECIFIC -->

ul {
  list-style: none;
}

<!-- QUITE SPECIFIC -->

.i-am-a-class {
  color: green
}

<!-- VERY SPECIFIC -->

#i-am-an-id {
  color: red
}

<!-- UBER SPECIFIC!!!!!! -->
#i-am-an-id {
  color: red
  & li {
    color: yellow
  }
}

```

## - Add to HTML like so

```html
<div class="this-is-a-class">
  <ul id="this-is-an-id">
    <li>List Item 1</li>
  </ul>
</div>
```

