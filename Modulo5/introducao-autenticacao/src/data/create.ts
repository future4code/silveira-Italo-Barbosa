import connection from "../connection";


export const Table = "User";

	 export const createUs = async (id: string, email: string, password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(Table);
	};