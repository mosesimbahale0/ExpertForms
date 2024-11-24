import Comments from "./comments/Comments"
import AddComent from "./comments/AddComent"

export default function ComentSection() {
  return (
    <div className="flex flex-col gap-4 bg-secondary p-4 shadow-lg">
      <AddComent />
      <Comments />
    </div>
  )
}
