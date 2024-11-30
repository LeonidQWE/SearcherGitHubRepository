import { GithubUser } from "types"

export const isGithubUser = (user: unknown): user is GithubUser => {
  if (typeof user === 'object' && user !== null) {
    return 'id' in user
  }

  return false
}
