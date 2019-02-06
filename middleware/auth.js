export default function ({ route, store, redirect }) {
  if (!store.state.authUser && route.path != "/login" && route.path != "/" && route.path != "/profile") {
    return redirect('/login')
  }
}