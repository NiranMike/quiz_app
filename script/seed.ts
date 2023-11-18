const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();
async function main() { 
    try {
        await db.category.createMany({
            data: [
                { name: "Mathematics", image: "https://res.cloudinary.com/dikan90kg/image/upload/v1700253932/quiz_ap/gfsmfaedtmexsrect5nt.png" },
                { name: "Physics", image: "https://res.cloudinary.com/dikan90kg/image/upload/v1700253930/quiz_ap/q46xzso4tzbjj2w0mkfu.png" },
                { name: "Chemistry", image: "https://res.cloudinary.com/dikan90kg/image/upload/v1700254954/Colorful_test_tube_icon_in_3d_cartoon_style-removebg-preview_rbbk3g.png" },
                { name: "Entertainment", image: "https://res.cloudinary.com/dikan90kg/image/upload/v1700255784/Colorful_joypad_or_gamepad_icon_in_3d_style-removebg-preview_f9w7lk.png" },
                { name: "History", image: "https://res.cloudinary.com/dikan90kg/image/upload/v1700253932/quiz_ap/xngb1y2fngppri20cia7.png" },
                { name: "Riddle", image: "https://res.cloudinary.com/dikan90kg/image/upload/v1700253978/quiz_ap/b5l55deqncn3bp7vgrw1.png" },
                { name: "Philosophy", image: "https://res.cloudinary.com/dikan90kg/image/upload/v1700252697/vbxqyr6kdh3vltqrogdv.png" },
                { name: "Biology", image: "https://res.cloudinary.com/dikan90kg/image/upload/v1700253933/quiz_ap/eaho2snusbk7lcl14cvi.png" },
                { name: "Animal", image: "https://res.cloudinary.com/dikan90kg/image/upload/v1700253932/quiz_ap/yx1chndjujtsszhufqfr.png" },
                { name: "Sport", image: "https://res.cloudinary.com/dikan90kg/image/upload/v1700253952/quiz_ap/d7xrmailueqmwdj1wmev.png" },
            ]
        })


        await db.question.createMany({
            data:[
            
            {
            content: "What is the speed of light in a vacuum?",
            answer: "299,792 kilometers per second",
            options: [
                "299,792 kilometers per second",
                "300,000 kilometers per second",
                "150,000 miles per second",
                "500,000 kilometers per second"
            ],
            hint: "This constant is denoted by the symbol 'c' in physics equations.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "Who formulated the theory of relativity?",
            answer: "Albert Einstein",
            options: [
                "Isaac Newton",
                "Marie Curie",
                "Galileo Galilei",
                "Albert Einstein"
            ],
            hint: "This scientist is famous for his equation E=mc^2.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is the SI unit of force?",
            answer: "Newton",
            options: [
                "Joule",
                "Watt",
                "Newton",
                "Ampere"
            ],
            hint: "Named after a renowned scientist, this unit measures the force needed to accelerate a mass of one kilogram at a rate of one meter per second squared.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is the first law of thermodynamics?",
            answer: "Energy can neither be created nor destroyed, only converted from one form to another.",
            options: [
                "For every action, there is an equal and opposite reaction.",
                "Entropy of an isolated system always increases over time.",
                "Energy can neither be created nor destroyed, only converted from one form to another.",
                "Heat always flows from hot to cold."
            ],
            hint: "This law is often stated as the principle of conservation of energy.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is Planck's constant?",
            answer: "6.62607015 × 10^-34 m^2 kg / s",
            options: [
                "9.8 m/s^2",
                "6.022 × 10^23 mol^-1",
                "3.14159265359",
                "6.62607015 × 10^-34 m^2 kg / s"
            ],
            hint: "Named after a German physicist, this constant is fundamental to quantum mechanics.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is the law of conservation of energy?",
            answer: "Energy cannot be created or destroyed, only transformed from one form to another.",
            options: [
                "Energy is constant in a closed system.",
                "Energy can be created but not destroyed.",
                "Energy always flows from high potential to low potential.",
                "Energy is directly proportional to mass."
            ],
            hint: "This law asserts that the total energy of an isolated system remains constant over time.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is the formula for gravitational force?",
            answer: "F = G * (m1 * m2) / r^2",
            options: [
                "F = m * a",
                "E = mc^2",
                "P = m * v",
                "F = G * (m1 * m2) / r^2"
            ],
            hint: "This formula describes the attractive force between two objects with masses m1 and m2 separated by a distance r.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is the Heisenberg Uncertainty Principle?",
            answer: "It is impossible to simultaneously know the exact position and momentum of a particle.",
            options: [
                "All electrons in an atom have the same energy.",
                "An object at rest will stay at rest unless acted upon by a net external force.",
                "The entropy of an isolated system never decreases.",
                "The speed of light is constant in a vacuum."
            ],
            hint: "This principle is a fundamental concept in quantum mechanics, named after a German physicist.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is the principle of superposition?",
            answer: "When two or more waves overlap, the resulting wave is the sum of the individual waves.",
            options: [
                "Energy is quantized.",
                "The force between two charges is inversely proportional to the square of the distance between them.",
                "The velocity of an object remains constant unless a net external force acts on it.",
                "The rate of change of momentum of an object is directly proportional to the net external force applied to it."
            ],
            hint: "This principle is often applied to analyze wave phenomena, including interference.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is the difference between speed and velocity?",
            answer: "Speed is a scalar quantity, while velocity is a vector quantity that includes both speed and direction.",
            options: [
                "Speed is the rate of change of velocity.",
                "Velocity is the rate of change of speed.",
                "Speed and velocity are the same thing.",
                "Speed is measured in meters per second, while velocity is measured in kilometers per hour."
            ],
            hint: "This difference is crucial in understanding motion in physics, where direction matters.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is Hubble's Law?",
            answer: "The velocity of a galaxy is directly proportional to its distance from an observer.",
            options: [
                "The rate of expansion of the universe is constant.",
                "The universe is static and unchanging.",
                "Dark matter is responsible for the acceleration of the universe.",
                "The speed of light is constant in a vacuum."
            ],
            hint: "Named after an American astronomer, this law describes the apparent recession of galaxies.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is the photoelectric effect?",
            answer: "The emission of electrons from a material when light of a certain frequency shines on it.",
            options: [
                "The bending of light waves around obstacles.",
                "The polarization of light waves.",
                "The interference of light waves.",
                "The emission of electrons from a material when light of a certain frequency shines on it."
            ],
            hint: "This phenomenon played a crucial role in the development of quantum theory.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is a black hole?",
            answer: "A region of spacetime exhibiting gravitational acceleration so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it.",
            options: [
                "A region of spacetime with zero gravity.",
                "A point in space with infinite mass.",
                "A region of spacetime where time stands still.",
                "A region of spacetime exhibiting gravitational acceleration so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it."
            ],
            hint: "These objects have gravitational fields so intense that nothing, not even light, can escape their gravitational pull.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is Coulomb's Law?",
            answer: "The electrostatic force between two charged objects is directly proportional to the product of their charges and inversely proportional to the square of the distance between their centers.",
            options: [
                "The force between two charges is directly proportional to the square of the distance between them.",
                "The force between two charges is inversely proportional to the product of their charges.",
                "The force between two charges is independent of the distance between them.",
                "The electrostatic force between two charged objects is directly proportional to the product of their charges and inversely proportional to the square of the distance between their centers."
            ],
            hint: "This law describes the force between electrically charged particles and is named after a French physicist.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is the definition of power?",
            answer: "The rate at which work is done or the rate at which energy is transferred or transformed.",
            options: [
                "The total amount of work done.",
                "The force applied to an object.",
                "The distance traveled by an object.",
                "The rate at which work is done or the rate at which energy is transferred or transformed."
            ],
            hint: "In physics, this term represents the amount of energy transferred or converted per unit time.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is the Doppler effect?",
            answer: "The change in frequency or wavelength of a wave in relation to an observer moving relative to its source.",
            options: [
                "The change in amplitude of a wave.",
                "The interference of waves.",
                "The polarization of waves.",
                "The change in frequency or wavelength of a wave in relation to an observer moving relative to its source."
            ],
            hint: "This phenomenon is often experienced with sound waves, such as the apparent change in pitch of a siren as it approaches or moves away from an observer.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is the difference between mass and weight?",
            answer: "Mass is a measure of the amount of matter in an object, while weight is the force exerted on an object due to gravity.",
            options: [
                "Mass and weight are the same thing.",
                "Weight is a measure of the amount of matter in an object, while mass is the force exerted on an object due to gravity.",
                "Mass is measured in newtons, while weight is measured in kilograms.",
                "Mass is a measure of the amount of matter in an object, while weight is the force exerted on an object due to gravity."
            ],
            hint: "One is a scalar quantity, and the other is a force dependent on gravity.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is the principle of conservation of momentum?",
            answer: "The total linear momentum of an isolated system remains constant.",
            options: [
                "The total angular momentum of an isolated system remains constant.",
                "The total energy of an isolated system remains constant.",
                "The total linear momentum of an isolated system remains constant.",
                "The total charge of an isolated system remains constant."
            ],
            hint: "This principle is based on the fact that no external forces act on the system.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is the equation for Ohm's Law?",
            answer: "V = I * R",
            options: [
                "P = IV",
                "V = I * R",
                "V = R / I",
                "I = V / R"
            ],
            hint: "This law relates the voltage across a conductor to the current flowing through it and its resistance.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is the Schrödinger equation?",
            answer: "A mathematical equation that describes how the quantum state of a physical system changes over time.",
            options: [
                "A mathematical equation that describes how the quantum state of a physical system changes over time.",
                "An equation for calculating the kinetic energy of a moving object.",
                "A formula for determining the wavelength of a wave.",
                "An equation for calculating gravitational force."
            ],
            hint: "Named after an Austrian physicist, it is fundamental in quantum mechanics.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is the law of reflection?",
            answer: "The angle of incidence is equal to the angle of reflection.",
            options: [
                "The angle of incidence is equal to the angle of reflection.",
                "The angle of incidence is greater than the angle of reflection.",
                "The angle of reflection is greater than the angle of incidence.",
                "The angles of incidence and reflection are unrelated."
            ],
            hint: "This law governs how light reflects off surfaces.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
            {
            content: "What is the function of a concave lens?",
            answer: "It diverges light rays and is used to correct nearsightedness.",
            options: [
                "It converges light rays and is used to correct farsightedness.",
                "It diverges light rays and is used to correct nearsightedness.",
                "It forms real and inverted images.",
                "It has no optical function."
            ],
            hint: "This type of lens is thinner at the center than at the edges.",
            categoryId: "11c6eae5-df6b-43ee-b213-9d3fc41711b9",
            },
    

        ]
        })


    } catch (error) {
        console.log("Error seeding default categories", error);
    } finally {
        await db.$disconnect()
    }

}

main()