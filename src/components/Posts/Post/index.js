import { Link } from "react-router-dom";

const Post = (props) => {
  let { postId, post, postedBy, commentsCount, likesCount } = props.data;
  let { firstName, lastName } = postedBy;
  return (
    <div>
      <Link to={`/postdetails/${postId}`}>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="card-body mt-2 ">
              <div className="row">
                <div className="col-md-4 ">
                  <img
                    src="default-profile-pic.jpg "
                    alt="Logo"
                    height="80px"
                    width="80px"
                  />
                  <div className="mr-8">
                    {firstName}
                    {lastName}
                  </div>
                </div>
                <div>
                  <h2>{post}</h2>
                  <br></br>
                  <br></br>
                  <h3 className="align-right pr-5">
                    {likesCount} Like {commentsCount} Comments
                  </h3>
                </div>
                <div className="col-lg-2"></div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Post;
