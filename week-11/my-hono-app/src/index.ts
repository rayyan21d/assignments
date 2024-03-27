import { Hono } from 'hono'

const app = new Hono()


async function authMiddelware(context:any, next:any){
  if(context.req.header("Authorization")){
    //Do validation

    await next();
  }else{
    return context.json({message:"Unauthorized"}, 401)
  
  }
}

app.get('/', authMiddelware, async (c) => {
  
  const body = await c.req.json();
  console.log(body)
  console.log('Hello Hono!')
  
  
  
  
  
  
  return c.text('Hello Hono!')




})

export default app
