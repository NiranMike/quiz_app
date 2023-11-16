const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();
async function main() { 
    try {
        await db.category.createMany({
            data: [
                { name: "Mathematics" },
                { name: "Physics" },
                { name: "Chemistry" },
                { name: "Entertainment" },
                { name: "History" },
                { name: "Riddle" },
                { name: "Psychology" },
                { name: "Biology" },
                { name: "Animal" },
                { name: "Sport" },
            ]
        })
    } catch (error) {
        console.log("Error seeding default categories", error);
    } finally {
        await db.$disconnect()
    }

}

main()