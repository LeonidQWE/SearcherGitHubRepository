export type LocalGithubUser = {
  login: string,
  id: number,
  avatar: string,
  name: string,
  company: string | null,
  blog: string,
  location: string,
  bio: string | null,
  twitter: string | null,
  repos: number,
  followers: number,
  following: number,
  created: string
}
