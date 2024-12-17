"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email address" }),
  phone: z
    .string()
    .nonempty({ message: "Phone number is required" })
    .refine((value) => value.match(/^\+?\d{10,15}$/) !== null, {
      message: "Invalid phone number",
    }),
  message: z.string().nonempty({ message: "Message is required" }),
});

type ContactFormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <div className="lg:w-[25vw] lg:min-w-[450px] lg:max-w-[550px]">
      <form onSubmit={handleSubmit(onSubmit)} className="blcok mb-1 text-sm">
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-xl text-black">
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-full border rounded resize-none border-stone-300 focus:outline-none p-3 focus:ring-2 focus:ring-accent focus:ring-offset-2"
          />
          {errors.name && (
            <p className="text-red-500 text-lg">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-xl text-black">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full border rounded resize-none border-stone-300 focus:outline-none p-3 focus:ring-2 focus:ring-accent focus:ring-offset-2"
          />
          {errors.email && (
            <p className="text-red-500 text-lg">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="phone" className="text-xl text-black">
            Phone number
          </label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full border rounded resize-none border-stone-300 focus:outline-none p-3 focus:ring-2 focus:ring-accent focus:ring-offset-2"
          />
          {errors.phone && (
            <p className="text-red-500 text-lg">{errors.phone.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="message" className="text-xl text-black">
            Message
          </label>
          <textarea
            {...register("message")}
            className="w-full border rounded border-stone-300 focus:outline-none p-3 focus:ring-2 focus:ring-accent focus:ring-offset-2"
            rows={8}
          />
          {errors.message && (
            <p className="text-red-500 text-lg">{errors.message.message}</p>
          )}
          <button
            type="submit"
            className="button bg-pink-600 hover:bg-pink-500 text-2xl text-black rounded-md px-6 py-4 mt-5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
