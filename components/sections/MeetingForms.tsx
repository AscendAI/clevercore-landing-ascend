"use client"

import { useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

import AlertForBook from "../ui/alertForBook"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email({ message: "Please enter a valid email." }),
  reasons: z.string().min(2, {
    message: "Reasons must be at least 2 characters.",
  }),
  budget: z.string({
    required_error: "Please select a budget range.",
  }),
})

const MeetingForms = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      reasons: "",
      budget: "",
    },
  })

  const [open, setOpen] = useState(false)

  const { toast } = useToast()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const labeledValues = [
      [values.username, values.email, values.reasons, values.budget],
    ]

    const pipedreamWorkflowUrl = "https://eo8bzdeitxiy38d.m.pipedream.net"

    try {
      const response = await fetch(pipedreamWorkflowUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(labeledValues),
      })

      if (response.ok) {
        toast({
          title: "Project Request Submitted",
          description:
            "Our team will get back to you through your provided email shortly.",
        })
        setOpen(true)
        form.reset()
      } else {
        toast({
          title: "Error",
          description: "There has been an error. Please try again.",
        })
      }
    } catch (error) {
      console.error("Error executing Pipedream workflow:", error)
      toast({
        title: "Error",
        description: "There has been an error. Please try again.",
      })
    }
  }

  return (
    <div
      className="container mt-24 flex flex-col items-center justify-center pb-8 pt-6 md:py-10 lg:pb-24"
    >
      <div className="my-8 flex w-full flex-col items-center gap-2">
        <h1 className="text-3xl font-extrabold leading-tight  md:text-4xl">
          Are You Ready to Ascend?
        </h1>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 lg:w-3/4"
        >
          <p className="text-left text-lg text-muted-foreground lg:text-center">
            Get started on your AI journey today. Reach out to us for a free
            consultation. Let&apos;s work together to transform your business
            and ascend to new heights.
          </p>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input
                    className="bg-gradient-to-r from-indigo-900/[0.1] via-violet-900/[0.3] via-80% to-purple-900/[0.3]"
                    placeholder="John Doe"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reasons"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How can we help you?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="I want to build a custom AI Agent for my business that can serve as a customer care representative and can handle customer queries..."
                    className="resize-none bg-gradient-to-r from-indigo-900/[0.1] via-violet-900/[0.3] via-80% to-purple-900/[0.3]"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your E-mail</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gradient-to-r from-indigo-900/[0.1] via-violet-900/[0.3] via-80% to-purple-900/[0.3]"
                      placeholder="johndoe@gmail.com"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget of the project</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gradient-to-r from-indigo-900/[0.1] via-violet-900/[0.3] via-80% to-purple-900/[0.3]"
                      placeholder="$1500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <AlertForBook open={open} setOpen = {setOpen}>
            <Button type="submit">Submit</Button>
          </AlertForBook>
        </form>
      </Form>
    </div>
  )
}

export default MeetingForms
