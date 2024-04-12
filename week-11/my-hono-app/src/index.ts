import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'


const app = new Hono();

app.use(authMiddleWare);

app.get("/", (context )=>{
  return context.json("Hello World");


})

app.post("/", authMiddleWare, async (c)=>{

  // Most of the stuff are inside the context object
  const body = await c.req.json();
  const header = c.req.header();
  const query = c.req.query();

  console.log(query)
  console.log(body);
  console.log(header);
  return c.text("Hello Hono1");


})

async function authMiddleWare(c: any, next: Function){
  console.log("Auth MiddleWare");
  await next();

}


app.post("/database", async (c)=>{
  // Todo add zod validation here
  const body: {
    name: string;
    email: string;
    password: string
  } = await c.req.json()
  const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c)

  const prisma = new PrismaClient({
    datasourceUrl: DATABASE_URL,
  }).$extends(withAccelerate())

  console.log(body)

  await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: body.password
    }
  })
  
  return c.json({msg: "as"})
})


















export default app;