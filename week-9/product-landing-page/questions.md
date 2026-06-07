## The 4-5 prompts you actually ran in your AI agent — including the priming message (copy-paste them).


### Prompt 1: 
 The setup. "okay so im cutting my figma into html for my P4 in DESN 368, here are all the rules i have to follow [spec]. i attached my design, can you read it and tell me how youd map it out before you write anything, i dont want code yet just confirm the structure first"

### Prompt 2: 
You are helping me cut a Figma design into a P4 landing page for DESN 368. Hold the following P4 rules in context for every reply that follows.  == P4 REQUIRED STRUCTURE == Outer:   <header id="header">     <img id="header-img" alt="...">     <nav id="nav-bar">       <a class="nav-link">...</a> (minimum 3 nav-link anchors)     </nav>   </header>   <main> ... </main>   <footer> ... </footer>  Inside <main>, exactly five sections in this order:   <section id="hero">     -- value proposition + primary CTA   <section id="video">    -- embedded video   <section id="features"> -- repeating <article> cards   <section id="data">     -- contains <table id="data-table">   <section id="contact">  -- contact form  == TAG RULES == - Use <article> for repeating self-contained items (feature cards). - Use <section> for thematic groupings with a heading. - Every <img> needs descriptive alt text (5-10 words). Never alt="". - Every form <input> has a paired <label for=id>. No placeholder-as-label. - Email input: type="email" required. - Submit button: id="submit". - Data table: id="data-table" with <thead> and <tbody>. - The data table must scroll horizontally on mobile (wrap in a div with   overflow-x: auto).  == MOTION == Wrap @keyframes animations in @media (prefers-reduced-motion: no-preference).  == MY DESIGN == I've attached screenshot(s) of my finished design. Read the layout, the sections, and the real text directly from the image(s). Do not invent content that isn't shown in the design.  == CONFIRMATION == Do not write any HTML yet. First, reply with:   1. The 5 section IDs you'll put inside <main>, in order, mapped to      the sections you can see in my design, top to bottom.   2. The required IDs/classes you'll bake into the scaffold (list them).   3. Which parts of my design you'll map to <article> tags      (the repeating feature cards).   4. Anything in my design that does NOT fit the P4 required structure      (so I know what to cut or rework on the design side).   5. Any motion notes or text labels in the design that describe      animation or hover behavior.

### Prompt 3:
The order call. "keep my own visual order, dont change it, if you have any questions or are unsure about somthing ask me"

### Prompt 4
The fidelity push (as a cluster). "i want the collage to stay the same as i designed it. For the email and phone number just put the email. Try to maintain the same visual order i have in my original file, and rather then putting random images, already have the src there so i can replace them with my orgiginal photos, once i take a look ill let you know if theres any big changes that need to be done, ill do the small ones. if you need clarifyinig on how i want it to be structured or place, ask me."

### Prompt 5:
The file split. "rather then having all of the css and html in one file, create 2 seperate files"

## One specific thing the AI got wrong and how you fixed it (2-3 sentences).
The footer with the clouds, that took me a lot of time to mess around with because it would either have it to far up or directly on the content and so after many attempts i was able to finally figure out how to fix it myself. For other design decisions it got wrong what i did is i went to my original figma file and took a screenshot of what specifically i wanted, when i first started the project i only gave it the exported image of the whole thing, so when i took close screen shots it was able to give me what i wanted. (I also know we are not supposed to have java script but i let it run anyway so i could also look into it)


## One sentence on what step in your Figma was missing or weak that made the cut-up harder than it should have been — or "my Figma was tight, the cut-up was clean," if that's true.
Everything was not as hard as i thought it was and thats probably because my prompting was very specific, and before i had it run anything i made sure it confirmed it through me first. But if i had to pick one struggle it was the header and the footer because my figma file did not provide the precise dimensions or idea of how i had it.