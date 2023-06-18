import { z } from "zod";

export const RegisterSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório")
    .min(2, "O nome precisa conter pelo menos 2 carácteres"),
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Este e-mail é invalido"),
  password: z
    .string()
    .nonempty("A senha é obrigatoria")
    .min(8, "A senha precisa conter pelo menos 8 carácteres")
    .regex(/(?=.*?[A-Z])/,"É preciso pelo menos um caractere maiúsculo")
    .regex(/(?=.*?[a-z])/,"É preciso pelo menos um caractere minúsculo")
    .regex(/(?=.*?[#?!@$%^&*-])/,"É preciso tem pelo menos um caractere  especial como esses: #?!@$%^&*- ")
    .regex(/(?=.*?[0-9])/,"É preciso pelo menos um numero"),
  bio: z
    .string()
    .nonempty("A bio é obrigatoria"),
  contact: z
    .string()
    .nonempty("O contato é obrigatorio"),
  course_module: z
});
