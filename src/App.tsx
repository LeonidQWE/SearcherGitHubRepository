import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Search } from 'components/Search';

export default function App () {
  return (
    <Container>
      <Header />
      <Search hasError={true} onSubmit={() => {}}/>
    </Container>
  )
}

