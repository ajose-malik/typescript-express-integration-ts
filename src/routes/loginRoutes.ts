import {Router} from 'express'
import {Request, Response} from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
  <form action="">
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

router.post('/login', (req: Request, res: Response) => {
  const {email, password} = req.body

  res.send(email + password)
})

export {router}