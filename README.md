# grb

## Usage

1) Write post in the post-data.js file
   - Copy and paste the template below into the post-data.js file.
2) Fill out the data in the post-data.js post fields.
   - Make sure the post ID is unique.
3) Make a new HTML page for the post in the `/posts` directory.
   - Copy the template from below into a new `.html` file.
4) Add the title field in the new HTML page.
5) Add the post ID to the `injectPost()` call at the bottom of the HTML page.
6) Commit to GitHub, wait for the build, and done!

### Post Data Template

```js
// Paste this into post-data.js and fill out TODOs

post_0001: {
    title: "TODO: Title here",
    blurb: "TODO: Blurb here - generally first paragraph of post",
    imagePath: "TODO: Update path",
    postURL: "TODO: Update URL",
    date: "TODO: Human readable date",
    author: "Chris",
    body: `
        TODO: Write post in HTML here
    `
}
```

## Post Data Example

```js
post_0001: {
    title: "Days 1 & 2 – Honeymoon in Japan – 2019",
    blurb: "Back in June was our wedding. As one would expect we took off on a honeymoon the next day. About a year before when we were planning the wedding and honeymoon, we stumbled upon some relatively cheap plane tickets to Narita airport outside Tokyo. We both thought a trip to Japan would be amazing, so we jumped at the opportunity and built our trip around the flights. We couldn’t have been happier with the outcome.",
    imagePath: "./img/post-1/jp-honeymoon-1.jpg",
    postURL: "./posts/post-1.html",
    date: "May 13, 2020",
    author: "Chris",
    body: `
        <p>Back in June was our wedding. As one would expect we took off on a honeymoon the next day. About a year before when we were planning the wedding and honeymoon, we stumbled upon some relatively cheap plane tickets to Narita airport outside Tokyo. We both thought a trip to Japan would be amazing, so we jumped at the opportunity and built our trip around the flights. We couldn’t have been happier with the outcome.</p>
        <p>While I’ve traveled internationally many times thanks to my parents letting us kids tag along, this trip would be Vista’s first international trip and I wanted to make sure she enjoyed travel as much as I do. As you’ll see, this meant stopping for a lot of ice cream. Something Vista can’t resist.</p>
        <p>Because we were trying to keep the cost of the trip down, we did a lot of low cost activities and walked as much as we could (although most of the walking ended up being a result of not being able to figure out how to use the bus system). This took us to some interesting places and overall we had a great time.</p>
        <div class="mb-2">
            <img src="../img/post-1/jp-honeymoon-2.jpg" class="img-fluid rounded-2 custom-img-border">
            <span class="image-caption">Vista with her Blue Bunny ice cream sandwich. Courtesy Singapore Airlines.</span>
        </div>
    ` << Note the back-tick.
```

### Post HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../img/site/grb-flavicon-2-transparent-background-180x180.png" type="image/png">
    <link rel="stylesheet" href="../style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous" defer></script>
    <title>TODO</title>
</head>
<body>
    <div class="container mb-3" style="max-width: 800px;">

        <!-- NAVBAR -->
        <nav class="navbar navbar-expand-lg rounded">
            <div class="container-fluid ms-0 ps-0" id="bootstrap-override">
                
                <a class="navbar-brand text-decoration-none fs-3" href="../index.html">Golden Ramen Bowl</a>
                
                <button class="navbar-toggler btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="../index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/archives.html">Archives</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/about.html">About</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
                
        <!-- MAIN SECTION -->
        <div class="row gx-3">
            <!-- POST -->
            <div class="col-sm-8 ps-3 pe-3" id="bootstrap-override">
                <div id="postRoot"></div>
            </div>
            <!-- SIDEBAR -->
            <div class="col d-none d-sm-block">
                <img src="../img/site/about-us.jpg" class="img-fluid rounded-2 mb-1 custom-img-border">
                <div>
                    We&apos;re Chris & Vista. Two Computer Science students with a love for travel and the great outdoors. After walking 10 miles a day on our honeymoon in Japan and biking the 38-mile Sella Ronda in the Dolomites a month later, we’re itching for our next adventure.
                </div>
            </div>
        </div>
        
    </div>
</body>
</html>
<script src="./post-data.js"></script>
<script src="../script.js" defer></script>
<script>
    window.onload = () => {
        document.getElementById('postRoot').innerHTML = injectPost('TODO')
        // document.getElementById('postRoot').innerHTML = injectPost('post_0001') // Example
    }
</script>
```