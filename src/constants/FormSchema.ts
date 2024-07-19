import { z } from "zod";

const formSchema = z.object({
	firstName: z.string().min(2, "First Name Required"),
	lastName: z.string().min(2, "Last Name Required"),
	email: z.string().min(1, "Email is required").email("Email is invalid"),
	role: z.string().min(2, "Role Required"),
	timezone: z.string().min(2, "Timezone Required"),
	country: z.string().min(2, "Country Required"),
	bio: z.string().min(2, "Bio Required"),
	photo: z.instanceof(File).refine(file => file.size > 0, "Photo is required"),
});

export default formSchema;
