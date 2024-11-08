import Um from "@/screens/ums";
import { getUms } from "@/actions/umsAction";

export default async function UmManager() {
  const ums = await getUms();

  return (
    <div>
      <Um ums={ums} />
    </div>
  );
}
