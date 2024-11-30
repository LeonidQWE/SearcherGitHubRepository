import { useState } from 'react';
import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { UserCard } from 'components/UserCard';
import { NotFound } from 'components/NotFound';
import { GithubError, GithubUser, LocalGithubUser } from 'types';
import { isGithubUser } from 'utils';
import { extractGithubUder } from 'utils';

const GITHUB_USER_URL = 'https://api.github.com/users/';

export default function App () {
  const [user, setUser] = useState<LocalGithubUser | null>(null);

  const fetchUser = async (text: string) => {
    const url = `${GITHUB_USER_URL}${text}`;
    const response = await fetch(url);
    const data = await response.json() as GithubUser | GithubError;

    if (isGithubUser(data)) {
      setUser(extractGithubUder(data));
    } else {
      setUser(null);
    }
  }

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser}/>
      {user ? <UserCard {...user}/> : <NotFound/>}
    </Container>
  )
}

