export function Input(props:any) {
    return (
        <div>
          <label htmlFor="text" className="sr-only">
            Enter a prompt
          </label>
          <input
            type="text"
            name="text"
            id="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="A cool crypto punk avatar"
          />
        </div>
      ) 
}