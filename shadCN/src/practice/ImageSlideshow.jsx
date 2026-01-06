
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"




export function ImageSlideshow() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtTx0NHOofpHhyJr00M0e2az92PbHRPqDog&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkyp1F83R9FJ3dqNW-8kqhjpXiACgSpt4vLg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEl8j9NKQok408ur5dxGqiq3D0i1bVC1wZaQ&s",
  ]
  const [index, setIndex] = useState(0)

  return (
    <Card className="max-w-md mx-auto mb-6 text-center">
      <CardHeader>
        <CardTitle>Image Slideshow</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <img src={images[index]} className="rounded-md mx-auto" />
        <div className="flex justify-between">
          <Button onClick={() => setIndex((index + images.length - 1) % images.length)}>Previous</Button>
          <Button onClick={() => setIndex((index + 1) % images.length)}>Next</Button>
        </div>
      </CardContent>
    </Card>
  )
}


