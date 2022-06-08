import express, {Request, Response, Express} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection"


const app: Express = express()

app.use(express.json());
app.use(cors());


const server = app.listen(process.env.PORT || 3005, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});



const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

/*getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

(async () => {
  console.log(await getActorById("001") )
})()*/

app.get("/users/:id", async (request: Request, response: Response) => {
  try {
    const id = request.params.id

    console.log(await getActorById(id))

    response.end()
  } catch (error:any) {
		console.log(error.message)
    response.status(500).send("Unexpected error")
  }
})


const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}
console.log(searchActor("Italo"))

app.get("/users/:name", async (request: Request, response: Response) => {
  try {
   
    const result = await connection ("Actor")
                 .select("*")
                 .where({
                   name: request.params.name
                 })
                 response.send(result)


  } catch (error:any) {
		console.log(error.message)
    response.status(400).send("error")
  }
})





app.get("/users/:gender", async (request: Request, response: Response) => {
  try {
   
    /*const result = await connection ("Actor")
                 .select("*")
                 .where({
                   gender: request.params.gender
                 })
                 response.send(result)*/
                 const getActors = async (gender: string): Promise<any> => {
                  const result = await connection.raw(`
                    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
                  `);
                  
                  const count = result[0][0].count;
                  return count;
                };

                response.send(getActors)


  } catch (error:any) {
		console.log(error.message)
    response.status(400).send("error")
  }
})

app.post('/actors', async(request:Request, response:Response) => {
  try {
 
    const updateActor = async (id: string, salary: number): Promise<any> => {
      await connection("Actor")
        .update({
          salary: salary,
        })
        .where("id", id);
    };
  response.send(updateActor)
  } catch (error:any) {
  console.log(error.message);
  response.status(400).send("error")
  }
 })


 app.delete("/deletaActor", (request:Request, response:Response)=>{

 try {
  const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }; 
  response.send(deleteActor)
 } catch (error:any) {
  console.log(error.message);
  response.status(400).send("error")
 }
 })

 app.get("/salary", async (request: Request, response: Response) => {
  try {
   
    const avgSalary = async (gender: string): Promise<any> => {
      const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });
    
      return result[0].average;
    };
response.send(avgSalary)

  } catch (error:any) {
		console.log(error.message)
    response.status(400).send("error")
  }
})


app.get("/actor", async (request: Request, response: Response) => {
  try {
    const count = await countActors(request.query.gender as string);
    response.status(200).send({
      quantity: count,
    });
  } catch (error:any) {
    response.status(400).send({
      message: error.message,
    });
  }
});



app.put("/actor", async (request: Request, response: Response) => {
  try {
    await updateSalary(request.body.id, request.body.salary);
    response.status(200).send({
      message: "Success",
    });
  } catch (error:any) {
    response.status(400).send({
      message: error.message,
    });
  }
});

app.delete("/actor/:id", async (request: Request, response: Response) => {
  try {
    await deletaActor(request.params.id);
  } catch (error:any) {
    response.status(400).send({
      message: error.message,
    });
  }
});


export default app