import React from "react";

function Article(props) {
  let base_url = "https://reddit.com";

  // Check if props.article.posts is defined and an array
  if (!props.article.posts || !Array.isArray(props.article.posts)) {
    return null; // or render an appropriate fallback
  }

  return (
    <div className="subreddit-bar">
      <h3 className="subreddit-title">
        {props.article.subreddit_name_prefixed}
      </h3>
      <div className="subreddit-posts">
        {props.article.posts.map((post) => (
          <a
            key={post.id}
            href={base_url + post.permalink}
            target="_blank"
            className="subreddit-post"
            rel="noreferrer"
          >
            <span className="subreddit-post-title">{post.title}</span>
            <span className="subreddit-post-score">Score: {post.score}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Article;
