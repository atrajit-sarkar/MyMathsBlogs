### Themes
<!-- - [ ] [Dracula](https://draculatheme.com/)
- [ ] [Nord](https://www.nordtheme.com/)
- [ ] [Solarized Dark](https://ethanschoonover.com/solarized/)
- [ ] [Monokai](https://monokai.pro/)
- [ ] [Gruvbox](https://github.com/morhetz/gruvbox)
- [ ] [One Dark](https://github.com/atom/one-dark-syntax)
- [ ] [Material Theme](https://material-theme.site/)
- [ ] [Palenight](https://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme)
- [ ] [Cobalt2](https://github.com/wesbos/cobalt2)
- [ ] [Night Owl](https://github.com/sdras/night-owl-vscode-theme)
- [ ] [Ayu](https://github.com/dempfi/ayu)
- [ ] [SynthWave '84](https://github.com/robb0wen/synthwave-vscode)
- [ ] [Shades of Purple](https://github.com/ahmadawais/shades-of-purple-vscode)
- [ ] [Oceanic Next](https://github.com/voronianski/oceanic-next-color-scheme)
- [ ] [Tokyo Night](https://github.com/enkia/tokyo-night-vscode-theme)
- [ ] [Horizon](https://github.com/jolaleye/horizon-theme-vscode)
- [ ] [Dark+ Material](https://github.com/Equinusocio/vsc-material-theme)
- [ ] [Arc Dark](https://github.com/horst3180/arc-theme)
- [ ] [Seti UI](https://github.com/jesseweed/seti-ui)
- [ ] [Flatland](https://github.com/thinkpixellab/flatland) -->

- If you want math blog write your .md file like the foloowing code:
```markdown
@import "/BlogStyle.css";

# Title
## Subtitle
### Subsubtitle
Your Math Blog here
Formula: $x^2 + y^2 = z^2$
Block Formula: $$x^2 + y^2 = z^2$$
Bullet List:
- Item 1
- Item 2
- Item 3
Numbered List:
1. Item 1
2. Item 2
3. Item 3
Table:
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Row 1    | Row 1    |
| Row 2    | Row 2    | Row 2    |
| Row 3    | Row 3    | Row 3    |
Link: [Google](https://www.google.com)
Image: ![Image](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)
Code:

```python
def func():
    return "Hello World"
    ```

Blockquote:
> This is a blockquote
> This is a blockquote

Horizontal Rule:
---
Footnote: This is a footnote[^1]

[^1]: This is a footnote

Comment: <!-- This is a comment -->
Checklist:
- [x] Item 1 <!-- it is checked by default -->
- [ ] Item 2
- [ ] Item 3

```
- If you want to only write coding blog which doesn't invlove maths formula then don't need to include 
```markdown
@import "/BlogStyle.css";
```
- If you want to write both coding and math blog then either include or don't include depends on how to want the html to look like... Actually if you include then maths formula looks more elegant but code blocks will not look that prfessional. If you don't include then code blocks will look professional but maths formula will not look that elegant.
```markdown
@import "/BlogStyle.css";
``` 
at the top of the file.
- Unfortuanely both styling don't work same time in the setup that I made. So, you have to choose one of them.

### Examples of each of them
Here below is the example of each format so that you feel how it looks exactly.
- [Math Blog](/samples/mathblog/mathblog.html)
- [Coding Blog](/samples/codingblog/index.html)
- [math+coding Blog](/samples/math+codingblog/math+coding.html)
- [coding+math Blog](/samples/coding+mathBlog/index.html)