function generatePosts()
{
    let postsHTML = ""

    postData.forEach(post => {

        postsHTML += `
        <div class="card mt-3" id="bootstrap-override">
            <img src="${post.imagePath}" class="card-img-top">
            <div class="card-body">
                <p class="mb-0">
                    <a href="${post.postURL}" class="fs-4 text-decoration-none">${post.title}</a>
                </p>
                <p class="post-date m-0 p-0">
                    ${post.author} - ${post.date}
                </p>
                <p class="mt-2">
                    ${post.blurb}
                </p>
                <p class="m-0">
                    <a href="${post.postURL}">Continue reading</a>
                </p>
            </div>
        </div>`
    })


    return postsHTML
}

document.getElementById('postsRoot').innerHTML = generatePosts()