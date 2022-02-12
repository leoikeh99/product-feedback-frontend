import cookie from "cookie";

export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : "");
}

export function getSortedData(active, activeTag, feedbacks) {
  if (activeTag === "All") {
    if (active === "Most Comments" || active === "Least Comments") {
      return feedbacks.sort((a, b) =>
        active === "Least Comments"
          ? a.attributes.comments.data.length +
            a.attributes.replies.data.length -
            (b.attributes.comments.data.length +
              b.attributes.replies.data.length)
          : b.attributes.comments.data.length +
            b.attributes.replies.data.length -
            (a.attributes.comments.data.length +
              a.attributes.replies.data.length)
      );
    } else {
      return feedbacks.sort((a, b) =>
        active === "Least Upvotes"
          ? a.attributes.upvotes.length - b.attributes.upvotes.length
          : b.attributes.upvotes.length - a.attributes.upvotes.length
      );
    }
  } else {
    if (active === "Most Comments" || active === "Least Comments") {
      return feedbacks
        .filter((feedback) => feedback.attributes.tag === activeTag)
        .sort((a, b) =>
          active === "Least Comments"
            ? a.attributes.comments.data.length +
              a.attributes.replies.data.length -
              (b.attributes.comments.data.length +
                b.attributes.replies.data.length)
            : b.attributes.comments.data.length +
              b.attributes.replies.data.length -
              (a.attributes.comments.data.length +
                a.attributes.replies.data.length)
        );
    } else {
      return feedbacks
        .filter((feedback) => feedback.attributes.tag === activeTag)
        .sort((a, b) =>
          active === "Least Upvotes"
            ? a.attributes.upvotes.length - b.attributes.upvotes.length
            : b.attributes.upvotes.length - a.attributes.upvotes.length
        );
    }
  }
}
