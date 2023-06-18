import{z} from "zod";

export const LoginSchema = z.object({
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
})