# Quirks

## Inline text that automatically wraps

```views
ThisTextWillWrapIfItCanBecauseItsInline is Horizontal
display inline
Text
display inline
text first part

Text
display inline
text second part
```

## A print edge case
If you need to print a page, and you don’t want the page
to break in between an element there’s a CSS property for that called `pageBreakInside avoid`,
however, it only works with block elements, so you need to do:
```views
Vertical
display block
WontBreak is Vertical
display block
pageBreakInside avoid
Text
text I won't break because of display block and pageBreakInside avoid
Text
text I won't break because of display block and pageBreakInside avoid
```
