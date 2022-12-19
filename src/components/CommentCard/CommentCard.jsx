import './CommentCard.css';

export default function CommentCard({ comment }) {
  const date = new Date(comment.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
  return(
    <div>
      <div>
        {comment.content}
      </div>
      <p>Posted by {comment.user} on {date.toLocaleDateString(undefined, dateOptions)}</p>
    </div>
  );
}