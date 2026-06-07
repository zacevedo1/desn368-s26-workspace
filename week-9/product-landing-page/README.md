## Project description

#### A responsive product landing page for Owala water bottles, cut from my own Figma design for the P4 assignment in DESN 368. It follows the required structure (header, main with five sections, footer) but keeps my own visual order: hero, then features with a best-sellers row and photo collage, then the comparison table, then an embedded video, then a contact section with a join-the-club form. Built with separate HTML, CSS, and JS files.

### Which CSS transform I implemented

I used a few transforms. The hero bottle is rotated with transform: rotate(30deg), and the water-drop graphics use scaleX(-1) and rotate(180deg) to mirror and flip them into position. The best-seller cards lift on hover with transform: translateY(-8px) scale(1.03), and the buttons nudge up with translateY(-2px) on hover and press down with translateY(2px) on click.

### Which CSS animation I implemented

Two keyframe animations, both wrapped in @media (prefers-reduced-motion: no-preference). floatBottle makes the hero bottle gently bob up and down on a 4-second infinite loop (keeping its 30deg rotation), and riseIn fades the headline, copy, and CTA up into place on load with staggered delays.

### Which table content type I chose

A product comparison table titled "Why Choose Us?" comparing Owala (FreeSip) against Yeti (Rambler) and Stanley (Quencher) across six features: drinking function, leak protection, hygiene, durability, visual identity, and average price. It has a proper <thead> and <tbody>, row headers, and wraps in a overflow-x: auto div so it scrolls horizontally on mobile.

### Challenges encountered and solutions

The footer clouds were the hardest part. The cloud strip kept landing either too far up or directly on top of the content, and my Figma file didn't give me precise dimensions to work from. I ended up fixing it myself by adjusting the positioning until it sat right (a tall repeating background pushed up with negative positioning). For other design decisions the AI got wrong, instead of relying on the single full-page export I gave it at the start, I took close-up screenshots of the specific parts I wanted, and once it could see the detail it gave me what I was going for. The header logo and footer were also tricky for the same reason, my Figma didn't specify exact sizing. One thing worth noting: the mobile nav uses a small JavaScript file for the hamburger toggle. We weren't really supposed to use JavaScript, but I left it in so I could look into how it works, which is why my project ended up as three files (HTML, CSS, and JS) rather than two.

### Key learnings

The cut-up was easier than I expected, and I think that came down to specific prompting and making the AI confirm its plan before writing any code. The biggest lesson was that close, targeted reference images get far better results than one whole-page screenshot. I also learned how layered positioning works for elements that need to break out of their section (like the clouds), and got hands-on with separating structure, style, and behavior into three files.

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







