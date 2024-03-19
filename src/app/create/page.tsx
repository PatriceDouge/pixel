'use client'

import { Header } from "@/components/Header"
import { Label } from "@/components/Label"
import { Input } from "@/components/Input"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/Container"
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Component() {
  
  const handleFileUpload = () => {
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: Event) => {
      const file: File | undefined = (event.target as HTMLInputElement).files?.[0];
      // Process the uploaded file here
    };
    input.click();
  }

  return (
    <div>
      <Header />
      <Container className="mx-auto w-1/2">
        <h1 className="text-2xl">Image Generator</h1>
        <h2>
          Input a text prompt to generate a unique image or upload your own image to apply filters.
        </h2>
        <div className="flex flex-col space-y-2">
          <Label>Text Prompt</Label>
          <Input className="w-full max-w-lg text-2xl" id="prompt" placeholder="Enter a text prompt" />
        </div>
        <div className="col-span-full">
          <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
            Upload a selfie or image
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <Button>Generate Image</Button>
        <Button>
          Clear
        </Button>
      </Container>
    </div>
  )
}