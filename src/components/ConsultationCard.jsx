import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const ConsultationCard = () => {

  return (
    <Card className=" flex px-[0.4rem] md:px-[1.5rem] md:w-[44rem]">
      <div >
        <CardHeader className={`${inter.className} flex flex-col font-normal md:font-bold md:text-xl text-sm max-md:mb-5`}>
          <CardTitle>Leave your contacts and we will call you back</CardTitle>
          <CardTitle>within 30 minutes</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col justify-center items-start gap-4 w-auto">
              <div className='flex flex-col md:flex-row items-center md:space-x-5 space-y-5'>
                <div className="flex flex-col space-y-1.5 md:w-[14rem]">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" placeholder="Name" />
                </div>
                <div className="flex flex-col space-y-1.5 md:w-[14rem]">
                  <Label htmlFor="name">Phone number</Label>
                  <Input id="name" placeholder="Phone number" />
                </div>
              </div>
              <div className=' flex flex-col md:flex-row items-end md:space-x-5 space-y-5'>
                <div className="flex flex-col space-y-1.5 md:w-[14rem]">
                  <Label htmlFor="name">Business name</Label>
                  <Input id="name" placeholder="Business name" />
                </div>
                <div className="flex flex-col space-y-1.5 md:w-[14rem]">
                  <Label htmlFor="name">Business mail</Label>
                  <Input id="name" placeholder="Business mail@gmail.com" />
                </div>
                  <Button>Get Consultation</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </div>
    </Card>
  )
}

export default ConsultationCard