import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

function AboutUs(props) {
  return (
    <section className={classes.posts}>
      <h1>About Us</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AboutUs;
