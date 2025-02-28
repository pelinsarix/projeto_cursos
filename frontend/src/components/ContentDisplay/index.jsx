import {
  ContentContainer,
  ContentHeader,
  ContentTitle,
  ContentType,
  ContentBody,
  VideoContainer,
  TextContent,
} from "./styles"
import { Video, FileText } from "react-feather"

const ContentDisplay = ({ conteudo }) => {
  if (!conteudo) {
    return (
      <ContentContainer>
        <ContentHeader>
          <ContentTitle>Selecione um conteúdo</ContentTitle>
        </ContentHeader>
        <ContentBody>
          <p>Escolha um conteúdo na barra lateral para visualizá-lo.</p>
        </ContentBody>
      </ContentContainer>
    )
  }

  // Função para extrair o ID do vídeo do YouTube
  const getYouTubeVideoId = (url) => {
    if (!url) return null

    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)

    return match && match[2].length === 11 ? match[2] : null
  }

  const videoId = getYouTubeVideoId(conteudo.video_url)

  return (
    <ContentContainer>
      <ContentHeader>
        <ContentTitle>{conteudo.titulo}</ContentTitle>
        <ContentType>
          {conteudo.tipo === "video" ? (
            <>
              <Video size={16} />
              <span>Vídeo</span>
            </>
          ) : (
            <>
              <FileText size={16} />
              <span>Texto</span>
            </>
          )}
        </ContentType>
      </ContentHeader>

      <ContentBody>
        {conteudo.tipo === "video" && videoId ? (
          <VideoContainer>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={conteudo.titulo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoContainer>
        ) : null}

        {conteudo.texto && <TextContent>{conteudo.texto}</TextContent>}
      </ContentBody>
    </ContentContainer>
  )
}

export default ContentDisplay

