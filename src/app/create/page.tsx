import { Label } from "@/components/Label"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { Container } from "@/components/Container"

export default function Component() {
  return (
    <div>
      <Container className="pb-0">
        <h1>Image Generator</h1>
        <h2>
          Input a text prompt to generate a unique image or upload your own image to apply filters.
        </h2>
      </Container>
      <Container className="space-y-6">
        <div className="flex flex-col space-y-2">
          <Label>Text Prompt</Label>
          <Input className="w-full max-w-lg text-2xl" id="prompt" placeholder="Enter a text prompt" />
        </div>
        <div className="flex flex-col space-y-2">
          <Label className="text-lg font-medium" htmlFor="image">
            Upload Image
          </Label>
          <div className="border border-dashed border-gray-200 rounded-lg w-full max-w-md p-4 flex items-center justify-center gap-2 text-center text-sm border border-gray-200 dark:border-gray-800">
            <UploadIcon className="w-6 h-6" />
            <span>Drag and drop your image here or choose a file</span>
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

function UploadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}