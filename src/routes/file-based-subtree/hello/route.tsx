import { Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute({
  component: () => (
    <div>
      Hello!
      <br />{' '}
      <Link
        to="/classic/hello/universe"
        activeProps={{
          className: 'font-bold',
        }}
      >
        say hello to the universe
      </Link>{' '}
      <Link
        to="/classic/hello/world"
        activeProps={{
          className: 'font-bold',
        }}
      >
        say hello to the world
      </Link>
      <Outlet />
    </div>
  ),
})
