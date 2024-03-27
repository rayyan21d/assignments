import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import {uniqueNamesGenerator, adjectives, Config, names, colors, starWars} from 'unique-names-generator';

const NameConfig: Config = {
  dictionaries: [adjectives, colors],
  separator: '-',
  length: 2,
};

const EmailConfig: Config = {
  dictionaries: [names, adjectives],
  separator: '@',
  length: 2,

}
const PassConfig: Config = {
  dictionaries: [names, adjectives, colors, starWars],
  separator: '$',
  length: 4,

}

interface CreateParams{
    mail: string;
    password: string;
    fName: string;
    lName: string;
}
async function createUser( {mail, password, fName, lName}: CreateParams){
    try{

        const response = await prisma.toDoUser.create({
            
            data: {
                email: mail,
                firstName: fName,
                lastName: lName,
                password: password
            },
            select:{
                id: true,
                password: true
            }
        })

        console.log(response);

    }catch(err){

        console.log(err);

    }finally{

        
    }
}

async function populateDB(n: number){

    for(let i=0;i<n;i++){

        let email: string = uniqueNamesGenerator(EmailConfig);
        let password: string = uniqueNamesGenerator(PassConfig);
        let firstName: string = uniqueNamesGenerator(NameConfig);
        let lastName: string = uniqueNamesGenerator(NameConfig);

        await createUser(email, password, firstName, lastName);

    }
}


interface UpdateParams{
    fName: string;
    lName: string;
    password?: string

}
async function UpdateUser( mail:string, {fName, lName, password}:UpdateParams){
    try{

        const response = await prisma.toDoUser.update({
            
            where: {email: mail},
            data: {
                email: mail,
                firstName: fName,
                lastName: lName,
                password: password
            },
            select:{
                id: true,
                email: true
            }
        })

        console.log(response);

    }catch(err){

        console.log(err);

    }finally{

        
    }
}

async function deleteUser( mail:string){
    try{

        const response = await prisma.toDoUser.delete({
            
            where:{
                email: mail
            },
            select:{
                id: true,
                email: true,
            }
            
        })

        console.log(response);

    }catch(err){

        console.log(err);

    }finally{

        
    }
}

// populateDB(20);
UpdateUser("Robenia@spotty", {fName:"Rayyan", lName:"Ahmed", password: "AnewPass"})