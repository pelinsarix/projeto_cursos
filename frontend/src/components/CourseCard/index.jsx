import { useNavigate } from "react-router-dom"
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter, StatusBadge } from "./styles"

const CourseCard = ({ curso }) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/curso/${curso.id}`)
  }

  return (
    <Card onClick={handleCardClick}>
      <CardImage>
        <img src={curso.imagem_url || "/placeholder.svg?height=200&width=300"} alt={curso.titulo} />
      </CardImage>
      <CardContent>
        <CardTitle>{curso.titulo}</CardTitle>
        <CardDescription>{curso.descricao}</CardDescription>
      </CardContent>
      <CardFooter>
        <StatusBadge isActive={curso.ativo}>{curso.ativo ? "Ativo" : "Inativo"}</StatusBadge>
      </CardFooter>
    </Card>
  )
}

export default CourseCard

