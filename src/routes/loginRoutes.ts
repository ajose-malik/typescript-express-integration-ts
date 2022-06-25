import {Router, Request, Response} from 'express';

interface RequestWithBody extends Request {
  body: {[key: string]: string | undefined}
}

const router = Router();

router.get('/login', (req: RequestWithBody, res: Response) => {
  res.send(`
  <form method="POST">
    <div>
      <label>Email</label>
      <input name="email" type="email" />
    </div>
    <div>
      <label>Password</label>
      <input name="password" type="password" />
    </div>
    <button>Submit</button>
  </form>
  `)
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const {email, password} = req.body
  if (email) {
    req.session = {loggedIn: true}
    res.redirect('/')
  } else {
    res.send('No email provided')
  }
})

router.get('/', (req: RequestWithBody, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
      <div>You are logged in</div>
      <a href="/logout">Logout</a>
    </div>`)
  } else {
    res.send(`
    <div>
      <div>You are not logged in</div>
      <a href="/logout" target="_blank">Login</a>
    </div>`)
  }
})

router.get('/logout', (req: RequestWithBody, res: Response) => {
  req.session = undefined;
  res.redirect('/')
})

export {router}