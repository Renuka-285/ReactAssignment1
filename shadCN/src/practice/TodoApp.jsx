
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"



export function TodoApp() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { text, done: false }])
      setText("")
    }
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-2">
          <Input placeholder="New todo" value={text} onChange={e => setText(e.target.value)} />
          <Button onClick={addTodo}>Add</Button>
        </div>

        {todos.map((todo, i) => (
          <div key={i} className="flex items-center gap-2">
            <Checkbox checked={todo.done} onCheckedChange={() => {
              const updated = [...todos]
              updated[i].done = !updated[i].done
              setTodos(updated)
            }} />
            <span className={todo.done ? "line-through" : ""}>{todo.text}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

// Usage Example
// <FeedbackForm />
// <ImageSlideshow />
// <TodoApp />
