// useSubmit.ts
"use client";

import { AxiosError } from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";
import Axios from "@/lib/Axios";

// 1) Define your Zod schema
export const formSchema = z.object({
  fullName: z.string().min(3, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  // message: z.string().min(5, "Message must be at least 5 characters"),
  moreInformation: z.string().optional(),

  investment: z.boolean().optional(),
  management: z.boolean().optional(),
  law: z.boolean().optional(),
  marketing: z.boolean().optional(),
});

// 2) Create a TypeScript type from your schema
export type JoinAcademyFormData = z.infer<typeof formSchema>;

const useSubmit = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState(false);

  const router = useRouter();

  const queryClient = useQueryClient();

  // 3) Initialize react-hook-form with the extended schema
  const form = useForm<JoinAcademyFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      moreInformation: "",
      investment: false,
      management: false,
      law: false,
      marketing: false,
    },
  });
  // console.log(form.getValues());

  // 4) React Query Mutation
  const mutation = useMutation({
    mutationFn: async (body: JoinAcademyFormData) => {
      // Adjust your endpoint/path as needed

      const { data } = await Axios.post(`/academy/create/`, body);
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["oml@academy"] });
      console.log(data, "jhg");
      setLoading(false);
      setSuccess(true);
      toast.success("Message sent successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: 0.1,
        theme: "light",
        transition: Bounce,
      });
      // Optionally refresh or redirect
      router.refresh();
    },
    onError: (error: AxiosError) => {
      setLoading(false);
      toast.error("An error occurred while sending message", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: 0.1,
        theme: "light",
        transition: Bounce,
      });
      console.error("Submit error:", error);
    },
  });

  // 5) onSubmit Handler
  async function onSubmit(values: JoinAcademyFormData) {
    setLoading(true);
    mutation.mutate(values);
  }

  return {
    onSubmit,
    form,
    errors: form.formState.errors,
    success,
    loading,
    complete,
    setComplete,
  };
};

export default useSubmit;
