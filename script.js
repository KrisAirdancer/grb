function injectPost(postID)
{
    let post = postData[postID]

    return `
        <h4 class="mb-0">${post.title}</h4>
        <p class="mb-2 post-date">${post.date}</p>
        <img src=".${post.imagePath}" class="img-fluid rounded-2 mb-3 custom-img-border">

        <div class="row">
            <div class="col">
                ${post.body}
            </div>
        </div>
    `
}