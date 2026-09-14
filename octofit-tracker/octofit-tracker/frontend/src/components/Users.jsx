import ResourcePage from './ResourcePage.jsx'

export default function Users() {
  return <ResourcePage endpoint="/api/users/" resource="users" title="Users" description="Your community, collected in one place." />
}