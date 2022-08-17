import { Container, Button } from './styles'

type Props = {
  url: string;
  name: string;
  onDelete: (name: string) => void;
}

export const PhotoItem = ({url, name, onDelete}: Props) => {



  return(
    <Container>
      <img src={url} alt={name} />

      <div>{name}</div>
      <Button onClick={()=> onDelete(name)}>X</Button>

    </Container>
  )
}