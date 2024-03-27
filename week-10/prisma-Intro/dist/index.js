"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const unique_names_generator_1 = require("unique-names-generator");
const NameConfig = {
    dictionaries: [unique_names_generator_1.adjectives, unique_names_generator_1.colors],
    separator: '-',
    length: 2,
};
const EmailConfig = {
    dictionaries: [unique_names_generator_1.names, unique_names_generator_1.adjectives],
    separator: '@',
    length: 2,
};
const PassConfig = {
    dictionaries: [unique_names_generator_1.names, unique_names_generator_1.adjectives, unique_names_generator_1.colors, unique_names_generator_1.starWars],
    separator: '$',
    length: 4,
};
const randomName = (0, unique_names_generator_1.uniqueNamesGenerator)(NameConfig);
function createUser(mail, password, fName, lName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma.toDoUser.create({
                data: {
                    email: mail,
                    firstName: fName,
                    lastName: lName,
                    password: password
                },
                select: {
                    id: true,
                    password: true
                }
            });
            console.log(response);
        }
        catch (err) {
            console.log(err);
        }
        finally {
        }
    });
}
function populateDB(n) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < n; i++) {
            let email = (0, unique_names_generator_1.uniqueNamesGenerator)(EmailConfig);
            let password = (0, unique_names_generator_1.uniqueNamesGenerator)(PassConfig);
            let firstName = (0, unique_names_generator_1.uniqueNamesGenerator)(NameConfig);
            let lastName = (0, unique_names_generator_1.uniqueNamesGenerator)(NameConfig);
            yield createUser(email, password, firstName, lastName);
        }
    });
}
function UpdateUser(mail, { fName, lName, password }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma.toDoUser.update({
                where: { email: mail },
                data: {
                    email: mail,
                    firstName: fName,
                    lastName: lName,
                    password: password
                },
                select: {
                    id: true,
                    email: true
                }
            });
            console.log(response);
        }
        catch (err) {
            console.log(err);
        }
        finally {
        }
    });
}
function deleteUser(mail) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma.toDoUser.delete({
                where: {
                    email: mail
                },
                select: {
                    id: true,
                    email: true,
                }
            });
            console.log(response);
        }
        catch (err) {
            console.log(err);
        }
        finally {
        }
    });
}
UpdateUser("Robenia@spotty", { fName: "Rayyan", lName: "Ahmed", password: "AnewPass" });
