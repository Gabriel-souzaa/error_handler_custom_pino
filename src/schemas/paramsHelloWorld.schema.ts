import { z } from 'zod';

export const ParamsHelloWorldSchema = z.object({
  text: z.string(),
  limit: z.string().transform((value) => parseFloat(value)),
  page: z.string().transform((value) => parseFloat(value)),
});
