"use strict";

(function () {
  return;

  window.onload = main;

  function main() {
    initPosts();
  }

  function initPosts() {
    var postsContainer = document.getElementById("posts-container"),
      postTemplate = getPostTemplate(),
      posts = getPosts();

    for (var post of posts) {
      let postElem = postTemplate.cloneNode(true);
      let title = postElem.querySelector(".card-title");
      title.textContent = post.title;
      let text = postElem.querySelector(".card-text");
      text.textContent = post.content;
      postsContainer.appendChild(postElem);
    }

    // TODO: Should query the post template HTML element from back-end.
    function getPostTemplate() {
      var postTemplate = document.getElementById("post-template");
      postTemplate.remove();
      postTemplate.classList.remove("visually-hidden");
      return postTemplate;
    }

    // TODO: Should query the posts from back-end.
    function getPosts() {
      var posts = [
        {
          title: "Travling in Taichung",
          content:
            "Adipisicing deserunt veniam duis fugiat aute aliqua occaecat reprehenderit in duis ullamco labore aliqua amet. Elit do consequat mollit consectetur laboris. Nisi esse laborum culpa duis sunt elit sint officia laborum reprehenderit ea dolore pariatur ea. Consequat minim magna incididunt culpa fugiat amet labore irure ullamco. Amet exercitation velit eiusmod culpa fugiat est amet officia magna.",
        },
        {
          title: "Travling in Taichung 2",
          content:
            "Adipisicing deserunt veniam duis fugiat aute aliqua occaecat reprehenderit in duis ullamco labore aliqua amet. Elit do consequat mollit consectetur laboris. Nisi esse laborum culpa duis sunt elit sint officia laborum reprehenderit ea dolore pariatur ea. Consequat minim magna incididunt culpa fugiat amet labore irure ullamco. Amet exercitation velit eiusmod culpa fugiat est amet officia magna.",
        },
        {
          title: "Travling in Taichung 3",
          content:
            "Adipisicing deserunt veniam duis fugiat aute aliqua occaecat reprehenderit in duis ullamco labore aliqua amet. Elit do consequat mollit consectetur laboris. Nisi esse laborum culpa duis sunt elit sint officia laborum reprehenderit ea dolore pariatur ea. Consequat minim magna incididunt culpa fugiat amet labore irure ullamco. Amet exercitation velit eiusmod culpa fugiat est amet officia magna.",
        },
      ];
      return posts;
    }
  }
})();
