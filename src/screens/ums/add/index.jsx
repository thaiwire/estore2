import { createUm } from "@/actions/umsAction";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Label from "@/components/ui/Label";

export default function AddUm({ searchParams }) {
  const { errorMessage } = searchParams;
  return (
    <div>
      <h1 className="text-3xl font-semibold p-2"> Add Um </h1>

      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        action={createUm}
      >
        {errorMessage && (
          <div className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50 w-fit">
            <span className="text-red-500 col-span-2 text-mg my-0 font-500">
              {errorMessage}
            </span>
          </div>
        )}
        <div className="grid gap-2">
          <Label required={true}>UmNum</Label>
          <Input placeholder="Enter UnNum" name="umnum" required />
        </div>
        <div className="grid gap-2">
          <Label required={true}>Um Descripyion</Label>
          <Input placeholder="Enter UnNum" name="umname" required />
        </div>

        <Button className="w-52 col-span-2 mt-2">Submit</Button>
      </form>
    </div>
  );
}
