import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { UserCard } from 'components/UserCard';

export default function App () {
  return (
    <Container>
      <Header />
      <Search hasError={true} onSubmit={() => {}}/>
      <UserCard/>
    </Container>
  )
}

