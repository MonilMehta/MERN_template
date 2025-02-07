const z = require('zod');

const signupSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    firstName: z.string().min(1),
    lastName: z.string().min(1)
});

const signinSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6)
});

module.exports = {
    signupSchema,
    signinSchema
};
