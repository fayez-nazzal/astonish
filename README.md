<!-- markdownlint-configure-file {
  "MD013": {
    "code_blocks": false,
    "tables": false
  },
  "MD033": false,
  "MD041": false
} -->

<div align="left">

# Astonish

<img src="https://i.imgur.com/b5KKqA6.png" align="right"
     alt="Astonish Logo" width="340" height="340" style="margin-left: 16px;">

Create presentations on the web using ReactJS and your creative developer mind 😎.
* User friendly and easy to use API.
* Full customization support with built-in **theme** for plug&play solution.
* Use whatever you want, wherever you want, want to use something like D3.js? or Three.js? No problem!
* Built-in `Preview` component, similar to the known presentation software, want to make it custom? Go on!
* Built in controls for your presentation, `ArrowControls`, `FullScreen`, also fully customizable ^^
* Share the same component on all of your slides using the `Shared` component.
* Control slides using your keyboard :)

<br />

# Getting started
To get started in the fastest way possible, use the cli tool `create-astonish-presentation`

Create a starter presentation with `typescript` and `yarn`
```
    npx create-astonish-presentation my-presentation --typescript --yarn
```

Create a demo presentation with `typescript` and `yarn`
```
    npx create-astonish-presentation my-presentation --template demo --typescript --yarn
```

Create a javascript starter presentation with `javascript` and `npm`
```
    npx create-astonish-presentation my-presentation
```

# Usage
* Wrap your presentation with the `Astonish` component
* Wrap each Slide with the `Slide` component, pay attention that the Slide component must be directly under `Astonish`
* Optionally use built-in components like `Preview`, `ArrowControls`, `FullScreen`, and `SlideNumber`
* If you want to add a component shared between all other slides, use `Shared` component

```JSX
import {
  ArrowControls,
  Astonish,
  FullScreen,
  Preview,
  Shared,
  Slide,
  SlideNumber,
} from "astonish";

function Presentation() {
  return (
    <Astonish
      slideSx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "28px",
        fontFamily: "Arial, Helvetica, Ubuntu, sans-serif",
      }}
    >
        <Slide>
            First Slide!
        </Slide>

        <Slide>
            Astonish is cool 😎
        </Slide>

        <Shared sx={{ fontSize: "24px", color: "slategray", margin: 2 }}>
            I will be visible in all slides
        </Shared>
        
        <SlideNumber />
        <Preview />
        <ArrowControls />
        <FullScreen />
    </Astonish>
  );
}

export default Presentation;

```

# API Docs
Visit the [GitHub Wiki Page](https://github.com/fayez-nazzal/Astonish/wiki) to see components docs.

# Screenshot
![Screenshot][screenshot]
     
# Feature Requests
Feel free to open an issue for any feature request!

</div>

[screenshot]: astonish.webp
