import { FieldsPerCropChart } from "@/components/charts/FieldsPerCropChart";
import { RegisteredUsersChart } from "@/components/charts/RegisteredUsersChart";
import { usePageTitle } from "@/hooks";

export const AdminDashboardPage = () => {
  usePageTitle(
    "Admin Dashboard",
    "Overview of registered users and fields by crop.",
  );

  return (
    <main className="flex flex-col">
      <section className="maincontainer flex flex-col items-center gap-y-6 py-12">
        <div className="w-full max-w-2xl">
          <RegisteredUsersChart />
        </div>

        <div className="w-full max-w-2xl">
          <FieldsPerCropChart />
        </div>
      </section>
    </main>
  );
};
