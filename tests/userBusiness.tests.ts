// import { UserBusiness } from "../src/business/UserBusiness"


// describe("Signup", () => {
//     const idGenerator = { generate: jest.fn() } as any
//     const hashGenerator = { hash: jest.fn() } as any
//     const tokenGenerator = { generate: jest.fn() } as any
//     const userDatabase = { createUser: jest.fn() } as any

//     const userBusiness: UserBusiness = new UserBusiness.(
//         idGenerator,
//         hashGenerator,
//         tokenGenerator,
//         userDatabase
//     )

    // test("Error when 'name' is empty", async () => {
    //     expect.assertions(2)

    //     try {
    //         await userBusiness.createUser(
    //            "Alice",
    //            "alice@lbn.com",
    //            "123456",
    //            "ADMIN"
    //         )
    //     } catch (error) {
    //         expect(error.statusCode).toBe(422)
    //         expect(error.message).toBe("Missing input")
    //     }
    // })


//  })