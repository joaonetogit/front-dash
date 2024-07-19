import type formSchema from "@/constants/FormSchema";
import type { z } from "zod";

export type FormValues = z.infer<typeof formSchema>;
