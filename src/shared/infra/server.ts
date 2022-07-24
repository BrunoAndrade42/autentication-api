import { app } from './app'

app.listen(process.env.PORT || 3333, () =>
  console.log(`server is running in PORT ${process.env.PORT || 3333} 🔥`)
)
