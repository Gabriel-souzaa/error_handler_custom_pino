import { z } from 'zod';

export const ParamsHelloWorldSchema = z.object({
  text: z.string(),
});
