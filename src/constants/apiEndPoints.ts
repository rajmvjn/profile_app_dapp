let base_url = "http://localhost:8080/";
if (process.env.NODE_ENV === "production") {
  base_url = "https://profile-app-mw.herokuapp.com/";
}

const API_ENDPOINTS = {
  COMMENTS_API: "/user/comment",
  USER_AUTH: "/user/login",
  GITHUB_PROFILE: "https://github.com/rajmvjn",
  LINKEDIN_PROFILE: "https://www.linkedin.com/in/rajesh-vijayan-294841190/",
  TWITTER_PROFILE: "https://twitter.com/rajmvjn",
  API_BASE_URL: base_url,
};

export default API_ENDPOINTS;
