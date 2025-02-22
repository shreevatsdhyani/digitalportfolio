"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from '@emailjs/browser'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"; // Import toast from sonner
import * as z from "zod"

// Zod schema matching your Email.js template variables
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),        // Maps to from_name
  email: z.string().email("Invalid email address"),                     // Maps to from_email
  message: z.string().min(10, "Message must be at least 10 characters") // Maps to message
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Your Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Your Template ID
        {
          from_name: values.name,     // Maps to {{from_name}}
          from_email: values.email,   // Maps to {{from_email}}
          reply_to: values.email,    // Maps to {{reply_to}}
          message: values.message,   // Maps to {{message}}
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Your Public Key
      )

      // Show success toast
      toast("Message sent successfully!", {
        description: "We'll get back to you soon.",
        duration: 5000, // Optional: Set duration for the toast
      })

      // Reset the form
      form.reset()
    } catch (error) {
      // Show error toast
      toast("Failed to send message.", {
        description: "Please try again later.",
        duration: 5000,
      
        
      })

      console.error("EmailJS Error:", error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="John Doe" 
                  {...field} 
                  className="focus-visible:ring-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="john@example.com"
                  type="email"
                  {...field}
                  className="focus-visible:ring-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your project details..."
                  className="min-h-[150px] resize-none focus-visible:ring-primary"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90"
          size="lg"
        >
          Send Message
        </Button>
      </form>
    </Form>
  )
}